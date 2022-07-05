import { useEffect, useState } from 'react'

import React from 'react'
import { useRouter } from 'next/router'
import Event from '../../event'
import Link from 'next/link'

const base = new Airtable({ apiKey: 'keyFd5A4fpY1Ztt5S' }).base(
    'appmYwp41qODY93Ys'
)

export function EventDetails() {
    const router = useRouter()
    const { id } = router.query
    const [event, setEvent] = useState<Event>()

    useEffect(() => {
        if (id != null)
            base('Events').find(id as string, (err, record) => {
                if (err) {
                    console.error(err)
                    return
                }
                setEvent({
                    id: record.id,
                    name: record.get('Name'),
                    description: record.get('Description'),
                    startDate: record.get('Start Date'),
                    endDate: record.get('End Date'),
                    startTime: record.get('Start Time'),
                    endTime: record.get('End Time'),
                    holiday: record.get('Holiday Period'),
                    dateSpan: record.get('Date Span'),
                    interests: record.get('Interests (Name)'),
                    generalTags: record.get('General Tags'),
                } as Event)
            })
    }, [id])

    return (
        <>
            <div className="bg-orange-500 h-12 font-bold text-xl text-white flex items-center justify-center">
                <Link
                    className="bg-orange-500 h-12 font-bold text-xl text-white flex items-center justify-center"
                    href="/events"
                >
                    Ferien München Portal
                </Link>
            </div>
            <div className="w-full max-w-5xl bg-gray-100 h-full m-auto">
                <h1 className="font-medium text-3xl">{event?.name}</h1>
                <div className="font-bold text-sm mt-4">Description</div>
                <div className="max-w-prose">{event?.description}</div>
            </div>
        </>
    )
}

export default EventDetails
