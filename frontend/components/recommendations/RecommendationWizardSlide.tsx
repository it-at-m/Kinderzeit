import React from 'react'
import Image from 'next/image'

import { EMPTY_RECC_STATE, RecommendationWizardState } from '../../constants'

type RecommendationWizardSlideProps = {
    title: string
    buttonText?: string
    leftColumnContent: React.ReactNode
    leftColumnClassName?: string
    rightColumnContent: React.ReactNode
    rightColumnClassName?: string
    buttonClassName?: string
    onNext?: () => void
    buttonDisabled?: boolean
    showCloseButton?: boolean
    setModalOpen: React.Dispatch<boolean>
    setRecommendationState: React.Dispatch<RecommendationWizardState>
}

export default function RecommendationWizardSlide(
    props: RecommendationWizardSlideProps
) {
    return (
        <>
            {props.showCloseButton && (
                <div
                    onClick={() => {
                        props.setModalOpen(false)
                        props.setRecommendationState({ ...EMPTY_RECC_STATE })
                        // Make the document scrollable again
                        document.body.style.overflow = 'unset'
                    }}
                    className="rounded-full p-2 bg-white shadow-lg flex justify-center items-center cursor-pointer mt-4 mr-4"
                >
                    <Image width={18} height={18} src="/close_modal.svg" />
                </div>
            )}
            <div
                className={`w-full font-lato-bold text-[32px] mx-auto flex items-center justify-center tracking-wider ${
                    !props.showCloseButton && 'mt-[2rem]'
                }`}
            >
                {props.title}
            </div>
            <div className="grid grid-rows-1 grid-cols-2 w-full h-full">
                <div
                    className={`row-span-1 col-start-1 col-span-1 flex items-center justify-center mt-[-4rem] ${props.leftColumnClassName}`}
                >
                    {props.leftColumnContent}
                </div>
                <div className="row-span-1 col-start-2 col-span-1 flex flex-col items-end w-full h-full justify-around relative">
                    {/* Seperator between columns */}
                    <div className="absolute left-[-1rem] top-[2rem] bottom-[1rem] w-[1px] bg-[#E5E7EB]" />
                    {props.rightColumnContent}
                    {props.onNext && (
                        <button
                            onClick={props.onNext}
                            disabled={props.buttonDisabled}
                            className={
                                `${
                                    props.buttonDisabled
                                        ? 'bg-[#9CA3AF]'
                                        : 'bg-[#417764]'
                                } rounded-[6px] ` +
                                'text-white text-[12px] md:text-[16px] lg:text-[20px] p-1 text-center ' +
                                `mr-[2rem] px-4 ${props.buttonClassName}`
                            }
                        >
                            {props.buttonText}
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}
