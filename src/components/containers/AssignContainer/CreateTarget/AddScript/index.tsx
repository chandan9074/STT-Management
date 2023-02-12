import React, { useState } from 'react';
import { Drawer } from "../../../../Drawer";
import ScriptModal from './ScriptModal';
import ScriptTargetBox from './ScriptTargetBox';


const AddSript = () => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

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
                    <ScriptTargetBox
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
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
            </div>
            {modalOpen && <ScriptModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
        </div>
    );
};

export default AddSript;