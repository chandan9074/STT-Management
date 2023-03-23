import { useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { uploadStatus } from '../../../../../data/assign/AssignData';
import { AUDIO_FILE_FAILED, AUDIO_FILE_UPLOADED } from '../../../../../helpers/Slug';


const TargetStatus = () => {

    const [isUploaded, setIsUploaded] = useState<boolean>(false);
    const [isFailed, setIsFailed] = useState<boolean>(false);

    const onUploadStatus = (value: string) => {
        if (value === AUDIO_FILE_UPLOADED) {
            setIsUploaded(!isUploaded);
            setIsFailed(false);
        } else {
            setIsFailed(!isFailed);
            setIsUploaded(false);
        }
    }

    return (
        <div>
            {
                uploadStatus?.map((item: string, i: number) => (
                    <div onClick={() => item === AUDIO_FILE_UPLOADED ? onUploadStatus(AUDIO_FILE_UPLOADED) : onUploadStatus(AUDIO_FILE_FAILED)} className={`${(isUploaded && item === AUDIO_FILE_UPLOADED) ? 'bg-green-10' : (isFailed && item === AUDIO_FILE_FAILED) ? 'bg-venetian-red' : 'bg-white'} h-[48px] py-4 pl-4 pr-3 flex items-center justify-between ${item === AUDIO_FILE_FAILED ? 'rounded-[8px] border-[1px] rounded-t-none border-t-transparent border-blue-gray-30' : 'rounded-[8px] border-[1px] rounded-b-none border-b-transparent border-blue-gray-30 '}`} key={i}>
                        <div className='flex items-center gap-x-3'>
                            <div className={`${(item === AUDIO_FILE_UPLOADED) ? 'bg-secondary-green-50' : (item === AUDIO_FILE_FAILED) ? 'bg-secondary-red-50' : ''} w-[9px] h-[9px] rounded-[50%] `} />
                            <h1 className='text-green-60 text-sm font-medium'>{item}</h1>
                        </div>
                        {
                            ((isUploaded && item === AUDIO_FILE_UPLOADED) || (isFailed && item === AUDIO_FILE_FAILED)) &&
                            <img className='h-6 w-6' src={Icons.check_green} alt="" />
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default TargetStatus;