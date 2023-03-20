import React from 'react';

type Props = {
    data: string
}

const SpeechStatus = ({ data }: Props) => {

    console.log();
    

    return (
        <div className={` ${data === 'Approved' ? 'bg-green-10' : data === 'Rejected' ? 'bg-venetian-red' : data === 'Annotated' ? 'bg-blue-gray-10' : data === 'Validated' ? 'bg-[#FAFAD2]' : ''} px-[10px] py-[6px] rounded-full gap-x-1 inline-flex items-center`}>

            <div className={`${data === 'Approved' ? 'bg-green/50-05956F' : data === 'Rejected' ? 'bg-secondary-red-50' : data === 'Annotated' ? 'bg-blue-gray-10' : data === 'Validated' ? 'bg-[#FAFAD2]' : ''} w-[6px] h-[6px] rounded-full`} />
            <h1 className={`text-green-60 font-xxs`}>{data}</h1>

        </div>
    );
};

export default SpeechStatus;