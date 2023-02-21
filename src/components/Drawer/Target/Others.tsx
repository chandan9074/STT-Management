import React, { useContext } from 'react';
import { AssignContext } from '../../../context/AssignProvider';

const Others = () => {
    const AssignContexts = useContext(AssignContext);
    const {
        singleCriteria
    } = AssignContexts;  

    const singleValue2 = [
        {
            title: 'Reminder',
            value: singleCriteria?.reminder || []
        },
        {
            title: 'Note',
            value: singleCriteria?.remark || '-'
        },
    ]

    return (
        <div>
            {singleValue2?.map((item: any, i: number) => (
                <div className={` grid grid-cols-12`} key={i}>

                    <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue2.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3  pl-3`}>
                        <h1 className="text-blue-gray-75 font-medium text-xxs  leading-15px">
                            {item?.title}
                        </h1>
                    </div>

                    <div className="col-span-8 pt-3 pr-2 pl-3">
                        {
                            item?.title === "Reminder" ? (
                                <h1 className="text-blue-gray-80 font-medium text-small  leading-15px">
                                    {
                                        item.value?.length > 0 ?
                                            item?.value?.map((value: string, j: number) => {
                                                return value + `${(item.value.length - 1) !== j ? ', ' : ''}`;
                                            }) :
                                            '-'
                                    }
                                </h1>
                            ) : (
                                <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                                    {item?.value}
                                </h1>
                            )}
                    </div>

                </div>

            ))}
        </div>
    );
};

export default Others;