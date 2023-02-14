import React, {useState} from 'react';
import TargetBox from "../TargetBox";
import Type1 from "../../../../Drawer/Criteria/Type1";
import CriteriaForm from "../CreateCriteria/CriteriaForm";
import AddAssigneeModal from './AddAssigneeModal';

const AddAssignee = () => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [showModal, setShowModal] = React.useState(false);


    const handleModal = (value: boolean) => {
        setShowModal(value);
    };
   

    return (
        <div>
            {
                <div className='bg-white w-[376px] h-[332px] flex justify-center items-center rounded-t-[6px]'>
                    <TargetBox
                        targetTitle={'Add Assignee'}
                        onClick={() => handleModal(true)}
                    />
                </div>

            }

            <div>
            {showModal ? (
                <AddAssigneeModal
                    handleModal={handleModal}
                />
            ) : null}
            </div>
        </div>
    );
};

export default AddAssignee;