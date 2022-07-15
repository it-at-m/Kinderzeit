import React, { useEffect, useState } from 'react'

import { EventDataModel } from '../types'
import IndexEventCard from '../components/index/IndexEventCard'

import Select from '../components/generic/Select'
import { overviewAgeOptions, overviewAreaOptions } from '../static.data'
import IndexSearchbar from '../components/index/IndexSearchbar'
import Navbar from '../components/generic/Navbar'
import Footer from '../components/generic/Footer'

export async function getServerSideProps() {
    const res = await fetch(`${process.env.ROOT_API_URL}/api/event/all`)
    const data = await res.json()
    return { props: { data } }
}

export type FilterStrategy = {
    age: string[]
    area: string[]
    price: string[]
}

export default function Overview({ data }: { data: EventDataModel[] }) {
    const [cardData, setCardData] = useState<EventDataModel[]>(data)
    const [filterStrategy, setFilterStrategy] = useState<FilterStrategy>({
        age: [],
        area: [],
        price: [],
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
        if (query.toString().length > 0)
            fetch(`/api/event?${query.toString()}`).then((res) =>
                res.json().then((filteredEvents) => setCardData(filteredEvents))
            )
        else
            fetch('/api/event/all').then((res) =>
                res.json().then((allEvents) => setCardData(allEvents))
            )
    }, [filterStrategy])

    return (
        <>
            <Navbar />
            <main className="z-10">
                <div className="w-full h-[15rem] md:h-[20rem] relative flex flex-row items-center">
                    <div
                        className="object-cover w-[80rem] h-full z-0">
                    </div>
                    <div className="text-black absolute w-[30rem] font-[700] left-40 text-inter text-[2rem] md:text-[4rem] text-left z-10">
                        WILLKOMMEN LIEBE ELTERN!
                    </div>
                    <div className="font-[500] text-[1.3rem] lg:block hidden">
                        <div className=''>Ihr seid auf der Suche nach tollen Ferienaktivitäten für eure Kinder?
                            Bei uns findet ihr  <button className='text-white font-semibold rounded-md px-4 bg-gradient-to-r pb-1 from-yellow-500 via-violet-300 via-indigo-300 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500'>eine große Auswahl → </button> unterschiedlichster Angebote in München.
                        </div>
                        <div className=''>Ihr könnt selbst durch die Veranstaltungen stöbern oder eine <button className='text-white font-semibold rounded-md px-4 bg-gradient-to-r pb-1 from-yellow-500 via-violet-300 via-indigo-300 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500'>individuelle Empfehlung →</button>von uns erhalten.
                        </div>
                        <div className=' bg-gradient-to-r pb-1 from-yellow-500 via-violet-300 via-indigo-300 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500 w-full absolute left-0 bottom-0'></div>
                    </div>
                </div>
                <div className="first-section bg-[#E4EAF2] pb-48">
                    <div className="w-screen max-w-6xl m-auto flex flex-col pb-2 bg-[#E4EAF2]">
                        {/* Event grid header */}
                        <div className="flex items-center flex-wrap py-4">
                            <span className="font-[700] xl:p-0 text-[1.8rem] md:text-[2.4rem]">
                                Ferienprogramm
                            </span>

                            <div className="lg:block hidden py-4 px-8">
                                <IndexSearchbar />
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
                            className={`w-full min-h-[40rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-0 pb-2 ${cardData.length !== 0
                                ? 'items-start justify-center'
                                : 'items-center justify-center'
                                } m-auto`}
                        >
                            {cardData.length !== 0 ? (
                                cardData.map((e) => (
                                    <IndexEventCard event={e} key={e.id} />
                                ))
                            ) : (
                                <div className="text-xl text-center col-span-3">
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
