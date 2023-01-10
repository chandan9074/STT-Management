import React from 'react';
import { createCollectSimilarPropertyDT } from '../../../../../../types/dashboardTypes';
import Circle1 from '../../../../../common/Circle/Circle1';

const Graph = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {

    console.log('data----------', data);

    return (
        <div className='relative'>
            <div className='absolute -top-6'>
                <div className='relative'>
                    <Circle1
                        bgColor='bg-red-15'
                        ringColor='ring-[#E8C8C8]'
                        textColor='text-[#453D38]'
                        shadowColor='hover:shadow-light-tomato'
                        value={35}
                        maxValue={35}

                    />
                    <div className='absolute -top-[87px] left-[105px]'>
                        <Circle1
                            bgColor='bg-green-A10'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={32}
                            maxValue={35}
                        />
                    </div>

                    <div className='absolute top-[13px] left-[165px]'>
                        <Circle1
                            bgColor='bg-#FFF5CC'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={30}
                            maxValue={35}
                        />
                    </div>

                    <div className='absolute -top-[67px] left-[35px]'>
                        <Circle1
                            bgColor='bg-[#FFE5D3]'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={10}
                            maxValue={35}
                        />
                    </div>

                    <div className='absolute -top-[40px] left-[205px]'>
                        <Circle1
                            bgColor='bg-[#CCF8FE]'
                            ringColor='ring-[#CCF8FE]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={11}
                            maxValue={35}
                        />
                    </div>

                    <div className='absolute -top-[90px] left-[210px]'>
                        <Circle1
                            bgColor='bg-[#CCDDFE]'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={8}
                            maxValue={35}
                        />
                    </div>

                    <div className='absolute -top-[70px] left-[260px]'>
                        <Circle1
                            bgColor='bg-[#DAD7FE]'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={6}
                            maxValue={35}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Graph;