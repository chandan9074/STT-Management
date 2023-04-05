import React from 'react';
import { othersDT, remarkInfoDT } from '../../../../types/audioManagementTypes';
import RoleImage from '../../../Image/RoleImage';

type Props = {
    data: othersDT;
    remark: remarkInfoDT
}

const Others = ({ data, remark }: Props) => {

    console.log('others', remark?.deadline);

    return (
        <div>
            <div>
                <p className='text-blue-gray-80 text-xxs'>Device</p>
                <h2 className='text-blue-gray-80 font-medium text-small'>{data?.device}</h2>
            </div>

            <div className='mt-6'>
                <p className='text-blue-gray-75 text-xxs'>Remark</p>
                <div className='gap-x-[10px] flex items-center'>
                    <p className='text-blue-gray-75 text-xxs'>{remark?.deadline}</p>
                    <div className='flex items-center gap-x-2'>
                        <RoleImage height='h-4' width='w-4' role={remark.roleInfo.role} />
                        <h3 className='text-blue-gray-80 font-medium text-small'>{remark.roleInfo.name}, <span className='text-blue-gray-75 text-xxs font-normal'>{remark.roleInfo.role}</span></h3>
                    </div>
                </div>
            </div>

            <div className='bg-ct-blue-05 py-4 px-3 rounded-[7px] mt-[6px]'>
                <p className='text-xs text-blue-gray-80'>{remark.des}</p>
            </div>
        </div>
    );
};

export default Others;