import React from 'react';
import ProgressBar from "../../../common/ProgressBar";
import GaugeComponent from "../../../common/Gauge";

const TotalData = () => {
    return (
        <div className="bg-amber-100 h-52">
            <div className="flex gap-1 ">
                <h1>Total Data</h1>
                <p>Received : 900h</p>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <div className="flex gap-1">
                        <h1>33</h1>
                        <div>
                            <p>%</p>
                            <p>Achieved</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <ProgressBar.Type1/>

                    <div className='flex justify-between'>
                        <div className='flex gap-1'>
                            <p>Total Valid : 900h; </p>
                            <p>Last Update: 22 Aug 2022</p>
                        </div>
                        <div>
                            <p>Total Target : 10,000h</p>
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