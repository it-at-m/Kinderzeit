/* eslint-disable @next/next/no-img-element */
import React from 'react'
import EventDataModel from '../../types'
import Link from 'next/link'

export default function OverviewEventCard({
    event,
}: {
    event: EventDataModel
}) {
    return (
        <Link href="/edetails">
            <div className="w-full h-full py-5 flex justify-center items-center">
                <div className="relative pl-1  flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                    <div className="w-50 pb-2 bg-white rounded-xl shadow-xl z-10">
                        <div className="relative pt-4">
                            <a className="flex justify-center items-center top-80 right-0 mb-2 mr-4 px-2 absolute rounded-lg bg-yellow-500 text-white text-s font-small">
                                {event.price}
                                <p>&nbsp;€&nbsp;p.&nbsp;P.</p>
                            </a>
                        </div>
                        <div className="relative">
                            {/*  card image */}
                            <img
                                src="https://www.kindercare.com/-/media/contenthub/images/article-images/activities%20for%20kids/arts%20and%20crafts/painting-with-nature/colorful-paint-splatters-compressor.jpg?la=en&hash=DA9C3A0777DDA8124A30C22CC2D73C508D758F49"
                                className="max-h-60 object-cover rounded-t-xl"
                                alt=""
                            />
                        </div>
                        <div className="px-2 py-1 ">
                            {/* <!-- Product Title --> */}
                            <div className="text-xl px-2">
                                {event.event_name}
                            </div>
                            <div className="flex py-2">
                                <div className="flex justify-between item-center"></div>
                            </div>
                            {/* card details */}
                            <div className="p-3">
                                <div className="pt-6">
                                    <p className="font-200 text-sm text-gray-400">
                                        Datum and Uhrzeit
                                    </p>
                                    <div className="flex space-x-12">
                                        <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                            {event.begin_date}
                                        </span>
                                        <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                            {event.start_time}
                                        </span>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <p className="font-200 text-sm text-gray-400">
                                        Alter
                                    </p>
                                    <div className="flex space-x-2">
                                        <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                            {event.min_age}
                                        </span>
                                        <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                            -
                                        </span>
                                        <span className="font-semibold text-lg leading-6 text-gray-700 my-2">
                                            {event.max_age}
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
                                            {event.event_address}
                                        </span>
                                        <span className="font-semibold text-sm leading-6 text-gray-700 my-2">
                                            {}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <button className=" bg-rose-200 rounded-md p-2 text-red-600">
                                        Nur noch {event.places_available} Plätze
                                        frei!
                                    </button>
                                </div>

                                {/* card bottom */}
                                <div className="flex space-x-4">
                                    <a
                                        className=" py-1 px-5 text-gray-500 underline decoration-1"
                                        href="#"
                                    >
                                        mehr info
                                    </a>
                                    <a
                                        className="px-4 py-1 bg-green-700 text-gray-100 rounded-full hover:bg-green-900"
                                        href="#"
                                    >
                                        Jetzt buchen
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
