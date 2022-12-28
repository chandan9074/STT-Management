import React from 'react';
import CreateData from "./CreateData";
import CollectData from "./CollectData";

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