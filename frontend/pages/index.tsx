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

// eslint-disable-next-line react/prop-types
export default function Home({ data }: { data: EventDataModel[] }) {
    const [selectedHoliday, setSelectedHoliday] = useState<string | null>(null)
    const [selectedArea, setSelectedArea] = useState<string | null>(null)
    const [cardData, setCardData] = useState<EventDataModel[]>(data)

    useEffect(() => {
        let filtered = [...data]
        if (selectedHoliday && selectedArea !== '') {
            filtered = filtered.filter(
                (e) => e.holiday_period === selectedHoliday
            )
        }
        if (selectedArea) {
            filtered = filtered.filter((e) => e.area === selectedArea)
        }
        setCardData(filtered)
    }, [selectedHoliday, selectedArea])

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
            <div className="font-[700] p-4 xl:p-0 text-[1.8rem] md:text-[2.4rem] text-left">
                Ferienprogramm
            </div>
            <div className="h-[5rem] w-full grid grid-rows-1 grid-cols-3 items-center">
                <div className="rows-1 columns-1">
                    <Select
                        placeholder="Ferienzeit auswählen..."
                        id="vactionSelect"
                        isClearable
                        options={[
                            { value: 'Pfingsten', label: 'Pfingsten' },
                            { value: 'Sommerferien', label: 'Sommerferien' },
                            { value: 'Herbstferien', label: 'Herbstferien' },
                            {
                                value: 'Weihnachtsferien',
                                label: 'Weihnachtsferien',
                            },
                            {
                                value: 'Faschingsferien',
                                label: 'Faschingsferien',
                            },
                            {
                                value: 'Osterferien',
                                label: 'Osterferien',
                            },
                        ]}
                        closeMenuOnSelect={true}
                        onChange={(e) => setSelectedHoliday(e?.value)}
                    />
                </div>

                <div className="rows-1 columns-1 col-start-3">
                    <Select
                        placeholder="Bereich auswählen..."
                        id="locationSelect"
                        isClearable
                        options={[
                            { value: 'Bogenhausen', label: 'Bogenhausen' },
                            {
                                value: 'Schwanthalerhöhe',
                                label: 'Schwanthalerhöhe',
                            },
                            { value: 'Berg am Laim', label: 'Berg am Laim' },
                            {
                                value: 'Ramersdorf und Perlach',
                                label: 'Ramersdorf und Perlach',
                            },
                            {
                                value: 'Pasing - Obermenzing',
                                label: 'Pasing - Obermenzing',
                            },
                            {
                                value: 'Berg am Laim',
                                label: 'Berg am Laim',
                            },
                            {
                                value: 'Ludwigsvorstadt - Isarvorstadt',
                                label: 'Ludwigsvorstadt - Isarvorstadt',
                            },
                        ]}
                        closeMenuOnSelect={true}
                        onChange={(e) => setSelectedArea(e?.value)}
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
