import React from 'react';
import CollectData from "./CollectData";
import CreateData from "./Createdata";

const DataContainer = () => {
    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6">
                <CreateData/>
            </div>
            <div className="col-span-6">
               <CollectData/>
            </div>
        </div>
    );
};

export default DataContainer;