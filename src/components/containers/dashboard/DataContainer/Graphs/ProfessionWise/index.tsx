import React, { useState } from 'react';
import GraphTooltip from "../../GraphTooltip";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";

interface Props {
    data: createCollectSimilarPropertyDT[]
}

const ProfessionWise = ({ data }: Props) => {
    const colorProperty: any = {
        "1": {
            color: "bg-yellow-A10",
            activeColor: "hover:bg-quack-90",
            textColor: "text-quack-90",
            tooltipBg: "bg-quack-90"

        },
        "2": {

            color: "bg-red-15",
            activeColor: "hover:bg-coral-90",
            textColor: "text-coral-90",
            tooltipBg: "bg-coral-90"
        },
        "3": {

            color: "bg-blue-A10",
            activeColor: "hover:bg-water-90",
            textColor: "text-water-90",
            tooltipBg: "bg-water-90"
        },
        "4": {

            color: "bg-green-A10",
            activeColor: "hover:bg-feijao",
            textColor: "text-feijao",
            tooltipBg: "bg-feijao"
        },

    }
    const [activeValue, setActiveValue] = useState<boolean>(false)
    const [id, setId] = useState<string>("")

    return (

        <div className='h-full flex justify-center items-center'>
            <div className="h-[350px] w-full flex justify-center">

                <div className='relative flex flex-col items-center ml-12 '>
                    {
                        data.map((value, index: number) => <div
                        key={index}
                            style={{ height: `${value.contribution}%` }}
                            className='flex w-[65px] items-center gap-1 duration-500'>

                            <div
                                onMouseOver={() => {
                                    setActiveValue(true)
                                    setId(value.id)
                                }}
                                onMouseOut={() => setActiveValue(false)}
                                className={`${colorProperty[value.id].color} w-full h-full flex justify-center items-center ${colorProperty[value.id].activeColor} relative`} >
                                <p className='text-xs text-masala'>{activeValue && id === value.id ? `${value.contribution}%` : value.contribution >= 15 && `${value.contribution}%`}</p>

                                {
                                    (activeValue && id === value.id) && <div className='absolute -top-[210px] -left-[8px] z-[99999] animate-fadeIn'>
                                        <GraphTooltip data={value} validBgColor={colorProperty[value.id].tooltipBg} titleColor={colorProperty[value.id].textColor} align="left" />
                                    </div>
                                }
                            </div>

                        </div>)

                    }
                    <div className='border-t-2 border-[#D1D3D6] absolute w-[158px] bottom-0' />
                </div>

                <div>
                    {
                        data.map((value, index: number) => <div
                            key={index}
                            style={{ height: `${value.contribution}%` }}
                            className='flex items-center gap-1 '
                        >
                            <div className='w-[316px]'>
                                <hr className='border-t-2 border-dashed border-[#B8BFCC]' />
                            </div>
                            <div className='flex h-full items-center justify-between w-[145px]'>
                                <div className='flex items-center gap-3'>
                                    <div className={`w-3 h-3 rounded-full ${colorProperty[value.id].color}`} />
                                    <p className='text-xs text-blue-gray-75'>{value.name}</p>
                                </div>

                                <div>
                                    <p className='text-xs text-ct-blue-40'>{value.totalValid}h</p>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfessionWise;