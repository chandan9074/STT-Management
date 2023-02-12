import React from 'react'
import Icons from '../../../../../assets/Icons'

const EmptyState = () => {
    return (
        <div className='mt-[20px] duration-500'>
            <div className='flex justify-between'>
                <div>
                    <div className='mb-[22px] flex gap-x-3 items-center'>
                        <h1 className='text-ct-blue-60 text-base font-medium'>Audio Status</h1>
                        <h2 className='text-ct-blue-90 text-xs'>Total Received: --</h2>
                    </div>

                    <div className='bg-blue-gray-05 rounded-[8px]'>
                        <div className='flex flex-col justify-center items-center px-[180px] py-[50px] gap-y-[14px]'>
                            <img className='w-[31px] h-[26px]' src={Icons.Vector} alt="" />
                            <h1 className='text-ct-blue-90 text-small'>No data have found</h1>
                        </div>
                    </div>

                </div>


                <div>
                    <h1 className='text-ct-blue-60 text-base font-medium mb-[22px]'>Over the time</h1>

                    <div className='bg-blue-gray-05 rounded-[8px]'>
                        <div className='flex flex-col justify-center items-center px-[180px] py-[50px] gap-y-[14px] '>
                            <img className='w-[31px] h-[26px]' src={Icons.Vector2} alt="" />
                            <h1 className='text-ct-blue-90 text-small'>No data have found</h1>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default EmptyState