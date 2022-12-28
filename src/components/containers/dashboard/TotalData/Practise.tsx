import React, {useState} from 'react';
import "./practise.css"

const Practise = () => {
    const [openTooltip, setOpenTooltip] = useState<boolean>(false)
    const [openTooltip2, setOpenTooltip2] = useState<boolean>(false)
    const MouseEventHandle = () => {
       setOpenTooltip(true)
    }
    const MouseEventHandleOut=()=>{
        setOpenTooltip(false)
    }
    const MouseEventHandle2 = () => {
        setOpenTooltip2(true)
    }
    const MouseEventHandleOut2=()=>{
        setOpenTooltip2(false)
    }
    return (
        <div className="relative ml-40">
            <div className="flex items-center rounded-t-full overflow-y-hidden w-44 h-[88px] relative z-[80]">
                {/*<div className="w-24 bg-red-80 h-64 rotate-45"></div>*/}
                {/*<div className="w-24 bg-red-40 h-40"></div>*/}
                <div className="bg-red-80 h-[88px] absolute w-44 -rotate-[90deg] origin-bottom z-[60]"
                     onMouseOver={MouseEventHandle}
                     onMouseOut={MouseEventHandleOut}>

                </div>
                <div className="female-tt bg-red-40 h-24 absolute w-44 z-[50]"
                     onMouseOver={MouseEventHandle2} onMouseOut={MouseEventHandleOut2}
                ></div>
                <div
                    className="w-24 h-12 rounded-t-full bg-white z-[90] absolute bottom-0 left-1/2 transform -translate-x-1/2"/>
            </div>
            {/*<div className="male-tt absolute w-10 h-10 bg-blue-60 top-5 -left-10"/>*/}
            {
                openTooltip ? <div className="absolute w-10 h-10 bg-blue-30 top-5 -left-5"/> : ""
            }
            {
                openTooltip2 ? <div className="absolute w-10 h-10 bg-black-30 top-5 -left-5"/> : ""
            }
        </div>
    );
};

export default Practise;


// <div className="relative ml-40">
//     <div className="flex items-center rounded-t-full overflow-hidden w-44 h-[88px] relative z-[80]">
//         {/*<div className="w-24 bg-red-80 h-64 rotate-45"></div>*/}
//         {/*<div className="w-24 bg-red-40 h-40"></div>*/}
//         <div className="male-body bg-red-80 h-[88px] absolute w-44 -rotate-[90deg] origin-bottom z-[60]">
//             {/*<div className="absolute w-10 h-10 bg-blue-60" />*/}
//         </div>
//         <div className=" female-tt bg-red-40 h-24 absolute w-44 z-[50]"></div>
//         <div className="w-24 h-12 rounded-t-full bg-white z-[90] absolute bottom-0 left-1/2 transform -translate-x-1/2" />
//     </div>
//     <div className="male-tt absolute w-10 h-10 bg-blue-60 top-5 -left-10" />
//
// </div>
