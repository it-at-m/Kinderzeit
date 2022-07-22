import React from 'react'

import IndexEventCard from '../components/index/IndexEventCard'
import { EventDataModel, EventRecommendationByPlace } from '../constants'
import Navbar from '../components/generic/Navbar'
import Footer from '../components/generic/Footer'
import { geocodeUserInputServer, matrixDistance } from '../components/geocode'

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.ROOT_API_URL}/api/event/all`)
    const events: EventDataModel[] = await res.json()

    const promises = events.map(async (e) => {
        const [bestPlaceMatch] = await geocodeUserInputServer(e.eventAddress)
        return {
            event: e,
            coordinates: bestPlaceMatch.coordinates,
            distance: 0,
        } as EventRecommendationByPlace
    })
    let augmentedEvents = await Promise.all(promises)
    const distances = (
        await matrixDistance([
            context.query.area,
            ...augmentedEvents.map((e) => e.coordinates),
        ])
    )['distances'][0].slice(1)
    augmentedEvents.forEach((e, idx) => (e.distance = distances[idx]))
    augmentedEvents = augmentedEvents
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 4)
    return {
        props: { events: augmentedEvents },
    }
}

type RecommendationOverviewProps = {
    events: EventRecommendationByPlace[]
}

export default function RecommendationOverview(
    props: RecommendationOverviewProps
) {
    return (
        <>
            <Navbar />
            <main className="z-10">
                <div className="w-screen max-w-6xl m-auto flex flex-row pb-2">
                    <div className="flex items- justify-between flex-wrap py-4 display:block-inline">
                        <span className="font-[700] xl:p-0 font-lato-bold text-[1.4rem] md:text-[2rem]">
                            Hier sind unsere Empfehlungen für dich und dein
                            Kind. Viel Spaß dabei!
                        </span>
                    </div>
                </div>
                <div className="first-section bg-[#E4EAF2] pb-48">
                    <div className="w-screen max-w-6xl m-auto flex flex-col pb-2 bg-[#E4EAF2]">
                        <div className="flex items-center flex-wrap display:inline">
                            {/* <div className="font-lato-bold text-[24px] text-[#1F2937]">
                                Top Empfehlungen
                            </div> */}
                            {/* Events grid */}
                            {/* <div className="font-roboto leading-6 text-[18px] text-[#1F2937]">
                                (berücksichtigt alle deine Angaben)
                            </div> */}
                            {/* Events grid */}
                        </div>
                        <div className="flex items-center flex-wrap py-4">
                            <div className="font-lato-bold text-[24px] text-[#1F2937]">
                                In deiner Nähe
                            </div>
                            <div
                                className={`w-full min-h-[40rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-0 pb-2 ${
                                    props.events.length !== 0
                                        ? 'items-start justify-center'
                                        : 'items-center justify-center'
                                } m-auto`}
                            >
                                {props.events.length !== 0 ? (
                                    props.events.map((e) => (
                                        <IndexEventCard
                                            event={e.event}
                                            key={e.event.id}
                                        />
                                    ))
                                ) : (
                                    <div className="text-xl text-center col-span-3 font-lato-bold text-[2rem] h-full w-full flex justify-center items-center">
                                        Keine Veranstaltungen gefunden
                                    </div>
                                )}
                            </div>
                            {/* Events grid */}
                        </div>
                        <div className="flex items-center flex-wrap py-4">
                            {/* <div className="font-lato-bold text-[24px] text-[#1F2937]">
                                Für Altersgruppe 10 - 15
                            </div> */}
                            {/* Events grid */}
                        </div>
                        <div className="flex items-center flex-wrap py-4">
                            {/* <div className="font-lato-bold text-[24px] text-[#1F2937]">
                                Kategorie Kreatives & Handwerk
                            </div> */}
                            {/* Events grid */}
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
