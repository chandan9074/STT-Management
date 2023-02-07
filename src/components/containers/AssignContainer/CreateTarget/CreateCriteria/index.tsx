import React, {useState} from 'react';
import CriteriaForm from "./CriteriaForm";
import TargetBox from "../TargetBox";
import {Drawer} from "../../../../Drawer";
import Type1 from "../../../../Drawer/Script/Type1";

const CreateCriteria = () => {


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
                    <Drawer.Criteria.Type1
                        isDrawerOpen={drawerOpen}
                        drawerClose={drawerClose}
                        title='Create Critaria'
                    >
                        <CriteriaForm />
                    </Drawer.Criteria.Type1>
                </div>
            </div>

    );
};

export default CreateCriteria;