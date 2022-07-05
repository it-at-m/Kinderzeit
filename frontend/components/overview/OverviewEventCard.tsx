import React from 'react'
import {default as data} from '../../data.json'


export default function OverviewEventCard() {
    
    return (
        <>
        {data.map( (data) => {
                return(
                    <div className="relative h-[42rem] w-[24rem] bg-[#F8F9FA] rounded-lg border border-[#BEBBCE] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <img className="absolute top-0 w-full h-1/4 left-0 right-0 rounded-t-lg flex items-center justify-center"/>
                    <div className="absolute left-0 bottom-0 right-0 h-3/4 rounded-b-lg pl-[1.8rem] flex flex-col"> 
                        <h2 className="font-inter font-[600] text-[2rem] leading-[2.4rem] text-[#2B2B2B] w-2/3 line-clamp-2 mt-[1.3rem]">
                            {data.name}
                        </h2>
        
                        <p className="font-inter font-normal text-[1.2rem] w-4/5 text-[#525252] line-clamp-2 mt-[0.85rem]">
                        {data.description}
                        </p>

                                        
                        <div className="flex flex-wrap grid grid-cols-2 gap-4 place-content-evenly mt-[2.7rem] mb-[1.6rem] justify-between">
                        
                        <div className="">
                            <div className="">
                            Datum: 
                        Verfügbarkeit:
                        Kosten: {data.price}
                        Alter: {data.minAge} {data.maxAge}

                        </div>
                        <div className="">
                        uhrzeit:{data.time}
                        Kosten: {data.price}
                        Alter: {data.minAge} {data.maxAge}
                        Kontakt:{data.emailContact}
                            
                        </div>
                        </div>
                        
                       
                            
                        
                        </div>
                    </div>
                </div>
        
                    )
    
                }
            )
        }
        </>
    );
}




