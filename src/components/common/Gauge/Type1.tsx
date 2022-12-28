import React, {useState} from 'react';
import './gaugeType1.css'
import polygon from '../../../assets/Icons/Polygon1.png'


const Type1 = () => {
    const [openTooltip, setOpenTooltip] = useState<boolean>(false)
    const [openTooltip2, setOpenTooltip2] = useState<boolean>(false)
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
        <div className="relative mb-[65px]">
            <div className="flex items-center rounded-t-full overflow-y-hidden w-[172px] h-[86px] relative z-[80]">
                <div className={`male-tt bg-blue-A10 h-[86px] absolute w-[172px] -rotate-[135deg] origin-bottom z-[60]`}
                     onMouseOver={MouseEventHandle}
                     onMouseOut={MouseEventHandleOut}
                />


                <div className="female-tt bg-purple-A10 h-[86px] absolute w-[172px] z-[50]"
                     onMouseOver={MouseEventHandle2}
                     onMouseOut={MouseEventHandleOut2}
                />


                <div className="w-24 h-12 rounded-t-full bg-white z-[90] absolute bottom-0 left-1/2 transform -translate-x-1/2"/>


            </div>
            <div className="flex w-full">
                <div className="w-[38px] h-[40px] bg-gradient-to-b from-onahau to-rgba(204, 248, 254, 0)"/>
                <div className="w-[96px] text-center">
                    <p className="font-medium text-heading-5 text-ct-blue-95 overflow-hidden truncate w-[90px] mx-auto">43,258</p>
                    <p className="text-small text-ct-blue-45 font-medium"> Total Speaker</p>
                </div>
                <div className="w-[38px] h-[40px] bg-gradient-to-b from-fog to-rgba(218, 215, 254, 0)"/>
            </div>
            {/*-----------------------tooltip-----------------------------*/}
            {
                openTooltip ? <div className="absolute -top-[18px] -left-[236px] w-[211px] z-[999]">
                    <div className="flex w-full relative">
                        <div className="flex bg-black-80 p-4 w-full rounded-xl gap-2 ">
                            <div className="text-white border-r border-dashed my-auto pr-2">
                                <p className="font-semibold text-small">Male</p>
                                <p className="text-heading-5 font-medium text-blue-A10">28,118</p>
                            </div>
                            <div className="flex text-white">
                                <p className="text-[56px] font-normal">65</p>
                                <p className="text-heading-2">%</p>
                            </div>
                        </div>
                        <img className="absolute top-[37px] -right-[23px] h-[39px] w-[26px]" src={polygon} alt="---"/>
                    </div>

                </div> : ""
            }
            {
                openTooltip2 ? <div className="absolute -top-[18px] -left-[165px] w-[211px] z-[999]">
                    <div className="flex w-full relative">
                        <div className="flex bg-black-80 p-4 w-full rounded-xl gap-2 ">
                            <div className="text-white border-r border-dashed my-auto pr-2">
                                <p className="font-semibold text-small">Female</p>
                                <p className="text-heading-5 font-medium text-blue-A10">28,118</p>
                            </div>
                            <div className="flex text-white">
                                <p className="text-[56px] font-normal">35</p>
                                <p className="text-heading-2">%</p>
                            </div>
                        </div>
                        <img className="absolute top-[42px] -right-[23px] h-[39px] w-[26px]" src={polygon} alt="---"/>
                    </div>

                </div> : ""
            }
        </div>
    );
};

export default Type1;