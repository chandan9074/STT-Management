import React from 'react';
import Icons from '../../../../assets/Icons';

const PersonalTitle = () => {
    return (
        <div className='w-[265px] h-[43px] flex gap-x-[18px]'>
            <div>
                <img className='w-[36px] h-[36px]' src={Icons.Avatar} alt="" />
            </div>
            <div>
                <h1 className='text-ct-blue-95 tex-[18px] font-medium'>Muhammad Miraz Mahmuz</h1>
                <p className='text-ct-blue-90-70% text-[14px]'>Collector, Team Leader</p>
            </div>
        </div>
    );
};

export default PersonalTitle;