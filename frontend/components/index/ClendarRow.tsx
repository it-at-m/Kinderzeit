import { useState } from 'react'
import React from 'react'

export interface CalendarRowProps {
    firstDay: number
    lastDayInMonth: number
    row: number
    currentMonth: number
    currentYear: number
}

const CalendarRow: React.FC<CalendarRowProps> = ({
    firstDay,
    lastDayInMonth,
    row,
    currentMonth,
    currentYear,
}) => {
    const activeDay = useState(new Date().getDate())[0]

    const content = []
    if (!row) {
        for (let i = 0; i < firstDay; i++) {
            content.push(<td></td>)
        }
        content.push(
            <td className="relative py-3 px-2 md:px-3  bg-green-200 hover:text-blue-500 text-center text-gray-800">
                1
            </td>
        )
        const len = 7 - content.length
        for (let i = 1; i <= len; i++) {
            content.push(
                <>
                    {activeDay === i + 1 &&
                    new Date().getMonth() === currentMonth &&
                    new Date().getFullYear() === currentYear ? (
                        <td className="relative py-3 px-2 md:px-3  bg-green-200 hover:text-blue-500 text-center text-gray-800">
                            <span className="p-1 bg-green-200 rounded-full border-green-400 border-2">
                                {i + 1}
                            </span>
                        </td>
                    ) : (
                        <td className="relative py-3 px-2 md:px-3 bg-green-200 hover:text-blue-500 text-center text-gray-800">
                            {i + 1}
                        </td>
                    )}
                </>
            )
        }

        return <>{content}</>
    }
    for (let i = 1; i <= 7; i++) {
        if (i + (7 * row - firstDay) <= lastDayInMonth) {
            content.push(
                <>
                    {activeDay === i + (7 * row - firstDay) &&
                    new Date().getMonth() === currentMonth &&
                    new Date().getFullYear() === currentYear ? (
                        <td className="relative py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800">
                            <span className="p-1 rounded-lg bg-green-200">
                                {i + (7 * row - firstDay)}
                            </span>
                        </td>
                    ) : (
                        <td className="relative py-3 px-2 md:px-3   bg-green-200  hover:text-blue-500 text-center text-gray-800">
                            {i + (7 * row - firstDay)}
                        </td>
                    )}
                </>
            )
        }
    }
    return <>{content}</>
}

export default CalendarRow
