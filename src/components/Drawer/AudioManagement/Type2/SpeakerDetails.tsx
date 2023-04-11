import React, { Dispatch, SetStateAction } from 'react';
import { speakerUploadAudioDT } from '../../../../types/audioManagementTypes';
import { customSingleCriteriaDT } from '../../../../types/assignTypes';
import BackButtonTitle from '../../../common/BackButtonTitle';

const SpeakerDetails = ({ data, setIsSpeaker }: { data: speakerUploadAudioDT, setIsSpeaker: Dispatch<SetStateAction<boolean>> }) => {

    const singleValue1: customSingleCriteriaDT[] = [
        {
            title: 'No of Speaker',
            value: data.speakerNo ?? '-'
        },
        {
            title: 'Gender',
            value: data.gender.join(', ') ?? '-'
        },
        {
            title: 'Area',
            value: data.area ?? '-'
        },
        {
            title: 'Age',
            value: data.age.join(', ') ?? '-'
        },

    ]

    return (
        <div className='py-[26px] px-6'>
            <div className='mb-7'>
                <BackButtonTitle title='Speaker Information' setIsData={setIsSpeaker} />
            </div>
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
    );
};

export default SpeakerDetails;