import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../../../assets/Icons';
import { RECREATE_TARGET_PATH } from '../../../../helpers/Slug';
import { targetDT } from '../../../../types/assignTypes';
import Buttons from '../../../Buttons';
import { CustomModal } from '../../../common/CustomModal';
import Table from '../../../Table';
import UpdateAssigneeModal from './UpdateAssigneeModal';

const TargetTable = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsModalOpen] = useState<boolean>(false);
  const [selectedTarget, setSelectedTarget] = useState<targetDT[]>([] as targetDT[]);

  const [isConfirmModal, setIsConfirmModal] = useState<boolean>(false);

  const onCancelModalOpen = () => {
    setIsConfirmModal(true);
  };

  const onSave = () => {
    setIsConfirmModal(false);
    navigate(`${RECREATE_TARGET_PATH}/${selectedTarget[0]?.id}`)
  }

  const onModalClose = () => {
    setIsModalOpen(false);
  };
  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='pt-[42px] pb-[24px] pr-4 pl-6 '>
      <div className='flex items-center justify-between mb-[25px]'>
        <h1 className='text-[18px] text-ct-blue-95 font-medium'>0 Target</h1>
        <div className='flex'>
          {
            selectedTarget?.length > 0 &&
            <Buttons.IconWithTextButton.Tertiary
              label='Update Assignee'
              size='medium'
              variant='CT-Blue'
              onClick={() => onModalOpen()}

            />
          }

          {
            (selectedTarget?.length > 0 && selectedTarget?.length < 2) &&
            <Buttons.IconWithTextButton.Tertiary
              label='Re-create'
              size='medium'
              variant='CT-Blue'
              onClick={() => onCancelModalOpen()}
            />
          }
        </div>
      </div>
      <Table.Type10 setSelectedTarget={setSelectedTarget} />


      {
        isOpenModal &&
        <UpdateAssigneeModal
          handleModal={onModalClose}
          targetId={selectedTarget.map((item) => item.id)}
        />
      }

      <CustomModal.Type3
        open={isConfirmModal}
        setOpen={setIsConfirmModal}
        onSave={onSave}
        title='Do you want to re-create this target?'
        cancelText='No'
        saveText='Yes'
        icon={Icons.FluentMagic}
        iconHeight='h-9'
        iconWidth='w-9'
      />

    </div>
  );
};

export default TargetTable;