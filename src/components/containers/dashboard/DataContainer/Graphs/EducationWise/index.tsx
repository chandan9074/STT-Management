import { useEffect, useState } from 'react';
import { getValueFromHeight, getValueFromPercentage } from "../../../../../../helpers/Utils";
import { createCollectData } from "../../../../../../data/dashboard/createCollectData";
import { createCollectSimilarPropertyDT } from '../../../../../../types/dashboardTypes';
import GraphTooltip from '../../GraphTooltip';

const EducationWise = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
    const maxValue = 324;
    const percentData = [100, 50, 25, 10];
    // const percentData = [10, 25, 50,100];
    const [dimensionValue, setDimensionValue] = useState<number[]>([]);
    // const [educationWiseData, setEducationWiseData] = useState<createCollectSimilarPropertyDT[] | undefined>(createCollectData?.data.createData?.educationWise);
    const educationWiseData: createCollectSimilarPropertyDT[] | undefined = createCollectData?.data.createData?.educationWise;

    const [educationWiseDataHeights, setEducationWiseDataHeights] = useState<number[]>([]);

    console.log('education', educationWiseDataHeights);


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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className=' pt-10  pb-5 relative h-[400px]'>
            <div>
                {
                    percentData?.map((value, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: dimensionValue.length - 1 === index ? dimensionValue[index] : dimensionValue[index] - dimensionValue[index + 1] - 20,

                            }}

                            className='flex justify-center items-center gap-x-2'
                        >
                            <div>
                                {
                                    value !== 100 &&
                                    <h1 className='text-ct-blue-45 text-small'>
                                        {value}%
                                    </h1>

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
            <div className='absolute w-full bottom-[45px] '>
                <div className='flex justify-between items-end pl-16 pr-[25px] '>
                    {
                        educationWiseData?.map((value: any, index) => (
                            <div key={index} className='flex flex-col justify-center items-center '>
                                <div className='relative group h-[324px] w-[84px] flex items-end justify-center'>
                                    <div
                                        style={{
                                            bottom: `${value.contribution}%`
                                        }}
                                        className='absolute z-50 rounded-[4px] text-white bg-opacity-[85%] bg-blue-gray-85  items-center py-1 px-[6px] mb-[3px]'>
                                        <h1 className='text-xxs'>
                                            {value.contribution}%
                                        </h1>
                                    </div>
                                    <div
                                        style={{
                                            height: `${value.contribution}%`
                                        }}
                                        className={`w-[84px] ${index % 3 === 0
                                            ? "bg-purple-A10 hover:bg-cobalite-90"
                                            : index % 4 === 0
                                                ? "bg-red-15 hover:bg-coral-90"
                                                : index % 5 === 0
                                                    ? "bg-purple-A10 hover:bg-cobalite-90"
                                                    : index % 2 === 0
                                                        ? "bg-green-A10 hover:bg-[#94D676]"
                                                        : "bg-red-15 hover:bg-coral-90"
                                            } duration-300`} id="triangle"
                                    >
                                    </div>
                                    <div
                                        style={{
                                            bottom: `${value.contribution + 6}%`,
                                            left: '0px'
                                        }}
                                        className={`z-50 animate-fadeIn absolute hidden group-hover:block`} >
                                        <GraphTooltip
                                            data={value} 
                                            validBgColor={`${index % 3 === 0
                                                ? "bg-[#8cf0fe]"
                                                : index % 4 === 0
                                                    ? "bg-[#a39cff]"
                                                    : index % 5 === 0
                                                        ? "bg-[#a39cff]"
                                                        : index % 2 === 0
                                                            ? "bg-[#94D676]"
                                                            : "bg-[#FF8C8C]"
                                                }`}
                                            titleColor={`${index % 3 === 0
                                                ? "text-purple-A10"
                                                : index % 4 === 0
                                                    ? "text-red-15"
                                                    : index % 5 === 0
                                                        ? "text-purple-A10"
                                                        : index % 2 === 0
                                                            ? "text-green-A10"
                                                            : "text-red-15"
                                                }`}
                                            align="left"
                                        />
                                    </div>
                                </div>

                                <div className={`flex justify-center absolute items-start ${value?.name === "Graduate & Postgraduate" ? "-bottom-11" : "-bottom-6"} w-32`}>
                                    <h1 className='text-ct-blue-90 text-xs font-semibold text-center'>
                                        {value?.name}
                                    </h1>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="px-[16px] ml-[18px] absolute w-full -bottom-[0px]">
                    <div className='border-[1px] border-border-gray '></div>
                </div>

            </div>
        </div>
    );
};

export default EducationWise;