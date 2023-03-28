import React from 'react';
import { STATUS_ANNOTATED, STATUS_APPROVED, STATUS_CLAIMED, STATUS_DECLINED, STATUS_REJECT, STATUS_REJECTED, STATUS_VALIDATED } from '../../helpers/ConditionVariable';

type Props = {
    data: string
}

const SpeechStatus = ({ data }: Props) => {

    return (
        <div className={` ${data.includes(STATUS_APPROVED) ? 'bg-green-10' : data.includes(STATUS_REJECTED) || data.includes(STATUS_REJECT) || data.includes(STATUS_DECLINED) ? 'bg-venetian-red' : data.includes(STATUS_ANNOTATED) ? 'bg-blue-gray-10' : data.includes(STATUS_VALIDATED) ? 'bg-[#FAFAD2]' : data.includes(STATUS_CLAIMED) ? 'bg-purple-10' : ''} px-[10px] py-[2px] rounded-full gap-x-1 inline-flex items-center`}>

            <div className={`${data.includes(STATUS_APPROVED) ? 'bg-green/50-05956F' : data.includes(STATUS_REJECTED) || data.includes(STATUS_REJECT) || data.includes(STATUS_DECLINED) ? 'bg-secondary-red-50' : data.includes(STATUS_ANNOTATED) ? 'bg-[#4B5563]' : data.includes(STATUS_VALIDATED) ? 'bg-[#D4AF37]' : data.includes(STATUS_CLAIMED) ? 'bg-secondary-purple-50' : ''} w-[6px] h-[6px] rounded-full`} />
            <h1 className={`${data.includes(STATUS_APPROVED) ? 'text-green-60' : data.includes(STATUS_REJECTED) || data.includes(STATUS_REJECT) || data.includes(STATUS_DECLINED) ? 'text-red-60' : data.includes(STATUS_ANNOTATED) ? 'text-[#4B5563]' : data.includes(STATUS_VALIDATED) ? 'text-[#CD853F]' : data.includes(STATUS_CLAIMED) ? 'text-purple-60' : ''} text-xxs leading-[18px]`}>{data}</h1>

        </div>
    );
};

export default SpeechStatus;