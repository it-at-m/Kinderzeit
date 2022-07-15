/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import {EventDataModel} from '../../types'
export default function IndexEventCard({ event }: { event: EventDataModel }) {
    return (
        <div className="w-full rounded-xl shadow-xl bg-white relative">
            <img
                src="https://www.kindercare.com/-/media/contenthub/images/article-images/activities%20for%20kids/arts%20and%20crafts/painting-with-nature/colorful-paint-splatters-compressor.jpg?la=en&hash=DA9C3A0777DDA8124A30C22CC2D73C508D758F49"
                className="rounded-t-xl w-full h-[150px] sm:h-[200px] md:h-auto object-cover"
                alt=""
            />
            {/* <!-- Product Title --> */}
            <div className="font-lato leading-6 text-[20px] text-[#2B2B2B] tracking-wider line-clamp-[1.2] h-12 px-2 pt-1 my-auto">
                {event.event_name}
            </div>
            <a className="rounded-lg bg-[#EDA80A] font-roboto text-white font-small absolute right-2 px-1 mt-[0.28rem] text-[14px]">
                {`${event.price} € p.P.`}
            </a>
            <div className="grid grid-rows-3 grid-cols-2 px-2 mt-4 h-10">
                <p className="font-200 text-[12px] font-roboto text-gray-400 row-start-1 row-span-1 col-start-1 col-span-1">
                    Datum and Uhrzeit
                </p>
                <p className="font-semibold text-[14px] font-roboto leading-6 text-gray-700 row-start-2 row-span-2 col-start-1 col-span-1">
                    {new Date(event.begin_date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </p>
                <p className="font-semibold text-[14px] font-roboto leading-6 text-gray-700 row-start-2 row-span-2 col-start-2 col-span-1">
                    {`${event.start_time.substring(
                        0,
                        5
                    )} - ${event.end_time.substring(0, 5)}`}
                </p>
            </div>
            <div className="grid grid-rows-3 grid-cols-1 px-2 py-1 h-10">
                <p className="font-200 text-[12px] text-gray-400 font-roboto row-start-1 row-span-1 col-start-1 col-span-1">
                    Alter
                </p>
                <div className="row-start-2 row-span-2 col-start-1 col-span-1">
                    <p className="font-semibold text-[14px] font-roboto leading-6 text-gray-700">
                        {`${event.minAge} - ${event.maxAge} Jahre`}
                    </p>
                </div>
            </div>
            <div className="grid grid-rows-4 grid-cols-1 px-2 py-1 h-16">
                <p className="font-200 text-[12px] font-roboto text-gray-400 row-start-1 row-span-1">
                    Verantstaltungsort
                </p>
                <div className="row-start-2 row-span-3 items-start col-span-1">
                    <p className="font-semibold text-[14px] leading-6 text-gray-700 line-clamp-2 text-start">
                        {`${event.event_address}, ${event.area}`}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-5 px-2 mt-[-1] rounded-b-xl h-[4.5rem]">
                <div className="row-start-2 row-span-4 col-start-1 col-span-1 m-auto">
                    <Link href={`/details/${event.id}`}>
                        <p className="text-gray-500 underline font-roboto decoration-1 cursor-pointer text-[14px] hover:text-blue-600">
                            mehr info
                        </p>
                    </Link>
                </div>
                <div className="row-start-2 row-span-4 col-start-2 col-span-1 bg-green-700 text-gray-100 text-[14px] rounded-[17px] hover:bg-green-900 m-auto py-[9px] px-[15px]">
                    <Link href={event.booking_URL}>Jetzt buchen</Link>
                </div>
                <a className="text-green-800 row-start-1 row-span-1 font-roboto col-start-2 col-span-1 m-auto text-[14px] mt-[0.2rem]">
                    Noch {event.places_available} Plätze
                </a>
            </div>
        </div>
    )
}
