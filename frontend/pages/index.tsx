import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import EventDataModel from '../types'
import OverviewEventCard from '../components/overview/OverviewEventCard'

import Layout from '../components/generic/Layout'
import Select from '../components/generic/Select'
import { overviewAgeOptions, overviewAreaOptions } from '../static.data'

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

export default function Home({ data }: { data: EventDataModel[] }) {
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
        <Layout>
            <div className="w-full h-[15rem] md:h-[30rem] relative flex items-center">
                <Image
                    layout="fill"
                    className="object-cover w-full h-full z-0"
                    src="https://www.excel-communications.com/wp-content/uploads/2021/04/artem-kniaz-DqgMHzeio7g-unsplash-scaled.jpg"
                />
                <div className="text-white absolute w-[40rem] font-[700] left-4 text-inter text-[2rem] md:text-[4rem] text-left z-10">
                    WILLKOMMEN LIEBE ELTERN!
                </div>
            </div>

            <div className="flex items-center justify-between flex-wrap bg-white pb-12 lg:px-8">
                <div className="flex justify-between pl-12 ">
                    <div className="flex items-center flex-shrink-0 text-gray-800">
                        <span className="font-[700] p-4 xl:p-0 text-[1.8rem] md:text-[2.4rem] text-left">
                            {' '}
                            Ferienprogramm
                        </span>
                    </div>
                </div>

                <div className="relative text-gray-600 lg:block hidden">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 mt-3 mr-2"
                    >
                        <svg
                            className="text-gray-600 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 56.966 56.966"
                            width="512px"
                            height="512px"
                        >
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
            </div>
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
                        allowMultiSelect={false}
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
            <div
                className={`w-full min-h-[40rem] grid grid-cols-1 md:grid-cols-3 gap-2 ${
                    cardData.length !== 0
                        ? 'items-start justify-center'
                        : 'items-center justify-center'
                } p-4 m-auto`}
            >
                {cardData.length !== 0 ? (
                    cardData.map((e) => (
                        <OverviewEventCard event={e} key={e.id} />
                    ))
                ) : (
                    <div className="text-xl text-center col-span-3">
                        Keine Veranstaltungen gefunden
                    </div>
                )}
            </div>
        </Layout>
    )
}
