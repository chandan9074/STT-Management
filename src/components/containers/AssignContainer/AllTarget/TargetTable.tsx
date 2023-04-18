import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../../../assets/Icons';
import { targetFilter } from '../../../../data/assign/AssignData';
import { RECREATE_TARGET_PATH } from '../../../../helpers/Slug';
import { targetAssignParamDT, targetDT, targetFilterListDT } from '../../../../types/assignTypes';
import Buttons from '../../../Buttons';
import { CustomModal } from '../../../common/CustomModal';
import { Filter } from '../../../Filter';
import { SearchBox } from '../../../SearchBox';
import Table from '../../../Table';
import UpdateAssigneeModal from './UpdateAssigneeModal';
import { AssignContext } from '../../../../context/AssignProvider';

const TargetTable = () => {
  const assignContext = useContext(AssignContext);
  const navigate = useNavigate();
  const [isOpenModal, setIsModalOpen] = useState<boolean>(false);
  const [selectedTarget, setSelectedTarget] = useState<targetDT[]>([] as targetDT[]);
  const [isConfirmModal, setIsConfirmModal] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const search: targetAssignParamDT = {
    page: 1,
    pageSize: 20
  };
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    targetStatus: [],
    speechStatus: [],
  });

  useEffect(() => {
    assignContext.getTargetAssign(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        count += 1
      }
    }
    setCount(count)
  }, [filterList]);

  const handleFilterList = (key: string, value: string) => {
    if (filterList[key].includes(value)) {
      setFilterList({
        ...filterList,
        [key]: filterList[key].filter((item) => item !== value),
      });
    } else {
      setFilterList({
        ...filterList,
        [key]: [...filterList[key], value],
      });
    }
  }
  const handleReset = (key: string, type: "single" | "all") => {
    if (type === "all") {
      setFilterList({
        targetStatus: [],
        speechStatus: [],
      })
    }
    else {
      setFilterList({
        ...filterList,
        [key]: [],
      });
    }
  }

  const handleSubmitFilter = () => {

  }


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
            <SearchBox.Type1 inputWidth="w-52" placeholder="Search with script ID, Title..." bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
            <Filter.Type2 handleSubmitFilter={handleSubmitFilter} filterData={targetFilter} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
          </div>
        </div>
      </div>
      {/* <Table.Type10 data={targetData} setSelectedTarget={setSelectedTarget} /> */}
      <Table.Type10 data={assignContext.targetsAssign} setSelectedTarget={setSelectedTarget} />


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