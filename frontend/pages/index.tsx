import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import IndexEventCard from '../components/index/IndexEventCard'
import { EventDataModel } from '../constants'
import Select from '../components/generic/Select'
import { overviewAgeOptions, overviewAreaOptions } from '../static.data'
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
                <div className="w-full h-[15rem] md:h-[30rem] relative flex items-center">
                    <Image
                        layout="fill"
                        className="object-cover w-full h-full z-0"
                        src="https://www.excel-communications.com/wp-content/uploads/2021/04/artem-kniaz-DqgMHzeio7g-unsplash-scaled.jpg"
                    />
                    <div className="text-white absolute w-[40rem] font-[700] left-4 text-inter text-[2rem] md:text-[4rem] text-left">
                        WILLKOMMEN LIEBE ELTERN!
                    </div>
                </div>

                <div className="w-screen max-w-6xl m-auto flex flex-col pb-2">
                    {/* Event grid header */}
                    <div className="flex items-center justify-between flex-wrap py-4">
                        <span className="font-[700] xl:p-0 text-[1.8rem] md:text-[2.4rem]">
                            Ferienprogramm
                        </span>

                        {/* <div className="lg:block hidden">
                            <IndexSearchbar />
                        </div> */}
                    </div>
                </div>
                <div className="first-section bg-[#E4EAF2] pb-48">
                    <div className="w-screen max-w-6xl m-auto flex flex-col pb-2 bg-[#E4EAF2]">
                        {/* Event grid header */}
                        <div className="flex items-center flex-wrap py-4">
                            <span className="font-[700] xl:p-0 text-[1.8rem] md:text-[2.4rem]">
                                Ferienprogramm
                            </span>

                            {/* <div className="lg:block hidden py-4 px-8">
                                <IndexSearchbar />
                            </div> */}
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
