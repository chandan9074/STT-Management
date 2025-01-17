import React, { Dispatch, SetStateAction } from 'react';
import CloseButton from '../../../common/SideDrawer/CloseButton';
import SpeechStatus from '../../../common/SpeechStatus';
import { historyRemarkDT } from '../../../../types/audioManagementTypes';
import RoleImage from '../../../Image/RoleImage';

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    data: historyRemarkDT[];
}

const Remark2 = ({ open, setOpen, data }: Props) => {
    return open ? (
        <div >
            <div
                className="fixed top-0 left-0 opacity-25 bg-black w-full h-screen z-[999]"
                onClick={() => setOpen(false)}
            />
            <div className="relative z-[9999] bg-white w-[560px] rounded-[12px] overflow-hidden ">
                <div className='flex justify-between pt-[18px] pb-2 pr-[19px] pl-10 bg-ct-blue-05 '>
                    <h3 className='text-ct-blue-90-68% text-base font-medium'>Remark</h3>
                    <CloseButton setOpen={setOpen} />
                </div>

                {/* Body */}
                <div className='pt-[21px] pb-10 px-10 flex flex-col gap-y-[34px]'>
                    {
                        data.map((item: historyRemarkDT, i: number) => (
                            <div key={i}>
                                <div className='flex items-center gap-x-4'>
                                    {
                                        item.status &&
                                        <SpeechStatus data={item.status} />
                                    }
                                    <p className='text-blue-gray-75 text-small'>{item.deadline}</p>
                                    <div className='flex items-center'>
                                        <RoleImage role={item.roleInfo.role} height='h-5' width='w-5' />
                                        <h2 className='text-blue-gray-80 font-medium text-small mb-[2px] ml-[6px]'>{item.roleInfo.name}, </h2>
                                        <p className='text-blue-gray-75 text-small'>{item.roleInfo.role}</p>
                                    </div>
                                </div>

                                <div className='mt-2 bg-[#F7FAFD] px-3 py-2'>
                                    <h3 className='text-blue-gray-80 text-[15px]'>{item.des}</h3>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    ) : null;
};

export default Remark2;