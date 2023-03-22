import React, { useContext, useEffect, useState } from 'react';
import Icons from '../../../../../../assets/Icons';
import { AssignContext } from '../../../../../../context/AssignProvider';
import { CriteriaItemDT, customSingleCriteriaDT } from '../../../../../../types/assignTypes';
import Buttons from '../../../../../Buttons';
import Image from '../../../../../Image';

const TargetDetailsModal = ({ setModalOpen, targetId }: { setModalOpen: React.Dispatch<React.SetStateAction<boolean>>, targetId: number }) => {

    const AssignContexts = useContext(AssignContext);
    const {
        criterias,
        singleCriteria,
        getSingleCriteria,
    } = AssignContexts;

    const singleValue1: customSingleCriteriaDT[] = [
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
            value: singleCriteria?.district.join() ?? "-"
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

    const singleValue2: customSingleCriteriaDT[] = [
        {
            title: 'Target',
            value: singleCriteria?.target.toString() || '-'
        },
        {
            title: 'Deadline',
            value: singleCriteria?.deadline || '-'
        },
        {
            title: 'Reminder',
            value: singleCriteria?.reminder.join() ?? "-"
        },
        {
            title: 'Note',
            value: singleCriteria?.remark || '-'
        },

    ]


    useEffect(() => {
        getSingleCriteria(targetId);
    }, []);

    return (
        <div className='pl-6 pt-6 pr-9 pb-[27px]'>
            <div className='flex justify-between mb-[30px]'>
                <h1 className='text-[18px] font-medium text-blue-95'>Criteria Details</h1>
                <Buttons.IconButton.Circle
                    size='medium'
                    variant="CT-Blue"
                    icon={<img src={Icons.CloseIconButton} alt="" />}
                    border='border'
                    background="white"
                    onClick={() => setModalOpen(false)}
                />
            </div>

            <div className='flex overflow-x-auto gap-x-3 mb-[25px]'>
                {
                    criterias &&
                    criterias.map((value: CriteriaItemDT, i: number) => (
                        <div key={i} className='mb-[10px]'>
                            <div
                                className={` bg-ct-blue-10 h-[54px] w-[176px] rounded-[65px] flex justify-center items-center gap-x-2 cursor-pointer`}
                            >
                                <Image.RoleImage role={value?.gender === 'Male' ? 'Speaker' : 'speakerFemale'} />
                                <div>
                                    <h1 className='text-ct-blue-90 text-xxs font-medium'>target: {value.target}</h1>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>


            <div className='grid grid-cols-12'>
                <div className='col-span-6'>

                    <div>
                        {singleValue1?.map((item: customSingleCriteriaDT, i: number) => (
                            <div className={` grid grid-cols-12`} key={i}>

                                <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3 pr-2 pl-3`}>
                                    <h1 className="text-blue-gray-75 font-medium text-xxs leading-15px whitespace-nowrap">
                                        {item?.title}
                                    </h1>
                                </div>

                                <div className="col-span-8 pt-3 pr-2 pl-3">
                                    <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                                        {item?.value}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='col-span-6'>
                    <div className='pr-7'>
                        {singleValue2?.map((item: customSingleCriteriaDT, i: number) => (
                            <div className={` grid grid-cols-12`} key={i}>

                                <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3  pl-3`}>
                                    <h1 className="text-blue-gray-75 font-medium text-xxs  leading-15px">
                                        {item?.title}
                                    </h1>
                                </div>

                                <div className="col-span-8 pt-3 pr-2 pl-3">
                                    <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                                        {item?.value}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div>
    );
};

export default TargetDetailsModal;