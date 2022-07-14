import React from 'react'

export default function Footer() {
    return (
        <footer className="mx-auto z-10 w-screen pt-24">
            <div className="bg-gradient-to-r pb-1 from-yellow-500 via-pink-500 to-red-500 z-10"></div>
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
