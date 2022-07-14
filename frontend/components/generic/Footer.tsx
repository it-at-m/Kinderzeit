import React from 'react'

export default function Footer() {
    return (
        <footer className="mt-16 container mx-auto px-6">
            <div className=" bg-gradient-to-r pb-1 from-yellow-500 via-green-500 via-blue-300 via-purple-500 via-pink-500 to-red-500"></div>
            <div className="sm:w-2/3 text-center py-6">
                <div className=" grid grid-cols-2 gap-4">
                    <div>Impressum</div>
                    <div>Über Uns</div>
                    <div>Datenschutz</div>
                </div>
            </div>
        </footer>
    )
}
