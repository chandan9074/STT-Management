import React, { useState } from 'react';
import Icons from '../../../assets/Icons';

const BoxSection = () => {
    const [dataShow, setDataShow] = useState<boolean>(false);

    return (
        <div>
            <div className='flex items-center'>
                <div className='border-t-[1px] w-full border-dashed border-border-light-blue relative z-[90]' >
                    <button
                        onClick={() => setDataShow(!dataShow)}
                        className={`border-[1px] border-ct-blue-20 rounded-[20px] py-[6px] px-[14px] absolute z-[100] right-0  ${dataShow ? 'top-[13px]' : '-bottom-[9px]'} duration-1000`}
                    >
                        <img src={dataShow ? Icons.DoubleArroDownDark : Icons.DoubleDarkICon} alt="" className="w-[7px] h-[8px] " />
                    </button>
                </div>


            </div>

            {
                dataShow ?
                    <div className='mt-[12px] flex items-center gap-x-[9px] duration-700'>
                        <img className='w-[20px] h-[17px]' src={Icons.Vector2} alt="" />
                        <h1 className='text-ct-blue-60 text-[16px] font-medium'>Statistics</h1>
                    </div>

                    :

                    <div className='mt-[20px] duration-500'>
                        <div className='flex justify-between'>
                            <div>
                                <div className='mb-[22px] flex gap-x-3 items-center'>
                                    <h1 className='text-ct-blue-60 text-[16px] font-medium'>Audio Status</h1>
                                    <h2 className='text-ct-blue-90 text-[13px]'>Total Received: --</h2>
                                </div>

                                <div className='bg-blue-gray-05 rounded-[8px]'>
                                    <div className='flex flex-col justify-center items-center px-[180px] py-[50px] gap-y-[14px] '>
                                        <img className='w-[31px] h-[26px]' src={Icons.Vector} alt="" />
                                        <h1 className='text-ct-blue-90 text-[14px]'>No data have found</h1>
                                    </div>
                                </div>

                            </div>


                            <div>
                                <div className='mb-[22px] flex gap-x-3 items-center'>
                                    <h1 className='text-ct-blue-60 text-[16px] font-medium'>Audio Status</h1>
                                    <h2 className='text-ct-blue-90 text-[13px]'>Total Received: --</h2>
                                </div>

                                <div className='bg-blue-gray-05 rounded-[8px]'>
                                    <div className='flex flex-col justify-center items-center px-[180px] py-[50px] gap-y-[14px] '>
                                        <img className='w-[31px] h-[26px]' src={Icons.Vector2} alt="" />
                                        <h1 className='text-ct-blue-90 text-[14px]'>No data have found</h1>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    }
        </div>
    );
};

export default BoxSection;