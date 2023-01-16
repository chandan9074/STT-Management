import React from 'react';
import { createCollectSimilarPropertyDT } from '../../types/dashboardTypes';


interface Props {
    data: createCollectSimilarPropertyDT[];
    colorsArray: string[]
}

const PropertyListType2 = ({ data, colorsArray }: Props) => {
   
    return (
        <div className="h-full">
            {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between w-[200px] mb-3">
                    <div className="flex items-center">
                        <div
                            style={{background:`${colorsArray[index]}`}}
                            className={`w-3 h-3 rounded-full mr-2`}
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