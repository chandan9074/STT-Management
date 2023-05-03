import React from 'react';

const ActionButton = () => {
    return (
        <div className='flex justify-end w-full px-5 py-4 bg-white rounded-b-xl'>
            <div className='flex gap-x-[16px] text-base font-medium'>
                <button
                onClick={(e) => e.preventDefault()}
                 className='duration-700 border-[1px] border-white text-ct-blue-60 hover:border-ct-blue-30 rounded-[6px] py-[12px] px-[32px]'>
                    Cancel
                </button>
                <button type='submit' className='duration-300 bg-primary-ct-blue-60 text-white rounded-[6px] py-4.5 px-[32px]'>
                    Create User
                </button>
            </div>
        </div>
    );
};

export default ActionButton;