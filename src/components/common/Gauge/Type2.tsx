import React, {useState} from 'react';
import polygon from "../../../assets/Icons/Polygon1.png";
import './gaugeType2.css'

interface Props {
    male: number;
    female: number,
    speakers: number
}

const Type2 = ({male, female, speakers}: Props) => {
    const [openTooltip, setOpenTooltip] = useState<boolean>(false)
    const [openTooltip2, setOpenTooltip2] = useState<boolean>(false)

    let progressDeg: number = (1.8 * female)
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
            <div className="flex items-center rounded-t-full overflow-y-hidden w-[448px] h-[224px] relative z-[80]">
                <div
                    style={{transform: `rotate(-${progressDeg}deg)`}}
                    className={`type2-male-tt bg-bright-turquoise h-[224px] absolute w-[448px] origin-bottom z-[60]`}
                    onMouseOver={MouseEventHandle}
                    onMouseOut={MouseEventHandleOut}
                />


                <div className="type2-female-tt bg-your-pink h-[224px] absolute w-[448px] z-[50]"
                     onMouseOver={MouseEventHandle2}
                     onMouseOut={MouseEventHandleOut2}
                />

                <div
                    className="w-[300px] h-[150px] rounded-t-full bg-white z-[90] absolute bottom-0 left-1/2 transform -translate-x-1/2"/>
            </div>
            <div className="w-[200px] absolute top-[55%] left-[27%] text-center z-[99]">
                <p className="font-medium text-heading-3 text-ct-blue-95 overflow-hidden truncate w-[90px] mx-auto">{speakers}</p>
                <p className="text-small text-ct-blue-45 font-medium">Speakers</p>
            </div>


            <div className="flex w-full justify-between">
                <div className="w-[74px] h-[38px] type2-male-drop-shadow"/>

                <div className="w-[74px] h-[38px] type2-female-drop-shadow"/>
            </div>
            <p className={`absolute bottom-[45px] left-[20px] z-[99] text-xs font-normal ${openTooltip ? "text-white" : "text-pale-sky"}`}>{male}%</p>
            <p className={`absolute bottom-[45px] right-[20px] z-[99] text-xs font-normal ${openTooltip2 ? "text-white" : "text-pale-sky"}`}>{female}%</p>
        </div>
    );
};

export default Type2;