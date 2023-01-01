import React, {useEffect, useState} from 'react';
import {getValueFromHeight, getValueFromPercentage} from "../../../../../helpers/Utils";
import {createCollectData} from "../../../../../data/dashboard/createCollectData";

const EducationWise = () => {
    const maxValue = 586;
    const percentData = [100, 50, 25, 10];
    // const percentData = [10, 25, 50,100];
    const [dimensionValue, setDimensionValue] = useState<number[]>([]);
    const [educationWiseData, setEducationWiseData] = useState(createCollectData?.data[0]?.educationWise);
    const [educationWiseDataHeights, setEducationWiseDataHeights] = useState<number[]>([]);

    useEffect(() => {
        const _dimensionValue = getValueFromPercentage(maxValue, percentData);

        const _data = educationWiseData?.map(value => {
            return value.contribution;
        })

        if (_data) {
            const _timeWiseDataHeights = getValueFromHeight(maxValue, _data);
            setEducationWiseDataHeights(_timeWiseDataHeights);
        }
        setDimensionValue(_dimensionValue);
    }, []);

    console.log('*************', educationWiseDataHeights)

    return (
        <div className='pl-5 pt-10 pr-5 pb-10 relative mb-10'>
            <div >
                {
                    percentData?.map((value, index) => (
                        <div
                            key={index}
                            // style={{marginBottom: dimensionValue[index]}}
                            style={{marginBottom: dimensionValue.length -1 === index ? dimensionValue[index] : dimensionValue[index] - dimensionValue[index+1]-32}}

                            // style={{marginBottom: `${index === 0 ? dimensionValue[index] : dimensionValue[index] - dimensionValue[index-1]}px`}}
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
            <div className='absolute w-full bottom-3'>
                <div className='flex justify-between items-end px-20'>
                    {
                        educationWiseData?.map((value: any, index) => (
                            <div key={index} className='flex flex-col justify-center items-center'>
                                <div className='rounded-[4px] text-white flex justify-center w-[50px] bg-blue-gray-80 h-8 flex justify-center items-center'>
                                    <h1 className='text-[12px]'>{Math.round((100 * educationWiseDataHeights[index]) / maxValue)}%</h1>
                                </div>
                                <div
                                    style={{height: `${educationWiseDataHeights[index]}px`}}
                                    className='w-[84px] bg-[#DAD7FE] ' id="triangle"
                                >
                                </div>
                                <div className='flex justify-center '>
                                    <h1 className='text-ct-blue-90 text-[13px]'>{value?.name}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="px-10 absolute w-full bottom-5">
                    <div className='border-[1px] border-border-gray '></div>
                </div>

            </div>
        </div>
    );
};

export default EducationWise;