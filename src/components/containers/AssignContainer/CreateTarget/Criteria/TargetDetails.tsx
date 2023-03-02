import { useContext, useEffect, useState } from 'react';
import { AssignContext } from '../../../../../context/AssignProvider';
import Image from '../../../../Image';

const TargetDetails = ({ onLengthClickClose }: { onLengthClickClose: () => void }) => {

    const AssignContexts = useContext(AssignContext);
    const {
        criterias,
        singleCriteria,
        getSingleCriteria,
    } = AssignContexts;

    const singleValue1 = [
        {
            title: 'Gender',
            value: singleCriteria?.gender || '-'
        },
        {
            title: 'Age Range',
            value: singleCriteria?.ageRange || '-'
        },
        {
            title: 'Division/ District',
            value: singleCriteria?.district
        },
        {
            title: 'profession',
            value: singleCriteria?.profession || '-'
        },
        {
            title: 'Econimic Situation',
            value: singleCriteria?.economicSituation || '-'
        },
        {
            title: 'Education',
            value: singleCriteria?.education || '-'
        },
        {
            title: 'Smoking Habit',
            value: singleCriteria?.healthFactors?.includes('Smoker') ? 'Yes' : 'No'
        },
        {
            title: 'Hearing Disability',
            value: singleCriteria?.healthFactors?.includes('Hearing') ? 'Yes' : 'No'
        },
        {
            title: 'Shutter',
            value: singleCriteria?.healthFactors?.includes('Stutter') ? 'Yes' : 'No'
        },
        {
            title: 'Recording Area',
            value: singleCriteria?.recordingArea || '-'
        },
        {
            title: 'Recording Distance',
            value: singleCriteria?.recordingDistance || '-'
        },

    ]

    const singleValue2 = [
        {
            title: 'Target',
            value: singleCriteria?.target || '-'
        },
        {
            title: 'Deadline',
            value: singleCriteria?.deadline || '-'
        },
        {
            title: 'Reminder',
            value: singleCriteria?.reminder || []
        },
        {
            title: 'Note',
            value: singleCriteria?.remark || '-'
        },

    ]

    const [targetId, setTargetId] = useState<number>(0);

    useEffect(() => {
        getSingleCriteria(targetId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onTargetClick = (id: number) => {
        setTargetId(id);
        getSingleCriteria(id);
    }

    const onEditClick = () => {
        getSingleCriteria(targetId);
        onLengthClickClose();
    }

    return (
        <div>
            <div className='flex overflow-x-auto gap-x-3'>
                {
                    criterias &&
                    criterias.map((value: any, i: number) => (
                        <div key={i} className='mb-[10px]'>
                            <div
                                onClick={() => onTargetClick(i)}
                                className={` ${targetId === i ? 'bg-ct-blue-10' : 'bg-white'} h-[54px] w-[176px] rounded-[65px] flex justify-center items-center gap-x-2 cursor-pointer`}
                            >
                                <Image.RoleImage role={value?.gender === 'Male' ? 'Speaker' : 'speakerFemale'} />
                                <div>
                                    {/* <h1 className='text-ct-blue-80 text-xxs'>Target ID- 23-23456-7</h1> */}
                                    <h1 className='text-ct-blue-90 text-xxs font-medium'>target: {value.target}</h1>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>
            {/* ----------------------------------------------------------- */}

            <div className='mt-3 flex'>
                <div>
                    {singleValue1?.map((item: any, i: number) => (
                        <div className={` grid grid-cols-12`} key={i}>

                            <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3 pr-2 pl-3`}>
                                <h1 className="text-blue-gray-75 font-medium text-xxs leading-15px whitespace-nowrap">
                                    {item?.title}
                                </h1>
                            </div>

                            <div className="col-span-8 pt-3 pr-2 pl-3">
                                {item?.title === "Division/ District" ? (
                                    <h1 className="text-blue-gray-80 font-medium text-small  leading-15px">
                                        {item?.value?.map((value: string, j: number) => {
                                            return value + `${(item.value.length-1) !== j ? ', ' : ''}`;
                                        })}
                                    </h1>
                                ) : (
                                    <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                                        {item?.value}
                                    </h1>
                                )}
                            </div>

                        </div>

                    ))}
                </div>

                <div

                    className='ml-auto'>
                    <button onClick={() => onEditClick()} className='text-ct-blue-60'>Edit</button>
                </div>
            </div>

    
            <div className='border-t-[2px] border-blue-gray-20 my-4'></div>

            <div className='pr-7'>
                {singleValue2?.map((item: any, i: number) => (
                    <div className={` grid grid-cols-12`} key={i}>

                        <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue2.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3  pl-3`}>
                            <h1 className="text-blue-gray-75 font-medium text-xxs  leading-15px">
                                {item?.title}
                            </h1>
                        </div>

                        <div className="col-span-8 pt-3 pr-2 pl-3">
                            {
                                item?.title === "Reminder" ? (
                                    <h1 className="text-blue-gray-80 font-medium text-small  leading-15px">
                                        {
                                            item.value?.length > 0 ?
                                                item?.value?.map((value: string, j:number) => {
                                                    return value + `${(item.value.length-1) !== j ? ', ' : ''}`;
                                                }) :
                                                '-'
                                        }
                                    </h1>
                                ) : (
                                    <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                                        {item?.value}
                                    </h1>
                                )}
                        </div>

                    </div>

                ))}
            </div>

        </div >
    );
};

export default TargetDetails;