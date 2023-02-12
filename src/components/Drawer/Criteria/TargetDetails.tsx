import React, { useContext, useEffect, useState } from 'react';
import { AssignContext } from '../../../context/AssignProvider';
import Image from '../../Image';

const TargetDetails = () => {

    const AssignContexts = useContext(AssignContext);
    const {
        criterias,
        singleCriteria,
        getSingleCriteria
    } = AssignContexts;

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
    }

    console.log('-------&&&&', singleCriteria);


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

            <div className='flex mt-[25px]'>
                <div className='w-[125px] bg-ct-blue-05 pt-3 pr-2 pb-[10px] pl-3 rounded-[5px]'>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Gender</h1>
                    
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Age Range</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px] whitespace-nowrap'>Division/ District</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Profession</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px] whitespace-nowrap'>Econimic Situation</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Education</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Smoking Habit</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Hearing Disability</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Stutter</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Recording Area</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] leading-[15px]'>Recording Distance</h1>
                </div>

                <div className=' pt-3 pr-2 pb-[10px] pl-3 rounded-[5px]'>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>{singleCriteria?.gender}</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>{singleCriteria?.ageRange} year</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>
                        {
                            singleCriteria?.district?.map((value: string) => {
                                return value + ', ';
                            })
                        }
                    </h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>{singleCriteria?.profession || '-'} </h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>{singleCriteria?.economicSituation || '-'}</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>Education</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>Smoking Habit</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>Hearing Disability</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>Stutter</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>{singleCriteria?.recordingArea || '-'}</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] leading-[15px]'>{singleCriteria?.recordingDistance || '-'}</h1>
                </div>
                <div className='ml-auto'>
                    <button>Edit</button>
                </div>
            </div>

            <div className='border-t-[2px] border-blue-gray-20 my-4'></div>

            <div className='flex'>
                <div className='w-[125px] bg-ct-blue-05 pt-3 pr-2 pb-[10px] pl-3 rounded-[5px]'>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Target</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Deadline</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Reminder</h1>
                    <h1 className='text-blue-gray-75 font-medium text-[12px] mb-5 leading-[15px]'>Note</h1>

                </div>

                <div className=' pt-3 pr-2 pb-[10px] pl-3 rounded-[5px]'>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>{singleCriteria?.target || "-"}</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>{singleCriteria?.deadline || '-'}</h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>
                        {
                            singleCriteria?.reminder?.length !== 0 ?
                            singleCriteria?.reminder?.map((value: string) => {
                                return value + ', ';
                            }) : 
                            '-'
                        }
                    </h1>
                    <h1 className='text-blue-gray-80 font-medium text-[14px] mb-5 leading-[15px]'>{singleCriteria?.remark || '-'}</h1>

                </div>
            </div>

        </div>
    );
};

export default TargetDetails;