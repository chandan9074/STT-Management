import React, { useState } from 'react';
import polygon from "../../../assets/Icons/Polygon1.png";
import { genderWiseDT } from '../../../types/dashboardTypes';
import GraphTooltipType2 from '../GraphTooltipType2';
import './gaugeType2.css'

interface Props {
    data: genderWiseDT[]
}

const Type2 = ({data }: Props) => {
    const [openTooltip, setOpenTooltip] = useState<boolean>(false)
    const [openTooltip2, setOpenTooltip2] = useState<boolean>(false)

    console.log("gggggggggggg",data)
    let totalSpeaker:number=data[0].speakers +data[1].speakers

    let progressDeg: number = (1.8 * data[1].contribution)
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
        <div className="relative ">
            <div className="flex items-center rounded-t-full overflow-y-hidden w-[448px] h-[224px] relative z-[80]">
                <div
                    style={{ transform: `rotate(-${progressDeg}deg)` }}
                    className={`type2-male-tt bg-bright-turquoise h-[224px] absolute w-[448px] origin-bottom z-[60]`}
                    onMouseOver={MouseEventHandle}
                    onMouseOut={MouseEventHandleOut}
                />


                <div className="type2-female-tt bg-your-pink h-[224px] absolute w-[448px] z-[50]"
                    onMouseOver={MouseEventHandle2}
                    onMouseOut={MouseEventHandleOut2}
                >
                    <div className='relative'>
                        
                    </div>
                </div>

                <div
                    className="w-[300px] h-[150px] rounded-t-full bg-white z-[90] absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            </div>
            <div className="w-[200px] absolute top-[55%] left-[27%] text-center z-[99]">
                <p className="font-medium text-heading-3 text-ct-blue-95 overflow-hidden truncate w-[90px] mx-auto">{totalSpeaker}</p>
                <p className="text-small text-ct-blue-45 font-medium">Speakers</p>
            </div>


            <div className="flex w-full justify-between">
                <div className="w-[74px] h-[38px] type2-male-drop-shadow" />

                <div className="w-[74px] h-[38px] type2-female-drop-shadow" />
            </div>
            <p className={`absolute bottom-[45px] left-[20px] z-[99] text-xs font-normal ${openTooltip ? "text-white" : "text-pale-sky"}`}>{data[0].contribution}%</p>
            <p className={`absolute bottom-[45px] right-[20px] z-[99] text-xs font-normal ${openTooltip2 ? "text-white" : "text-pale-sky"}`}>{data[1].contribution}%</p>

            {/* Tooltip */}
            {
                openTooltip ? <div className="absolute -top-[80%] left-[50px] z-[99] group-hover:animate-fadeIn">
                    <GraphTooltipType2
                        align='center'
                        data={data[0]}
                        titleColor="text-bright-turquoise"
                        validBgColor="bg-[#42F5D51F]"
                    />
                </div> : ""
            }
            {
                openTooltip2 ? <div className="absolute -top-[68%] left-[220px] z-[99] group-hover:animate-fadeIn">
                    <GraphTooltipType2
                        align='center'
                        data={data[1]}
                        titleColor="text-your-pink"
                        validBgColor="bg-[#FFCBCB1F]"
                    /> </div> : ""
            }
        </div>
    );
};

export default Type2;