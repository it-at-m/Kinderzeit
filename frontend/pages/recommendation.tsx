import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import IndexEventCard from '../components/index/IndexEventCard'
import IndexSearchbar from '../components/index/IndexSearchbar'
import { EventDataModel } from '../constants'
import Navbar from '../components/generic/Navbar'
import Footer from '../components/generic/Footer'
import { RecommendationWizardState } from '../constants'

export async function getServerSideProps(context) {
    if (Object.keys(context.query).length == 0) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            },
        }
    } else {
        console.log(context.query)
        const res = await fetch(`${process.env.ROOT_API_URL}/api/event/all`) // this should be ${context.query} I guess ?
        const event = await res.json()
        return { props: { event } }
    }
}

export default function RecommendationOverview({
    event,
}: {
    event: EventDataModel[]
}) {
    return (
        <>
            <Navbar />
            <main className="z-10">
                <div className="w-screen max-w-6xl m-auto flex flex-row pb-2">
                    <div className="flex items- justify-between flex-wrap py-4 display:block-inline">
                        <span className="font-[700] xl:p-0 text-[1.8rem] md:text-[2.4rem]">
                            Hier sind unsere Empfehlungen für dich und dein
                            Kind. Viel Spaß dabei!
                        </span>
                    </div>
                </div>
                <div className="first-section bg-[#E4EAF2] pb-48">
                    <div className="w-screen max-w-6xl m-auto flex flex-col pb-2 bg-[#E4EAF2]">
                        <div className="flex items-center flex-wrap py-4 display:inline">
                            <div className="font-lato-bold text-[24px] text-[#1F2937]">
                                Top Empfehlungen
                            </div>
                            {/* Events grid */}
                            <div className="font-roboto leading-6 text-[18px] text-[#1F2937]">
                                (berücksichtigt alle deine Angaben)
                            </div>
                            {/* Events grid */}
                        </div>
                        <div className="flex items-center flex-wrap py-4">
                            <div className="font-lato-bold text-[24px] text-[#1F2937]">
                                In deiner Nähe
                            </div>
                            <div
                                className={`w-full min-h-[40rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-0 pb-2 ${
                                    event.length !== 0
                                        ? 'items-start justify-center'
                                        : 'items-center justify-center'
                                } m-auto`}
                            >
                                {event.length !== 0 ? (
                                    event.map((e) => (
                                        <IndexEventCard event={e} key={e.id} />
                                    ))
                                ) : (
                                    <div className="text-xl text-center col-span-3">
                                        Keine Veranstaltungen gefunden
                                    </div>
                                )}
                            </div>
                            {/* Events grid */}
                        </div>
                        <div className="flex items-center flex-wrap py-4">
                            <div className="font-lato-bold text-[24px] text-[#1F2937]">
                                Für Altersgruppe 10 - 15
                            </div>
                            {/* Events grid */}
                        </div>
                        <div className="flex items-center flex-wrap py-4">
                            <div className="font-lato-bold text-[24px] text-[#1F2937]">
                                Kategorie Kreatives & Handwerk
                            </div>
                            {/* Events grid */}
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
