import React, {useState} from 'react';
import TargetBox from "../../TargetBox";
import DrawerTargetElement from "../../../../Drawer/DrawerTargetElement";
import TargetElement from "../../AssssigForm/ScripForm";

const AddAssignee = () => {

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
                        targetTitle={'Create Criteria'}
                        onClick={openDrawer}
                    />
                </div>

            }

            <div>
                {/* Use this for create target */}
                <DrawerTargetElement
                    isDrawerOpen={drawerOpen}
                    drawerClose={drawerClose}
                    title='Create Critaria'
                >
                    <TargetElement />
                </DrawerTargetElement>
            </div>
        </div>
    );
};

export default AddAssignee;