import Icons from '../../../../../assets/Icons';
import { otherInfoDT } from '../../../../../types/assignTypes';
import RoleImage from '../../../../Image/RoleImage';

type Props = {
    data: otherInfoDT
}

const SpeechHeader = ({data}: Props) => {
    return (
        <div className='bg-blue-gray-05 pr-9 pt-7 pl-6 pb-4 rounded-t-[8px]'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-small text-ct-blue-90 font-medium'>Assigned to</h1>

                    <div className='flex items-center mt-4 gap-x-5'>
                        <div className='flex items-center gap-x-3'>
                            <RoleImage role='Manager' height='h-[16px]' width='w-[16px]' />
                            <h2 className='ct-blue-95 text-[16px] font-medium'>{data?.roleInfo?.name}</h2>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <img className='h-4 w-4' src={Icons.Military} alt="" />
                            <h1 className='text-small text-ct-blue-90-70%'>{data?.roleInfo?.role}</h1>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <img className='h-4 w-4' src={Icons.call} alt="" />
                            <h1 className='text-small text-ct-blue-90-70%'>{data?.roleInfo?.contact}</h1>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <img className='h-4 w-4' src={Icons.mail} alt="" />
                            <h1 className='text-small text-ct-blue-90-70%'>{data?.roleInfo?.email}</h1>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <img className='h-4 w-4' src={Icons.Home} alt="" />
                            <h1 className='text-small text-ct-blue-90'>{data?.roleInfo?.address}</h1>
                        </div>

                    </div>
                </div>

                <div className='border-[1px] border-blue-gray-30 w-[175px] h-[52px] flex rounded-[4px] '>
                    <div className='border-r-[1px] border-blue-gray-30 h-full w-[49px] flex justify-center items-center' >
                        <img className='w-[17px] h-[19px]' src={Icons.calenderIcon} alt="" />
                    </div>
                    <div className='py-[7px] px-[7px]'>
                        <h1 className='text-ct-blue-90-70% text-xxs font-medium'>Deadline</h1>
                        <h1 className='text-ct-blue-90-70% text-xxs font-medium'>{data?.deadLine}</h1>
                    </div>
                </div>
            </div>

            <div className='bg-white border-[1px] border-blue-gray-10 h-16 flex justify-center items-center mt-9 '>
                <h4 className='blue-gray-60 text-small font-medium mr-3'>Target Progress</h4>

                <div className='w-[935px] bg-blue-gray-20 h-[8px] rounded-[21px] mr-4'>
                    <div
                        style={{
                            width: '20%'
                        }}
                        className='bg-gradient-to-r from-secondary-green-50 to-secondary-blue-50 h-full rounded-l-[21px]' />
                </div>


                <img src={Icons.MusicBlue} className='h-4 w-4 mr-[10px]' alt="" />
                <h4 className='text-xs text-secondary-blue-50 font-medium'>
                    320/1000
                </h4>

            </div>

        </div>
    );
};

export default SpeechHeader;