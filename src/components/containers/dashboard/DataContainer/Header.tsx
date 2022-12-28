import React from 'react';
import {RingProgressBar} from "../../../common/RingProgress";
import Dropdown from "../../../Dropdown";
import {ClockCircleOutlined} from "@ant-design/icons";

interface Props {
    type:string
    bgColor:string,
    targetColor:string


}
const Header = ({bgColor,type,targetColor}:Props) => {
    return (
        <div className={`${bgColor} w-full mt-20 flex justify-between p-6 rounded-xl`}>

            <div className="flex flex-col gap-3">
                <div className="flex gap-2 align-middle">
                    <p className="text-heading-6 font-medium text-ct-blue-95">{type} Data</p>
                    <p className={`text-small font-medium my-auto ${targetColor}`}>Target : 6,000h</p>
                </div>
                <hr className="bg-ct-blue-20"/>
                <div className="flex gap-3">
                    <p className="text-small font-semibold text-ct-blue-90-88%">Total Valid : 1000h; </p>
                    <div className="flex gap-2 items-center">
                        <ClockCircleOutlined style={{color:"#5F6B7D", fontSize:"12px"}}/>
                        <p className="text-small font-normal text-ct-blue-90-88%">Last Update: 22 Aug 2022</p>
                    </div>

                </div>
                <div>
                    <p className="text-small font-normal text-ct-blue-90-88%">Received : 1392h</p>
                </div>
            </div>

            <div className="flex">

                <RingProgressBar.Type1 type={type} value={50}/>
                <Dropdown.Type2 />
            </div>

        </div>
    );
};

export default Header;