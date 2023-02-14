import React, { useContext } from 'react'
import { assignStatisticsDT } from '../../../../../types/assignTypes'
import { overTheTimeDataDT } from '../../../../../types/userManagementTypes'
import { UserManagementContext } from '../../../../../context/UserManagement'
import BarTooltip from '../../../userManagement/Activity/StatisticsPart/GraphPart/BarTooltip'


const OverTheTime = ({ data }: { data: overTheTimeDataDT }) => {
    const userManagementContext = useContext(UserManagementContext);

    const barColor = [
        {
            name: 'uploaded',
            bgColor: "bg-ct-blue-medium group-hover:bg-white",
            borderColor: "bg-white-gray-55 group-hover:bg-ct-blue-medium"
        },
        {
            name: 'pending',
            bgColor: "bg-white",
            borderColor: "bg-blue-gray-A10 group-hover:bg-ct-blue-medium"
        },
        {
            name: 'close',
            bgColor: "bg-white",
            borderColor: "bg-secondary-yellow-50"
        },
        {
            name: 'crossed',
            bgColor: "bg-white",
            borderColor: "bg-secondary-red-50"
        },
    ]

    const getBarCircleColor = (name: string, border: boolean) => {
        const color = barColor.filter(item => item.name === name)[0];
        if (border) {
            return `${color.borderColor}`;
        }
        return `${color.bgColor}`;
    }


    return (
        <div>
            <div className='mb-1.5 flex items-center justify-between'>
                <h1 className='text-ct-blue-60 text-base font-medium mb-1'>Over the time</h1>
                <div>
                    <button></button>
                </div>
            </div>
            <div className='flex gap-x-3 w-full mb-8'>
                <div className='flex items-center'>
                    <div className='w-2 h-2 bg-secondary-blue-50 mr-1 rounded-full' />
                    <h4 className='mb-0 text-ct-blue-90-70% text-xxs'>Uploaded</h4>
                </div>
                <div className='flex items-center'>
                    <div className='w-5 border-t-[1px] border-blue-gray-A30 mr-1 rounded-full border-dashed' />
                    <h4 className='mb-0 text-ct-blue-90-70% text-xxs'>Pending</h4>
                </div>
                <div className='flex items-center'>
                    <div className='w-2 h-2 bg-secondary-yellow-50 mr-1 rounded-full' />
                    <h4 className='mb-0 text-ct-blue-90-70% text-xxs'>Close to deadline</h4>
                </div>
                <div className='flex items-center'>
                    <div className='w-2 h-2 bg-secondary-red-50 mr-1 rounded-full' />
                    <h4 className='mb-0 text-ct-blue-90-70% text-xxs'>Deadline Crossed</h4>
                </div>
            </div>


            <div className='h-[175px] w-full flex justify-start items-start'>
                {/* <div className='flex flex-col justify-between h-[150px] -mt-2.5'>
                    <span className='text-xxs text-ct-blue-45'>{data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].maxTarget}</span>
                    <span className='text-xxs text-ct-blue-45'>{Math.round((data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].maxTarget) / 2)}</span>
                    <span className='text-xxs text-ct-blue-45'>{Math.round(Math.round((data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].maxTarget) / 2) / 2)}</span>
                </div> */}
                <div className='h-full w-full ml-1.5 relative'>
                    <div className='h-[175px] w-full flex flex-col justify-between'>
                        <div className='w-full border-b-[1px] border-blue-gray-30 border-dashed' />
                        <div className='w-full border-b-[1px] border-blue-gray-30 border-dashed' />
                        <div className='w-full border-b-[1px] border-blue-gray-30 border-dashed' />
                        <div className='w-full border-b-[1px] border-blue-gray-30 ' />
                    </div>
                    <div className='absolute bottom-0 flex justify-between w-full px-2'>
                        {data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].dayData.map((item, index) => (
                            <div className='w-8 relative flex flex-col items-center justify-end group cursor-pointer'>
                                {item.target !== 0 ? (<>
                                    <div className={`flex ${data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].dayData.length - 3 < index ? "justify-end" : "justify-center"}`}>
                                        <div className=" absolute z-[110] hidden group-hover:block animate-fadeIn" style={{ bottom: `${Math.round((130 * item.target) / data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].maxTarget) + 55}px`, right: data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].dayData.length - 3 < index ? "-14px" : "" }}>
                                            <BarTooltip data={item} align={data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].dayData.length - 3 < index ? "right" : "center"} />
                                        </div>
                                    </div>
                                    <div className={`w-5 h-5 flex items-center justify-center rounded-full z-50 group-hover:z-[120] duration-200 ${getBarCircleColor(item.status, true)} absolute`} style={{ bottom: `${Math.round((130 * item.target) / data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].maxTarget) + 35}px` }} >
                                        <div className={`w-2 h-2 rounded-full ${getBarCircleColor(item.status, false)}`} />
                                    </div>
                                    <div className='w-0.5 border-r-[1px] border-blue-gray-A30 absolute bottom-0 border-dashed' style={{ height: `${Math.round((130 * item.target) / data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].maxTarget) + 35}px` }} />
                                    <div className='w-full bg-gradient-to-b from-secondary-blue-50 to-blue-A10 z-40' style={{ height: `${item.uploaded === 0 ? 0 : Math.round((130 * item.uploaded) / data.weekData.filter(item => item.week === userManagementContext.currentWeek)[0].maxTarget) + 45}px` }} >
                                        <div className={`w-full h-full opacity-0 group-hover:opacity-100 bg-winter-wizard duration-200`} />
                                    </div></>) : (<div className='h-1 border-r-[1px] border-blue-gray-A30' />)}
                                <h6 className='text-xxs text-ct-blue-45 absolute -bottom-7'>{item.day}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverTheTime