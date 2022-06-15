import React from 'react'

export default function Navbar() {
    return (
        <header className="bg-[#D9D9D9] h-[56px] relative w-screen my-auto flex px-[1.7rem]">
            <div className="h-full flex-1 flex justify-start items-center">
                <div className="w-[52px] h-[52px] rounded-full bg-[#A2A2A2]"></div>
                <div className="uppercase font-inter font-bold text-[2.5rem] ml-[3rem]">
                    Ferienplaner
                </div>
                <div className="font-inter font-[300] text-[1.8rem] ml-[10%]">
                    Ferienprogramm
                </div>
            </div>
            {/* Buttons */}
            <div className="h-full w-[72px] flex justify-between items-center">
                {/* Filter */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer h-[30px] w-[30px] right-[62px] top-[30px]"
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
                    className="cursor-pointer h-[30px] w-[30px] right-[17px] top-[30px]"
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
