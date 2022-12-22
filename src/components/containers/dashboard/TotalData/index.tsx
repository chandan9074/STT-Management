import React from 'react';
import ProgressBar from "../../../common/ProgressBar";
import GaugeComponent from "../../../common/Gauge";

const TotalData = () => {
    return (
        <div className="bg-white h-52 p-5">
            <div className="flex gap-5 items-end">
                <p className="text-heading-4 font-medium">Total Data</p>
                <p className="text-small text-ct-blue-90-70% mb-1">Received : 900h</p>
            </div>
            <div className="grid grid-cols-12 items-center h-full ">
                <div className="col-span-3">
                    <div className="flex gap-1 items-center">
                        <h1 className="text-heading-1">33</h1>
                        <div>
                            <p className="text-heading-2">%</p>
                            <p className="text-xxs text-ct-blue-90-70%">Achieved</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <ProgressBar.Type1/>

                    <div className='flex justify-between'>
                        <div className='flex gap-5 mt-3'>
                            <p className="text-small text-ct-blue-90-70% font-semibold">Total Valid : 900h; </p>
                            <p className="text-small text-ct-blue-90-70% ">Last Update: 22 Aug 2022</p>
                        </div>
                        <div>
                            <p className="mt-3 text-small font-semibold text-ct-blue-60">Total Target : 10,000h</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                     <GaugeComponent.Type1/>
                </div>
            </div>
        </div>
    );
};

export default TotalData;