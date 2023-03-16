import { Dispatch, SetStateAction } from 'react';
import RoleImage from '../Image/RoleImage';
import CloseButton from './SideDrawer/CloseButton';


type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
    roleName: string;
    roleType: string;
    dateTime: string;
    desc: string;
}

const Remark = ({ open, setOpen, roleName, roleType, dateTime, desc }: Props) => {
    return (
        <>
            {
                open &&
                <div className='fixed bottom-5 right-10 z-[999] animate-fadeIn2 '>
                    <div
                        className="fixed top-0 left-0 opacity-25 bg-black w-full h-screen z-[999]"
                        onClick={() => setOpen(false)}
                    />
                    <div className="relative z-[9999] bg-white w-[560px] rounded-[12px] overflow-hidden">
                        <div className='flex justify-between pt-[18px] pb-2 pr-4 pl-6 bg-ct-blue-05 '>
                            <h3 className='text-ct-blue-90-68% text-base font-medium'>Remark</h3>
                            <CloseButton setOpen={setOpen} />
                        </div>

                        {/* Details */}
                        <div className='pt-5 pb-6 pl-6  pr-4'>
                            <div className='flex gap-x-4 items-center'>
                                <h5 className='text-xxs text-blue-gray-75 font-medium'>{dateTime}</h5>
                                <div className='flex gap-x-[6px] items-center'>
                                    <RoleImage width='w-4' height='h-4' role={roleType} />
                                    <h1 className='text-blue-gray-80 text-xxs font-medium'>{roleName}, <span className='text-blue-gray-75 text-xxs font-medium'>{roleType}</span></h1>
                                </div>
                            </div>

                            <div className='mt-2 bg-[#F7FAFD] px-3 py-2'>
                                <h3 className='text-blue-gray-80 text-[15px]'>{desc}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Remark;