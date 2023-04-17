import { audioCheckerDT } from '../../../../../types/audioManagementTypes'
import RoleImage from '../../../../Image/RoleImage'

type Props = {
    data: audioCheckerDT
}

const AudioChecker = ({ data }: Props) => {
    return (
        <>
            <div >
                <div className='flex items-center gap-x-[7px] pl-[2px]'>
                    <div className='w-1.5 h-1.5 bg-primary-ct-magenta-60 rounded-full'></div>
                    <h1 className='text-primary-ct-magenta-60 text-xs font-medium'>{data.status}...</h1>
                </div>
                <div className='flex'>
                    <RoleImage role='audio checker' height='h-4' width='w-4' />
                    <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.name},</h1>
                    <p className='text-blue-gray-75 text-xxs font-normal pl-1'>{data.locality}</p>
                </div>
            </div>
        </>
    )
}

export default AudioChecker