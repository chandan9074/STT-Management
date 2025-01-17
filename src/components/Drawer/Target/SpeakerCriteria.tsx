import { useEffect, useState } from 'react';
import { TargetItemDT, customSingleCriteriaDT, targetDT } from '../../../types/assignTypes';

type Props = {
    data?: targetDT | TargetItemDT;
    isParmanentAddress?: boolean;
}

const SpeakerCriteria = ({ data, isParmanentAddress }: Props) => {

    const [singleValue1, setSingleValue1] = useState<customSingleCriteriaDT[]>([
        {
            title: 'Gender',
            value: data?.target?.gender || '-'
        },
        {
            title: 'Childhood Area',
            value: data?.target?.childhoodPlace ? data?.target?.childhoodPlace : "-"
        },
        {
            title: 'Age',
            value: data?.target?.ageRange || '-'
        },
        {
            title: 'Econimic Situation',
            value: data?.target?.economicSituation || '-'
        },
        {
            title: 'Education',
            value: data?.target?.education || '-'
        },
        {
            title: 'Smoking Habit',
            value: data?.target?.healthFactors?.includes('Smoker') ? 'Yes' : 'No'
        },
        {
            title: 'Hearing Disability',
            value: data?.target?.healthFactors?.includes('Hearing') ? 'Yes' : 'No'
        },
        {
            title: 'Shutter',
            value: data?.target?.healthFactors?.includes('Stutter') ? 'Yes' : 'No'
        },


    ])

    const singleValue2 = [
        {
            title: 'Recording Area',
            value: data?.target?.recordingArea || '-'
        },
        {
            title: 'Recording Distance',
            value: data?.target?.recordingDistance || '-'
        },
    ]

    useEffect(() => {
        if (isParmanentAddress) {
            const newData = {
                title: 'Parmanent Address',
                value: data?.target?.district.join() || "-"
            }
            const newArray = [...singleValue1];
            newArray.splice(2, 0, newData);
            setSingleValue1(newArray);

        }
        else {
            const newData = {
                title: 'profession',
                value: data?.target?.profession || '-'
            }
            const newArray = [...singleValue1];
            newArray.splice(6, 0, newData);
            setSingleValue1(newArray);

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isParmanentAddress,data?.target?.profession,data?.target?.district])

    return (
        <div>
            <div className='mt-3'>
                <div>
                    {singleValue1?.map((item: customSingleCriteriaDT, i: number) => (
                        <div className={` grid grid-cols-12`} key={i}>

                            <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-2.5'} ${(i === 0) ? 'pt-3 pb-2.5' : (i > 0) ? 'py-2.5' : ''} col-span-4 bg-ct-blue-05 pr-2 pl-3`}>
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

            <div className='pr-0'>
                {singleValue2?.map((item: customSingleCriteriaDT, i: number) => (
                    <div className={` grid grid-cols-12`} key={i}>

                        <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-2.5'} ${(i === 0) ? 'pt-3 pb-2.5' : (i > 0) ? 'py-2.5' : ''} col-span-4 bg-ct-blue-05 pr-2 pl-3`}>
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

export default SpeakerCriteria;