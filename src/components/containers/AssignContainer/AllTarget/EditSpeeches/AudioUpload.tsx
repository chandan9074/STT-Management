import { Dispatch, SetStateAction, useRef, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import Buttons from '../../../../Buttons';
import { AUDIO_FILE_UPLOADED } from '../../../../../helpers/Slug';
import Type4 from '../../../../common/CustomModal/Type4';
import { assignAudioTrackDT, assignSpeechDT, speechDt } from '../../../../../types/assignTypes';

type Props = {
    data: assignAudioTrackDT,
    audioId: string,
    speechData: speechDt[],
    setSpeechData: Dispatch<SetStateAction<speechDt[]>>,
    setAudioUploadStatus?: Dispatch<SetStateAction<string>>,
}

const AudioUpload = ({ data, audioId, speechData, setSpeechData, setAudioUploadStatus }: Props) => {

    const selectedTrack = data;

    const [audioMin, setAudioMin] = useState<string>('');

    const [openModal, setOpenModal] = useState<boolean>(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const convertAudioToMin = (file: Blob | File) => {
        const audio = new Audio();
        audio.src = URL.createObjectURL(file);
        audio.addEventListener('canplaythrough', () => {
            const duration = audio.duration;
            const minutes = Math.floor(duration / 60);
            const seconds = Math.floor(duration % 60);
            setAudioMin(minutes + '.' + seconds);
            console.log(file, "file");

        });
    }

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            convertAudioToMin(file);

            const index = speechData.findIndex((item: speechDt) => item?.id === audioId);
            if (index === -1) {
                return;
            }
            const newData = [...speechData];
            newData[index] = {
                ...newData[index],
                speech: file,
                audioUploadStatus: AUDIO_FILE_UPLOADED

            };
            setSpeechData(newData);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    }

    return (
        <div>
            <input type="file" accept="audio/mpeg" onChange={handleFileSelect} hidden ref={fileInputRef} />

            {
                data?.url === '' ?

                    <Buttons.IconWithTextButton.Secondary
                        label='Upload Audio'
                        size='small'
                        variant='Megenta'
                        icon={<img src={Icons.UploadMagenta} alt='' />}
                        iconAlign="start"
                        onClick={handleButtonClick}
                    />
                    :
                    <div className='flex gap-x-[10px] items-start '>

                        <img src={Icons.MusicBlue} alt="" className='mt-[4px]' />
                        <div className='cursor-pointer' onClick={() => setOpenModal(true)}>
                            <h4 className='text-xs font-semibold text-secondary-blue-50'>{data?.title ? data.title : data?.name}</h4>
                            <h4 className='text-blue-gray-75 text-xs'>{audioMin !== '' ? audioMin : data?.duration} min</h4>
                        </div>
                        {
                            openModal &&
                            <Type4
                                open={openModal}
                                setOpen={setOpenModal}
                                selectedTrack={selectedTrack}
                                data={data}
                                audioMin={audioMin}
                            />
                        }
                    </div>
            }
        </div>
    );
};

export default AudioUpload;