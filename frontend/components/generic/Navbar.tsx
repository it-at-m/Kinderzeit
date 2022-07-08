import React from 'react'

export default function Navbar() {
    return (
        <>
            <header className="bg-pink-300 h-[3rem] my-auto flex justify-center md:justify-start items-center md:pl-2 md:pr-4 relative">
                <div className="uppercase font-inter font-bold text-[2.5rem]">
                    Ferienplaner
                </div>
                <div className="hidden md:block flex-1" />
                <div className="hidden md:block font-inter font-[500] text-[1.8rem]">
                    Ferienprogramm
                </div>
                <div className="hidden md:block font-inter font-[500] mx-4 text-[1.8rem]">
                    Empfehlung
                </div>
                <div className="hidden md:block font-inter font-[500] text-[1.8rem]">
                    Über Uns
                </div>
                {/* Mobile Menu */}
                <div className="absolute right-2 w-8 ml-auto h-full md:hidden flex flex-col items-center justify-center">
                    <div className="w-full h-[4px] bg-black my-[2px]" />
                    <div className="w-full h-[4px] bg-black my-[2px]" />
                    <div className="w-full h-[4px] bg-black my-[2px]" />
                </div>
            </header>
        </>
    )
}
