import React, { useState } from 'react';
import { targetData } from '../../../../../data/assign/AssignData';
import Buttons from '../../../../Buttons';
import Table from '../../../../Table';

const AllTergets = () => {
    const [activeTab, setActiveTab] = useState<string>("Pending")
    const allTergetMenu = (key: string) => {
        const Category: any = {
            "Pending": <><Table.Type7 data={targetData} /></>,
            "Completed": <></>,
            "All Speeches": <></>
        };
        return Category[key];
    };
    return (
        <div>
            <div className='flex justify-between mb-[27px]'>
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