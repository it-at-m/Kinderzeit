/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Footer from '../../components/generic/Footer'
import Navbar from '../../components/generic/Navbar'
import { EventDataModel, OrganizerDataModel } from '../../types'

export async function getServerSideProps(context) {
    const res = await fetch(
        `${process.env.ROOT_API_URL}/api/event/${context.params.id}`
    )
    const event = await res.json()
    const organizerId = event.organizer_id
    const resO = await fetch(
        `${process.env.ROOT_API_URL}/api/organizer/${organizerId}`
    )
    const organizer = await resO.json()
    return { props: { event, organizer } }
}

export default function EventDetails({
    event,
    organizer,
}: {
    event: EventDataModel
    organizer: OrganizerDataModel
}) {
    return (
        <div className="relative">
            <Navbar />
            <img
                className="blur-sm w-screen h-[50rem] z-0 absolute scale-125"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9b205d59463665.5a2332c39b17b.jpg"
            />
            <main className="z-20 relative top-10 bg-white w-screen max-w-6xl m-auto flex flex-col">
                <div className="flex lg:flex-row-reverse overflow-hidden border">
                    <img
                        className="h-2/3 w-3/5"
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9b205d59463665.5a2332c39b17b.jpg"
                    />
                    <div className="w-2/5 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col space-y-4 leading-normal">
                        <div className="text-grey-300 text-xl  leading-tight">
                            {event.event_name}
                        </div>
                        <div className="">
                            <div className="pt-2">
                                <p className="font-200 text-sm text-gray-400">
                                    Datum and Uhrzeit
                                </p>
                                <div className="flex space-x-12">
                                    <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                        {new Date(
                                            event.begin_date
                                        ).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                        ,
                                    </span>
                                    <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                        {`${event.start_time.substring(
                                            0,
                                            5
                                        )} - ${event.end_time.substring(0, 5)}`}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="font-200 text-sm text-gray-400">
                                    Alter
                                </p>
                                <div className="flex space-x-2">
                                    <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                        {event.minAge}
                                    </span>
                                    <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                        -
                                    </span>
                                    <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                        {event.maxAge}
                                    </span>
                                    <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                        Jahre
                                    </span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="font-200 text-sm text-gray-400">
                                    Verantstaltungsort
                                </p>
                                <div className="flex space-x-12">
                                    <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                        {event.event_address} , {event.area}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="font-200 text-sm text-gray-400">
                                    Kosten
                                </p>
                                <a className="flex justify-center items-center w-20 top-60 right-0 mb-2 rounded-lg bg-yellow-500 text-white text-s font-small">
                                    <p>{event.price}€p.P.</p>
                                </a>
                            </div>
                            <div className="pt-2">
                                <p className="font-200 text-sm text-gray-400">
                                    Verfügbarkeit
                                </p>
                                <a className="flex items-center top-60 right-0 mb-2 font-semibold  text-green-800">
                                    <p>Noch {event.places_available} Plätze</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border">
                    <Link href={event.booking_URL}>
                        <button className="h-10 w-48 px-5 m-4 text-green-100 transition-colors duration-150 bg-green-800 rounded-lg focus:shadow-outline hover:bg-green-800">
                            Jetzt buchen
                        </button>
                    </Link>
                    <button type="button" className="">
                        <i className="icon-heart"></i>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4 border py-8">
                    <div className="">
                        <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                            {event.event_name}
                        </div>

                        <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.75rem] text-bottom">
                            Zu diesem Event
                        </div>
                        <div className="p-3 px-20 text-[#000000] font-[200] text-inter text-[0.9rem] text-bottom">
                            {event.event_description}
                        </div>
                        <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                            Wichtige Hinweise
                        </div>
                        <div className="p-3 px-20 text-[#000000] font-[200] text-inter text-[0.9rem] text-bottom">
                            {event.take_with}
                        </div>
                        <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                            Veranstalterinformationen
                        </div>

                        <div className="grid grid-cols-2 gap-8 ">
                            <div className="p-3 grid-rows-1  px-20 text-[#000000] font-[500] text-inter text-[0.9rem] text-bottom">
                                <div className="">{event.event_address}</div>
                                <div className="">{`${event.zip_code} München`}</div>
                                <Link href={event.map_URL}>
                                    <button className="pt-2 text-teal-600">
                                        Route Planen
                                    </button>
                                </Link>
                            </div>
                            <div className="py-8 mr-6 ">
                                <div className=" font-[500] text-teal-600 text-[0.9rem]">
                                    +49 89 12 34 56 78
                                </div>
                                <div className="font-[500] text-teal-600 text-[0.9rem]">
                                    {event.email_contact}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="pt-10 px-20 text-[#000000] font-[400] text-inter text-[1.25rem] text-bottom">
                            Müssen Eltern teilnehmen
                        </div>
                        <div className=" px-20 text-[#000000] font-[200] text-inter text-[0.9rem] text-bottom">
                            {event.accompany_needed ? 'Jawohl' : 'Nein'}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
