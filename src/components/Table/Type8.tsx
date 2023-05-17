import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Dispatch, SetStateAction, useState } from "react";
import Icons from "../../assets/Icons";
import "../../assets/css/table/type4Table.css";
import { useAssigneeContext } from "../../context/AssignProvider";
import { AssigneeItemDT, CriteriaItemDT, ScriptItemDT, TargetItemDT, postResTargetAssignParamDT, updateDraftTargetQueryParams } from "../../types/assignTypes";
import Buttons from "../Buttons";
import ScriptTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/ScriptTargetModal";
import RoleImage from "../Image/RoleImage";
import AssigneeTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/AssigneeTargetModal";
import CriteriaTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/CriteriaTargetModal";
import { Drawer } from "../Drawer";
import RemarkTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/RemarkTargetModal";

const Type8 = ({ setSelectedRowsId, setSelectedTargetState }: {
  setSelectedRowsId: Dispatch<SetStateAction<postResTargetAssignParamDT>>
  setSelectedTargetState: Dispatch<SetStateAction<TargetItemDT[]>>;

}) => {
  const { selectedTargetList: dataList, updateDraftTarget, selectedScriptList, selectedCriteriaList, selectedAssigneList } = useAssigneeContext();
  const [open, setOpen] = useState(false);
  const [openScriptModal, setOpenScriptModal] = useState<boolean>(false);
  const [selectedTarget, setSelectedTarget] = useState<TargetItemDT | null>(null);
  const [openTargetModal, setOpenTargetModal] = useState<boolean>(false);
  const [openAssigneeModal, setOpenAssigneeModal] = useState<boolean>(false);
  const [openDeadlineModal, setOpenDeadlineModal] = useState<boolean>(false);
  const [remarkModal, setRemrkModal] = useState<boolean>(false);
  const [singleTargetData, setSingleTargetData] = useState<TargetItemDT>();


  // const [drawerData, setDrawerData] = useState<any>();

  const changeScriptModal = (open: boolean, target: TargetItemDT) => {
    setOpenScriptModal(open);
    setSelectedTarget(target);
  };
  const changeTargetModal = (open: boolean, target: TargetItemDT) => {
    setOpenTargetModal(open);
    setSelectedTarget(target);
  };
  const changeAssigneeModal = (open: boolean, target: TargetItemDT) => {
    setOpenAssigneeModal(open);
    setSelectedTarget(target);
  };
  // const changeDeadlineModal = (open: boolean, target: TargetItemDT) => {
  //   setOpenDeadlineModal(open);
  //   setSelectedTarget(target);
  // };
  const changeRemarkModal = (open: boolean, target: TargetItemDT) => {
    setRemrkModal(open);
    setSelectedTarget(target);
  };

  const showDrawer = (key: TargetItemDT) => {
    setOpen(true);
    // setDrawerData(key);
  };

  const handleSelectItem = (item: ScriptItemDT | CriteriaItemDT | AssigneeItemDT, params?: updateDraftTargetQueryParams) => {
    // const params = {
    //   id: selectedTargetId,
    //   script: item.id,
    // }
    if (params) {
      updateDraftTarget(params);
    }
    setOpenScriptModal(false);
    setOpenAssigneeModal(false);
    setOpenTargetModal(false);
    console.log("hello")
    // }
  };

  // const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
  //   const newDate = DDMMYYFormater(dateString)
  //   const params = {
  //     id: selectedTarget?.id,
  //     deadline: newDate
  //   }
  //   handleSelectItem(params)
  //   setOpenDeadlineModal(false);
  // };

  const Type8columns: ColumnsType<TargetItemDT> = [
    {
      title: `${"# Target ID".toLocaleUpperCase()}`,
      width: 178,
      render: (data: TargetItemDT) => <p className="text-small text-blue-gray-80 w-20 truncate"># {data?.id}</p>,
    },
    {
      title: `${"Script".toLocaleUpperCase()}`,
      width: 178,
      render: (data: TargetItemDT) => (
        <div className="relative">
          <button onClick={() => changeScriptModal(true, data)} className="flex items-center gap-1">
            <p className="text-small text-blue-gray-80 w-40 truncate"># {data.script.id}</p>
            <button className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 p-2 rounded-full'>
              <img

                className='w-2 h-2 cursor-pointer'
                src={Icons.arrow_drop_down_blue_gray_45}
                alt="" />
            </button>
          </button>
          {openScriptModal && selectedTarget?.id === data?.id && (
            <div className="absolute bottom-11 left-0  bg-white rounded-md z-[100]">
              {
                data.script.id &&
                <ScriptTargetModal setOpenScriptModal={setOpenScriptModal} handleSelectItem={handleSelectItem} selectedItemList={selectedScriptList} selectedScriptId={data.script.id} selectedTargetId={selectedTarget.id} />
              }
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"target".toLocaleUpperCase()}`,
      width: 140,
      render: (data: TargetItemDT) => (
        <div className="relative">
          <button onClick={() => changeTargetModal(true, data)} className="flex items-center gap-1">
            <p className="text-small text-blue-gray-80">{data.target.target}</p>
            <button className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 p-2 rounded-full'>
              <img

                className='w-2 h-2 cursor-pointer'
                src={Icons.arrow_drop_down_blue_gray_45}
                alt="" />
            </button>
          </button>
          {openTargetModal && selectedTarget?.id === data?.id && (
            <div className="absolute bottom-11 left-0  bg-white rounded-md z-[100]">
              {data.target.id && <CriteriaTargetModal setOpenTargetModal={setOpenTargetModal} handleSelectItem={handleSelectItem} selectedItemList={selectedCriteriaList} selectedCriteriaId={data.target.id} selectedTargetId={selectedTarget.id} />}
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"Assignee".toLocaleUpperCase()}`,
      width: 264,
      render: (data: TargetItemDT) => (
        <div className="relative w-full flex">
          <button onClick={() => changeAssigneeModal(true, data)} className="flex w-full items-center justify-between gap-1">
            <div className="flex items-start gap-2">
              <RoleImage role={data.assignee.role} />
              <div className="flex flex-col ">
                <h2 className="font-semibold text-blue-gray-80 text-xs leading-4 mb-0.5">
                  {data.assignee.name}
                </h2>
                <p className="text-blue-gray-75 text-xxs mt-0 leading-[14px]">{data.assignee.role}</p>
              </div>
            </div>
            <button className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 p-2 rounded-full'>
              <img
                className='w-2 h-2 cursor-pointer'
                src={Icons.arrow_drop_down_blue_gray_45}
                alt="" />
            </button>
          </button>
          {openAssigneeModal && selectedTarget?.id === data?.id && (
            <div className="absolute bottom-11 left-0 bg-white rounded-md z-[100]">
              {data.assignee.id && <AssigneeTargetModal setOpenAssigneeModal={setOpenAssigneeModal} handleSelectItem={handleSelectItem} selectedItemList={selectedAssigneList} selectedAssigneeId={data.assignee.id} selectedTargetId={selectedTarget.id} />}
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"Deadline".toLocaleUpperCase()}`,
      width: 170,
      render: (data: TargetItemDT) => (
        <div className="flex items-center gap-1 relative">
          <p className="text-blue-gray-80 text-small">{data.target.deadline ? data.target.deadline : "--"}</p>
          {/* <Buttons.IconButton.Circle
            onClick={() => changeDeadlineModal(true, data)}
            size="medium"
            variant="CT-Blue"
            icon={<img src={Icons.calenderIcon} alt="" className="w-5 h-5" />}
            background="transparent"
          /> */}
        </div>
      ),
    },
    {
      title: `${"REMARK".toLocaleUpperCase()}`,
      align: 'center',
      width: 146,
      render: (data) => (
        <div className="relative flex justify-center items-center">
          <Buttons.IconButton.Circle
            onClick={() => changeRemarkModal(true, data)}
            size="medium"
            variant="CT-Blue"
            icon={
              <img src={Icons.File} className="h-4 w-4" alt="" />
            }
            background="transparent"
          />
          {remarkModal && selectedTarget?.id === data?.id && selectedTarget?.target?.remark && (
            <div className="absolute top-10 right-0 w-[560px] bg-white rounded-md z-[100]">
              <RemarkTargetModal
                setModalOpen={setRemrkModal}
                remark={typeof (selectedTarget?.target.remark) !== "string" ? selectedTarget?.target.remark : undefined}
              />
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"Speaker Criteria".toLocaleUpperCase()}`,
      align: "center",
      width: 178,
      render: (value, record) => (
        <div className="flex justify-center items-center">
          {/* <Buttons.IconButton.Circle
            onClick={() => {
              showDrawer(record)
              console.log("click hoisi");

              setSingleTargetData(record)
            }}
            size="medium"
            variant="CT-Blue"
            icon={
              <img
                className="w-[14px] h-[14px] cursor-pointer"
                src={Icons.open_in_new}
                alt=""
              />
            }
            background="transparent"
          /> */}
          <button onClick={() => {
            showDrawer(record)
            console.log("click hoisi");

            setSingleTargetData(record)
          }} className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full'>
            <img

              className='w-[14px] h-[14px] cursor-pointer'
              src={Icons.open_in_new}
              alt="" />
          </button>
        </div>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: TargetItemDT[]) => {
      setSelectedRowsId({
        selectedTargets: selectedRowKeys.map((key) => key.toString())
      });
      setSelectedTargetState(selectedRows);

    },
    getCheckboxProps: (record: TargetItemDT) => ({
      //   name: record.id,
    }),
  };

  return (
    <div className="billing-table billing-table-even-bg type4-table">
      <div
        className={`${!openDeadlineModal && "hidden"
          } bg-opacity-10 inset-0 bg-black animate-fadeIn fixed top-0 left-0 h-full w-full z-[90]`}
        onClick={() => setOpenDeadlineModal(false)}
      ></div>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        rowKey={(record: TargetItemDT) => record.id}
        columns={Type8columns}
        dataSource={dataList}
        pagination={false}
      />
      {/* {openDeadlineModal && selectedTarget !== null && (
        <div className="absolute top-0 right-0">
          <DatePicker
            bordered={false}
            open={openDeadlineModal}
            popupClassName="target_deadline_date_picker"
            onChange={onDateChange}
          />
        </div>
      )} */}

      {/* <SideDrawer.Type3 open={open} setOpen={setOpen} drawerData={drawerData} /> */}
      <Drawer.Target.Type1
        isDrawerOpen={open}
        setIsDrawerOpen={setOpen}
        data={singleTargetData}
      />
    </div>
  );
};

export default Type8;
