import React, { Dispatch, SetStateAction } from 'react';
import { CustomModal } from '.';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';
interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;

}
const Type3 = ({ open, setOpen }: Props) => {
    return (
        <>
        <CustomModal.Primary
            open={open}
            setOpen={setOpen}
            width="462px"
        >

            <div 
            style={{
                background:`url(${Icons.Shadow_bg})`
            }}
            className='px-10 pt-9 pb-[30px]'>
                <img src={Icons.Gavel} className="h-9 w-9 p-1 mb-[18px]"  alt="" />
                <p className='text-base font-medium text-ct-blue-90 mb-[106px]'>Are you sure you want to take this action?</p>
                <div className='flex gap-3 justify-start'>

                    <Buttons.LabelButton.Secondary
                        label='Cancel'
                        variant="Blue"
                        size='small'
                    />
                    <Buttons.LabelButton.Primary
                        label='Save'
                        variant="CT-Blue"
                        size="small"
                    />
                </div>
            </div>
           
        </CustomModal.Primary>
       
        </>
    );
};

export default Type3;