import { useState } from 'react';
import { annotatedFiles } from '../../../../../data/audioManagement/AudioManagementData';
import Table from '../../../../Table';
import { CategoryMap } from '../../../dashboard/DataContainer/CollectData';
import Header from './Header';
import { annotatedFilesDT } from '../../../../../types/audioManagementTypes';

const AllAnnotatedFiles = () => {

    const [activeTab, setActiveTab] = useState<string>("Sentence");
    const [selectedScript, setSelectedScript] = useState<annotatedFilesDT[]>([] as annotatedFilesDT[]);

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
             <Header setActiveTab={setActiveTab} selectedScript={selectedScript} setSelectedScript={setSelectedScript}/>
            <div>
                {allTergetMenu(activeTab)}
            </div>
        </div>
    );
};

export default AllAnnotatedFiles;