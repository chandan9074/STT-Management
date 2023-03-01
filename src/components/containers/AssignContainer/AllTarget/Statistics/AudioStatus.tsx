import React from 'react'
import { labelData, tooltipData } from '../../../../../data/assign/AssignData'

import { assignStatisticsDT } from '../../../../../types/assignTypes'
import AudioStatusTooltip from './AudioStatusTooltip'

const AudioStatus = ({ data }: { data: assignStatisticsDT }) => {
    return (
        <div className='flex flex-col justify-between h-full'>
            <div className='mb-7'>
                <h1 className='text-ct-blue-60 text-base font-medium mb-1'>Audio Status</h1>
                <h2 className='text-ct-blue-90 text-xs mb-0'>Total Received: {data.received} hr, {data.audios} audios</h2>
            </div>
            <div className='relative'>
                <div className='h-[60px] w-full mb-0.5 flex items-end relative'>
                    <div className='h-3 rounded-[10px] w-full bg-blue-gray-20 border-[1px] border-white flex items-center relative z-50'>
                        {data.audioStatus.map((item, index) => (
                            <div key={index} className={`${item.name === "Valid" ? "bg-[#00B86E]" : "bg-[#A10008]"} h-full ${data.audioStatus.length - 1 === index ? "" : "border-r-[1px] border-white"} ${data.audioStatus.length - 1 === index ? "rounded-r-[15px]" : ""} ${index === 0 ? "rounded-l-[15px]" : ""} flex justify-center group cursor-pointer ${tooltipData.filter(tData => tData.name === item.name)[0].barBgHover} duration-200`} style={{
                                width: `${Math.round((item.hour * 100) / data.received)}%`,
                            }}>
                                <AudioStatusTooltip data={tooltipData.filter(tData => tData.name === item.name)[0]} hour={item.hour} />
                            </div>
                        ))}
                    </div>
                    <div className='absolute h-full w-full flex items-center rounded-b-[6px] overflow-hidden'>
                        {data.audioStatus.map((item, index) => (
                            <div key={index} className={`${item.name === "Valid" ? "bg-gradient-to-t from-light-green-17% to-light-green-0%" : "bg-gradient-to-t from-light-red-17% to-light-red-0%"} h-full ${data.audioStatus.length - 1 === index ? "" : "border-r-[1px] border-white"} `} style={{
                                width: `${Math.round((item.hour * 100) / data.received)}%`,
                            }}>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-between absolute w-full'>
                    <div className='flex gap-x-4 items-center mt-2'>
                        {data.audioStatus.map((item, index) => (
                            <div key={index} className='flex items-center'>
                                <div className={`${labelData.filter(tData => tData.name === item.name)[0].bulletBg} w-2 h-2 rounded-full mr-2`} />
                                <span className='text-ct-blue-90-70% text-xxs font-semibold'>{labelData.filter(tData => tData.name === item.name)[0].label}</span>
                            </div>
                        ))}
                    </div>
                    <h1 className='text-ct-blue-60 text-xs font-medium'>{data.received}hr</h1>
                </div>
            </div>
        </div>
    )
}

export default AudioStatus