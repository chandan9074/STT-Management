import React from 'react';

type MetaDataDT = {
    keyName: any;
    value: any
}

interface Props {
    metaData: MetaDataDT[]
}
const Type1 = (props: Props) => {
    const { metaData } = props

    return (
        <div className='py-1'>
            {
                metaData.map((data: any, index: number) =>
                    <div className='flex' key={index}>
                        <div className={`bg-[#F4F7FA] ${index === 0 ? "rounded-t-[5px]" : index === metaData.length - 1 ? "rounded-b-[5px]" : ""} w-[125px]`}>
                            <p className='text-xxs font-medium text-blue-gray-75 px-3 py-2'>{data.keyName}</p>
                        </div>
                        <div className='w-[296px]'>
                            <p className='text-small font-medium text-blue-gray-80 px-3 py-2'>
                                {data.value.length === 0 ? "--" : data.value}
                            </p>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Type1;