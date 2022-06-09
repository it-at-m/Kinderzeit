import { useEffect, useState } from 'react';

import Airtable from 'airtable';
import Event from '../../event';
import { useRouter } from 'next/router'
import Link from 'next/link';

var base = new Airtable({apiKey: 'keyFd5A4fpY1Ztt5S'}).base('appmYwp41qODY93Ys');

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [holidays, setHolidays] = useState<string[]>([]);
  const [selectedHoliday, setSelectedHoliday] = useState<string>();
  const [interests, setInterests] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const router = useRouter()

  useEffect(() => {
    base('Events').select({view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      setEvents([
        ...events,
        ...records.map(record => {
          return ({
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
            generalTags: record.get('General Tags')
          } as Event
        )})])

      setInterests(Array.from(new Set([
        ...interests,
        ...records.map(r => r.get("Interests (Name)") as string).flat()
      ])))

      setHolidays([
        ...holidays,
        ...records.map(r => r.get("Holiday Period") as string)
      ].sort((a, b) => a.length - b.length))

      fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  }, [])

  useEffect(() => {
    setFilteredEvents(
      events.filter(ev => !selectedHoliday || ev.holiday === selectedHoliday)
        .filter(ev => selectedInterests.length == 0 || ev.interests.some(i => selectedInterests.includes(i)))
    )
  }, [selectedHoliday, selectedInterests])

  useEffect(() => {
    setSelectedHoliday(null)
    setFilteredEvents(events)
  }, [events])

  return (
    <>
      <div className="bg-orange-500 h-12 font-bold text-xl text-white flex items-center justify-center">
          <Link className="bg-orange-500 h-12 font-bold text-xl text-white flex items-center justify-center" href='/events'>
              Ferien München Portal
          </Link>
      </div>
      <div className='bg-gray-100 w-screen h-64'>
        <div className='w-full max-w-5xl bg-gray-100 h-full m-auto flex columns-2'>
          <div className='h-full'>
            <div className='text-sm font-bold'>Holiday Period</div>
            <div className='h-full w-full flex flex-wrap justify-start'>
              {
                holidays.map((holiday, idx) => {
                  return <div
                    key={`holiday_period_${idx}`}
                    onClick={() => { 
                      if (holiday === selectedHoliday) 
                        setSelectedHoliday(null)
                      else
                        setSelectedHoliday(holiday)}
                    }
                    className={
                      'p-2 text-sm mx-2 m-auto rounded-full cursor-pointer border items-start ' +
                      (selectedHoliday === holiday ? 'border-orange-500 bg-orange-500 text-white' : 'border-gray-300'
                    )}>
                    {holiday}
                  </div>
                })
              }
            </div>
          </div>
          <div className='h-full'>
            <div className='text-sm font-bold'>Filter by Interest</div>
            <div className='h-full w-full flex flex-wrap justify-start'>
              {
                interests.map((interest, idx) => {
                  return <div
                    key={`holiday_period_${idx}`}
                    onClick={() => { 
                      if (selectedInterests.includes(interest)) 
                        setSelectedInterests(selectedInterests.filter(i => i !== interest))
                      else
                        setSelectedInterests([...selectedInterests, interest])}
                    }
                    className={
                      'p-2 text-sm mx-2 m-auto rounded-full cursor-pointer border items-start ' +
                      (selectedInterests.includes(interest) ? 'border-orange-500 bg-orange-500 text-white' : 'border-gray-300'
                    )}>
                    {interest}
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-w-5xl m-auto'>
        {
          filteredEvents.map(ev => <div onClick={() => {
            router.push(`/events/${ev.id}`)
          }} key={ev.name}
          className='p-1 cursor-pointer flex justify-between shadow-md border rounded items-center h-16 my-2'>
            <div className='font-bold flex flex-wrap w-32 text-clip'>{ev.name}</div>
            <div className='flex flex-col h-full items-start justify-center'>
              <div className='font-light'>{ev.startTime} - {ev.endTime}</div>
              <div className='font-light'>{ev.dateSpan}</div>
            </div>
            <div className='h-full w-1/3 flex flex-wrap'>
              {
                ev.generalTags.map(tagText => <div className="bg-slate-200 text-xs px-1 rounded m-auto border-purple-300">{tagText}</div>)
              }
            </div>
            <div className='h-full w-1/3 flex flex-wrap justify-center'>
              {
                ev.interests.slice(0, 8).map(interestText => {return (
                  <div className="bg-green-300 border-green-200 mx-1 text-xs px-1 rounded m-auto">
                    {interestText}
                  </div>
                )})
              }
            </div>
        </div>)
        }
      </div>
    </>
  )
}