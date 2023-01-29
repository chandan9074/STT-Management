import React from 'react';

const ActionButton = () => {
    return (
        <div className='flex justify-end px-5 py-[28px] bg-white'>
            <div className='flex gap-x-[16px] '>
                <button className='duration-700 border-[1px] border-white text-ct-blue-60 hover:border-ct-blue-30 rounded-[6px] py-[12px] px-[32px]'>
                    Cancel
                </button>
                <button type='submit' className='duration-300 bg-primary-ct-blue-60 text-white rounded-[6px] py-[12px] px-[32px]'>
                    Create
                </button>
            </div>
        </div>
    );
};

export default ActionButton;