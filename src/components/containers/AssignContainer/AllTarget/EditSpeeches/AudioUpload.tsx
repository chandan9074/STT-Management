import { Dispatch, SetStateAction, useRef, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import Buttons from '../../../../Buttons';
import { AUDIO_FILE_UPLOADED } from '../../../../../helpers/Slug';

type Props = {
    data: any,
    audioId: number,
    speechData: any,
    setSpeechData: Dispatch<SetStateAction<any>>,
    setAudioUploadStatus?: Dispatch<SetStateAction<any>>,
}

const AudioUpload = ({ data, audioId, speechData, setSpeechData, setAudioUploadStatus }: Props) => {
    // const [selectedFile, setSelectedFile] = useState<any>(null);
    // const [uploadProgress, setUploadProgress] = useState<any>(0);
    const [audioMin, setAudioMin] = useState<string>('');

    const fileInputRef = useRef<HTMLInputElement>(null);

    const convertAudioToMin = (file: any) => {
        const audio = new Audio();
        audio.src = URL.createObjectURL(file);
        audio.addEventListener('canplaythrough', () => {
            const duration = audio.duration;
            const minutes = Math.floor(duration / 60);
            const seconds = Math.floor(duration % 60);
            setAudioMin(minutes + '.' + seconds);
        });
    }

    const handleFileSelect = (event: any) => {
        const file = event.target.files[0];
        // setSelectedFile(file);
        convertAudioToMin(file);

        const index = speechData.findIndex((item: any) => item?.id === audioId);
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

        // setAudioUploadStatus(AUDIO_FILE_UPLOADED);

    };

    // const handleFileUpload = async () => {
    //     const formData = new FormData();
    //     formData.append('file', selectedFile);
    // try {
    //   const response = await fetch('/upload', {
    //     method: 'POST',
    //     body: formData,
    //     onUploadProgress: (progressEvent: any) => {
    //       const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
    //       setUploadProgress(progress);
    //     },
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
    // };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    }

    return (
        <div>
            <input type="file" accept="audio/mpeg" onChange={handleFileSelect} hidden ref={fileInputRef} />

            {
                data === null ?
                    <Buttons.IconWithTextButton.Secondary
                        label='Upload AUdio'
                        size='small'
                        variant='Megenta'
                        icon={<img src={Icons.UploadMagenta} alt='' />}
                        iconAlign="start"
                        onClick={handleButtonClick}
                    />
                    :
                    <div className='flex gap-x-[10px] items-start'>
                        <img src={Icons.MusicBlue} alt="" className='mt-[4px]' />
                        <div>
                            <h4 className='text-xs font-semibold text-secondary-blue-50'>{data?.name}</h4>
                            <h4 className='text-blue-gray-75 text-xs'>{audioMin} min</h4>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AudioUpload;