import React from 'react';
import ProgressBar from "../../../common/ProgressBar";
import GaugeComponent from "../../../common/Gauge";
import {ClockCircleOutlined} from "@ant-design/icons";

const TotalData = () => {
    return (
        <div className="bg-white h-52 p-5">
            <div className="flex gap-5 items-end">
                <p className="text-heading-4 font-medium">Total Data</p>
                <p className="text-small text-ct-blue-90-70% mb-1">Received : 900h</p>
            </div>
            <div className="flex items-center justify-between h-full ">
                <div className="">
                    <div className="flex gap-1">
                        <h1 className="text-heading-1 text-transparent bg-clip-text bg-gradient-to-r from-primary-ct-blue-60 to-silver-tree">
                            33

                        </h1>
                        <div>
                            <p className="text-heading-2 text-transparent bg-clip-text bg-gradient-to-r from-silver-tree to-tacao mt-2.5">%</p>
                            <p className="text-xxs text-ct-blue-90-70% mt-2">Achieved</p>
                        </div>
                    </div>
                </div>
                <div className="w-[850px]">
                    <ProgressBar.Type1 value={50}/>

                    <div className='flex justify-between'>
                        <div className='flex gap-5 mt-3'>
                            <p className="text-small text-ct-blue-90-70% font-semibold">Total Valid : 900h; </p>
                            <div className="flex gap-2 items-center">
                                <ClockCircleOutlined style={{color: "#5F6B7D", fontSize: "12px"}}/>
                                <p className="text-small text-ct-blue-90-70% ">Last Update: 22 Aug 2022</p>
                            </div>

                        </div>
                        <div>
                            <p className="mt-3 text-small font-semibold text-ct-blue-60">Total Target : 10,000h</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <GaugeComponent.Type1/>
                </div>
            </div>
        </div>
    );
};

export default TotalData;