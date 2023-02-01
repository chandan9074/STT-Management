import React from 'react'
import { activityDT } from '../../../../../../types/userManagementTypes'
import ProgressChart from './ProgressChart'

const GraphPart = ({ data }: { data: activityDT }) => {
    return (
        <div className='bg-white grid grid-cols-12'>
            <div className='col-span-8'>
                <ProgressChart data={data} />
            </div>
            <div className='py-7 px-6 col-span-4'>
            </div>
        </div>
    )
}

export default GraphPart