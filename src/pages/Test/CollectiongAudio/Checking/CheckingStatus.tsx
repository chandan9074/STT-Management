import Table from '../../../../components/Table';
import { checkingStatusData } from '../../../../data/audioManagement/collectedAudio/CheckingStatusData';

const CheckingStatus = () => {
    return (
        <Table.Type17 data={checkingStatusData} />

    );
};

export default CheckingStatus;