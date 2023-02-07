import React, {useState} from 'react';
import TargetBox from "../TargetBox";
import {Drawer} from "../../../../Drawer";


const AddSript = () => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const drawerClose = () => {
        setDrawerOpen(false)
    }

    const openDrawer = () => {
        setDrawerOpen(true);
    }

    return (
        <div>
            {
                    <div className='bg-white w-[376px] h-[332px] flex justify-center items-center rounded-t-[6px]'>
                        <TargetBox
                            targetTitle={'Add Script'}
                            onClick={openDrawer}
                        />
                    </div>

            }

            <div>
                {/* Use this for create target */}
                <Drawer.Script.Type1
                    isDrawerOpen={drawerOpen}
                    drawerClose={drawerClose}
                    title='Select Script'
                >
                    import here your script file
                </Drawer.Script.Type1>
            </div>
        </div>
    );
};

export default AddSript;