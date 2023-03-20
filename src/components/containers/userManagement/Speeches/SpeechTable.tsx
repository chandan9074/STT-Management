import { targetSpeechDT } from '../../../../types/assignTypes';
import Table from '../../../Table';

type Props = {
    data: targetSpeechDT
}

const SpeechTable = ({data}: Props) => {
    return (
        <div>
            speech table
            <Table.Type15 data={data} />
        </div>
    );
};

export default SpeechTable;