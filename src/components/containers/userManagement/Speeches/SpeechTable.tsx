import { targetSpeechDT } from '../../../../types/assignTypes';
import Table from '../../../Table';

type Props = {
    data: targetSpeechDT
}

const SpeechTable = ({ data }: Props) => {
    return (
        <div className='mt-6'>
            <div className='mb-5'>
                <h2 className='text-ct-blue-95 text-heading-6 font-medium'>All Speeches</h2>
            </div>
            <Table.Type15 data={data} />
        </div>
    );
};

export default SpeechTable;