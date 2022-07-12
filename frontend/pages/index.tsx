/* eslint-disable react/prop-types */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import Layout from '../components/generic/Layout'
import OverviewEventCard from '../components/overview/OverviewEventCard'
import EventDataModel from '../types'

export async function getServerSideProps() {
    const res = await fetch(`${process.env.ROOT_API_URL}/api/event/all`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
export interface AgeOption {
    readonly value: number
    readonly label: number
    readonly flag: string
}

export const ageOptions: readonly AgeOption[] = [
    { value: 3, label: 3, flag: '&age=' },
    { value: 4, label: 4, flag: '&age=' },
    { value: 5, label: 5, flag: '&age=' },
    { value: 6, label: 6, flag: '&age=' },
    { value: 7, label: 7, flag: '&age=' },
    { value: 8, label: 8, flag: '&age=' },
    { value: 9, label: 9, flag: '&age=' },
    { value: 10, label: 10, flag: '&age=' },
    { value: 11, label: 11, flag: '&age=' },
    { value: 12, label: 12, flag: '&age=' },
    { value: 13, label: 13, flag: '&age=' },
    { value: 14, label: 14, flag: '&age=' },
    { value: 15, label: 15, flag: '&age=' },
    { value: 16, label: 16, flag: '&age=' },
    { value: 17, label: 17, flag: '&age=' },
    { value: 18, label: 18, flag: '&age=' },
]
let filter_value = ''
// eslint-disable-next-line react/prop-types
export default function Home({ data }: { data: EventDataModel[] }) {
    const [cardData, setCardData] = useState<EventDataModel[]>(data)
    const [selectedCost, setSelectedCost] = useState<string | null>(null)

    const handleFilteredData = async (selected, selectaction) => {
        const { action } = selectaction
        if (action === 'clear') {
        } else if (action === 'select-option') {
            for (const i in selected) {
                if (
                    !filter_value.includes(selected[i].flag + selected[i].value)
                ) {
                    filter_value =
                        filter_value + selected[i].flag + selected[i].value
                }
            }
        } else if (action === 'remove-value') {
            console.log('remove', selectaction.removedValue)
            filter_value = filter_value.replace(
                selectaction.removedValue.flag +
                    selectaction.removedValue.value,
                ''
            )
        }
        const res = await fetch(`/api/event?${filter_value}`)
        const filtered_events = await res.json()
        setCardData(filtered_events)
    }

    useEffect(() => {
        let filtered = [...cardData]
        if (selectedCost === 'Kostenlos') {
            filtered = filtered.filter((e) => e.price === 0)
        } else {
            filtered = filtered.filter((e) => e.price !== 0)
        }
        setCardData(filtered)
    }, [selectedCost])

    return (
        <Layout>
            <div className="w-full h-[15rem] md:h-[30rem] relative flex items-center">
                <img
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
            <div className="h-[5rem] w-full grid grid-rows-1 grid-cols-3 items-center">
                <div className="rows-1 columns-1 col-start-1">
                    <Select
                        placeholder="Stadtteil"
                        id="locationSelect"
                        isMulti
                        isClearable
                        options={[
                            {
                                value: 'Altstadt - Lehel',
                                label: 'Altstadt - Lehel',
                                flag: '&area=',
                            },
                            {
                                value: 'Ludwigsvorstadt - Isarvorstadt',
                                label: 'Ludwigsvorstadt - Isarvorstadt',
                                flag: '&area=',
                            },
                            {
                                value: 'Maxvorstadt',
                                label: 'Maxvorstadt',
                                flag: '&area=',
                            },
                            {
                                value: 'Schwabing-West',
                                label: 'Schwabing-West',
                                flag: '&area=',
                            },
                            {
                                value: 'Au - Haidhausen',
                                label: 'Au - Haidhausen',
                                flag: '&area=',
                            },
                            {
                                value: 'Sendling',
                                label: 'Sendling',
                                flag: '&area=',
                            },
                            {
                                value: 'Sendling - Westpark',
                                label: 'Sendling - Westpark',
                                flag: '&area=',
                            },
                            {
                                value: 'Schwanthalerhöhe',
                                label: 'Schwanthalerhöhe',
                                flag: '&area=',
                            },
                            {
                                value: 'Neuhausen - Nymphenburg',
                                label: 'Neuhausen - Nymphenburg',
                                flag: '&area=',
                            },
                            {
                                value: 'Moosach',
                                label: 'Moosach',
                                flag: '&area=',
                            },
                            {
                                value: 'Milbertshofen - Am Hart',
                                label: 'Milbertshofen - Am Hart',
                                flag: '&area=',
                            },
                            {
                                value: 'Schwabing - Freimann',
                                label: 'Schwabing - Freimann',
                                flag: '&area=',
                            },
                            {
                                value: 'Bogenhausen',
                                label: 'Bogenhausen',
                                flag: '&area=',
                            },
                            {
                                value: 'Berg am Laim',
                                label: 'Berg am Laim',
                                flag: '&area=',
                            },
                            {
                                value: 'Trudering - Riem',
                                label: 'Trudering - Riem',
                                flag: '&area=',
                            },
                            {
                                value: 'Ramersdorf - Perlach',
                                label: 'Ramersdorf - Perlach',
                                flag: '&area=',
                            },
                            {
                                value: 'Obergiesing',
                                label: 'Obergiesing',
                                flag: '&area=',
                            },
                            {
                                value: 'Untergiesing - Harlaching',
                                label: 'Untergiesing - Harlaching',
                                flag: '&area=',
                            },
                            {
                                value: 'Thalkirchen - Obersendling - Forstenried - Fürstenried - Solln',
                                label: 'Thalkirchen - Obersendling - Forstenried - Fürstenried - Solln',
                                flag: '&area=',
                            },
                            {
                                value: 'Hadern',
                                label: 'Hadern',
                                flag: '&area=',
                            },
                            {
                                value: 'Pasing - Obermenzing',
                                label: 'Pasing - Obermenzing',
                                flag: '&area=',
                            },
                            {
                                value: 'Aubing - Lochhausen - Langwied',
                                label: 'Aubing - Lochhausen - Langwied',
                                flag: '&area=',
                            },
                            {
                                value: 'Allach - Untermenzing',
                                label: 'Allach - Untermenzing',
                                flag: '&area=',
                            },
                            {
                                value: 'Feldmoching - Hasenbergl',
                                label: 'Feldmoching - Hasenbergl',
                                flag: '&area=',
                            },
                            {
                                value: 'Laim',
                                label: 'Laim',
                                flag: '&area=',
                            },
                        ]}
                        closeMenuOnSelect={true}
                        onChange={handleFilteredData}
                    />
                </div>
                <div className="rows-1 columns-1 col-start-2">
                    <Select
                        placeholder="Alter"
                        id="vactionSelect"
                        isClearable
                        isMulti
                        options={ageOptions}
                        closeMenuOnSelect={true}
                        onChange={handleFilteredData}
                    />
                </div>
                <div className="rows-1 columns-1 col-start-3">
                    <Select
                        placeholder="Kosten"
                        id="vactionSelect"
                        isClearable
                        options={[
                            {
                                value: 'Kostenlos',
                                label: 'Kostenlos',
                                flag: '&price=',
                            },
                            {
                                value: 'Kostenpflichtig',
                                label: 'Kostenpflichtig',
                                flag: '&price=',
                            },
                        ]}
                        closeMenuOnSelect={true}
                        onChange={(e) => setSelectedCost(e?.value)}
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
