import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../../../assets/Icons';
import { targetFilter } from '../../../../data/assign/AssignData';
import { filterData } from '../../../../data/script/filter';
import { RECREATE_TARGET_PATH } from '../../../../helpers/Slug';
import { targetDT, targetFilterListDT } from '../../../../types/assignTypes';
import Buttons from '../../../Buttons';
import { CustomModal } from '../../../common/CustomModal';
import { Filter } from '../../../Filter';
import { SearchBox } from '../../../SearchBox';
import Table from '../../../Table';
import UpdateAssigneeModal from './UpdateAssigneeModal';

const TargetTable = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsModalOpen] = useState<boolean>(false);
  const [selectedTarget, setSelectedTarget] = useState<targetDT[]>([] as targetDT[]);
  const [isConfirmModal, setIsConfirmModal] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    targetStatus: [],
    speechStatus: [],
    subdomain: []
  })

  const handleFilterList = (key: string, value: string) => { }
  const handleReset = (key: string, type: "single" | "all") => { }


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
        <h1 className='text-[18px] text-ct-blue-95 font-medium'>{selectedTarget.reduce((acc, obj) => acc + Number(obj.target.target), 0)} Target</h1>
        <div className='flex items-center gap-x-6'>
          <div className='flex items-center gap-x-3'>
            {
              selectedTarget?.length > 0 &&
              <Buttons.IconWithTextButton.Tertiary
                label='Update Assignee'
                size='small'
                variant='CT-Blue'
                onClick={() => onModalOpen()}

              />
            }

            {
              (selectedTarget?.length > 0 && selectedTarget?.length < 2) &&
              <Buttons.IconWithTextButton.Tertiary
                label='Re-create'
                size='small'
                variant='CT-Blue'
                onClick={() => onCancelModalOpen()}
              />
            }
          </div>
          <div className='flex items-center gap-x-3'>
            <SearchBox.Type1 inputWidth="w-52" placeholder="Search with script ID, Title..." paddingX="px-3" paddingY="py-2" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
            <Filter.Type2 filterData={targetFilter} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
          </div>
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