import React from 'react'
import { activityDT } from '../../../../../../types/userManagementTypes'
import ProgressChart from './ProgressChart'
import { UserManagementContext } from '../../../../../../context/UserManagement'
import MapChart from './MapChart'
import BarChart from './BarChart'

const GraphPart = ({ data }: { data: activityDT }) => {
    const userManagementContext = React.useContext(UserManagementContext);
    return (
        <div className='bg-white grid grid-cols-12 pb-1'>
            <div className='col-span-8'>
                <ProgressChart data={data} />
                <BarChart data={data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].overTheTimeData} />
            </div>
            <div className='py-7 px-6 col-span-4 border-l-[1px] border-ct-blue-20'>
                <MapChart data={data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].localityData} />
            </div>
        </div>
    )
}

export default GraphPart