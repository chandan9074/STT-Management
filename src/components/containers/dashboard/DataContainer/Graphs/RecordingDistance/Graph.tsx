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
        contribution: 18
    },
    {
        contribution: 12

    },
    {
        contribution: 13
    },
    {
        contribution: 13
    },
    {
        contribution: 13
    },
    {
        contribution: 13
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
        console.log('%%%%%%%%%%%-----------', value[2].contribution - value[4].contribution);
        console.log('-----------', value[2].contribution - value[4].contribution <= 3 ? 88 : 52);


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

            const _circleFourBottom = (barHeight * value[2].contribution) / value[0].contribution + 3;
            const _circleFourLeft = (barHeight * value[2].contribution) / value[0].contribution - 20;

            //     circleTwoTop: 2,
            // cicleTwoLeft: 166,
            setCirclePosition({
                ...circlePosition,
                circleOneBottom: _cirlcleBottom ? _cirlcleBottom : circlePosition.circleOneBottom,
                circleOneLeft: _cirlcleOneLeft ? _cirlcleOneLeft : circlePosition.circleOneLeft,
                cicleTwoLeft: _circleTwoLeft,
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

            const _circleFourBottom = (barHeight * value[2].contribution) / value[0].contribution;
            const _circleFourLeft = ((59 * barHeight) / height - 24 + 30) + 20;

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
                circleFourBottom: (barHeight * value[2].contribution) / value[0].contribution,
                circleFoureft: (barHeight * value[2].contribution) / value[0].contribution - 21,
            });
        }

    }

    // console.log('circleposition888888888', barHeight, circlePosition.circleOneLeft);





    return (
        <div className='relative'>
            <div className='absolute -top-[27px]'>
                <div className='relative'>
                    <Circle1
                        bgColor={color[0].bgColor}
                        ringColor={color[0].ringColor}
                        textColor='text-[#453D38]'
                        shadowColor={color[0].shadowColor}
                        value={value[0].contribution}
                        height="w-[157px]"
                        width='h-[157px]'
                    />

                    <div className='absolute -right-[60px] -top-[100px]'>
                        <Circle1
                            bgColor={color[1].bgColor}
                            ringColor={color[1].ringColor}
                            textColor='text-[#453D38]'
                            shadowColor={color[1].shadowColor}
                            value={value[1].contribution}
                            height="w-[106px]"
                            width='h-[106px]'
                        />

                    </div>

                    <div className='absolute -right-[110px] top-[11px]'>
                        <div className='relative'>
                            <Circle1
                                bgColor={color[2].bgColor}
                                ringColor={color[2].ringColor}
                                textColor='text-[#453D38]'
                                shadowColor={color[2].shadowColor}
                                value={value[2].contribution}
                                height="w-[102px]"
                                width='h-[102px]'
                            />

                            <div className='absolute -top-[55px] -right-[12px]'>
                                <div className='relative'>
                                    <Circle1
                                        bgColor={color[4].bgColor}
                                        ringColor={color[4].ringColor}
                                        textColor='text-[#453D38]'
                                        shadowColor={color[4].shadowColor}
                                        value={value[4].contribution}
                                        height="w-[53px]"
                                        width='h-[53px]'
                                    />

                                    <div className='absolute -top-[42px] left-[4px]'>
                                        <div className='relative'>
                                            <Circle1
                                                bgColor={color[5].bgColor}
                                                ringColor={color[5].ringColor}
                                                textColor='text-[#453D38]'
                                                shadowColor={color[5].shadowColor}
                                                value={value[5].contribution}
                                                height="w-[30px]"
                                                width='h-[30px]'
                                            />

                                            <div className='absolute top-[14px] -right-[34px]'>
                                                <Circle1
                                                    bgColor={color[6].bgColor}
                                                    ringColor={color[6].ringColor}
                                                    textColor='text-[#453D38]'
                                                    shadowColor={color[6].shadowColor}
                                                    value={value[6].contribution}
                                                    height="w-[21px]"
                                                    width='h-[21px]'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='absolute -top-[72px] left-[34px]'>
                        <Circle1
                            bgColor={color[3].bgColor}
                            ringColor={color[3].ringColor}
                            textColor='text-[#453D38]'
                            shadowColor={color[3].shadowColor}
                            value={value[3].contribution}
                            height="w-[60px]"
                            width='h-[60px]'
                        />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Graph;