/* eslint-disable */

import React from 'react'
import Image from 'next/image'
import { useEffect, useRef, useState } from "react"
import CalendarRow from "../index/ClendarRow"

export interface CalendarProps { }

const Calendar: React.FC<CalendarProps> = () => {
    const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
    const [activeMonthString, setActiveMonthString] = useState(
        new Date().toDateString().split(" ")[1]
    );
    const [activeYear, setActiveYear] = useState(new Date().getFullYear());
    const prevMonth = useRef<number>(null);
    const [firstDayInMonth, setFirstDayInMonth] = useState<number[]>([]);

    useEffect(() => {
        let x = [];
        for (let i = 1; i <= 12; i++) {
            x.push(new Date(`${activeYear}/${i}/1`).getDay());
        }
        setFirstDayInMonth(x);
    }, [activeYear]);

    useEffect(() => {
        setActiveMonthString(
            new Date(new Date().setMonth(activeMonth)).toDateString().split(" ")[1]
        );
        //remember previous activeMonth
        //@ts-ignore
        prevMonth.current = activeMonth;
    }, [activeMonth]);

    return (<div className="rounded-xl mx-auto bg-gradient-to-r p-1 from-yellow-500 via-violet-300 via-indigo-300 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500">
        <div className="flex flex-row">
            <div className="bg-white rounded-l-xl rounded-bl">

                <div className="md:shadow-lg md:rounded p-4 bg-white md:w-96 mx-4 md:mx-auto mt-16">
                    <div className="w-full rounded">
                        <div className="flex items-center justify-between mb-4">

                            <div className="flex space-x-4">
                                <button
                                    className="p-2 text-black"
                                    onClick={() => {
                                        if (prevMonth.current === 0) {
                                            setActiveYear(activeYear - 1);
                                            setActiveMonth(11);
                                        } else {
                                            setActiveMonth(activeMonth - 1);
                                        }
                                    }}
                                >
                                    <svg
                                        width={15}
                                        height={15}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                                        ></path>
                                    </svg>
                                </button>
                                <div className="font-bold text-xl text-black ">
                                    {`${activeMonthString} ${activeYear}`}
                                </div>
                                <button
                                    className="p-2 text-black"
                                    onClick={() => {
                                        if (prevMonth.current === 11) {
                                            setActiveYear(activeYear + 1);
                                            setActiveMonth(0);
                                        } else {
                                            setActiveMonth(activeMonth + 1);
                                        }
                                    }}
                                >
                                    <svg
                                        width={15}
                                        height={15}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="-mx-2">
                            <table className="w-full ">
                                <thead>
                                    <tr>
                                        <th className="py-3 px-2 md:px-3 ">SO</th>
                                        <th className="py-3 px-2 md:px-3 ">MO</th>
                                        <th className="py-3 px-2 md:px-3 ">DI</th>
                                        <th className="py-3 px-2 md:px-3 ">MI</th>
                                        <th className="py-3 px-2 md:px-3 ">DO</th>
                                        <th className="py-3 px-2 md:px-3 ">FR</th>
                                        <th className="py-3 px-2 md:px-3 ">SA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <CalendarRow
                                            firstDay={firstDayInMonth[activeMonth]}
                                            lastDayInMonth={new Date(
                                                activeYear,
                                                activeMonth + 1,
                                                0
                                            ).getDate()}
                                            row={0}
                                            currentMonth={activeMonth}
                                            currentYear={activeYear}
                                        />
                                    </tr>
                                    <tr>
                                        <CalendarRow
                                            firstDay={firstDayInMonth[activeMonth]}
                                            lastDayInMonth={new Date(
                                                activeYear,
                                                activeMonth + 1,
                                                0
                                            ).getDate()}
                                            row={1}
                                            currentMonth={activeMonth}
                                            currentYear={activeYear}
                                        />
                                    </tr>
                                    <tr>
                                        <CalendarRow
                                            firstDay={firstDayInMonth[activeMonth]}
                                            lastDayInMonth={new Date(
                                                activeYear,
                                                activeMonth + 1,
                                                0
                                            ).getDate()}
                                            row={2}
                                            currentMonth={activeMonth}
                                            currentYear={activeYear}
                                        />
                                    </tr>
                                    <tr>
                                        <CalendarRow
                                            firstDay={firstDayInMonth[activeMonth]}
                                            lastDayInMonth={new Date(
                                                activeYear,
                                                activeMonth + 1,
                                                0
                                            ).getDate()}
                                            row={3}
                                            currentMonth={activeMonth}
                                            currentYear={activeYear}
                                        />
                                    </tr>
                                    <tr>
                                        <CalendarRow
                                            firstDay={firstDayInMonth[activeMonth]}
                                            lastDayInMonth={new Date(
                                                activeYear,
                                                activeMonth + 1,
                                                0
                                            ).getDate()}
                                            row={4}
                                            currentMonth={activeMonth}
                                            currentYear={activeYear}
                                        />
                                    </tr>
                                    <tr>
                                        <CalendarRow
                                            firstDay={firstDayInMonth[activeMonth]}
                                            lastDayInMonth={new Date(
                                                activeYear,
                                                activeMonth + 1,
                                                0
                                            ).getDate()}
                                            row={5}
                                            currentMonth={activeMonth}
                                            currentYear={activeYear}
                                        />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
                    <p className=' border-t border-gray-300 mt-48'></p>
                    <p className=" font-semibold text-[14px] font-roboto text-gray-400 mt-2">
                        
                     <button className='bg-green-200 p-4 rounded-md'></button>   Ferienzeiten in Bayern
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Calendar;




