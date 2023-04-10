import React from 'react';
import { customSingleCriteriaDT } from '../../../../types/assignTypes';
import { speechInfo } from '../../../../types/audioManagementTypes';

const SpeechInfo = ({ data }: { data: speechInfo }) => {

    const singleValue1: customSingleCriteriaDT[] = [
        {
            title: 'Data Type',
            value: data.dataType ?? '-'
        },
        {
            title: 'File Type',
            value: data.fileType ?? '-'
        },
        {
            title: 'Source Reference',
            value: data.dataType ?? '-'
        },
        {
            title: 'Data Source',
            value: data.sourceReference ?? '-'
        },
        {
            title: 'Domain',
            value: data.domain ?? '-'
        },
        {
            title: 'Sub Domain',
            value: data.subDomain ?? '-'
        }

    ]

    return (
        <div>
            {singleValue1?.map((item: customSingleCriteriaDT, i: number) => (
                <div className={` grid grid-cols-12`} key={i}>

                    <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3 pr-2 pl-3`}>
                        <h1 className="text-blue-gray-75 font-medium text-xxs leading-15px whitespace-nowrap">
                            {item?.title}
                        </h1>
                    </div>

                    <div className="col-span-8 pt-3 pr-2 pl-3">
                        <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                            {item?.value}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SpeechInfo;