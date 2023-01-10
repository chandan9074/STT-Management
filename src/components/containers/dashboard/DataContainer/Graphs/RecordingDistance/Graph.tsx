import React, { useEffect, useState } from 'react';
import { createCollectSimilarPropertyDT } from '../../../../../../types/dashboardTypes';
import Circle1 from '../../../../../common/Circle/Circle1';

const value = [
    {
        contribution: 33
    },
    {
        contribution: 33
    },
    {
        contribution: 30
    },
    {
        contribution: 12
    },
    {
        contribution: 7
    },
    {
        contribution: 6
    },
    {
        contribution: 5
    },
]


const color = [
    {
        bgColor: 'bg-red-15',
        ringColor: 'ring-[#E8C8C8]',
        shadowColor: 'hover:shadow-light-tomato'
    },
    {
        bgColor: 'bg-green-A10',
        ringColor: 'ring-[#D1E8C7]',
        shadowColor: 'hover:shadow-green-A10'
    },
    {
        bgColor: 'bg-[#FFF5CC]',
        ringColor: 'ring-[#E8DFBA]',
        shadowColor: 'hover:shadow-green-A10'
    },
    {
        bgColor: 'bg-[#FFE5D3]',
        ringColor: 'ring-[#E8D0C0]',
        shadowColor: 'hover:shadow-light-orange-shadow'
    },
    {
        bgColor: 'bg-[#CCF8FE]',
        ringColor: 'ring-[#BAE3E8]',
        shadowColor: 'hover:shadow-green-A10'
    },
    {
        bgColor: 'bg-[#CCDDFE]',
        ringColor: 'ring-[#BACAE8]',
        shadowColor: 'hover:shadow-green-A10'
    },
    {
        bgColor: 'bg-[#DAD7FE]',
        ringColor: 'ring-[#CAC8E8]',
        shadowColor: 'hover:shadow-green-A10'
    }


]


const Graph = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {

    const [barHeight, setBarHeight] = useState<number>(158);

    useEffect(() => {
        if ((value[0].contribution - value[1].contribution) < 11) {
            setBarHeight(110)
        }
    }, [])
    console.log('value---------------', barHeight);



    return (
        <div className='relative'>
            <div className='absolute -top-6'>
                <div className='relative'>
                    {
                        value?.map((m, i) => (
                            <div className={`
                            ${i === 0 ? '' :
                                    // i === 1 ? (barHeight === 110 ? 'absolute -top-[68px] left-[85px]' : 'absolute -top-[87px] left-[100px]') :
                                    i === 1 ? (barHeight === 110 ? 'absolute -top-[98px] left-[85px]' : 'absolute -top-[87px] left-[100px]') :
                                        i === 2 ? (barHeight === 110 ? 'absolute top-[13px] left-[120px]' : 'absolute top-[13px] left-[165px]') :
                                            i === 3 ? (barHeight === 110 ? 'absolute -top-[52px] left-[35px]' : 'absolute -top-[67px] left-[35px]') :
                                            i == 4 ? (barHeight === 110 ? 'absolute -top-[14px] left-[205px]' : 'absolute -top-[24px] left-[214px]') :
                                                // i == 4 ? (barHeight === 110 ? 'absolute -top-[14px] left-[184px]' : 'absolute -top-[24px] left-[214px]') :
                                                    // i === 5 ? (barHeight === 110 ? 'absolute -top-[48px] left-[178px]' : 'absolute -top-[65px] left-[208px]') :
                                                    i === 5 ? (barHeight === 110 ? 'absolute -top-[48px] left-[200px]' : 'absolute -top-[65px] left-[208px]') :
                                                        i === 6 ? (barHeight === 110 ? 'absolute -top-[35px] left-[235px]' : 'absolute -top-[55px] left-[250px]') : 
                                                        // i === 6 ? (barHeight === 110 ? 'absolute -top-[35px] left-[220px]' : 'absolute -top-[55px] left-[250px]') : 
                                                        ''
                                                    }
                               `}>
                                <Circle1
                                    bgColor={color[i].bgColor}
                                    ringColor={color[i].ringColor}
                                    textColor='text-[#453D38]'
                                    shadowColor={color[i].shadowColor}
                                    value={m?.contribution}
                                    maxValue={33}
                                    barHeight={barHeight}

                                />
                            </div>
                        ))
                    }

                    {/* <div className='absolute -top-[87px] left-[100px]'>
                        <Circle1
                            bgColor='bg-green-A10'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={33}
                            maxValue={33}
                            barHeight={barHeight}
                        />
                    </div> */}

                    {/* <div className='absolute top-[13px] left-[165px]'>
                        <Circle1
                            bgColor='bg-#FFF5CC'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={33}
                            maxValue={33}
                            barHeight={barHeight}
                        />
                    </div> */}

                    {/* <div className='absolute -top-[67px] left-[35px]'>
                        <Circle1
                            bgColor='bg-[#FFE5D3]'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={10}
                            maxValue={33}
                            barHeight={barHeight}
                        />
                    </div> */}

                    {/* <div className='absolute -top-[42px] left-[205px]'>
                        <Circle1
                            bgColor='bg-[#CCF8FE]'
                            ringColor='ring-[#CCF8FE]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={11}
                            maxValue={33}
                            barHeight={barHeight}
                        />
                    </div> */}

                    {/* <div className='absolute -top-[90px] left-[210px]'>
                        <Circle1
                            bgColor='bg-[#CCDDFE]'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={8}
                            maxValue={33}
                            barHeight={barHeight}
                        />
                    </div> */}

                    {/* <div className='absolute -top-[70px] left-[260px]'>
                        <Circle1
                            bgColor='bg-[#DAD7FE]'
                            ringColor='ring-[#E8C8C8]'
                            textColor='text-[#453D38]'
                            shadowColor='hover:shadow-green-A10'
                            value={6}
                            maxValue={33}
                            barHeight={barHeight}
                        />
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Graph;