import React, {useState} from 'react';
import TargetBox from "../../TargetBox";
import DrawerTarget from "../../../../Drawer/DrawerTarget";

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
                <DrawerTarget
                    isDrawerOpen={drawerOpen}
                    drawerClose={drawerClose}
                    title='Select Title'
                >
                    side drawer
                </DrawerTarget>
            </div>
        </div>
    );
};

export default AddSript;