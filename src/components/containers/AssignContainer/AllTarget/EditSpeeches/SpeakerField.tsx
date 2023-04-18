import { Dispatch, SetStateAction } from 'react';
import Icons from '../../../../../assets/Icons';
import { speechDt } from '../../../../../types/assignTypes';
import Speaker from '../../../AudioManagement/TableField/Speaker';

type Props = {
    setIsSpeakerModal: Dispatch<SetStateAction<boolean>>;
    setSpeechId: Dispatch<SetStateAction<string>>;
    data: speechDt;
}

const SpeakerField = ({ data, setIsSpeakerModal, setSpeechId }: Props) => {

    const onAddSpeaker = (id: string) => {
        setIsSpeakerModal(true)
        setSpeechId(id);
    }

    return (
        <div onClick={() => onAddSpeaker(data?.id)} className='flex justify-between items-center cursor-pointer'>
            {
                data?.speaker.length > 0 ?
                    <Speaker data={data?.speaker} />
                    :
                    <button className='flex items-center gap-x-[10px]'>
                        <img className='w-4 h-4' src={Icons.AccountCircle} alt="" />
                        <h1 className='text-blue-gray-60 text-xs font-medium'>Add Speaker</h1>
                    </button>
            }
            <img className='w-[7px] h-1' src={Icons.arrow_drop_down_blue_gray} alt="" />
        </div>
    );
};

export default SpeakerField;