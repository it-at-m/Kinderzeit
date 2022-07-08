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
            <div className="relative h-[42rem] w-[24rem] bg-[#F8F9FA] rounded-lg border border-[#BEBBCE] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <img
                    className="absolute top-0 w-full h-1/4 left-0 right-0 rounded-t-lg flex items-center justify-center"
                    src=""
                />
                <div className="absolute left-0 bottom-0 right-0 h-3/4 rounded-b-lg pl-[1.8rem] flex flex-col">
                    <h2 className="font-inter font-[600] text-[2rem] leading-[2.4rem] text-[#2B2B2B] w-2/3 line-clamp-2 mt-[1.3rem]">
                        {event.event_name}
                    </h2>

                    <p className="font-inter font-normal text-[1.2rem] w-4/5 text-[#525252] line-clamp-2 mt-[0.85rem]">
                        {event.event_name}
                    </p>

                    <div className="flex-wrap grid grid-cols-2 gap-4 place-content-evenly mt-[2.7rem] mb-[1.6rem] justify-between">
                        <div className="">
                            <div className="">
                                Datum: Verfügbarkeit: Kosten: {event.price}
                                Alter: {event.min_age} {event.max_age}
                            </div>
                            <div className="">
                                uhrzeit:{event.start_time}
                                Kosten: {event.price}
                                Alter: {event.min_age} {event.max_age}
                                Kontakt:{event.email_contact}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}