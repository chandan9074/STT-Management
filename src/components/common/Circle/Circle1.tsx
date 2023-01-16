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

    // console.log('barhe', barHeight);
    // console.log('value', value);
    // console.log('maxValue', maxValue);

    console.log('data', data);





    return (
        <div

        >
            <div
                className={`${height} ${width} z-20 text-sm font-medium  ${bgColor} rounded-full flex justify-center items-center ring-2 ${ringColor} hover:ring-white hover:ring-0  ${shadowColor} hover:ring-offset-2 transition duration-4000 ease-out hover:ease-in duration-300 group`}
            >
                <div className={`z-50 animate-fadeIn absolute top-[-208px] hidden group-hover:block`} >
                    <GraphTooltip
                        data={data && data}
                        validBgColor="bg-coral-90"
                        titleColor={tooltipTitleColor}
                        align="left"
                    />
                </div>
                {
                    indexNumber <= 2 &&

                    <h1 className={`${textColor} text-[13px] group-hover:hidden`}>

                        {value}%
                    </h1>

                }


                {
                    value > 7 &&
                    <h1 className={`${textColor} text-[13px] hidden group-hover:block`}>

                        {value}%
                    </h1>
                }


            </div>
        </div >
    );
};

export default Circle1;