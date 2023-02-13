import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AssignContext } from '../../../context/AssignProvider';
import Image from '../../Image';

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
            value: 'higher Secondary'
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

    console.log('-----****8888', singleValue2);


    const [targetId, setTargetId] = useState<number>(criterias[0].target);

    useEffect(() => {
        getSingleCriteria(targetId);
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
                                onClick={() => onTargetClick(value.target)}
                                className={` ${targetId === value.target ? 'bg-ct-blue-10' : 'bg-white'} h-[54px] w-[176px] rounded-[65px] flex justify-center items-center gap-x-2 cursor-pointer`}
                            >
                                <Image.RoleImage role={value?.gender === 'Male' ? 'Speaker' : 'speakerFemale'} />
                                <div>
                                    <h1 className='text-ct-blue-80 text-[12px]'>Target ID- 23-23456-7</h1>
                                    <h1 className='text-ct-blue-90 text-[12px] font-medium'>target: {value.target}</h1>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>
            {/* ----------------------------------------------------------- */}

            <div className='mt-[25px] flex'>
                <div>
                    {singleValue1?.map((item: any, i: number) => (
                        <div className={` grid grid-cols-12`} key={i}>

                            <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3 pr-2 pl-3`}>
                                <h1 className="text-blue-gray-75 font-medium text-12px  leading-15px">
                                    {item?.title}
                                </h1>
                            </div>

                            <div className="col-span-8 pt-3 pr-2 pl-3">
                                {item?.title === "Division/ District" ? (
                                    <h1 className="text-blue-gray-80 font-medium text-14px  leading-15px">
                                        {item?.value?.map((value: string) => {
                                            return value + ", ";
                                        })}
                                    </h1>
                                ) : (
                                    <h1 className="text-blue-gray-80 font-medium text-14px leading-15px">
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

            <div className=''>
                {singleValue2?.map((item: any, i: number) => (
                    <div className={` grid grid-cols-12`} key={i}>

                        <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3 pr-2 pl-3`}>
                            <h1 className="text-blue-gray-75 font-medium text-12px  leading-15px">
                                {item?.title}
                            </h1>
                        </div>

                        <div className="col-span-8 pt-3 pr-2 pl-3">
                            {
                                item?.title === "Reminder" ? (
                                    <h1 className="text-blue-gray-80 font-medium text-14px  leading-15px">
                                        {
                                            item.value?.length > 0 ?
                                                item?.value?.map((value: string) => {
                                                    return value + ', ';
                                                }) :
                                                '-'
                                        }
                                    </h1>
                                ) : (
                                    <h1 className="text-blue-gray-80 font-medium text-14px leading-15px">
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