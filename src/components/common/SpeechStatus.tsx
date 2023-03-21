import React from 'react';

type Props = {
    data: string
}

const SpeechStatus = ({ data }: Props) => {

    console.log();
    

    return (
        <div className={` ${data === 'Approved' ? 'bg-green-10' : data === 'Rejected' ? 'bg-venetian-red' : data === 'Annotated' ? 'bg-blue-gray-10' : data === 'Validated' ? 'bg-[#FAFAD2]' : ''} px-[10px] py-[6px] rounded-full gap-x-1 inline-flex items-center`}>

            <div className={`${data === 'Approved' ? 'bg-green/50-05956F' : data === 'Rejected' ? 'bg-secondary-red-50' : data === 'Annotated' ? 'bg-[#4B5563]' : data === 'Validated' ? 'bg-[#D4AF37]' : ''} w-[6px] h-[6px] rounded-full`} />
            <h1 className={`${data === 'Approved' ? 'text-green-60' : data === 'Rejected' ? 'text-red-60' : data === 'Annotated' ? 'text-[#4B5563]' : data === 'Validated' ? 'text-[#CD853F]' : ''} font-xxs`}>{data}</h1>

        </div>
    );
};

export default SpeechStatus;