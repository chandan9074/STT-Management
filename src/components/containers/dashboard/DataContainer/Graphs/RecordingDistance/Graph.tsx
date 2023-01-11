import { abort } from 'process';
import React, { useEffect, useState } from 'react';
import { getValueFromPercentages } from '../../../../../../helpers/Utils';
import { createCollectSimilarPropertyDT } from '../../../../../../types/dashboardTypes';
import Circle1 from '../../../../../common/Circle/Circle1';

const value = [
    {
        contribution: 33
    },
    {
        contribution: 30
    },
    {
        contribution: 18
    },
    {
        contribution: 12
    },
    {
        contribution: 10
    },
    {
        contribution: 8
    },
    {
        contribution: 7
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

    // const [barHeight, setBarHeight] = useState<number>(452);
    const [barHeight, setBarHeight] = useState<number>(452);
    const [dimesion, setDimension] = useState<number[]>([]);
    const [maxValueHeight, setMaxValueHeight] = useState<number>(158);

    useEffect(() => {
        setMaxValueHeight(getValueFromPercentages(barHeight, value[0].contribution))
        getDimension();
        if ((value[0].contribution - value[1].contribution) < 11) {
            // setBarHeight(110)
        }
    }, [value]);

    const getDimension = () => {

    }

    console.log('barheight--------', getValueFromPercentages(barHeight, value[2].contribution) > 149 ? 149 : getValueFromPercentages(barHeight, value[2].contribution));


    return (
        <div className='relative'>
            <div className='absolute -top-2'>
                <div >
                    {
                        value?.map((m, i) => (
                            <div
                                style={{
                                    right: `${
                                        i === 3 ? 66 :
                                        // i === 2 ? -160 :
                                         ''
                                        }px`,
                                    bottom: `${
                                        i === 0 ? 0:
                                        i === 1 ? 158 - 4 :
                                        i === 3 ? 175 :
                                        i === 4 ?
                                        value[1].contribution - value[2].contribution >= 12 ? 111:
                                         155 :

                                         i === 5 ?
                                        value[1].contribution - value[2].contribution >= 12 ? 180:
                                         220 :
                                         i === 6 ?
                                         value[1].contribution - value[2].contribution >= 12 ? 150:
                                          195 :

                                         ''}px`,

                                        top: `${
                                            i === 2 ? 10 :
                                            
                                        
                                             ''
                                        }px`,
                                        left: `${

                                            i === 0 ? 0 :
                                            i === 1 ? 110 :
                                            
                                            i === 2 ? 172 :
                                            // i === 2 ? maxValueHeight + 18 :

                                            i === 4 ? ((158 + 
                                                (getValueFromPercentages(barHeight, value[2].contribution) > 149 ? 149 : getValueFromPercentages(barHeight, value[2].contribution))) -
                                                 (
                                                    value[1].contribution - value[2].contribution >= 5 && value[1].contribution - value[2].contribution < 12 ? 2:
                                                    value[1].contribution - value[2].contribution >= 12 ? -(value[1].contribution/2 + 10):
                                                  28)) :

                                                  i === 5 ? ((158 + 
                                                    (getValueFromPercentages(barHeight, value[2].contribution) > 149 ? 149 : getValueFromPercentages(barHeight, value[2].contribution))) -
                                                     (
                                                        value[1].contribution - value[2].contribution >= 5 && value[1].contribution - value[2].contribution < 12 ? 8:
                                                        value[1].contribution - value[2].contribution >= 12 && value[1].contribution - value[2].contribution < 16 ? -(value[1].contribution/2 + 10):
                                                        value[1].contribution - value[2].contribution >= 16 ? -(value[1].contribution/2 + 30):
                                                      28)) :

                                                      i === 6 ? ((158 + 
                                                        (getValueFromPercentages(barHeight, value[2].contribution) > 149 ? 149 : getValueFromPercentages(barHeight, value[2].contribution))) -
                                                         (
                                                            value[1].contribution - value[2].contribution >= 5 && value[1].contribution - value[2].contribution < 12 ? -28:
                                                            value[1].contribution - value[2].contribution >= 12 && value[1].contribution - value[2].contribution < 16 ? -(value[1].contribution/2 + 60):
                                                            value[1].contribution - value[2].contribution >= 16 ? -(value[1].contribution/2 - 10):
                                                          -18)) :

                                            // i === 4 ? 274 :
                                            
                                             ''
                                            }px`,
                                }}
                                // style={{
                                //     left: `${

                                //         i === 1 ? (value[0].contribution - 10):
                                //         i === 2? (value[0].contribution + 5) :
                                //          ''
                                //     }%`,
                                //     bottom: `${
                                //         i === 1 ? 30 : 
                                //         (i === 2 ) ? (value[0].contribution - 39):
                                //         0
                                //     }%`,


                                // }}

                                className={`
                            ${
                                    // i === 1 ? (barHeight === 330 ? 'absolute -top-[98px] left-[85px]' : 'absolute -top-[87px] left-[100px]') :
                                    // i === 2 ? (barHeight === 330 ? 'absolute top-[13px] left-[125px]' : 'absolute top-[13px] left-[165px]') :


                                    i === 0 ? '' :

                                        i == 1 ? 'absolute' :
                                            //     i === 2 ? (barHeight === 330 ? `absolute` : 'absolute top-[13px] left-[165px]') :
                                            //         i === 3 ? (barHeight === 330 ? 'absolute -top-[52px] left-[35px]' : 'absolute -top-[67px] left-[35px]') :
                                            //         i == 4 ? (barHeight === 330 ? 'absolute -top-[14px] left-[220px]' : 'absolute -top-[40px] left-[224px]') :
                                            //                 i === 5 ? (barHeight === 330 ? 'absolute -top-[58px] left-[215px]' : 'absolute -top-[88px] left-[210px]') :
                                            //                     i === 6 ? (barHeight === 330 ? 'absolute -top-[40px] left-[255px]' : 'absolute -top-[75px] left-[260px]') : 
                                            'absolute'
                                    }
                               `}
                            >
                                <Circle1
                                    bgColor={color[i].bgColor}
                                    ringColor={color[i].ringColor}
                                    textColor='text-[#453D38]'
                                    shadowColor={color[i].shadowColor}
                                    value={m?.contribution}
                                    // value={m?.contribution >= 35 ? 35 : m?.contribution}
                                    maxValue={value[0].contribution}
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