import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="mx-auto z-10 w-screen">
            <div className="bg-gradient-to-r pb-1 from-yellow-500 via-violet-300 via-indigo-300 via-blue-400 via-green-300 via-teal-400 via-indigo-300 via-pink-300 to-red-500 z-10"></div>
            <div className="sm:w-2/3 text-center py-2">
                <div className=" grid grid-cols-2 gap-4">
                    <Link href="https://digitalproductschool.io/legal-disclosure/">
                        <a>Impressum</a>
                    </Link>
                    <div>Über Uns</div>
                    <Link href="https://digitalproductschool.io/privacy-policy/utum/">
                        <a>Datenschutz</a>
                    </Link>
                    <div>© 2022 All Rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}
