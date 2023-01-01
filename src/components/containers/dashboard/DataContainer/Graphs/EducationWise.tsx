import React, {useEffect, useState} from 'react';
import {getValueFromPercentage} from "../../../../../helpers/Utils";

const EducationWise = () => {
    const maxValue = 150;
    const percentData = [100, 50, 25, 10]
    const [dimensionValue, setDimensionValue] = useState<number[]>([]);

    useEffect(() => {
        const _dimensionValue = getValueFromPercentage(maxValue, percentData);
        console.log('------------', _dimensionValue)
        setDimensionValue(_dimensionValue);
    }, []);
    return (
        <div className='pl-5 pt-5 pr-5 pb-10 relative'>
            <div >
                {
                    percentData?.map((value, index) => (
                        <div
                            style={{marginBottom: `${dimensionValue[index]}px`}}
                            className='flex justify-center items-center gap-x-2'
                        >
                            <div>
                                {
                                    value !== 100 &&
                                    <h1>{value}%</h1>
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
                <div className='flex justify-between px-20'>
                    {
                        dimensionValue?.map(value => (
                            <div >
                                <div className='w-[84px] bg-[#DAD7FE]' id="triangle"></div>
                                <div className='flex justify-center'>
                                    <h1>primary</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="px-10 absolute w-full bottom-6">
                    <div className='border-[1px] border-border-gray '></div>
                </div>

            </div>
        </div>
    );
};

export default EducationWise;