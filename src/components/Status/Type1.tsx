import React from 'react';

interface Props {
    check: boolean
}
const Type1 = (props: Props) => {
    const { check } = props
    return (
        <>
            {
                check ?
                    <div className='w-[65px] h-[22px] bg-[#DEF7F0] py-[2px] pl-[10px] pr-[8px] flex items-center justify-center gap-1 rounded-[20px] mx-auto'>
                        <div className='h-[6px] w-[6px] rounded-full bg-[#05956F]' />
                        <p className='text-[#03543F] text-xxs font-normal'>Active</p>
                    </div>

                    : <div className='w-[80px] h-[22px] bg-[#F7DEE0] py-[2px] pl-[10px] pr-[8px] flex items-center justify-center gap-1 rounded-[20px] mx-auto'>
                        <div className='h-[6px] w-[6px] rounded-full bg-[#FF293D]' />
                        <p>Blocked</p>
                    </div>
            }
        </>
    );
};

export default Type1;