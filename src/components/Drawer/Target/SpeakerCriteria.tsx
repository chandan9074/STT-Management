import { useContext } from 'react';
import { AssignContext } from '../../../context/AssignProvider';

const SpeakerCriteria = () => {

    const AssignContexts = useContext(AssignContext);
    const {
        // criterias,
        singleCriteria,
        // getSingleCriteria,
    } = AssignContexts;

    const singleValue1 = [
        {
            title: 'Gender',
            value: singleCriteria?.gender || '-'
        },
        {
            title: 'Division/ District',
            value: singleCriteria?.district
        },
        {
            title: 'Age',
            value: singleCriteria?.ageRange || '-'
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


    ]

    const singleValue2 = [
        {
            title: 'Recording Area',
            value: singleCriteria?.recordingArea || '-'
        },
        {
            title: 'Recording Distance',
            value: singleCriteria?.recordingDistance || '-'
        },
    ]

    return (
        <div>
            <div className='mt-3'>
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
                                            return value + `${(item.value.length - 1) !== j ? ', ' : ''}`;
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

            </div>


            <div className='border-t-[2px] border-blue-gray-20 my-4'></div>

            <div className='pr-7'>
                {singleValue2?.map((item: any, i: number) => (
                    <div className={` grid grid-cols-12`} key={i}>

                        <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3  pl-3`}>
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
                                                item?.value?.map((value: string, j: number) => {
                                                    return value + `${(item.value.length - 1) !== j ? ', ' : ''}`;
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
        </div>
    );
};

export default SpeakerCriteria;