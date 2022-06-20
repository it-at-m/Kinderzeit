import React from 'react'
// import { useEffect, useState } from 'react'
// import Airtable from 'airtable'
// import Event from '../event'
// import { useRouter } from 'next/router'
import OverviewEventCard from '../components/overview/OverviewEventCard'
import Layout from '../components/generic/Layout'
import Navbar from '../components/generic/Navbar'

// const base = new Airtable({ apiKey: 'keyFd5A4fpY1Ztt5S' }).base(
//     'appmYwp41qODY93Ys'
// )

export default function Home() {
    // const [events, setEvents] = useState<Event[]>([])
    // const [holidays, setHolidays] = useState<string[]>([])
    // const [selectedHoliday, setSelectedHoliday] = useState<string>()
    // const [interests, setInterests] = useState<string[]>([])
    // const [selectedInterests, setSelectedInterests] = useState<string[]>([])
    // const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
    // const router = useRouter()

    // useEffect(() => {
    //     base('Events')
    //         .select({ view: 'Grid view' })
    //         .eachPage(
    //             function page(records, fetchNextPage) {
    //                 // This function (`page`) will get called for each page of records.

    //                 setEvents([
    //                     ...events,
    //                     ...records.map((record) => {
    //                         return {
    //                             id: record.id,
    //                             name: record.get('Name'),
    //                             description: record.get('Description'),
    //                             startDate: record.get('Start Date'),
    //                             endDate: record.get('End Date'),
    //                             startTime: record.get('Start Time'),
    //                             endTime: record.get('End Time'),
    //                             holiday: record.get('Holiday Period'),
    //                             dateSpan: record.get('Date Span'),
    //                             interests: record.get('Interests (Name)'),
    //                             generalTags: record.get('General Tags'),
    //                         } as Event
    //                     }),
    //                 ])

    //                 setInterests(
    //                     Array.from(
    //                         new Set([
    //                             ...interests,
    //                             ...records
    //                                 .map(
    //                                     (r) =>
    //                                         r.get('Interests (Name)') as string
    //                                 )
    //                                 .flat(),
    //                         ])
    //                     )
    //                 )

    //                 setHolidays(
    //                     [
    //                         ...holidays,
    //                         ...records.map(
    //                             (r) => r.get('Holiday Period') as string
    //                         ),
    //                     ].sort((a, b) => a.length - b.length)
    //                 )

    //                 fetchNextPage()
    //             },
    //             function done(err) {
    //                 if (err) {
    //                     console.error(err)
    //                     return
    //                 }
    //             }
    //         )
    // }, [])

    // useEffect(() => {
    //     setFilteredEvents(
    //         events
    //             .filter(
    //                 (ev) => !selectedHoliday || ev.holiday === selectedHoliday
    //             )
    //             .filter(
    //                 (ev) =>
    //                     selectedInterests.length == 0 ||
    //                     ev.interests.some((i) => selectedInterests.includes(i))
    //             )
    //     )
    // }, [selectedHoliday, selectedInterests])

    // useEffect(() => {
    //     setSelectedHoliday(null)
    //     setFilteredEvents(events)
    // }, [events])

    return (
        <Layout>
            <div className="w-screen h-[74rem] relative" >
            <div className ="absolute w-[115rem]  h-[30rem]"><img className="w-[115rem]  h-[50rem]" src="https://www.excel-communications.com/wp-content/uploads/2021/04/artem-kniaz-DqgMHzeio7g-unsplash-scaled.jpg"></img>
            </div>
                {/* <div className="absolute bg-[#D9D9D9] w-[115rem]  h-[30rem]" /> */}

                <div className="absolute w-2/5 top-[-12rem] h-[56rem] rem-[6.5rem] left-0 flex flex-col items-center justify-center">
                    <div className=" font-[700] text-inter text-[6rem] text-center ">
                        WILLKOMMEN LIEBE ELTERN!
                    </div>
                    {/* <div className="text-inter text-[2rem] text-left ml-[2rem] mt-[3rem]">
                        Ferienplanung für Kinder kann heutzutage eine ganz
                        schöne Herausforderung sein.
                    </div>
                    <div className="text-inter text-[2rem] text-left ml-[2rem] mt-[1.5rem]">
                        Wir möchten euch dabei unterstützen, schnell und einfach
                        schöne Erinnerungen für eure Kinder zu finden!
                    </div> */}
                </div>
            </div>
            <div className="h-[5rem] w-screen">
                <select className="ml-[10rem] w-[31rem] -[3rem] bg-white text-xl h-full drop-shadow-[0_4px_14px_rgba(0,0,0,0.1)]">
                    <option>All Vacations</option>
                    <option>Miau</option>
                    <option>Summer Holiday</option>
                </select>
            </div>
            <div className="w-screen px-[10rem] py-[3.5rem] flex flex-wrap gap-y-[5.2rem] gap-x-[5.9rem]">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((arrVal) => (
                    <OverviewEventCard
                        event={null}
                        key={`event_card_${arrVal}`}
                    />
                ))}
            </div>
            {/* <div className="absolute bg-[#D9D9D9] w-2/3 top-[17rem] h-[56rem] left-0"></div>

            <div className="absolute top-[90rem] h-screen w-screen bg-red-500"></div>
            <OverviewEventCard event={null} /> */}
        </Layout>
    )
}
