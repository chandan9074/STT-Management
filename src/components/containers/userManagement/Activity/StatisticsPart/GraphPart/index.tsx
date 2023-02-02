import React from 'react'
import { activityDT } from '../../../../../../types/userManagementTypes'
import ProgressChart from './ProgressChart'
import { UserManagementContext } from '../../../../../../context/UserManagement'
import MapChart from './MapChart'

const GraphPart = ({ data }: { data: activityDT }) => {
    const userManagementContext = React.useContext(UserManagementContext);
    return (
        <div className='bg-white grid grid-cols-12'>
            <div className='col-span-8'>
                <ProgressChart data={data} />
            </div>
            <div className='py-7 px-6 col-span-4'>
                <MapChart data={data.roleData.filter(item => item.name === userManagementContext.activeRole)[0].localityData} />
            </div>
        </div>
    )
}

export default GraphPart