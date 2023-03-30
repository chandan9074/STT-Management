import React, { useState } from 'react';
import { annotatedFiles } from '../../../../../data/audioManagement/AudioManagementData';
import Buttons from '../../../../Buttons';
import Table from '../../../../Table';
import { CategoryMap } from '../../../dashboard/DataContainer/CollectData';

const AllAnnotatedFiles = () => {

    const [activeTab, setActiveTab] = useState<string>("Sentence");

    const allTergetMenu = (key: string) => {
        const Category: CategoryMap = {
            "Sentence": <><Table.Type21 data={annotatedFiles} /></>,
            "Word": <></>,
            "Phoneme": <></>
        };
        return Category[key];
    };


    return (
        <div>
             <div className='flex justify-between'>
                <div>
                    <p className='text-heading-6 font-medium text-ct-blue-95 pb-[11px]'>Annotated Files</p>
                    <Buttons.TabButton.Secondary setActiveData={setActiveTab} tabLabel={['Sentence', "Completed", "Phoneme"]} />
                </div>
            </div>
            <div>
                {allTergetMenu(activeTab)}
            </div>
        </div>
    );
};

export default AllAnnotatedFiles;