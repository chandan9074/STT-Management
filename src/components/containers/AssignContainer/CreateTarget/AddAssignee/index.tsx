import React, {useState} from 'react';
import TargetBox from "../TargetBox";
import Type1 from "../../../../Drawer/Criteria/Type1";
import CriteriaForm from "../CreateCriteria/CriteriaForm";

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
                <Type1
                    isDrawerOpen={drawerOpen}
                    drawerClose={drawerClose}
                    title='Create Critaria'
                >
                    <CriteriaForm />
                </Type1>
            </div>
        </div>
    );
};

export default AddAssignee;