import { Dispatch, SetStateAction, useRef, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import Buttons from '../../../../Buttons';
import { AUDIO_FILE_UPLOADED } from '../../../../../helpers/Slug';
import Type4 from '../../../../common/CustomModal/Type4';

type Props = {
    data: any,
    audioId: number,
    speechData: any,
    setSpeechData: Dispatch<SetStateAction<any>>,
    setAudioUploadStatus?: Dispatch<SetStateAction<any>>,
}


const tracks = {
    id: 0,
    title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
    duration: "5:00",
    url:
        "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
}

const AudioUpload = ({ data, audioId, speechData, setSpeechData, setAudioUploadStatus }: Props) => {
    // const [selectedFile, setSelectedFile] = useState<any>(null);
    // const [uploadProgress, setUploadProgress] = useState<any>(0);

    // const [selectedTrack, setSelectedTrack] = useState(tracks);

    const selectedTrack = tracks;

    const [audioMin, setAudioMin] = useState<string>('');

    const [openModal, setOpenModal] = useState<boolean>(false);

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


    console.log('data--------------', data);


    return (
        <div>
            <input type="file" accept="audio/mpeg" onChange={handleFileSelect} hidden ref={fileInputRef} />

            {
                data === null ?
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
                            <h4 className='text-xs font-semibold text-secondary-blue-50'>{data?.name}</h4>
                            <h4 className='text-blue-gray-75 text-xs'>{audioMin} min</h4>
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