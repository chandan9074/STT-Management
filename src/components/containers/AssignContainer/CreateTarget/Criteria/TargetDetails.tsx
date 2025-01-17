import { useContext, useEffect, useState } from 'react';
import { AssignContext } from '../../../../../context/AssignProvider';
import { CriteriaItemDT, customSingleCriteriaDT } from '../../../../../types/assignTypes';
import Image from '../../../../Image';
import Buttons from '../../../../Buttons';

const TargetDetails = ({ onLengthClickClose }: { onLengthClickClose: () => void }) => {

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
            value: singleCriteria?.district?.join(', ') ?? "-"
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

    const singleValue2: customSingleCriteriaDT[] = [
        {
            title: 'Target',
            value: singleCriteria?.target?.toString() || '-'
        },
        {
            title: 'Deadline',
            value: singleCriteria?.deadline || '-'
        },
        {
            title: 'Reminder',
            value: singleCriteria?.district?.join(', ') ?? "-"
        },
        {
            title: 'Note',
            value: (singleCriteria.remark && (typeof(singleCriteria?.remark) !== 'string') && singleCriteria?.remark.Des) || '-'
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
                    criterias.map((value: CriteriaItemDT, i: number) => (
                        <div key={i} className='mb-[10px]'>
                            <div
                                onClick={() => onTargetClick(i)}
                                className={` ${targetId === i ? 'bg-ct-blue-10' : 'bg-white'} h-[54px] w-[176px] rounded-[65px] flex justify-center items-center gap-x-2 cursor-pointer`}
                            >
                                <Image.RoleImage role={value?.gender.toLowerCase() === 'Male'.toLowerCase() ? 'Speaker' : 'speakerFemale'} />
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
                <div
                    className='ml-auto'>
                    {/* <button onClick={() => onEditClick()} className='text-ct-blue-60'>Edit</button> */}
                    <Buttons.LabelButton.Tertiary label='Edit' size='xSmall' variant='Blue' onClick={() => onEditClick()} />
                </div>
            </div>


            <div className='border-t-[2px] border-blue-gray-20 my-4'></div>

            <div className='pr-7'>
                {singleValue2?.map((item: customSingleCriteriaDT, i: number) => (
                    <div className={` grid grid-cols-12`} key={i}>

                        <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue2.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3  pl-3`}>
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

        </div >
    );
};

export default TargetDetails;

