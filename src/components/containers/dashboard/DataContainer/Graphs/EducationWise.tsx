import React, { useEffect, useState } from 'react';
import { getValueFromHeight, getValueFromPercentage } from "../../../../../helpers/Utils";
import { createCollectData } from "../../../../../data/dashboard/createCollectData";
import { createCollectSimilarPropertyDT } from '../../../../../types/dashboardTypes';
import GraphTooltip from '../GraphTooltip';

const EducationWise = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
    const maxValue = 370;
    const percentData = [100, 50, 25, 10];
    // const percentData = [10, 25, 50,100];
    const [dimensionValue, setDimensionValue] = useState<number[]>([]);
    const [educationWiseData, setEducationWiseData] = useState<createCollectSimilarPropertyDT[] | undefined>(createCollectData?.data.createData?.educationWise);
    const [educationWiseDataHeights, setEducationWiseDataHeights] = useState<number[]>([]);

    useEffect(() => {
        const _dimensionValue = getValueFromPercentage(maxValue, percentData);

        const _data = educationWiseData?.map((value: createCollectSimilarPropertyDT) => {
            return value.contribution;
        })

        if (_data) {
            const _timeWiseDataHeights = getValueFromHeight(maxValue, _data);
            setEducationWiseDataHeights(_timeWiseDataHeights);
        }
        setDimensionValue(_dimensionValue);
    }, []);


    return (
        <div className='pl-5 pt-10 pr-5 pb-5 relative h-[400px]'>
            <div >
                {
                    percentData?.map((value, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: dimensionValue.length - 1 === index ? dimensionValue[index] : dimensionValue[index] - dimensionValue[index + 1] - 32,

                            }}

                            className='flex justify-center items-center gap-x-2'
                        >
                            <div>
                                {
                                    // <h1>{dimensionValue.length -1 === index ? dimensionValue[index] : (dimensionValue[index] - dimensionValue[index+1])}</h1>
                                    value !== 100 &&
                                    <h1 className='text-ct-blue-45 text-[14px]'>{value}%</h1>

                                }
                            </div>
                            {
                                value !== 100 &&
                                <div className='w-100% border-dashed border-[1px] border-border-gray w-full h-[1px]'></div>
                            }
                        </div>
                    ))
                }
            </div>
            <div className='absolute w-full bottom-10'>
                <div className='flex justify-between items-end px-20 '>
                    {
                        educationWiseData?.map((value: any, index) => (
                            <div key={index} className='flex flex-col justify-center items-center'>
                                <div className='rounded-[4px] text-white flex justify-center w-[50px] bg-opacity-[85%] bg-blue-gray-85 h-8 flex justify-center items-center'>
                                    <h1 className='text-[12px]'>{Math.round((100 * educationWiseDataHeights[index]) / maxValue)}%</h1>
                                </div>
                                <div className='relative group'>
                                    <div
                                        style={{
                                            height: `${educationWiseDataHeights[index]}px`,
                                            backgroundColor: `${index % 3 === 0
                                                ? "#DAD7FE"
                                                : index % 4 === 0
                                                    ? "#FFD3D3"
                                                    : index % 5 === 0
                                                        ? "#DAD7FE"
                                                        : index % 2 === 0
                                                            ? "#CCF8FE"
                                                            : "#FFD3D3"
                                                }`,
                                        }}
                                        className='w-[84px]' id="triangle"
                                    >
                                    </div>
                                    <div className={`z-50 animate-fadeIn absolute top-[-203px] hidden group-hover:block`} >
                                            <GraphTooltip
                                                data={value}
                                                validBgColor="bg-coral-90"
                                                titleColor={`${index % 3 === 0
                                                    ? "text-[#DAD7FE]"
                                                    : index % 4 === 0
                                                        ? "text-[#FFD3D3]"
                                                        : index % 5 === 0
                                                            ? "text-[#DAD7FE]"
                                                            : index % 2 === 0
                                                                ? "text-[#CCF8FE]"
                                                                : "text-[#FFD3D3]"
                                                    }`}
                                                align="left"
                                            />
                                        </div>
                                </div>

                                <div className={`flex justify-center absolute items-start ${value?.name === "Graduate & Postgraduate" ? "-bottom-11":"-bottom-6" } w-32`}>
                                    <h1 className='text-ct-blue-90 text-[13px] font-semibold text-center'>
                                        {/* primary */}
                                        {value?.name}
                                    </h1>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="px-10 absolute w-full bottom-0">
                    <div className='border-[1px] border-border-gray '></div>
                </div>

            </div>
        </div>
    );
};

export default EducationWise;