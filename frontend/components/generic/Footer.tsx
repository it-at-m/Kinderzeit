import React from 'react'

export default function Footer() {
    return (
        <footer className="mx-auto z-10 w-screen">
            <div className="bg-gradient-to-r pb-1 from-yellow-500 via-violet-300 via-indigo-300 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500 z-10"></div>
            <div className="sm:w-2/3 text-center py-2">
                <div className=" grid grid-cols-2 gap-4">
                    <div>Impressum</div>
                    <div>Über Uns</div>
                    <div>Datenschutz</div>
                </div>
            </div>
        </footer>
    )
}
