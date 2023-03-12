import Table, { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { useAssigneeContext } from "../../context/AssignProvider";
import { recreateTableDT } from "../../types/assignTypes";
import Buttons from "../Buttons";
import RoleImage from "../Image/RoleImage";

const Type12 = () => {
    const [tableData, setTableData] = useState<recreateTableDT[]>([] as recreateTableDT[]);
    const { recreateTable, setRecreateTable } = useAssigneeContext();


    // useEffect(() => {
    //     const dataSource = Object.values(recreateTable);
    //     setTableData(dataSource);
    // }, [recreateTable]);
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
                    {/* <Buttons.IconButton.Circle
                onClick={() => changeScriptModal(true, data)}
                size="medium"
                variant="CT-Blue"
                icon={<img src={Icons.arrow_drop_down_blue_gray_45} alt="" />}
                background="transparent"
              /> */}
                    {/* <div
                className={`${!openScriptModal && "hidden"
                  } bg-opacity-10 inset-0 bg-black animate-fadeIn fixed top-0 left-0 h-full w-full z-[90]`}
                onClick={() => setOpenScriptModal(false)}
              ></div>
              {openScriptModal && selectedTarget?.id === data?.id && (
                <div className="absolute bottom-11 right-0 w-[376px] bg-white rounded-md z-[100]">
                  {data.script.id && <ScriptTargetModal selectedScriptId={data.script.id} selectedTargetId={selectedTarget.id} setOpenScriptModal={setOpenScriptModal} />}
                </div>
              )} */}
                </div>
            ),
        },
        {
            title: `${"target".toLocaleUpperCase()}`,
            render: (data: recreateTableDT) => (
                <div className="flex items-center gap-1 relative">
                    <p className="text-small text-blue-gray-80">{data?.target?.target}</p>
                    {/* <Buttons.IconButton.Circle
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
                  {data.target.id && <CriteriaTargetModal selectedCriteriaId={data.target.id} selectedTargetId={selectedTarget.id} setOpenTargetModal={setOpenTargetModal} />}
                </div>
              )} */}
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

                    {/* <Buttons.IconButton.Circle
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
                  {data.assignee.id && <AssigneeTargetModal selectedAssigneeId={data.assignee.id} selectedTargetId={selectedTarget.id} setOpenAssigneeModal={setOpenAssigneeModal} />}
                </div>
              )} */}
                </div>
            ),
        },
        {
            title: `${"Deadline".toLocaleUpperCase()}`,
            render: (data: recreateTableDT) => (
                <div className="flex items-center gap-1 relative">
                    <p className="text-blue-gray-80 text-small">{data?.target?.deadline}</p>
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
                // <Buttons.IconButton.Circle
                //   onClick={() => showDrawer(record)}
                //   size="medium"
                //   variant="CT-Blue"
                //   icon={
                //     <img
                //       className="w-[14px] h-[14px] cursor-pointer"
                //       src={Icons.open_in_new}
                //       alt=""
                //     />
                //   }
                //   background="transparent"
                // />
                <span>click</span>
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