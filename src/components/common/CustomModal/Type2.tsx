import React, { useState } from 'react';
import { CustomModal } from '.';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';
import { SearchBox } from '../../SearchBox';
import Table from '../../Table';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Type2 = ({ open, setOpen }: Props) => {
    const [confirm, setConfirm] = useState<boolean>(false)

    return (
        <div>
            <CustomModal.Primary
                open={open}
                setOpen={setOpen}
                width="640px"
            >
                <div>
                    <div className="p-5 bg-ct-blue-05 rounded-t-lg">
                        <SearchBox.Type1 inputWidth="w-full" placeholder="Search with script ID, Title..." paddingX="px-3" paddingY="py-3.5" bgColor="bg-white" textColor="text-ct-blue-90-70%" />
                    </div>
                    <div className="m-3 p-4 border border-blue-gray-30 bg-blue-gray-05 rounded-lg">
                        <p className='text-heading-6 font-normal text-ct-blue-60'>
                            macpac49@gmail.com-
                            <span className='font-medium'>Muhammad Miraz Mahmuz</span>
                        </p>
                        <div className='flex gap-3 text-normal text-small text-ct-blue-90-70%'>
                            <div className='flex gap-2 items-center'>
                                <img src={Icons.mail} className="h-4 w-4" alt="" />
                                <p> miraz2710@gmail.com</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={Icons.call} className="h-4 w-4" alt="" />
                                <p> 01684610691</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={Icons.home} className="h-4 w-4 mb-[1px]" alt="" />
                                <p> Dhaka</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-3'>
                        <Table.Type6 />
                    </div>
                    <div className='flex gap-3 px-5 pb-5 pt-5 justify-end'>
                        <Buttons.LabelButton.Secondary
                            label='Cancel'
                            variant="Blue"
                            size='small'
                        />
                        <Buttons.LabelButton.Primary
                            label='Save'
                            variant="CT-Blue"
                            size="small"
                            onClick={() => setConfirm(true)}
                        />
                    </div>
                </div>
            </CustomModal.Primary>
            <CustomModal.Type3
                open={confirm}
                setOpen={setConfirm}
            />
        </div>
    );
};

export default Type2;