/* eslint-disable */

import React from 'react'
import Image from 'next/image'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function IndexCalendar() {
    return (
        <div className="rounded-xl mx-auto bg-gradient-to-r p-1 from-yellow-500 via-violet-300 via-indigo-300 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500">
            <div className="flex flex-row">
                <div className='bg-white'>
                    <Calendar className="react-calendar"               
                    />
                </div>
                
                <div className="px-1 rounded-r-xl bg-white">
                    <div className="pt-8 whitespace-nowrap">
                        <p className="font-200 text-[12px] font-roboto text-gray-400">
                            Startdatum
                        </p>
                        <p className="font-semibold text-[14px] font-roboto leading-6 text-gray-700 border-b border-gray-300">
                            Do., 18. Aug. 22
                        </p>
                        <p className="font-200 text-[12px] font-roboto text-gray-400 pt-8">
                            Enddatum
                        </p>
                        <p className="font-semibold text-[14px] font-roboto leading-6 text-gray-700 border-b border-gray-300">
                            Do., 18. Aug. 22
                        </p>
                        <p className="font-semibold text-[14px] font-roboto text-gray-400 mt-48 border-t border-gray-300">
                            Ferienzeiten in Bayern
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
