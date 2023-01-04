import React from 'react';
import { createCollectSimilarPropertyDT } from '../../types/dashboardTypes';

const PropertyListType2 = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
    const BgColor: any = {
        "Natural & Pure Science": {
            bgColor: "bg-[#F5427F]"
        },
        "Arts": {
            bgColor: "bg-[#3EE545]"
        },
        "Belief & Thought": {
            bgColor: "bg-[#E3F542]"
        },
        "Applied Science": {
            bgColor: "bg-[#42E0F5]"

        },
        "Commerce & Finance": {
            bgColor: "bg-[#3BA2F5]"
        },
        "Leisure": {
            bgColor: "bg-[#B336C8]"
        },
        "Literature": {
            bgColor: "bg-[#F54542]"
        },
        "World & Current Affairs": {
            bgColor: "bg-[#F5AC42]"

        },
        "Social & Community": {
            bgColor: "bg-[#FFD145]"
        },
    }

    console.log("=========", data)
    return (
        <div className="h-full">
            {data.map((item, index) => (
                <div className="flex items-center justify-between w-[230px] mb-3">
                    <div className="flex items-center">
                        <div
                            className={`w-3 h-3 rounded-full mr-2 ${BgColor[item.name]?.bgColor}`}
                        />
                        <h3 className="text-blue-gray-75 text-xs mb-0">{item.name}</h3>
                    </div>
                    <h1 className="text-ct-blue-40 text-xs mb-0">{item.contribution}%</h1>
                </div>
            ))}
        </div>
    );
};

export default PropertyListType2;