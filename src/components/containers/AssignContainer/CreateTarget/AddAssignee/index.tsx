import React from 'react';
import TargetBox from "../TargetBox";
import AddAssigneeModal from './AddAssigneeModal';

const AddAssignee = () => {

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