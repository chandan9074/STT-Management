import { createCollectSimilarPropertyDT } from '../../../../../../types/dashboardTypes';
import Circle1 from '../../../../../common/Circle/Circle1';

const color = [
    {
        bgColor: 'bg-red-15',
        ringColor: 'ring-[#E8C8C8]',
        shadowColor: 'hover:shadow-light-tomato',
    },
    {
        bgColor: 'bg-green-A10',
        ringColor: 'ring-[#D1E8C7]',
        shadowColor: 'hover:shadow-green-A10',
    },
    {
        bgColor: 'bg-[#FFF5CC]',
        ringColor: 'ring-[#E8DFBA]',
        shadowColor: 'hover:shadow-green-A10',
    },
    {
        bgColor: 'bg-[#FFE5D3]',
        ringColor: 'ring-[#E8D0C0]',
        shadowColor: 'hover:shadow-light-orange-shadow',
    },
    {
        bgColor: 'bg-[#CCF8FE]',
        ringColor: 'ring-[#BAE3E8]',
        shadowColor: 'hover:shadow-green-A10',
    },
    {
        bgColor: 'bg-[#CCDDFE]',
        ringColor: 'ring-[#BACAE8]',
        shadowColor: 'hover:shadow-green-A10',
    },
    {
        bgColor: 'bg-[#DAD7FE]',
        ringColor: 'ring-[#CAC8E8]',
        shadowColor: 'hover:shadow-green-A10',
    }


]


const Graph = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {

    return (
        <div className='relative'>
            <div className='absolute -top-[27px]'>
                {/* {
                    value?.map((m, i) => (
                        <div
                            className={`${i === 0 ? 'bottom-0' :
                                i === 1 ? 'bottom-10' :
                                    ''
                                } absolute`}
                        >
                            <Circle1
                                bgColor={color[i].bgColor}
                                ringColor={color[i].ringColor}
                                textColor='text-[#453D38]'
                                shadowColor={color[3].shadowColor}
                                value={value[i].contribution}
                                height={i === 0 ? 'w-[157px]' : i === 1 ? 'w-[106px]' : i === 2 ? 'w-[102px]' : i === 3 ? 'w-[60px]' : i === 4 ? 'w-[53px]' : i === 5 ? 'w-[30px]' : i === 6 ? '' : ''}
                                width={i === 0 ? 'h-[157px]' : i === 1 ? 'h-[106px]' : i === 2 ? 'h-[102px]' : i === 3 ? 'h-[60px]' : i === 4 ? 'h-[53px]' : i === 5 ? 'h-[30px]' : i === 6 ? 'w-[21px]' : 'h-[21px]'}
                                indexNumber={i}

                            // data={m}

                            />
                        </div>
                    ))
                } */}
                <div className='relative'>
                    <Circle1
                        bgColor={color[0].bgColor}
                        ringColor={color[0].ringColor}
                        textColor='text-[#453D38]'
                        shadowColor={color[0].shadowColor}
                        value={data[0].contribution}
                        height="w-[157px]"
                        width='h-[157px]'
                        indexNumber={0}
                        data={data[0]}
                        tooltipTitleColor='text-red-15'
                    />

                    <div className='absolute -right-[60px] -top-[100px]'>
                        <Circle1
                            bgColor={color[1].bgColor}
                            ringColor={color[1].ringColor}
                            textColor='text-[#453D38]'
                            shadowColor={color[1].shadowColor}
                            value={data[1].contribution}
                            height="w-[106px]"
                            width='h-[106px]'
                            indexNumber={1}
                            data={data[1]}
                            tooltipTitleColor='text-green-A10'
                        />

                    </div>

                    <div className='absolute -right-[110px] top-[11px]'>
                        <div className='relative'>
                            <Circle1
                                bgColor={color[2].bgColor}
                                ringColor={color[2].ringColor}
                                textColor='text-[#453D38]'
                                shadowColor={color[2].shadowColor}
                                value={data[2].contribution}
                                height="w-[102px]"
                                width='h-[102px]'
                                indexNumber={2}
                                data={data[2]}
                                tooltipTitleColor='text-yellow-A10'
                            />

                            <div className='absolute -top-[55px] -right-[12px]'>
                                <div className='relative'>
                                    <Circle1
                                        bgColor={color[4].bgColor}
                                        ringColor={color[4].ringColor}
                                        textColor='text-[#453D38]'
                                        shadowColor={color[4].shadowColor}
                                        value={data[4].contribution}
                                        height="w-[53px]"
                                        width='h-[53px]'
                                        indexNumber={4}
                                        data={data[4]}
                                        tooltipTitleColor='text-blue-A10'
                                    />

                                    <div className='absolute -top-[42px] left-[4px]'>
                                        <div className='relative'>
                                            <Circle1
                                                bgColor={color[5].bgColor}
                                                ringColor={color[5].ringColor}
                                                textColor='text-[#453D38]'
                                                shadowColor={color[5].shadowColor}
                                                value={data[5].contribution}
                                                height="w-[30px]"
                                                width='h-[30px]'
                                                indexNumber={5}
                                                data={data[5]}
                                                tooltipTitleColor='text-blue-20'
                                            />

                                            <div className='absolute top-[14px] -right-[34px]'>
                                                <Circle1
                                                    bgColor={color[6].bgColor}
                                                    ringColor={color[6].ringColor}
                                                    textColor='text-[#453D38]'
                                                    shadowColor={color[6].shadowColor}
                                                    value={data[6].contribution}
                                                    height="w-[21px]"
                                                    width='h-[21px]'
                                                    indexNumber={6}
                                                    data={data[6]}
                                                    tooltipTitleColor='text-purple-A10'
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
                            value={data[3].contribution}
                            height="w-[60px]"
                            width='h-[60px]'
                            indexNumber={3}
                            data={data[3]}
                            tooltipTitleColor='text-blue-A10'
                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Graph;