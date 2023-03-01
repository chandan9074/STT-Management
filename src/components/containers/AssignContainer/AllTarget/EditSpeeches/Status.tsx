import React from 'react';
import { AUDIO_FILE_UPLOADED } from '../../../../../helpers/Slug';

type Props = {
    data: string
}

const Status = ({data}: Props) => {
    return (
        <div>
            {
                data ?
                    <div className={`${data === AUDIO_FILE_UPLOADED ? 'bg-green-10 text-green-60' : 'bg-venetian-red text-red-60'}  flex gap-x-[6px] items-center px-[10px] py-[6px] rounded-[20px]`}>
                        <div className={`${data === AUDIO_FILE_UPLOADED ? 'bg-secondary-green-50' : 'bg-secondary-red-50'} w-[6px] h-[6px] rounded-[50%]`}></div>
                        <h4>Uploaded</h4>
                    </div>
                    :
                    <h4 className='text-xs text-blue-gray-80 font-500'>--</h4>
            }

        </div>
    );
};

export default Status;