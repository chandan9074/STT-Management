import React from 'react';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';
import AudioWave from '../audioWave';


type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedTrack?: any;
    data: any,
    audioMin: string
}



const Type4 = ({ open, setOpen, selectedTrack, data, audioMin }: Props) => {

    return (
        // <div className={`fixed ${open ? "bottom-0" : "-bottom-40"} left-0 flex justify-center h-auto w-full z-[150] duration-500`}>
        <div className={`fixed w-full h-screen z-[100] top-0`}>
            <div className={`${open ? "block" : "hidden"} fixed top-0 left-0 bg-opacity-20 bg-black w-full h-screen z-40 animate-fadeIn2`}
                onClick={() => setOpen(false)}
            />
            <div className={`${open ? "block" : "hidden"} bottom-0 z-[200] absolute bg-white w-[952px] rounded-t-xl pt-2 animate-slideUp`}>
                {/* <AudioWave /> */}
                <div className="px-4 pb-8">
                    <div className='flex justify-between items-center '>
                        <div className='flex justify-between items-center text-[#677499]'>
                            <img src={Icons.MusicIcon} alt="" className='mr-[10px]' />
                            <h6>{data ? data.name : selectedTrack.title}</h6>
                            <div className='w-1 h-1 rounded-full bg-[#B8BFCC] mx-[6px]' />
                            <p>{data ? audioMin : selectedTrack.duration}</p>
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
                    <AudioWave data={data} selectedTrack={selectedTrack} audioMin={audioMin} />

                    {/* <PlayList
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
      <br />
      <img src={Icons.audioChecker} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default Type4