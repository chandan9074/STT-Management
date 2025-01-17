import React, { useState } from 'react';
import RoleImage from '../../../../Image/RoleImage';
import Buttons from '../../../../Buttons';
import ReasonOfApprove from './ReasonOfApprove';
import { historyRemarkDT } from '../../../../../types/audioManagementTypes';

type props = {
    data: historyRemarkDT[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleClaimSubmit: (status: string, remark: string) => void;
}

const ClaimApplicationModal = ({ data, setOpen, handleClaimSubmit }: props) => {
    const [activeTitle, setActiveTitle] = useState<string>('');

    const handleSubmit = (remark: string) => {
        handleClaimSubmit(activeTitle, remark);

        setOpen(false);
        setActiveTitle('');
    }

    const handleClose = () => {
        setActiveTitle('');
        setOpen(false);
    }

    return (
        <div>
            <div className='h-[64px] bg-ct-blue-60 bg-opacity-[12%] flex justify-center items-center'>
                <h1 className='text-ct-blue-60 font-semibold text-heading-6'>Claim Application</h1>
            </div>

            <div className='px-10 pt-7 pb-9'>
                <h6 className='text-small text-ct-blue-95 font-medium pb-[13px]'>Reason</h6>
                <div className='flex items-center'>
                    <p className='text-blue-gray-75 text-small mr-4'>{data[0].deadline}</p>
                    <RoleImage height='h-5' width='w-5' role='Annotator' />
                    <span className='ml-[6px] text-blue-gray-80 font-medium text-small'>{data[0].roleInfo.name}, <span className='text-blue-gray-75 text-small font-normal'>{data[0].roleInfo.role}</span></span>
                </div>

                <div className='bg-ct-blue-05 px-3 py-2 mt-[10px]'>
                    <p className='text-[15px] text-blue-gray-80'>{data[0].des}</p>
                </div>

                <div className='mt-7 gap-x-[15px] flex items-center'>
                    <Buttons.ChoiceButton
                        title='Approve'
                        status='success'
                        activeTitle={activeTitle}
                        onClick={() => setActiveTitle('Approve')}
                    />
                    <Buttons.ChoiceButton
                        title='Decline'
                        status='danger'
                        activeTitle={activeTitle}
                        onClick={() => setActiveTitle('Decline')}
                    />
                </div>
            </div>

            {
                activeTitle !== '' &&
                <div className='bg-blue-gray-10 pt-5 pb-[29px] px-10 animate-fadeIn rounded-b-lg'>
                    <h4 className='text-ct-blue-90 font-medium text-[16px]'>Reason of {activeTitle}</h4>
                    <ReasonOfApprove handleClose={handleClose} handleSubmit={handleSubmit} />
                </div>
            }
        </div>
    );
};

export default ClaimApplicationModal;