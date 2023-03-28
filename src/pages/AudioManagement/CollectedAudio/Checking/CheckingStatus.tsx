import Table from '../../../../components/Table';
import { checkingStatusData } from '../../../../data/audioManagement/AudioManagementData';

const CheckingStatus = () => {
    return (
        <div>
            <Table.Type17 data={checkingStatusData} />
        </div>

    );
};

export default CheckingStatus;