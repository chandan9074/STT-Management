import { Outlet } from 'react-router-dom';
import Table from '../../components/Table';
import { collectedAudio } from '../../data/audioManagement/AudioManagementData';

const CollectingAudio = () => {
    return (
        // <Layouts.Third>
        <div>
            <Table.Type16 data={collectedAudio} />
            <Outlet />
        </div>
        // </Layouts.Third>
    );
};

export default CollectingAudio;