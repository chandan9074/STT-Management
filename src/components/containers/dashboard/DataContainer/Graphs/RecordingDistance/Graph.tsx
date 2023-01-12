import { abort } from 'process';
import React, { useEffect, useState } from 'react';
import { getValueFromPercentages } from '../../../../../../helpers/Utils';
import { createCollectSimilarPropertyDT } from '../../../../../../types/dashboardTypes';
import Circle1 from '../../../../../common/Circle/Circle1';

const value = [
    {
        contribution: 35
    },
    {
        contribution: 33
    },
    {
        contribution:  30
    },
    {
        contribution: 10
    },
    {
        contribution: 10
    },
    {
        contribution: 10
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
    const height = 158;
    const [barHeight, setBarHeight] = useState<number>(height);
    const [heighPercentage, setheightPercentage] = useState(0);
    const [dimesion, setDimension] = useState<number[]>([]);

    const [circlePosition, setCirclePosition] = useState({
        circleOneBottom: 154,
        circleOneLeft: 113,
        // circleTwoTop: 25,
        // cicleTwoLeft: 164,
        circleTwoTop: 8,
        cicleTwoLeft: 163,
        circleThreeBottom: 167,
        circleThreeRight: 59,
        circleFourBottom: 78,
        circleFoureft: 46,

    })

    useEffect(() => {

        const valueOnePercentage = (value[1].contribution * 100) / value[0].contribution;
        setheightPercentage(valueOnePercentage)
        console.log('-----------', (barHeight * value[2].contribution) / value[0].contribution);


        // if ((value[0].contribution - value[1].contribution) <= 10) {
        if (valueOnePercentage >= 83) {

            // setBarHeight(83)
            setBarHeight(95)

        }
        // else if ((value[0].contribution - value[1].contribution) <= 20) {
        else if (valueOnePercentage >= 66) {
            setBarHeight(110)
            // setBarHeight(66)
        }
        else if (valueOnePercentage >= 50) {
            setBarHeight(110)

        }

        else {
            setBarHeight(158);
        }
    }, [value]);

    useEffect(() => {
        getPosition();
    }, [barHeight]);

    const getPosition = () => {
        // let _cirlcleBottom;
        if (barHeight === 95) {
            const _cirlcleBottom = ((160 * barHeight) / height) - 7;
            const _cirlcleOneLeft = ((160 * barHeight) / height - 32);

            const _circleTwoLeft = ((166 * barHeight) / height - 24 + 30);
            const _circleTwoTop = ((2 * barHeight) / height - 24 + 36);

            const _circleThreeBottom = ((166 * barHeight) / height - 24 + 30);
            const _circleThreeRight = ((59 * barHeight) / height - 24 + 30);

            // const _circleFourBottom = (barHeight * value[2].contribution) / value[0].contribution +3 ;
            // const _circleFourLeft = ((59 * barHeight) / height - 24 + 30)  + 20;

            const _circleFourBottom = (barHeight * value[2].contribution) / value[0].contribution + 3 ;
            const _circleFourLeft = (barHeight * value[2].contribution) / value[0].contribution - 20;

            //     circleTwoTop: 2,
            // cicleTwoLeft: 166,
            setCirclePosition({
                ...circlePosition,
                circleOneBottom: _cirlcleBottom ? _cirlcleBottom : circlePosition.circleOneBottom,
                circleOneLeft: _cirlcleOneLeft ? _cirlcleOneLeft : circlePosition.circleOneLeft,
                cicleTwoLeft: _circleTwoLeft ,
                circleTwoTop: _circleTwoTop,
                circleThreeBottom: _circleThreeBottom,
                circleThreeRight: _circleThreeRight,                
                circleFourBottom: _circleFourBottom,
                circleFoureft: _circleFourLeft
            });

        } else if (barHeight === 110) {

            const _cirlcleBottom = ((160 * barHeight) / height - 10);
            const _cirlcleOneLeft = ((160 * barHeight) / height - 20);

            const _circleTwoLeft = ((166 * barHeight) / height - 24 + 30);
            const _circleTwoTop = ((2 * barHeight) / height - 24 + 40);

            const _circleThreeBottom = ((166 * barHeight) / height - 24 + 30);
            const _circleThreeRight = ((59 * barHeight) / height - 24 + 30 - 15);

            const _circleFourBottom = (barHeight * value[2].contribution) / value[0].contribution ;
            const _circleFourLeft = ((59 * barHeight) / height - 24 + 30)  + 20;

            setCirclePosition({
                ...circlePosition,
                circleOneBottom: _cirlcleBottom ? _cirlcleBottom : circlePosition.circleOneBottom,
                circleOneLeft: _cirlcleOneLeft ? _cirlcleOneLeft : circlePosition.circleOneLeft,
                cicleTwoLeft: _circleTwoLeft ? _circleTwoLeft : circlePosition.cicleTwoLeft,
                circleTwoTop: _circleTwoTop,
                circleThreeBottom: _circleThreeBottom,
                circleThreeRight: _circleThreeRight,
                circleFourBottom: _circleFourBottom,
                circleFoureft: _circleFourLeft
            });
        } else {

            setCirclePosition({
                ...circlePosition,
                circleOneBottom: 154,
                circleOneLeft: 113,
                // circleTwoTop: 25,
                // cicleTwoLeft: 164,
                circleTwoTop: 8,
                cicleTwoLeft: 163,
                circleThreeBottom: 167,
                circleThreeRight: 59,
                circleFourBottom: (barHeight * value[2].contribution) / value[0].contribution ,
                circleFoureft: (barHeight * value[2].contribution) / value[0].contribution - 21,
            });
        }

    }

    // console.log('circleposition888888888', barHeight, circlePosition.circleOneLeft);




    return (
        <div className='relative'>
            <div className='absolute -top-6'>
                <div >

                    <div className='relative'>
                        <Circle1
                            bgColor={color[0].bgColor}
                            ringColor={color[0].ringColor}
                            textColor='text-[#453D38]'
                            shadowColor={color[0].shadowColor}
                            value={value[0].contribution}
                            maxValue={value[0].contribution}
                            barHeight={barHeight}
                        />
                        <div
                            style={{
                                bottom: `${circlePosition.circleOneBottom}px`,
                                left: `${circlePosition.circleOneLeft}px`
                            }}
                            className='absolute'
                        >
                            <div className='relative'>
                                <Circle1
                                    bgColor={color[1].bgColor}
                                    ringColor={color[1].ringColor}
                                    textColor='text-[#453D38]'
                                    shadowColor={color[1].shadowColor}
                                    value={value[1].contribution}
                                    maxValue={value[0].contribution}
                                    barHeight={barHeight}
                                />


                            </div>
                        </div>
                    </div>

                    {/* Circle two */}
                    <div
                        style={{
                            top: `${circlePosition.circleTwoTop}px`,
                            left: `${circlePosition.cicleTwoLeft}px`
                        }}
                        className='absolute'
                    >
                       <div className='relative'>
                       <Circle1
                            bgColor={color[2].bgColor}
                            ringColor={color[2].ringColor}
                            textColor='text-[#453D38]'
                            shadowColor={color[2].shadowColor}
                            value={value[2].contribution}
                            maxValue={value[0].contribution}
                            barHeight={barHeight}
                        />
                        <div
                        style={{
                            bottom: `${circlePosition.circleFourBottom}px`,
                            left: `${circlePosition.circleFoureft}px`
                        }}
                         className='absolute'>
                        <Circle1
                            bgColor={color[4].bgColor}
                            ringColor={color[4].ringColor}
                            textColor='text-[#453D38]'
                            shadowColor={color[4].shadowColor}
                            value={value[4].contribution}
                            maxValue={value[0].contribution}
                            barHeight={barHeight}
                        />
                        </div>
                       </div>
                    </div>

                    <div
                        style={{
                            bottom: `${circlePosition.circleThreeBottom}px`,
                            right: `${circlePosition.circleThreeRight}px`,
                        }}
                        className='absolute'
                    >
                        <Circle1
                            bgColor={color[3].bgColor}
                            ringColor={color[3].ringColor}
                            textColor='text-[#453D38]'
                            shadowColor={color[3].shadowColor}
                            value={value[3].contribution}
                            maxValue={value[0].contribution}
                            barHeight={barHeight}
                        />
                    </div>

                    {/* {
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
                              
                                className={`
                            ${
                                  
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
                    } */}





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
                    </div>  */}


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
                    </div>  */}

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
                    </div>  */}

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
                    </div>  */}

                </div>
            </div>
        </div>
    );
};

export default Graph;