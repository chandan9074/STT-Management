import React from 'react';

interface Props {
    name: string;
    value: number;
    hour: number;
    BorderColor: string
}

const PercentiseCard = ({name, value, hour, BorderColor}: Props) => {

    return (
        <div className={`h-[100px] w-full rounded-b-[8px] border-b-2 ${BorderColor}`}>
            <div className="p-5">
                <p className="text-small font-normal text-ct-blue-90-70%">{name}</p>
                <div className="flex gap-2.5 items-end">
                    <p className="text-heading-2 font-normal text-ct-blue-80">{value}%</p>
                    <p className="text-small font-normal text-ct-blue-90-70% mb-[6px]">{hour}h</p>
                </div>
            </div>
        </div>
    );
};

export default PercentiseCard;