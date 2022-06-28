import React from 'react'

export default function Footer() {
    return (
        <footer className="relative w-screen left-0 right-0 bottom-0 h-[110px] bg-[#D9D9D9]">
            <div className="absolute w-[65px] h-[65px] bottom-[23px] rounded-full left-[17px] bg-[#A2A2A2]"></div>
            <p className="absolute top-[28px] left-[128px] bottom-[63px] font-[Inter] font-normal leading-[19.36px] text-[16px]">
                Impressum
            </p>
            <p className="absolute top-[56px] left-[128px] bottom-[35px] font-[Inter] font-normal leading-[19.36px] text-[16px]">
                Datenschutz
            </p>
        </footer>
    )
}
