import { useContext, useEffect, useState } from 'react';
import Table from '../../../../Table';
import { CategoryMap } from '../../../dashboard/DataContainer/CollectData';
import Header from './Header';
import { annotatedFilesDT } from '../../../../../types/audioManagementTypes';
import { AudioManagementContext } from '../../../../../context/AudioManagementProvider';

const AllAnnotatedFiles = () => {

    const [activeTab, setActiveTab] = useState<string>("Sentence");
    const [selectedScript, setSelectedScript] = useState<annotatedFilesDT[]>([] as annotatedFilesDT[]);
    const [selectedRowsData, setSelectedRowSData] = useState<annotatedFilesDT[]>([]);

    const [isConfirmCancelModal, setIsConfirmCancelModal] = useState<boolean>(false);


    const { getAnnotatedFilesData, annotatedFilesData } = useContext(AudioManagementContext);

    useEffect(() => {
        getAnnotatedFilesData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const allTargetMenu = (key: string) => {
        const Category: CategoryMap = {
            "Sentence": <><Table.Type21 data={annotatedFilesData.data} setSelectedRowSData={setSelectedRowSData} /></>,
            "Word": <></>,
            "Phoneme": <></>
        };
        return Category[key];
    };


    return (
        <div>
            <Header setActiveTab={setActiveTab} selectedScript={selectedScript} setSelectedScript={setSelectedScript} selectedRowsData={selectedRowsData} isConfirmCancelModal={isConfirmCancelModal} setIsConfirmCancelModal={setIsConfirmCancelModal} />
            <div>
                {allTargetMenu(activeTab)}
            </div>
        </div>
    );
};

export default AllAnnotatedFiles;