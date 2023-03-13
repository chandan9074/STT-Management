import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import Icons from "../../assets/Icons";
import { useAssigneeContext } from "../../context/AssignProvider";
import { AssigneeItemDT, CriteriaItemDT, recreateTableDT, ScriptItemDT } from "../../types/assignTypes";
import Buttons from "../Buttons";
import AssigneeTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/AssigneeTargetModal";
import CriteriaTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/CriteriaTargetModal";
import ScriptTargetModal from "../containers/AssignContainer/CreateTarget/TargetTable/ScriptTargetModal";
import RoleImage from "../Image/RoleImage";

const Type12 = () => {
  // const [tableData, setTableData] = useState<recreateTableDT[]>([] as recreateTableDT[]);
  const { recreateTable, setRecreateTable, scriptForRecreate, targetForRecreate, assigneeForRecreate, setScriptForRecreate, setTargetForRecreate, setAssigneeForRecreate } = useAssigneeContext();
  const [openScriptModal, setOpenScriptModal] = useState<boolean>(false);
  const [openTargetModal, setOpenTargetModal] = useState<boolean>(false);
  const [openAssigneeModal, setOpenAssigneeModal] = useState<boolean>(false);
  // const [openDeadlineModal, setOpenDeadlineModal] = useState<boolean>(false);


  const handleSelectScript = (item: ScriptItemDT) => {
    if (item?.id) {
      setScriptForRecreate((prevList) => {
        return prevList?.map((singleItem) => {
          if (item?.id === singleItem?.id) {
            return { ...singleItem, isSelected: true };
          }
          else {
            return { ...singleItem, isSelected: false };
          }
        });
      });
      console.log('checked value', scriptForRecreate)
      setRecreateTable({ ...recreateTable, script: item })
    }
    setOpenScriptModal(false);
  };

  const handleSelectTarget = (item: CriteriaItemDT) => {
    if (item?.id) {
      setTargetForRecreate((prevList) => {
        return prevList?.map((singleItem) => {
          if (item?.id === singleItem?.id) {
            return { ...singleItem, isSelected: true };
          }
          else {
            return { ...singleItem, isSelected: false };
          }
        });
      });
      setRecreateTable({ ...recreateTable, target: item })
    }
    setOpenTargetModal(false);
  };

  const handleSelectAssignee = (item: AssigneeItemDT) => {
    if (item?.id) {
      setAssigneeForRecreate((prevList) => {
        return prevList?.map((singleItem) => {
          if (item?.id === singleItem?.id) {
            return { ...singleItem, isSelected: true };
          }
          else {
            return { ...singleItem, isSelected: false };
          }
        });
      });
      setRecreateTable({ ...recreateTable, assignee: item })
    }
    setOpenAssigneeModal(false);
  };

  // const handleSelectDeadline: DatePickerProps['onChange'] = (date, dateString) => {
  //   console.log(dateString);
  //   setOpenDeadlineModal(false);
  //   setRecreateTable({
  //     ...recreateTable,
  //     target: {
  //       ...recreateTable.target,
  //       deadline: dateString,
  //     },
  //   });
  // };


  const Type12columns: ColumnsType<any> = [
    {
      title: `${"# Target ID".toLocaleUpperCase()}`,
      render: (data: recreateTableDT) => <p className="text-small text-blue-gray-80 w-20 truncate"># hello</p>,
    },
    {
      title: `${"Script".toLocaleUpperCase()}`,
      render: (data: recreateTableDT) => (
        <div className="flex items-center gap-1 relative">
          <p className="text-small text-blue-gray-80 w-40 truncate"># {data?.script?.id}</p>
          <Buttons.IconButton.Circle
            onClick={() => setOpenScriptModal(!openScriptModal)}
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
          {openScriptModal && data.script.id && (
            <div className="absolute bottom-11 right-0 w-[376px] bg-white rounded-md z-[100]">
              {data.script.id && <ScriptTargetModal handleSelectItem={handleSelectScript} selectedItemList={scriptForRecreate} selectedScriptId={data.script.id} selectedTargetId={""} />}
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"target".toLocaleUpperCase()}`,
      render: (data: recreateTableDT) => (
        <div className="flex items-center gap-1 relative">
          <p className="text-small text-blue-gray-80">{data?.target?.target}</p>
          <Buttons.IconButton.Circle
            onClick={() => setOpenTargetModal(!openTargetModal)}
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
          {openTargetModal && data.target && (
            <div className="absolute bottom-11 right-0 w-[424px] bg-white rounded-md z-[100]">
              {data.target.id && <CriteriaTargetModal handleSelectItem={handleSelectTarget} selectedItemList={targetForRecreate} selectedCriteriaId={data.target.id} selectedTargetId={""} />}
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"Assignee".toLocaleUpperCase()}`,
      render: (data: recreateTableDT) => (
        <div className="flex items-center justify-between gap-1 relative">
          <div className="flex items-start gap-2">
            {data?.assignee?.role && <RoleImage role={data?.assignee?.role} />}
            <div className="flex flex-col ">
              <h2 className="font-semibold text-blue-gray-80 text-xs leading-4 mb-0.5">
                {data?.assignee?.name}
              </h2>
              <p className="text-blue-gray-75 text-xxs mt-0 leading-[14px]">{data?.assignee?.role}</p>
            </div>
          </div>

          <Buttons.IconButton.Circle
            onClick={() => setOpenAssigneeModal(!openAssigneeModal)}
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
          {openAssigneeModal && data.assignee.id && (
            <div className="absolute bottom-11 right-0 w-[376px] bg-white rounded-md z-[100]">
              {data.assignee.id && <AssigneeTargetModal handleSelectItem={handleSelectAssignee} selectedItemList={assigneeForRecreate} selectedAssigneeId={data.assignee.id} selectedTargetId={""} />}
            </div>
          )}
        </div>
      ),
    },
    {
      title: `${"Deadline".toLocaleUpperCase()}`,
      align: "center",
      render: (data: recreateTableDT) => (
        <div className="flex items-center justify-center gap-1 relative">
          <p className="text-blue-gray-80 text-small">{data?.target?.deadline ? data.target.deadline : "--"}</p>
          {/* <Buttons.IconButton.Circle
            onClick={() => setOpenDeadlineModal(!openDeadlineModal)}
            size="medium"
            variant="CT-Blue"
            icon={<img src={Icons.calenderIcon} alt="" className="w-5 h-5" />}
            background="transparent"
          />
          {openDeadlineModal && (
            <div className="absolute bottom-0 right-0 userFormDate">
              <DatePicker
                // style={{ display: 'none' }}
                onChange={handleSelectDeadline}
                bordered={false}
                open={openDeadlineModal}
                popupClassName="recreate_deadline_date_picker"
              />
            </div>
          )} */}
        </div>
      ),
    },
    {
      title: `${"REMARK".toLocaleUpperCase()}`,
      align: "center",
      width: 136,
      render: (data) => (
        <div className="relative">
          {/* <Buttons.IconButton.Circle
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
                  
                </div>
              )} */}
        </div>
      ),
    },
    {
      title: `${"Details".toLocaleUpperCase()}`,
      align: "center",

      width: 80,
      render: (value, record) => (
        <div className="flex justify-center">
          <Buttons.IconButton.Circle
            // onClick={() => showDrawer(record)}
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
        </div>
        // <span>click</span>
      ),
    },
  ];
  return (
    <div className="billing-table type4-table">
      <Table
        // rowSelection={{
        //     type: "checkbox",
        //     ...rowSelection,
        // }}
        // rowKey={(record: TargetItemDT) => record.id}
        columns={Type12columns}
        dataSource={[recreateTable]}
        pagination={false}
      />

    </div>
  )
}

export default Type12