import { LoadingSkeleton } from '../../../../assets/loadingSkeleton';
import Table from '../../../Table';

const TargetTable = () => {
    return (
        <div className='pt-[42px] pb-[24px] pr-4 pl-6 '>
            <h1 className='text-[18px] text-ct-blue-95 font-medium mb-[25px]'>0 Target</h1>
            {/* <img className='h-[160px] w-full' src={LoadingSkeleton.AssignTable} alt="" /> */}
            <Table.Type10 />
        </div>
    );
};

export default TargetTable;