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
            <div className="max-w-[20rem] bg-[#F8F9FA] rounded-lg border-[#BEBBCE] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col">
                <img
                    className="top-0 w-full h-32 left-0 right-0 rounded-t-lg flex items-center justify-center"
                    src=""
                />
                <div className="flex-1 rounded-b-lg flex flex-col pl-2 pb-2">
                    <h2 className="font-inter font-[600] text-[1rem] text-[#2B2B2B] line-clamp-2">
                        {event.event_name}
                    </h2>
                    <div className="flex-wrap grid grid-cols-2 gap-4 place-content-start mt-2 pl-2">
                        <div>Kosten</div>
                        <div>{event.price}</div>
                        <div>Alter</div>
                        <div>
                            {event.min_age} - {event.max_age}
                        </div>
                        <div>Uhrzeit</div>
                        <div>{event.start_time}</div>
                        <div>Kosten</div>
                        <div>{event.price}</div>
                        <div>Kontakt</div>
                        <div>{event.email_contact}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
