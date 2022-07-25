/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Footer from '../../components/generic/Footer'
import Navbar from '../../components/generic/Navbar'
import { EventDataModel, OrganizerDataModel } from '../../constants'

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
        <div className="relative overflow-hidden">
            <Navbar />
            <img
                className="blur-sm w-screen h-[40rem] z-0 absolute scale-125"
                src={event.image_URL}
            />
            <main className="z-20 relative bg-white w-screen max-w-6xl m-auto flex flex-col mt-16 mb-24">
                <div className="flex lg:flex-row-reverse overflow-hidden border">
                    <img className="h-[30rem] w-3/5" src={event.image_URL} />
                    <div className="w-2/5 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col space-y-4 leading-normal">
                        <div className="text-grey-300 text-xl  leading-tight">
                            {event.eventName}
                        </div>
                        <div className="">
                            <div className="pt-2">
                                <p className="font-200  font-roboto text-sm text-gray-400">
                                    Datum und Uhrzeit
                                </p>
                                <div className="flex space-x-12">
                                    <span className="font-semibold  font-roboto text-lg leading-6 text-gray-700 my-2">
                                        {new Date(
                                            event.beginDate
                                        ).toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                        ,
                                    </span>
                                    <span className="font-semibold  font-roboto text-lg leading-6 text-gray-700 my-2">
                                        {`${event.start_time.substring(
                                            0,
                                            5
                                        )} - ${event.end_time.substring(0, 5)}`}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="font-200  font-roboto text-sm text-gray-400">
                                    Alter
                                </p>
                                <div className="flex space-x-2">
                                    <span className="font-semibold  font-roboto text-lg leading-6 text-gray-700 my-2">
                                        {event.minAge}
                                    </span>
                                    <span className="font-semibold  font-roboto text-lg leading-6 text-gray-700 my-2">
                                        -
                                    </span>
                                    <span className="font-semibold  font-roboto text-lg leading-6 text-gray-700 my-2">
                                        {event.maxAge}
                                    </span>
                                    <span className="font-semibold  font-roboto text-lg leading-6 text-gray-700 my-2">
                                        Jahre
                                    </span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="font-200  font-roboto text-sm text-gray-400">
                                    Verantstaltungsort
                                </p>
                                <div className="flex space-x-12">
                                    <span className="font-semibold  font-roboto text-lg leading-6 text-gray-700 my-2">
                                        {event.eventAddress} , {event.area}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="font-200  font-roboto text-sm text-gray-400">
                                    Kosten
                                </p>
                                <a className="flex  font-roboto justify-center items-center w-20 top-60 right-0 mb-2 rounded-lg bg-yellow-500 text-white text-s font-small">
                                    <p>{`${event.price} € p.P.`}</p>
                                </a>
                            </div>
                            <div className="pt-2">
                                <p className="font-200  font-roboto text-sm text-gray-400">
                                    Verfügbarkeit
                                </p>
                                <a className="flex items-center top-60 right-0 mb-2 font-semibold  font-roboto text-green-800">
                                    <p>Noch {event.places_available} Plätze</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border">
                    <Link href={event.booking_URL}>
                        <button className="h-10 w-48 px-5 ml-12 m-2  text-green-100   font-roboto transition-colors duration-150 bg-green-800 rounded-lg focus:shadow-outline hover:bg-green-800 ">
                            Jetzt buchen
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 border py-8">
                    <div className="col-span-2">
                        <div className="pt-10 px-20 text-[#000000] font-[400] font-roboto text-inter text-[1.25rem] text-bottom">
                            {event.eventName}
                        </div>

                        <div className="pt-10 px-20 text-[#000000] font-[400] font-roboto text-inter text-[1.75rem] text-bottom">
                            Zu diesem Event
                        </div>
                        <div className="p-3 px-20 text-[#000000] font-[200] font-roboto text-inter text-[0.9rem] text-bottom">
                            {event.eventDescription}
                        </div>
                        <div className="pt-10 px-20 text-[#000000] font-[400] font-roboto text-inter text-[1.25rem] text-bottom">
                            Wichtige Hinweise
                        </div>
                        <div className="p-3 px-20 text-[#000000] font-[200] font-roboto text-inter text-[0.9rem] text-bottom">
                            {event.take_with}
                        </div>
                        <div className="pt-10 px-20 text-[#000000] font-[400]  font-roboto text-inter text-[1.25rem] text-bottom">
                            Veranstalterinformationen
                        </div>

                        <div className="grid grid-cols-2 gap-8 ">
                            <div className="p-3 grid-rows-1  px-20 text-[#000000] font-[500] font-roboto text-inter text-[0.9rem] text-bottom">
                                <div className="">
                                    {event.eventAddress} , {event.area}
                                </div>
                                <div className="">{`${event.zip_code} München`}</div>
                                <Link href={event.map_URL}>
                                    <a className=" flex flex-row mt-1 ">
                                        <div className="w-4 text-teal-600">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                                />
                                            </svg>
                                        </div>
                                        <div className="ml-2 font-roboto text-teal-600">
                                            Route planen{' '}
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="p-3 grid-rows-1  px-20 text-[#000000] font-[500] font-roboto text-inter text-[0.9rem] text-bottom ">
                                <div className="">
                                    {organizer.organizer_name}
                                </div>
                                <div className="">{organizer.mobile_phone}</div>
                                <Link
                                    href={`mailto:${organizer.email_contact}`}
                                >
                                    <div className="text-teal-600">
                                        {organizer.email_contact}
                                    </div>
                                </Link>
                                <div className="font-roboto text-teal-600">
                                    <Link href={organizer.website_URL}>
                                        {organizer.website_URL}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-6">
                        <div>
                            <div className="pt-10 px-5 text-[#000000] font-[400]  font-roboto text-inter text-[1.25rem] text-bottom">
                                Müssen Eltern teilnehmen
                            </div>
                            <div className=" px-5 text-[#000000] font-[200]  font-roboto text-inter text-[0.9rem] text-bottom">
                                {event.accompany_needed ? 'Jawohl' : 'Nein'}
                            </div>
                        </div>
                        <div className=""></div>
                        <div>
                            <div className=" flex px-20 text-[#000000] font-[200]  font-roboto text-inter text-[0.9rem] text-bottom">
                                Eventquelle:
                                <div className="text-yellow-600">
                                    <Link href="https://www.ferien-muenchen.de/">
                                        ferien-muenchen.de
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
