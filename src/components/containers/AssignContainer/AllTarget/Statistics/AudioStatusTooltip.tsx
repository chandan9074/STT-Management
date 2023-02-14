import React from 'react'
import Icons from '../../../../../assets/Icons'

type Props = {
    data: {
        name: string;
        title: string;
        titleColor: string;
        barBgHover: string;
    },
    hour: number;
}

const AudioStatusTooltip = ({ data, hour }: Props) => {
    return (
        <div className='pt-3 px-4 rounded-[7px] pb-2 bg-tooltip-bg absolute bottom-7 z-[70] animate-fadeIn hidden group-hover:block'>
            <div className='flex items-center gap-x-3'>
                <h1 className={`text-small font-semibold ${data.titleColor} mb-0 whitespace-nowrap`}>{data.title}</h1>
                <h1 className='text-heading-5 font-medium text-[#FFE5DA] mb-0'>{hour}h</h1>
            </div>
            <img
                src={Icons.blackDropArrow}
                alt=""
                className={`w-10 h-6 absolute left-1/2 -bottom-3.5 transform -translate-x-1/2`}
            />
        </div>
    )
}

export default AudioStatusTooltip;