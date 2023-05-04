import React from 'react';
import Buttons from '../Buttons';

const ActionButton = () => {
    return (
        <div className='flex justify-end w-full px-5 py-4 bg-white rounded-b-xl'>
            <div className='flex gap-x-[16px] text-base font-medium'>
                <button
                    onClick={(e) => e.preventDefault()}
                    className='duration-700 border-[1px] border-white text-ct-blue-60 hover:border-ct-blue-30 rounded-[6px] py-[12px] px-[32px]'>
                    Cancel
                </button>
                <Buttons.LabelButton.Primary
                    label='Create User'
                    size='xSmall'
                    variant='CT-Blue'
                    style={{
                        fontSize: '16px'
                    }}
                />
            </div>
        </div>
    );
};

export default ActionButton;