import { useState } from 'react';
import CriteriaForm from "./CriteriaForm";
import TargetBox from "../TargetBox";
import { Drawer } from "../../../../Drawer";

const CreateCriteria = () => {

    // const AssignContexts = useContext(AssignContext);
    // const {
    //     criterias
    // } = AssignContexts;

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    // const [modalOpen, setModalOpen] = useState<boolean>(false);

    // const [targetId, setTargetId] = useState<number>(0);

    // const onTargetDetails = (id: number) => {
    //     setModalOpen(true);
    //     setTargetId(id);
    // }

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
                    <CriteriaForm drawerClose={drawerClose}/>
                </Drawer.Criteria.Type1>
            </div>

{/*             
            <button onClick={() => onTargetDetails(5)}>555555</button>
            
            <CustomModal.Primary
                width='892px'
                open={modalOpen}
                setOpen={setModalOpen}
            >
                <TargetDetailsModal setModalOpen={setModalOpen} targetId={targetId}/>
            </CustomModal.Primary> */}
        </div>

    );
};

export default CreateCriteria;