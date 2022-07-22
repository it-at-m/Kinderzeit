import React, { useEffect, useState } from 'react'

import IndexEventCard from '../components/index/IndexEventCard'
import IndexCalendar from '../components/index/IndexCalendar'
import { EventDataModel } from '../constants'
import Select from '../components/generic/Select'
import { overviewAgeOptions, overviewAreaOptions } from '../static.data'
import Navbar from '../components/generic/Navbar'
import Footer from '../components/generic/Footer'
import IndexSearchbar from '../components/index/IndexSearchbar'

export async function getServerSideProps() {
    const res = await fetch(
        `${process.env.ROOT_API_URL}/api/event?sort=beginDate,asc`
    )
    const data = await res.json()
    return { props: { data } }
}

export type FilterStrategy = {
    age: string[]
    area: string[]
    price: string[]
    search: string
}

export default function Overview({ data }: { data: EventDataModel[] }) {
    const [cardData, setCardData] = useState<EventDataModel[]>(data)
    const [filterStrategy, setFilterStrategy] = useState<FilterStrategy>({
        age: [],
        area: [],
        price: [],
        search: '',
    })

    useEffect(() => {
        const query = new URLSearchParams()
        ;['age', 'area', 'price'].forEach((group) => {
            filterStrategy[group].forEach((v: string) => {
                if (group === 'price' && v === 'Kostenlos') {
                    v = '0'
                }
                if (group === 'price' && v === 'Kostenpflichtig') {
                    v = '0'
                    group = 'pricenot'
                }
                query.append(group, v)
            })
        })
        if (filterStrategy.search && filterStrategy.search.length > 0) {
            query.append('search', filterStrategy.search)
        }
        if (query.toString().length > 0)
            fetch(`/api/event?${query.toString()}`).then((res) =>
                res.json().then((filteredEvents) => setCardData(filteredEvents))
            )
        else
            fetch('/api/event?sort=beginDate,asc').then((res) =>
                res.json().then((allEvents) => setCardData(allEvents))
            )
    }, [filterStrategy])

    return (
        <>
            <Navbar />
            <main className="z-10">
                <div className="w-full h-[35rem] relative flex flex-row items-center">
                    <div className="object-cover w-[80rem] h-full z-0"></div>

                    <div className="grid grid-cols-2 ">
                        <div className="flex item-center justify-center absolute top-[3rem] w-[30rem] font-[700] text-[4rem] md:left-40 font-[600]">
                            WILLKOMMEN LIEBE ELTERN!

                        </div>
                        <div className="flex item-center justify-center absolute top-[18rem] w-[40rem]  text-[1.3rem]  md:left-40">
                            <div className="lg:grid grid-rows-2">
                                <div className="">
                                    Ihr seid auf der Suche nach tollen
                                    Ferienaktivitäten für eure Kinder? Bei uns
                                    findet ihr
                                    <button className="text-white font-semibold rounded-md px-2 ml-1 mr-1 bg-gradient-to-r pb-1 from-yellow-500 via-violet-400 via-indigo-400 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500">
                                        eine große Auswahl →
                                    </button>
                                    unterschiedlichster Angebote in München.
                                </div>
                                <div className="">
                                    Ihr könnt selbst durch die Veranstaltungen
                                    stöbern oder eine
                                    <button className="text-white font-semibold rounded-md px-2 ml-1 mr-1 bg-gradient-to-r pb-1 from-yellow-500 via-violet-400 via-indigo-400 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500">
                                        individuelle Empfehlung →
                                    </button>
                                    von uns erhalten.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative top-[0rem] right-[5rem] invisible lg:visible">
                        <IndexCalendar />
                    </div>

                    <div className=" bg-gradient-to-r pb-1 from-yellow-500 via-violet-400 via-indigo-400 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500 w-full absolute left-0 bottom-0"></div>
                </div>
                <div className="first-section bg-[#E4EAF2] pb-48">
                    <div className="w-screen max-w-6xl m-auto flex flex-col pb-2 bg-[#E4EAF2]">
                        {/* Event grid header */}
                        <div className="flex items-center flex-wrap py-4">
                            <span className="font-[700] xl:p-0 text-[1.8rem] md:text-[2.4rem]">
                                Ferienprogramm
                            </span>

                            <div className="lg:block hidden py-4 px-8">
                                <IndexSearchbar
                                    onChange={(v) =>
                                        setFilterStrategy({
                                            ...filterStrategy,
                                            search: v,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        {/* Event filters */}
                        <div className="h-[5rem] w-full grid grid-rows-1 grid-cols-5 gap-2 items-center">
                            <div className="rows-1 col-span-2">
                                <Select
                                    placeholderText="Stadtteil"
                                    allowMultiSelect
                                    options={overviewAreaOptions}
                                    onChange={(selectedValues) =>
                                        setFilterStrategy({
                                            ...filterStrategy,
                                            area: selectedValues,
                                        })
                                    }
                                />
                            </div>
                            <div className="rows-1 col-span-1">
                                <Select
                                    placeholderText="Alter"
                                    options={overviewAgeOptions}
                                    allowMultiSelect
                                    onChange={(selectedValues) =>
                                        setFilterStrategy({
                                            ...filterStrategy,
                                            age: selectedValues,
                                        })
                                    }
                                />
                            </div>
                            <div className="rows-1 col-span-2">
                                <Select
                                    placeholderText="Kosten"
                                    allowMultiSelect={false}
                                    options={[
                                        {
                                            value: 'Kostenlos',
                                            label: 'Kostenlos',
                                        },
                                        {
                                            value: 'Kostenpflichtig',
                                            label: 'Kostenpflichtig',
                                        },
                                    ]}
                                    onChange={(selectedValues) =>
                                        setFilterStrategy({
                                            ...filterStrategy,
                                            price: selectedValues,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        {/* Events grid */}
                        <div
                            className={`w-full min-h-[40rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-0 pb-2 ${
                                cardData.length !== 0
                                    ? 'items-start justify-center'
                                    : 'items-center justify-center'
                            } m-auto`}
                        >
                            {cardData.length !== 0 ? (
                                cardData.map((e) => (
                                    <IndexEventCard event={e} key={e.id} />
                                ))
                            ) : (
                                <div className="text-xl text-center col-span-full font-lato-bold text-[2rem]">
                                    Keine Veranstaltungen gefunden
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
