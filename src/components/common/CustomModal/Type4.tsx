import React from 'react';
import Icons from '../../../assets/Icons';
import { assignAudioTrackDT } from '../../../types/assignTypes';
import Buttons from '../../Buttons';
import AudioWave from '../audioWave';


type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedTrack?: assignAudioTrackDT;
    data: assignAudioTrackDT,
    audioMin: string
}

const Type4 = ({ open, setOpen, selectedTrack, data, audioMin }: Props) => {

    // const [remainingTime, setRemainingTime] = useState('');

    // const calculateRemainingTime = (currentTime: number, duration: number) => {
    //     const remainingSeconds = duration - currentTime;
    //     const minutes = Math.floor(remainingSeconds / 60);
    //     const seconds = Math.floor(remainingSeconds % 60);
    //     const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    //     return `${minutes}:${formattedSeconds}`;
    // }

    // const handleTimeUpdate = (event: React.SyntheticEvent<HTMLAudioElement>) => {
    //     const audioElement = event.target as HTMLAudioElement;
    //     const { currentTime, duration } = audioElement;
    //     const remainingTime = calculateRemainingTime(currentTime, duration);
    //     setRemainingTime(remainingTime);
    // }

    return (
        <div className={`fixed w-full h-screen z-[100] top-0 left-0 flex justify-center`}>
            <div className={`${open ? "block" : "hidden"} fixed top-0 left-0 bg-opacity-20 bg-black w-full h-screen z-40 animate-fadeIn2`}
                onClick={() => setOpen(false)}
            />
            <div className={`${open ? "block" : "hidden"} bottom-0 z-[200] absolute bg-white w-[952px] rounded-t-xl pt-2 animate-slideUp`}>
                <div className="px-4 pb-8">
                    <div className='flex justify-between items-center '>

                        <div className='flex justify-between items-center text-[#677499]'>
                            <img src={Icons.MusicIcon} alt="" className='mr-[10px]' />
                            <div>{data?.title ? data?.title : data?.name}</div>
                            <div className='w-1 h-1 rounded-full bg-[#B8BFCC] mx-[6px]' />
                            {/* {!data?.duration ? (audioMin.toString().split(".")[0]) + "." + (audioMin.toString().split(".")[1].slice(0, 2)) : (selectedTrack.duration.toString().split(".")[0]) + "." + (selectedTrack.duration.toString().split(".")[1].slice(0, 2))} min */}
                            {data?.duration && (audioMin.toString().split(".")[0]) + "." + (audioMin.toString().split(".")[1].slice(0, 2))} min
                        </div>
                        <Buttons.IconButton.Circle
                            size='medium'
                            variant="CT-Blue"
                            icon={<img src={Icons.CloseIconButton} alt="" />}
                            border='border'
                            background="white"
                            onClick={() => setOpen(false)}
                        />

                    </div>
                    {
                        selectedTrack &&
                        <AudioWave data={data} selectedTrack={selectedTrack} audioMin={audioMin} />
                    }

                    {/* Remaining Audio time */}

                </div>
            </div>
        </div>
    )
}

export default Type4