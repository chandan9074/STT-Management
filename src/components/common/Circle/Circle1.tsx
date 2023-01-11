import React from 'react';
import { createCollectSimilarPropertyDT } from '../../../types/dashboardTypes';

interface Props {
    bgColor: string | undefined;
    ringColor: string | undefined;
    textColor: string | undefined;
    shadowColor: string | undefined;
    value: number;
    maxValue: number;
    barHeight: number;
}

const Circle1 = ({ bgColor, ringColor, textColor, value, shadowColor, maxValue, barHeight }: Props) => {


    return (
        <div
        // style={{
        //     height: `${barHeight}px`,
        //     width: `${barHeight}px`
        // }}
        >
            <div
                // style={{
                //     height: `${value}%`,
                //     width: `${value}%`,
                // }}
                style={{
                    height: `${
                        value === maxValue ? 158 :
                         (barHeight * value) / 100 > 158 ? 158 :
                        (barHeight * value) / 100}px`,
                    width: `${
                        value === maxValue ? 158 :
                         (barHeight * value) / 100 > 158 ? 158 :
                            (barHeight * value) / 100}px`,
                }}
                className={` z-20 text-sm font-medium  ${bgColor} rounded-full flex justify-center items-center ring-2 ${ringColor} hover:ring-white hover:ring-0  ${shadowColor} hover:ring-offset-2 transition duration-4000 ease-out hover:ease-in duration-300`}
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