import React, { useState } from 'react';
import './gaugeType1.css'
import polygon from '../../../assets/Icons/Polygon1.png'
import { totalDataResDT, totalDataSpeakerResDT } from '../../../types/dashboardTypes';

interface Props {
    data: totalDataResDT | undefined
}

const Type1 = ({ data }: Props) => {
    const [openTooltip, setOpenTooltip] = useState<boolean>(false)
    const [openTooltip2, setOpenTooltip2] = useState<boolean>(false)
    let progressDeg: number | undefined = data?.speaker?.female?.contribution
    const MouseEventHandle = () => {
        setOpenTooltip(true)
    }
    const MouseEventHandleOut = () => {
        setOpenTooltip(false)

    }
    const MouseEventHandle2 = () => {
        setOpenTooltip2(true)
    }
    const MouseEventHandleOut2 = () => {
        setOpenTooltip2(false)
    }
    return (
        <div className="relative">
            <div className="flex items-center rounded-t-full overflow-y-hidden w-[172px] h-[86px] relative z-[80]">
                <div
                    style={{ transform: `rotate(-${progressDeg ? progressDeg * 1.8 : 90}deg)` }}
                    className={`male-tt bg-blue-A10 h-[86px] absolute w-[172px] origin-bottom z-[60] group`}
                    onMouseOver={MouseEventHandle}
                    onMouseOut={MouseEventHandleOut}
                >
                    <div className='bg-gradient-to-r from-[#00A9C5] to-[#CCF8FE] w-full h-full duration-300 opacity-0 group-hover:opacity-100' />
                </div>


                <div className="female-tt bg-purple-A10 h-[86px] absolute w-[172px] z-[50]"
                    onMouseOver={MouseEventHandle2}
                    onMouseOut={MouseEventHandleOut2}
                >
                    <div className='w-[172px] h-[86px] female-tt-child duration-300'></div>
                </div>


                <div className="w-[87px] h-[42px] rounded-t-full bg-white z-[90] absolute bottom-0 left-1/2 transform -translate-x-1/2" />


            </div>
            <div className="flex w-full">
                <div className="w-[42px] h-[40px] male-drop-shadow" />
                <div className="w-[88px] text-center">
                    <p className="font-medium text-heading-5 text-ct-blue-95 overflow-hidden truncate w-[90px] mx-auto">{data?.speaker?.totalSpeaker}</p>
                    <p className="text-small text-ct-blue-45 font-medium"> Total Speaker</p>
                </div>
                <div className="w-[42px] h-[40px] female-drop-shadow" />
            </div>
            {/*-----------------------tooltip-----------------------------*/}
            {
                openTooltip ? <div
                    onMouseOver={MouseEventHandle}
                    onMouseOut={MouseEventHandleOut}
                    className="absolute -top-[18px] -left-[236px] w-[211px] z-[999] animate-fadeIn"
                >
                    <div className="flex w-full relative">
                        <div className="flex bg-black-80 p-4 w-full rounded-xl gap-2 ">
                            <div className="text-white border-r border-dashed my-auto pr-2">
                                <p className="font-semibold text-small">Male</p>
                                <p className="text-heading-5 font-medium text-blue-A10">{data?.speaker?.male?.value}</p>
                            </div>
                            <div className="flex text-white">
                                <p className="text-[56px] font-normal">{data?.speaker?.male?.contribution}</p>
                                <p className="text-heading-2">%</p>
                            </div>
                        </div>
                        <img className="absolute top-[37px] -right-[23px] h-[39px] w-[26px]" src={polygon} alt="---" />
                    </div>

                </div> : ""
            }
            {
                openTooltip2 ?
                    <div
                        onMouseOver={MouseEventHandle2}
                        onMouseOut={MouseEventHandleOut2}
                        className="absolute -top-[18px] -left-[165px] w-[211px] z-[999] animate-fadeIn"
                    >
                        <div className="flex w-full relative">
                            <div className="flex bg-black-80 p-4 w-full rounded-xl gap-2 ">
                                <div className="text-white border-r border-dashed my-auto pr-2">
                                    <p className="font-semibold text-small">Female</p>
                                    <p className="text-heading-5 font-medium text-blue-A10">{data?.speaker?.female?.value}</p>
                                </div>
                                <div className="flex text-white">
                                    <p className="text-[56px] font-normal">{data?.speaker?.female?.contribution}</p>
                                    <p className="text-heading-2">%</p>
                                </div>
                            </div>
                            <img className="absolute top-[42px] -right-[23px] h-[39px] w-[26px]" src={polygon} alt="---" />
                        </div>

                    </div> : ""
            }
        </div>
    );
};

export default Type1;