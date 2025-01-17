import React, { Dispatch, SetStateAction } from 'react';
import Buttons from '../../../components/Buttons';

type Props = {
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const ActionButton = ({ setIsDrawerOpen }: Props) => {
    return (
        <div className='flex gap-x-[16px] mt-7'>
            <Buttons.IconWithTextButton.Primary
                label='Submit'
                size='small'
                variant='CT-Blue'
                type='submit'

            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setIsDrawerOpen(false);
                }}
                className='duration-700 border-[1px] border-white text-ct-blue-60 hover:border-ct-blue-30 rounded-[6px] py-[12px] px-[32px]'>
                Cancel
            </button>
        </div>
    );
};

export default ActionButton;