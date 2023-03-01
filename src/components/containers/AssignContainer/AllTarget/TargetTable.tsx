import Buttons from '../../../Buttons';
import Table from '../../../Table';

const TargetTable = () => {
    return (
        <div className='pt-[42px] pb-[24px] pr-4 pl-6 '>
            <div className='flex items-center justify-between mb-[25px]'>
                <h1 className='text-[18px] text-ct-blue-95 font-medium'>0 Target</h1>
                <div>
                    <Buttons.IconWithTextButton.Tertiary
                        label='Update Assignee'
                        size='medium'
                        variant='CT-Blue'

                    />
                </div>
            </div>
            {/* <img className='h-[160px] w-full' src={LoadingSkeleton.AssignTable} alt="" /> */}
            <Table.Type10 />
        </div>
    );
};

export default TargetTable;