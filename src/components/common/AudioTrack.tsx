import { useState } from 'react';
import Icons from '../../assets/Icons';
import { assignAudioTrackDT } from '../../types/assignTypes';
import Type4 from './CustomModal/Type4';

type Props = {
    data: assignAudioTrackDT,
}

const AudioTrack = ({ data }: Props) => {
    const selectedTrack = data;
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div>
            <div className='flex gap-x-[10px] items-start'>
                <img src={data?.url ? Icons.MusicBlue : ''} alt="" className='mt-[4px]' />
                <div className='flex flex-col gap-y-1 cursor-pointer' onClick={() => setOpenModal(true)}>
                    <h4 className='text-xs font-semibold text-secondary-blue-50 leading-[15.6px]'>{data?.title ? data.title : data?.name}</h4>
                    <h4 className='text-blue-gray-75 text-xs leading-[15.6px]'>{data?.duration && (data?.duration.toString().split(".")[0]) + "." + (data?.duration.toString().split(".")[1].slice(0, 2)) + ' min'}</h4>
                </div>
            </div>

            {
                (openModal) &&
                <Type4
                    open={openModal}
                    setOpen={setOpenModal}
                    selectedTrack={selectedTrack}
                    data={data}
                    audioMin={data?.duration ?? ''}
                />
            }
        </div>
    );
};

export default AudioTrack;