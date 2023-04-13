import React from 'react';
import { audioManagementRoleDT, othersUploadAudioDT } from '../../../../types/audioManagementTypes';
import RoleImage from '../../../Image/RoleImage';
import Icons from '../../../../assets/Icons';

const Others = ({ data }: { data: othersUploadAudioDT }) => {
    return (
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
    );
};

export default Others;