import React from 'react'
import { activityDT } from '../../../../../../types/userManagementTypes'
import { UserManagementContext } from '../../../../../../context/UserManagement'

const ProgressChart = ({ data }: { data: activityDT }) => {
    const userManagementContext = React.useContext(UserManagementContext)
    return (
        <div className='border-b-[1px] border-r-[1px] border-ct-blue-20 py-7 pl-6 pr-8'>
            <div className='flex items-center gap-x-7'>
                <h3 className='text-base font-semibold text-ct-blue-45 mb-0'>Audio Staus</h3>
                <h4 className='text-small font-[400] text-ct-blue-90-88%'>Total Received: <span>{data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].target}</span> hr, <span>{data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].audios}</span> audios</h4>
            </div>
            <div className='h-[60px] w-full mb-0.5 rounded-[10px] flex items-end mt-3'>
                <div className='h-3 rounded-[10px] w-full bg-blue-gray-20 border-[1px] border-white'>
                    
                </div>
            </div>
        </div>
    )
}

export default ProgressChart