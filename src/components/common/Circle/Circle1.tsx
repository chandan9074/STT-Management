import React from 'react';
import { createCollectSimilarPropertyDT } from '../../../types/dashboardTypes';

interface Props {
    bgColor: string;
    ringColor: string;
    textColor: string;
    shadowColor: string;
    value: number;
    maxValue: number;
}

const Circle1 = ({ bgColor, ringColor, textColor, value, shadowColor, maxValue }: Props ) => {
    const barHeight = 158;
    return (
        // <div className='h-[452px] w-[452px]'>
        <div>
            <div
                // style={{
                //     height: `${value}%`,
                //     width: `${value}%`,
                // }}
                style={{
                    height: `${(barHeight*value)/maxValue}px`,
                    width: `${(barHeight*value)/maxValue}px`,
                }}
                className={` z-20 text-sm font-medium  py-1 ${bgColor} rounded-full flex justify-center items-center ring-2 ${ringColor} hover:ring-white hover:ring-0  ${shadowColor} hover:ring-offset-2 transition duration-4000 ease-out hover:ease-in duration-300`}
            >
                {

                    <h1 className={`${textColor} text-[13px]`}>
                        {value}%
                    </h1>

                }
            </div>
        </div>
    );
};

export default Circle1;