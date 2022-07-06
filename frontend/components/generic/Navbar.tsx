import React from 'react'

export default function Navbar() {
    return (
        <header className="bg-pink-300 h-[3rem] relative w-screen my-auto flex rem-[1.7rem]">
            <div className="h-full flex-1 flex justify-start items-center">
                <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-pink-100"></div>
                <div className="uppercase font-inter font-bold text-[2.5rem] ml-[1rem]">
                    Ferienplaner
                </div>
                <div className="font-inter font-[500] text-[1.8rem] ml-[20%]">
                    Ferienprogramm
                </div>
                <div className="font-inter font-[500] text-[1.8rem] ml-[2%]">
                    Empfehlung
                </div>
                <div className="font-inter font-[500] text-[1.8rem] ml-[2%]">
                    Über Uns
                </div>
            </div>
            <div></div>
            {/* Buttons */}
            <div className="h-full w-[7.2rem] flex justify-between items-center">
                {/* Filter */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer h-[3rem] w-[3rem] right-[6.2rem] top-[3rem]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                </svg>
                {/* User Profile */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer h-[3rem] w-[3rem] right-[1.7rem] top-[3rem]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </header>
    )
}
