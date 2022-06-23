import React from 'react'

export default function OverviewEventCard({ event }: { event: Event }) {
    return (
        <div className="relative h-[42rem] w-[24rem] bg-[#F8F9FA] rounded-lg border border-[#BEBBCE] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <img className="absolute top-0 w-full h-1/4 left-0 right-0 rounded-t-lg flex items-center justify-center" src="https://images.thrillophilia.com/image/upload/s--90xz2mik--/c_fill,h_775,q_auto,w_1600/f_auto,fl_strip_profile/v1/images/photos/000/334/417/original/1595836118_shutterstock_664589182.jpg.jpg?1595836118"></img>
            <div className="absolute left-0 bottom-0 right-0 h-3/4 rounded-b-lg pl-[1.8rem] flex flex-col">
                <h2 className="font-inter font-[600] text-[2rem] leading-[2.4rem] text-[#2B2B2B] w-2/3 line-clamp-2 mt-[1.3rem]">
                    Day Adventure at Sea Life
                </h2>

                <p className="font-inter font-normal text-[1.2rem] w-4/5 text-[#525252] line-clamp-2 mt-[0.85rem]">
                    Discover over 3.000 creatures in more than 33 displays.
                </p>

                <div className="flex flex-wrap grid grid-cols-2 gap-4 place-content-evenly mt-[2.7rem] mb-[1.6rem] justify-between">
                    {Object.entries({
                        Datum: 'Fr., 03.06.2022',
                        uhrzeit:' 9:00 Uhr',                        
                        Verfügbarkeit: '10 Plätze',
                        Kosten: '€ 16.00',
                        Alter: '3 - 14 Jahre',
                        Verantstaltungsort: 'Sea Life, Moosach',
                        Kontakt:'info@kunstlabor.org'
                    }).map(([label, text]) => (
                        <div
                            key={`event_details_${label}`}
                            // nowrap makes the two elements "stick" together
                            className="whitespace-nowrap"
                        >
                            <label className="font-inter font-normal text-[1rem] text-[#A9A9A9]">
                                {label}
                            </label>
                            <p className="font-inter font-[600] text-[1.1rem] text-[#525252]">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
