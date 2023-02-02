import React from 'react'
import { activityDT } from '../../../../../../types/userManagementTypes'
import { UserManagementContext } from '../../../../../../context/UserManagement'
import ProgressTooltip from './ProgressTooltip';

const ProgressChart = ({ data }: { data: activityDT }) => {
    const userManagementContext = React.useContext(UserManagementContext);

    const tooltipData = [
        {
            name: "Valid",
            title: "Valid by Validator",
            titleColor: "text-[#00B86E]",
            barBgHover: "hover:bg-[#00944D]",
            bulletBg: "bg-[#00B86E]",
        },
        {
            name: "Validator",
            title: "Rejected by Validator",
            titleColor: "text-[#FF8470]",
            barBgHover: "hover:bg-[#CB3827]",
            bulletBg: "bg-[#A10008]",
        },
        {
            name: "Annotator",
            title: "Rejected by Annotator",
            titleColor: "text-[#FF8987]",
            barBgHover: "hover:bg-[#D11C29]",
            bulletBg: "bg-secondary-red-50",
        },
        {
            name: "Checker",
            title: "Rejected by Checker",
            titleColor: "text-[#F5AC42]",
            barBgHover: "hover:bg-[#C78415]",
            bulletBg: "bg-[#F5AC42]",
        }
    ]

    const labelData = [
        {
            name: "Valid",
            label: "Valid",
            bulletBg: "bg-[#00B86E]",
        },
        {
            name: "Validator",
            label: "Rejected by Validator",
            bulletBg: "bg-[#A10008]",
        },
        {
            name: "Annotator",
            label: "Rejected by Annotator",
            bulletBg: "bg-secondary-red-50",
        },
        {
            name: "Checker",
            label: "Rejected by Checker",
            bulletBg: "bg-[#F5AC42]",
        }
    ]

    return (
        <div className='border-b-[1px] border-r-[1px] border-ct-blue-20 pt-7 pb-10 pl-6 pr-8'>
            <div className='flex items-center gap-x-7'>
                <h3 className='text-base font-semibold text-ct-blue-45 mb-0'>Audio Staus</h3>
                <h4 className='text-small font-[400] text-ct-blue-90-88%'>Total Received: <span>{data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].target}</span> hr, <span>{data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].audios}</span> audios</h4>
            </div>
            <div className='h-[60px] w-full mb-0.5 flex items-end mt-3 relative'>
                <div className='h-3 rounded-[10px] w-full bg-blue-gray-20 border-[1px] border-white flex items-center relative z-50'>
                    {data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].audioStatus.map((item, index) => (
                        <div className={`${item.name === "Valid" ? "bg-[#00B86E]" : item.name === "Validator" ? "bg-[#A10008]" : item.name === "Annotator" ? "bg-secondary-red-50" : item.name === "Checker" ? "bg-secondary-yellow-50" : ""} h-full ${data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].audioStatus.length - 1 === index ? "" : "border-r-[1px] border-white"} ${data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].audioStatus.length - 1 === index ? "rounded-r-[15px]" : ""} ${index === 0 ? "rounded-l-[15px]" : ""} flex justify-center group cursor-pointer ${tooltipData.filter(tData => tData.name === item.name)[0].barBgHover} duration-200`} style={{
                            width: `${Math.round((item.hour * 100) / data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].received)}%`,
                        }}>
                            <ProgressTooltip data={tooltipData.filter(tData => tData.name === item.name)[0]} hour={item.hour} />
                        </div>
                    ))}
                </div>
                <div className='absolute h-full w-full flex items-center rounded-b-[6px] overflow-hidden'>
                    {data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].audioStatus.map((item, index) => (
                        <div className={`${item.name === "Valid" ? "bg-gradient-to-t from-light-green-17% to-light-green-0%" : item.name === "Validator" ? "bg-gradient-to-t from-light-red-17% to-light-red-0%" : item.name === "Annotator" ? "bg-gradient-to-t from-light-pink-17% to-light-pink-0%" : item.name === "Checker" ? "bg-gradient-to-t from-light-yellow-17% to-light-yellow-0%" : ""} h-full ${data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].audioStatus.length - 1 === index ? "" : "border-r-[1px] border-white"} `} style={{
                            width: `${Math.round((item.hour * 100) / data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].received)}%`,
                        }}>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-x-6 items-center mt-[14px]'>
                    {data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].audioStatus.map((item, index) => (
                        <div className='flex items-center'>
                            <div className={`${labelData.filter(tData => tData.name === item.name)[0].bulletBg} w-2 h-2 rounded-full mr-2`} />
                            <span className='text-ct-blue-90-70% text-xxs font-semibold'>{labelData.filter(tData => tData.name === item.name)[0].label}</span>
                        </div>
                    ))}
                </div>
                <h1 className='text-ct-blue-60 text-sm font-medium'>{data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].received}hr</h1>
            </div>
        </div >
    )
}

export default ProgressChart