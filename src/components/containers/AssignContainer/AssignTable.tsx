import { LoadingSkeleton } from '../../../assets/loadingSkeleton';

const AssignTable = () => {
    return (
        <div className='pl-[325px] pt-[42px] pb-[24px]'>
                <h1 className='text-[18px] text-ct-blue-95 font-medium mb-[25px]'>0 Target</h1>
                <img className='h-[160px] w-full' src={LoadingSkeleton.AssignTable} alt="" />
            </div>
    );
};

export default AssignTable;