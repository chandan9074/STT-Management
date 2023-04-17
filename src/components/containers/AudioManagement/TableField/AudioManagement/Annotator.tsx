import React from 'react';
import RoleImage from '../../../../Image/RoleImage';
import { annotatedAnnotatorDT } from "../../../../../types/audioManagementTypes"

type Props = {
    data: annotatedAnnotatorDT 
}

const Annotator = ({data}: Props) => {
    return (
        <div>
            <div className='flex items-center gap-x-[7px] pl-[2px]'>
                <div className={`w-1.5 h-1.5 ${data.status === "Annotating" ? "bg-primary-ct-magenta-60" : "bg-secondary-blue-50"} rounded-full`}></div>
                <h1 className={`${data.status === "Annotating" ? "text-primary-ct-magenta-60" : "text-secondary-blue-50"} text-xs font-medium`}>{data.status}...</h1>
            </div>
            <div className='flex'>
                <RoleImage role='annotator' height='h-4' width='w-4' />
                <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.annotator.name},</h1>
                <p className='text-blue-gray-75 text-xxs font-normal pl-1'>{data.locality}</p>
            </div>
        </div>
    )
}

export default Annotator;