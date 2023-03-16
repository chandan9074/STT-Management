import { DatePicker, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import Icons from "../../assets/Icons";
import "../../assets/css/table/type4Table.css";
import { useAssigneeContext } from "../../context/AssignProvider";
import { AssigneeItemDT, CriteriaItemDT, ScriptItemDT, TargetItemDT, updateDraftTargetQueryParams } from "../../types/assignTypes";
import Buttons from "../Buttons";
import ScriptTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/ScriptTargetModal";
import RoleImage from "../Image/RoleImage";
import AssigneeTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/AssigneeTargetModal";
import CriteriaTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/CriteriaTargetModal";
import { Drawer } from "../Drawer";

// interface Props {
//   changeScriptModal: (open: boolean, target: TargetItemDT) => void;
//   changeTargetModal: (open: boolean, target: TargetItemDT) => void;
//   changeAssigneeModal: (open: boolean, target: TargetItemDT) => void;
//   changeDeadlineModal: (open: boolean, target: TargetItemDT) => void;
//   changeRemarkModal: (open: boolean, target: TargetItemDT) => void;
// }

const Type8 = () => {
  const { selectedTargetList: dataList, updateDraftTarget, selectedScriptList, selectedCriteriaList, selectedAssigneList } = useAssigneeContext();
  const [open, setOpen] = useState(false);
  const [openScriptModal, setOpenScriptModal] = useState<boolean>(false);
  const [selectedTarget, setSelectedTarget] = useState<TargetItemDT | null>(
    null
  );
  const [openTargetModal, setOpenTargetModal] = useState<boolean>(false);
  const [openAssigneeModal, setOpenAssigneeModal] = useState<boolean>(false);
  const [openDeadlineModal, setOpenDeadlineModal] = useState<boolean>(false);
  const [remarkModal, setRemrkModal] = useState<boolean>(false);

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
  const changeDeadlineModal = (open: boolean, target: TargetItemDT) => {
    setOpenDeadlineModal(open);
    setSelectedTarget(target);
  };
  const changeRemarkModal = (open: boolean, target: TargetItemDT) => {
    setRemrkModal(open);
    setSelectedTarget(target);
  };

  const showDrawer = (key: any) => {
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
    console.log("hello")
    // }
  };

  const Type8columns: ColumnsType<any> = [
    {
      title: `${"# Target ID".toLocaleUpperCase()}`,
      render: (data: TargetItemDT) => <p className="text-small text-blue-gray-80 w-20 truncate"># {data?.id}</p>,
    },
    {
      title: `${"Script".toLocaleUpperCase()}`,
      render: (data: TargetItemDT) => (
        <div className="flex items-center gap-1 relative">
          <p className="text-small text-blue-gray-80 w-40 truncate"># {data.script.id}</p>
          <Buttons.IconButton.Circle
            onClick={() => changeScriptModal(true, data)}
            size="medium"
            variant="CT-Blue"
            icon={<img src={Icons.arrow_drop_down_blue_gray_45} alt="" />}
            background="transparent"
          />
          <div
            className={`${!openScriptModal && "hidden"
              } bg-opacity-10 inset-0 bg-black animate-fadeIn fixed top-0 left-0 h-full w-full z-[90]`}
            onClick={() => setOpenScriptModal(false)}
          ></div>
          {openScriptModal && selectedTarget?.id === data?.id && (
            <div className="absolute bottom-11 right-0 w-[376px] bg-white rounded-md z-[100]">
              {data.script.id && <ScriptTargetModal handleSelectItem={handleSelectItem} selectedItemList={selectedScriptList} selectedScriptId={data.script.id} selectedTargetId={selectedTarget.id} />}
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"target".toLocaleUpperCase()}`,
      render: (data: TargetItemDT) => (
        <div className="flex items-center gap-1 relative">
          <p className="text-small text-blue-gray-80">{data.target.target}</p>
          <Buttons.IconButton.Circle
            onClick={() => changeTargetModal(true, data)}
            size="medium"
            variant="CT-Blue"
            icon={<img src={Icons.arrow_drop_down_blue_gray_45} alt="" />}
            background="transparent"
          />
          <div
            className={`${!openTargetModal && "hidden"
              } bg-opacity-10 inset-0 bg-black animate-fadeIn fixed top-0 left-0 h-full w-full z-[90]`}
            onClick={() => setOpenTargetModal(false)}
          ></div>
          {openTargetModal && selectedTarget?.id === data?.id && (
            <div className="absolute bottom-11 right-0 w-[424px] bg-white rounded-md z-[100]">
              {data.target.id && <CriteriaTargetModal handleSelectItem={handleSelectItem} selectedItemList={selectedCriteriaList} selectedCriteriaId={data.target.id} selectedTargetId={selectedTarget.id} />}
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"Assignee".toLocaleUpperCase()}`,
      render: (data: TargetItemDT) => (
        <div className="flex items-center justify-between gap-1 relative">
          <div className="flex items-start gap-2">
            <RoleImage role={data.assignee.role} />
            <div className="flex flex-col ">
              <h2 className="font-semibold text-blue-gray-80 text-xs leading-4 mb-0.5">
                {data.assignee.name}
              </h2>
              <p className="text-blue-gray-75 text-xxs mt-0 leading-[14px]">{data.assignee.role}</p>
            </div>
          </div>

          <Buttons.IconButton.Circle
            onClick={() => changeAssigneeModal(true, data)}
            size="medium"
            variant="CT-Blue"
            icon={<img src={Icons.arrow_drop_down_blue_gray_45} alt="" />}
            background="transparent"
          />
          <div
            className={`${!openAssigneeModal && "hidden"
              } bg-opacity-10 inset-0 bg-black animate-fadeIn fixed top-0 left-0 h-full w-full z-[90]`}
            onClick={() => setOpenAssigneeModal(false)}
          ></div>
          {openAssigneeModal && selectedTarget?.id === data?.id && (
            <div className="absolute bottom-11 right-0 w-[376px] bg-white rounded-md z-[100]">
              {data.assignee.id && <AssigneeTargetModal handleSelectItem={handleSelectItem} selectedItemList={selectedAssigneList} selectedAssigneeId={data.assignee.id} selectedTargetId={selectedTarget.id} />}
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"Deadline".toLocaleUpperCase()}`,
      render: (data: TargetItemDT) => (
        <div className="flex items-center gap-1 relative">
          <p className="text-blue-gray-80 text-small">{data.target.deadline}</p>
          <Buttons.IconButton.Circle
            onClick={() => changeDeadlineModal(true, data)}
            size="medium"
            variant="CT-Blue"
            icon={<img src={Icons.calenderIcon} alt="" className="w-5 h-5" />}
            background="transparent"
          />
        </div>
      ),
    },
    {
      title: `${"REMARK".toLocaleUpperCase()}`,
      width: 136,
      render: (data) => (
        <div className="relative">
          <Buttons.IconButton.Circle
            onClick={() => changeRemarkModal(true, data)}
            size="medium"
            variant="CT-Blue"
            icon={
              <img src={Icons.Script} className="h-[15px] w-[12px]" alt="" />
            }
            background="transparent"
          />
          <div
            className={`${!remarkModal && "hidden"
              } bg-opacity-10 inset-0 bg-black animate-fadeIn fixed top-0 left-0 h-full w-full z-[90]`}
            onClick={() => setRemrkModal(false)}
          ></div>
          {remarkModal && selectedTarget?.id === data?.id && (
            <div className="absolute top-6 right-0 w-[560px] bg-white rounded-md z-[100]">
              {/* <RemarkTargetModal
                setModalOpen={setRemrkModal}
                remark={selectedTarget.target.remark}
              /> */}
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"Details".toLocaleUpperCase()}`,
      align: "center",
      width: 80,
      render: (value, record) => (
        <Buttons.IconButton.Circle
          onClick={() => showDrawer(record)}
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
        />
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
    },
    getCheckboxProps: (record: any) => ({
      //   name: record.id,
    }),
  };

  return (
    <div className="billing-table type4-table">
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
      {openDeadlineModal && selectedTarget !== null && (
        <div className="absolute top-0 right-0">
          <DatePicker
            bordered={false}
            open={openDeadlineModal}
            popupClassName="target_deadline_date_picker"
          />
        </div>
      )}

      {/* <SideDrawer.Type3 open={open} setOpen={setOpen} drawerData={drawerData} /> */}
      <Drawer.Target.Type1
        isDrawerOpen={open}
        setIsDrawerOpen={setOpen}
      />
    </div>
  );
};

export default Type8;
