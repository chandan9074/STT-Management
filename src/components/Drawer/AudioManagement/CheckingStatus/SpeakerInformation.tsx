import React, { Dispatch, SetStateAction, useState } from 'react';
import Buttons from '../../../Buttons';
import Icons from '../../../../assets/Icons';
import { singleSpeakerDT2, speakerLocalityDT2 } from '../../../../types/audioManagementTypes';
import { customSingleCriteriaDT } from '../../../../types/assignTypes';
import RoleImage from '../../../Image/RoleImage';

type Props = {
    setIsSpeaker: Dispatch<SetStateAction<boolean>>;
    data: speakerLocalityDT2;
}

const SpeakerInformation = ({ setIsSpeaker, data }: Props) => {

    const [singleSpeaker, setSingleSpeaker] = useState<singleSpeakerDT2>(data.speakers[0]);
    const [targetId, setTargetId] = useState<number>(0);

    const onTargetClick = (value: singleSpeakerDT2, id: number) => {
        setTargetId(id);
        setSingleSpeaker(value);
        // getSingleCriteria(id);
    }

    const singleValue1: customSingleCriteriaDT[] = [
        {
            title: 'Gender',
            value: singleSpeaker?.gender ?? '-'
        },
        {
            title: 'Childhood Area',
            value: singleSpeaker?.childhoodArea ?? '-'
        },
        {
            title: 'Age',
            value: singleSpeaker?.age ?? "-"
        },
        {
            title: 'profession',
            value: singleSpeaker?.profession ?? '-'
        },
        {
            title: 'Econimic Situation',
            value: singleSpeaker?.economicSituation ?? '-'
        },
        {
            title: 'Education',
            value: singleSpeaker?.education ?? '-'
        },
        {
            title: 'Smoking Habit',
            value:  singleSpeaker.smokingHabit ?? '-'
        },
        {
            title: 'Hearing Disability',
            value: singleSpeaker.hearingDisability ?? '-'
        },
        {
            title: 'Shutter',
            value:  singleSpeaker.shutter ?? '-'
        }
    ]

    const singleValue2: customSingleCriteriaDT[] = [
        {
            title: 'Recording Are',
            value: singleSpeaker?.recordingArea ?? '-'
        },
        {
            title: 'Recording Distance',
            value: singleSpeaker?.recordingDistance ?? '-'
        },
        {
            title: 'Note',
            value: singleSpeaker?.note ?? "-"
        }
    ]

    return (
        <div className='py-[24px] pl-[24px] pr-[26px] animate-fadeIn'>
            <div className='flex items-center justify-between  bg-white mb-[39px]'>
                <div className='gap-x-[28px] flex items-center'>
                    <Buttons.IconButton.Circle
                        size='medium'
                        variant="CT-Blue"
                        icon={<img src={Icons.arrow_back} alt="" />}
                        border='border'
                        background="white"
                        onClick={() => setIsSpeaker(false)}
                    />
                    <h1 className='text-ct-blue-95 text-[18px] font-medium'>Speaker Information</h1>
                </div>
               
            </div>

            <div className='flex overflow-x-auto scrollbar-hide gap-x-3'>
                {
                    data.speakers.map((value: singleSpeakerDT2, i: number) => (
                        <div key={i} className='mb-[10px]'>
                            <div
                                onClick={() => onTargetClick(value, i)}
                                className={` ${targetId === i ? 'bg-ct-blue-10' : 'bg-white'} h-[54px] w-[176px] rounded-[65px] flex justify-center items-center gap-x-2 cursor-pointer`}
                            >
                                <RoleImage height='h-6' width='w-6' role={value?.gender.toLowerCase() === 'male'.toLowerCase() ? 'Speaker' : 'speakerFemale'} />
                                <div>
                                    <h2 className='text-ct-blue-90 font-medium text-xxs'>{value.name}</h2>
                                    <p className='text-ct-blue-80 text-xxs'>{data?.locality}</p>
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

        </div>
    );
};

export default SpeakerInformation;