import React from 'react';
import { audioManagementRoleDT, historyRemarkDT, othersUploadAudioDT } from '../../../../types/audioManagementTypes';
import RoleImage from '../../../Image/RoleImage';
import Icons from '../../../../assets/Icons';
import { isEmpty } from '../../../../helpers/Utils';

const Others = ({ data, remark }: { data: othersUploadAudioDT, remark?: historyRemarkDT[] }) => {


    console.log('remark----', remark);


    return (
        <div className='flex flex-col gap-y-6 mb-4'>
            <div>
                {(remark && !isEmpty(remark)) && <h4 className='text-blue-gray-75 text-xxs'>Remark</h4>}
                {
                    (remark && !isEmpty(remark)) &&
                    remark.map((item: historyRemarkDT, i: number) => (
                        <div className='mt-6' key={i}>
                            <div>
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
            </div>
            <div>
                <h4 className='text-blue-gray-75 text-xxs'>Journey</h4>
                {/* Role */}
                <div className='border-[1px] border-blue-gray-30 rounded-[7px] mt-[10px] px-4 py-5 w-[340px]'>
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
                                {
                                    i !== data.journey.role.length - 1 &&
                                    <div className='mt-2 mb-2 flex justify-center'>
                                        <img className='h-7' src={Icons.Vector3} alt="" />
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Others;