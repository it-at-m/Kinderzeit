/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import ReactModal from 'react-modal'

import Select from '../generic/Select'
import { EMPTY_RECC_STATE, RecommendationWizardState } from '../../constants'
import { overviewAreaOptions } from '../../static.data'
import RecommendationWizardSlide from './RecommendationWizardSlide'

ReactModal.setAppElement('#__next')

type RecommendationSlideshowModalProps = {
    modalOpen: boolean
    setModalOpen: React.Dispatch<boolean>
}

export default function RecommendationWizardModal({
    modalOpen,
    setModalOpen,
}: RecommendationSlideshowModalProps) {
    const navigator = useRouter()
    const [recommendationState, setRecommendationState] =
        useState<RecommendationWizardState>({ ...EMPTY_RECC_STATE })
    const [slideIdx, setSlideIdx] = useState<number>(0)

    const slides: React.ReactNode[] = [
        <RecommendationWizardSlide
            key={'wizard-slide-0'}
            setRecommendationState={setRecommendationState}
            setModalOpen={setModalOpen}
            title="Hallo!"
            buttonText="Los geht's!"
            showCloseButton={true}
            leftColumnContent={
                <Image src="/confused.svg" width={250} height={250} priority />
            }
            buttonDisabled={false}
            rightColumnContent={
                <div className="text-[12px] md:text-[16px] lg:text-[20px] font-roboto text-left pl-4">
                    Gerne empfehlen wir dir passende Ferienaktivitäten
                    individuell für dein Kind. Hierfür benötigen wir nur drei
                    Informationen von dir.
                </div>
            }
            onNext={() => setSlideIdx(1)}
        />,
        <RecommendationWizardSlide
            key={'wizard-slide-1'}
            setModalOpen={setModalOpen}
            showCloseButton={true}
            setRecommendationState={setRecommendationState}
            title="Wohngegend"
            buttonText="Weiter"
            buttonDisabled={
                !recommendationState.area ||
                recommendationState.area.length == 0
            }
            leftColumnContent={
                <div className="text-[12px] md:text-[16px] lg:text-[20px] font-roboto text-left pl-4 pr-2">
                    Bitte nenne uns den Stadtteil, in dem du wohnst. So können
                    wir für dich Veranstaltungen finden, die in deiner Nähe
                    sind.
                </div>
            }
            rightColumnContent={
                <Select
                    placeholderText="Stadtteil"
                    allowMultiSelect={false}
                    className={'w-4/5 mr-[2rem]'}
                    options={overviewAreaOptions}
                    onChange={([selectedArea]) => {
                        setRecommendationState({
                            ...recommendationState,
                            area: selectedArea,
                        })
                    }}
                />
            }
            buttonClassName={`${
                // See the disabled attribute
                !recommendationState.area ||
                recommendationState.area.length == 0
                    ? 'bg-[#9CA3AF]'
                    : 'bg-[#417764]'
            } rounded-[6px] text-white text-[12px] min-w-[6rem] md:text-[16px] lg:text-[20px] p-1 text-center mr-[2rem]`}
            onNext={() => {
                setSlideIdx(2)
                setTimeout(() => {
                    setModalOpen(false)
                    setSlideIdx(0)
                    setRecommendationState({
                        ...EMPTY_RECC_STATE,
                    })
                    navigator.push({
                        pathname: 'recommendation',
                        query: { ...recommendationState },
                    })
                }, 5 * 1000)
            }}
        />,
        <RecommendationWizardSlide
            key={'wizard-slide-2'}
            setModalOpen={setModalOpen}
            setRecommendationState={setRecommendationState}
            title="Vielen Dank!"
            buttonDisabled={false}
            leftColumnContent={
                <Image
                    src="/loading_cute_elephant.svg"
                    width={250}
                    height={250}
                    priority
                />
            }
            rightColumnContent={
                <div className="text-[12px] md:text-[16px] lg:text-[20px] mt-[-3rem] font-roboto text-left pl-4 pr-4">
                    Wir suchen nun basierend auf deinen Antworten nach den
                    besten Ferienaktivitäten für dein Kind. Gib uns einen kurzen
                    Augenblick.
                </div>
            }
        />,
    ]

    useEffect(() => {
        // Dissalow scrolling when the modal opens
        document.body.style.overflow = 'hidden'
    }, [])

    return (
        <ReactModal
            shouldFocusAfterRender={false}
            isOpen={modalOpen}
            style={{
                overlay: {
                    // Color for modal's background
                    backgroundColor: 'rgba(31, 41, 55, 0.6)',
                },
            }}
            className={
                'bg-white h-[350px] top-[30vh] left-[11vw] right-[11vw] md:left-[20vw] ' +
                'md:right-[20vw] z-10 absolute rounded-[16px] flex flex-col items-end'
            }
        >
            {slides[slideIdx]}
        </ReactModal>
    )
}
