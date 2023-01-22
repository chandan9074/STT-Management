import React from 'react';
import { createCollectSimilarPropertyDT } from '../../../types/dashboardTypes';
import GraphTooltip from '../../containers/dashboard/DataContainer/GraphTooltip';

interface Props {
    bgColor: string | undefined;
    ringColor: string | undefined;
    textColor: string | undefined;
    shadowColor: string | undefined;
    value: number;
    height: string;
    width: string;
    indexNumber: number;
    data: createCollectSimilarPropertyDT,
    tooltipTitleColor: string

}

const Circle1 = ({ bgColor, ringColor, textColor, value, shadowColor, height, width, indexNumber, data, tooltipTitleColor }: Props) => {

    return (
        <div

        >
            <div
                className={`${height} ${width} z-20 text-sm font-medium  ${bgColor} rounded-full flex justify-center items-center ring-2 ${ringColor} hover:ring-white hover:ring-0 ${indexNumber === 0 ? 'shadow-light-tomato3' : indexNumber === 3 ? 'shadow-light-yellow2' : ''}  ${shadowColor} hover:ring-offset-2 transition group animate-fadeIn duration-500`}
            >
                <div className={`z-[120] animate-fadeIn absolute top-[-208px] hidden group-hover:block`} >
                    <GraphTooltip
                        data={data && data}
                        validBgColor="bg-coral-90"
                        titleColor={tooltipTitleColor}
                        align="center"
                    />
                </div>
                <div className='flex justify-center items-center h-full w-full'>
                {
                    indexNumber <= 2 &&

                    <h1 className={`${textColor} text-[13px] ${ indexNumber > 2 && 'group-hover:hidden'} `}>

                        {value}%
                    </h1>

                }


                {
                    (value > 7 && indexNumber > 2) &&
                    <h1 className={`${textColor} text-[13px] hidden group-hover:block animate-fadeIn`}>

                        {value}%
                    </h1>
                }
                </div>


            </div>
        </div >
    );
};

export default Circle1;