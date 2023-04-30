import { Table } from "antd";
import { ColumnsType, ColumnType } from 'antd/es/table';
import { useState } from "react";
import Icons from "../../assets/Icons";
import { colAnnSenStatusFilterData } from "../../data/audioManagement/AudioManagementData";
import { STATUS_ANNOTATING, STATUS_TOOK_A_BREAK } from "../../helpers/ConditionVariable";
import { collectAnnSenDataDT } from "../../types/audioManagementTypes";
import AudioTrack from "../common/AudioTrack";
import Annotate from "../containers/AudioManagement/TableField/AudioManagement/Annotate";
import Speaker from "../containers/AudioManagement/TableField/AudioManagement/Speaker";
import StatusFilter from "../containers/AudioManagement/TableField/AudioManagement/StatusFilter";
import { Drawer } from "../Drawer";
import RoleImage from "../Image/RoleImage";
import Pagination from "../Pagination";

type Props = {
    data: collectAnnSenDataDT[]
}

const Type20 = ({ data }: Props) => {

    const [singleTargetData, setSingleTargetData] = useState<collectAnnSenDataDT>();
    const [open, setOpen] = useState(false);

    const showDrawer = (item: collectAnnSenDataDT) => {
        setOpen(true);
    };

    const getColumnSearchProps = (dataIndex: string): ColumnType<collectAnnSenDataDT> => ({

        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (

            <div onKeyDown={(e) => e.stopPropagation()}
                // className="flex items-center justify-center w-[260px] h-[92px] -mr-[90px] -mt-[0px]  rounded-[8px]" 
                className="w-[260px] py-1.5 flex justify-center"
            >
                <StatusFilter option1={STATUS_ANNOTATING} option2={STATUS_TOOK_A_BREAK} data={colAnnSenStatusFilterData} />
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[14px] h-[14px] object-cover" alt='' />
            </div>
        ),
    });

    const Type20columns: ColumnsType<collectAnnSenDataDT> = [
        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'sn',
            width: 48,
            align: "center",
            render: (text, record, index) => (
                <span>{(index + 1)}</span>
            ),
        },
        {
            title: `${"# Task ID".toLocaleUpperCase()}`,
            key: 'id',
            // align: 'center',
            width: 96,
            render: (data: collectAnnSenDataDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 180,
            render: (data: collectAnnSenDataDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Annotate".toLocaleUpperCase()}`,
            key: 'annotate',
            ...getColumnSearchProps('annotate'),
            // className: "audio-management-status",
            width: 184,
            render: (data: collectAnnSenDataDT) => <Annotate data={data.annotate} />
        },
        {
            title: `${"DeadLine".toLocaleUpperCase()}`,
            key: 'deadLine',
            width: 90,
            render: (data: collectAnnSenDataDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Audio Checker".toLocaleUpperCase()}`,
            key: 'audioChecker',
            width: 180,
            render: (data: collectAnnSenDataDT) =>
                <div >
                    <div className='flex'>
                        <RoleImage role='audio checker' height='h-4' width='w-4' />
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.audioChecker.name}</h1>
                    </div>
                    <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.audioChecker.locality}</p>
                </div>
        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 206,
            render: (data: collectAnnSenDataDT) => <Speaker isLocality={true} data={data.speaker} />
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'details',
            fixed: 'right',
            width: 100,
            render: (_, record: collectAnnSenDataDT) => (
                <>

                    <div className='flex w-full justify-center items-center'>
                        <img
                            onClick={() => {
                                showDrawer(record);
                                setSingleTargetData(record);
                            }}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </div>

                </>)
        },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: collectAnnSenDataDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: collectAnnSenDataDT) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            // name: record.assignee.name,
        }),
    };

    const handlePageChange = (page: number) => {
        // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    }

    return (
        <div className='billing-table billing-table-odd-bg type4-table horizontal-table-padding'>
            <Table
                rowSelection={{
                    // type: selectionType,
                    columnWidth: 48,
                    fixed: 'left',
                    ...rowSelection,
                }}
                columns={Type20columns}
                dataSource={data}
                scroll={{ x: 1300 }}
                rowKey="id"
                pagination={false}
            />
            <div className='flex w-full justify-end mt-4 mb-2'>
                <Pagination.Type2
                    total={100}
                    pageSize={10}
                    // total={35}
                    // pageSize={5}
                    handleDataChange={handlePageChange}
                />
            </div>
            {
                (open && singleTargetData) &&
                <Drawer.AudioManagement.CheckingStatus
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    isEditHistory={false}
                    speaker={singleTargetData.speaker}
                    remark={singleTargetData.remark}
                    script={singleTargetData.script}
                    others={singleTargetData.others}
                    id={singleTargetData.id}
                />
            }
        </div>
    )
}

export default Type20