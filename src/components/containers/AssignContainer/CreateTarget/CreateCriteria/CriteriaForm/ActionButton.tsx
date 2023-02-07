
const ActionButton = () => {

    
    return (
        <div className='flex justify-end px-5 py-4 bg-white'>
            <div className='flex gap-x-[16px] '>
                <button className='duration-700 border-[1px] border-blue-30 text-ct-blue-60 hover:border-ct-blue-30 rounded-[6px] py-[9px] px-[32px]'>
                    Create
                </button>
                <button type='submit' className='duration-300 bg-primary-ct-blue-60 text-white rounded-[6px] py-[9px] px-[32px]'>
                    Save
                </button>
            </div>
        </div>
    );
};

export default ActionButton;