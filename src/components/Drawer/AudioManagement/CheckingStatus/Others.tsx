import React, { useEffect, useState } from 'react';
import { audioManagementRoleDT, historyRemarkDT, journeySpeakersRoleDT, othersDT } from '../../../../types/audioManagementTypes';
import RoleImage from '../../../Image/RoleImage';
import Icons from '../../../../assets/Icons';
import { isEmpty } from '../../../../helpers/Utils';

type Props = {
    data: othersDT;
    remark: historyRemarkDT[]
}

const Others = ({ data, remark }: Props) => {
    const [isMale, setIsMale] = useState<boolean>(false);
    const [isFemale, setIsFemale] = useState<boolean>(false);

    useEffect(() => {
        data.journey.speakers.role.map((item: journeySpeakersRoleDT) => {
            if (item.gender.toLowerCase() === 'male'.toLowerCase()) {
                setIsMale(true);
            }
            if (item.gender.toLowerCase() === 'female'.toLowerCase()) {
                setIsFemale(true);
            }
            return item;
        });

    }, [data.journey.speakers.role])


    return (
        <div className='pb-12'>
            <div>
                <p className='text-blue-gray-80 text-xxs'>Device</p>
                <h2 className='text-blue-gray-80 font-medium text-small'>{data?.device}</h2>
            </div>

            {
                remark.map((item: historyRemarkDT, i: number) => (
                    <div className='mt-6' key={i}>
                        <div>
                            <p className='text-blue-gray-75 text-xxs'>Remark</p>
                            <div className='gap-x-[10px] flex items-center'>
                                <p className='text-blue-gray-75 text-xxs'>{item?.deadline}</p>
                                <div className='flex items-center gap-x-2'>
                                    <RoleImage height='h-4' width='w-4' role={item.roleInfo.role} />
                                    <h3 className='text-blue-gray-80 font-medium text-small'>{item.roleInfo.name}, <span className='text-blue-gray-75 text-xxs font-normal'>{item.roleInfo.role}</span></h3>
                                </div>
                            </div>
                        </div>

                        <div className='bg-ct-blue-05 py-4 px-3 rounded-[7px] mt-[6px]'>
                            <p className='text-xs text-blue-gray-80'>{item.des}</p>
                        </div>
                    </div>
                ))
            }

            <div className='mt-6'>
                <h4 className='text-blue-gray-75 text-xxs'>Journey</h4>
                {/* Role */}
                <div className='border-[1px] border-blue-gray-30 rounded-[7px] mt-[10px] px-4 py-5'>
                    {
                        data.journey.role.map((item: audioManagementRoleDT, i: number) => (
                            <div key={i}>
                                <div className='flex justify-between'>
                                    <div className='flex gap-x-[10px]'>
                                        <RoleImage height='h-6' width='w-6' role={item.role} />
                                        <div>
                                            <h2 className='text-blue-gray-80 font-medium text-xxs leading-[14.4px] mb-[2px]'>{item.name}</h2>
                                            <p className='text-blue-gray-75 text-xxs leading-[15.6px]'>{item.role}</p>
                                        </div>
                                    </div>
                                    <p className='text-blue-gray-75 font-medium text-xxs'>{item.date}</p>
                                </div>
                                <div className='mt-2 mb-2 flex justify-center'>
                                    <img className='h-7' src={Icons.Vector3} alt="" />
                                </div>
                            </div>
                        ))
                    }

                    {/* Speaker */}
                    <div className='flex'>
                        <div className='relative flex'>
                            <RoleImage height='h-6' width='w-6' role={isMale ? 'speaker' : 'speakerFemale'} />
                            {
                                data.journey.speakers.role.length > 1 &&
                                <div className='absolute left-[14px] w-full ring-2 ring-white rounded-full'>
                                    <RoleImage height='h-6' width='w-6' role={isFemale ? 'speakerFemale' : 'speaker'} />
                                </div>
                            }
                        </div>

                        <div className='ml-[25px]'>
                            <div className='flex mb-[2px]'>
                                {
                                    data.journey.speakers.role.map((item: journeySpeakersRoleDT, i: number) => (
                                        <h2 key={i} className='text-blue-gray-80 font-medium text-xxs leading-[14.4px]'>{item.name}, </h2>
                                    ))
                                }

                            </div>
                            <p className='text-blue-gray-75 text-xxs leading-[15.6px]'>{data.journey.speakers.locality}, {data.journey.speakers.roleTitle}</p>
                        </div>
                    </div>

                    <div className='mt-2 mb-2 flex justify-center'>
                        <img className='h-7' src={Icons.Vector3} alt="" />
                    </div>

                    {
                        !isEmpty(data.journey.audioChecker) &&
                        <div >
                            <div className='flex justify-between'>
                                <div className='flex gap-x-[10px]'>
                                    <RoleImage height='h-6' width='w-6' role={data.journey.audioChecker.role} />
                                    <div>
                                        <h2 className='text-blue-gray-80 font-medium text-xxs leading-[14.4px] mb-[2px]'>{data.journey.audioChecker.name}</h2>
                                        <p className='text-blue-gray-75 text-xxs leading-[15.6px]'>{data.journey.audioChecker.locality}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-blue-gray-75 font-medium text-xxs'>Picked:</p>
                                    <p className='text-blue-gray-75 font-medium text-xxs'>{data.journey.audioChecker.pickedDate}</p>
                                </div>
                            </div>

                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Others;