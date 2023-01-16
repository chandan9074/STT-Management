import React from "react";

interface Props {
  name: string;
  value: number;
  hour: number;
  BorderColor: string;
}

const PercentageCard = ({ name, value, hour, BorderColor }: Props) => {

    return (
        <div
            style={{borderColor:`${BorderColor}`}}
            className={`h-[80px] w-full rounded-b-[8px] border-b-2`}
        >
            <div className="px-5">
                <p className="text-small font-normal text-ct-blue-90-70%">{name}</p>
                <div className="flex gap-2.5 items-end">
                    <p className="text-heading-2 font-normal text-ct-blue-80">{value}%</p>
                    <p className="text-small font-normal text-ct-blue-90-70% mb-[6px]">{hour}h</p>
                </div>
            </div>
        </div>
  );
};

export default PercentageCard;
