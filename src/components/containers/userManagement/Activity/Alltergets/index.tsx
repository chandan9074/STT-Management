import React, { useState } from 'react';
import { assignSpeechData, targetCompletedData, targetData } from '../../../../../data/assign/AssignData';
import Buttons from '../../../../Buttons';
import Table from '../../../../Table';

const AllTergets = () => {
    const [activeTab, setActiveTab] = useState<string>("Pending")
    const allTergetMenu = (key: string) => {
        const Category: any = {
            "Pending": <><Table.Type7 data={targetData} /></>,
            "Completed": <> <Table.Type14 data={targetCompletedData} /></>,
            "All Speeches": <><Table.Type13 data={assignSpeechData} /></>
        };
        return Category[key];
    };
    return (
        <div>
            <div className='flex justify-between mt-9 mb-6'>
                <div className='flex gap-6 items-center'>
                    <p className='text-heading-6 font-medium text-ct-blue-95'>All Targets</p>
                    <Buttons.TabButton.Secondary setActiveData={setActiveTab} tabLabel={['Pending', "Completed", "All Speeches"]} />
                </div>
                <div>search box and filter</div>
            </div>
           

            <div>
                {allTergetMenu(activeTab)}
            </div>
        </div>
    );
};

export default AllTergets;