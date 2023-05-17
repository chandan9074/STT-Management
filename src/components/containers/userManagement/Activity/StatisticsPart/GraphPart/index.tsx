import React from 'react'
import { activityDT } from '../../../../../../types/userManagementTypes'
import ProgressChart from './ProgressChart'
import MapChart from './MapChart'
import BarChart from './BarChart'

const GraphPart = ({ data }: { data: activityDT }) => {
    return (
        <div className='bg-white grid grid-cols-12 pb-1'>
            <div className='col-span-8'>
                <ProgressChart data={data} />
                <BarChart data={data.roleData.overTheTimeData} />
            </div>
            <div className='py-7 px-6 col-span-4 border-l-[1px] border-ct-blue-20'>
                <MapChart data={data.roleData.localityData} />
            </div>
        </div>
    )
}

export default GraphPart