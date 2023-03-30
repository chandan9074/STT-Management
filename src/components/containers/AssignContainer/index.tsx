import { Outlet } from 'react-router-dom';


const AssignContainer = () => {


    return (

        <div>
            {/* <div className='bg-white shadow-box pl-[325px] pt-[110px] pb-[24px]'>
                <div className='flex justify-between items-center mb-[23px]'>
                    <div>
                        <h1 className='text-blue-95 text-[18px] font-medium'>All Targets</h1>
                        <h2 className='text-ct-blue-90 text-small'>List of Target, Target Creation and Assignment</h2>
                    </div>
                    <div>
                       <Link to={CREATE_TARGET_PATH}>
                       <Buttons.IconWithTextButton.Primary
                            label="Create Target"
                            size="small"
                            variant="Megenta"
                            icon={<img src={Icons.Add} alt="add" />}
                        /></Link>
                    </div>
                </div>

                <AudioStatus />
            </div>

            <TargetTable /> */}

            <Outlet></Outlet>
        </div>
    );
};

export default AssignContainer;