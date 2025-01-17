import React from 'react'
import Icons from '../../../../../../assets/Icons';

type Props = {
    data: {
        name: string;
        title: string;
        titleColor: string;
        barBgHover: string;
        hourColor: string;
    },
    hour: number;
}

const ProgressTooltip = ({ data, hour }: Props) => {
    return (
        <div className='pt-3 px-4 rounded-[12px] pb-2 bg-tooltip-bg absolute bottom-7 z-[70] animate-fadeIn hidden group-hover:block'>
            <h1 className={`text-small font-semibold ${data.titleColor} mb-1 whitespace-nowrap`}>{data.title}</h1>
            <h1 className={`text-heading-5 font-medium ${data.hourColor} mb-0`}>{hour}h</h1>
            <img
                src={Icons.blackDropArrow}
                alt=""
                className={`w-10 h-6 absolute left-1/2 -bottom-3.5 transform -translate-x-1/2`}
            />
        </div>
    )
}

export default ProgressTooltip