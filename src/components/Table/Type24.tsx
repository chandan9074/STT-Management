import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useState } from "react"
import Icons from "../../assets/Icons"
import { checkingStatusUploadDataDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import { Drawer } from "../Drawer"
import RoleImage from "../Image/RoleImage"
import Pagination from "../Pagination"

type Props = {
    data: checkingStatusUploadDataDT[]
}

const Type24 = ({ data }: Props) => {

    const [open, setOpen] = useState(false);

    const [singleTargetData, setSingleTargetData] = useState<checkingStatusUploadDataDT>();

    const showDrawer = () => {
        setOpen(true);
    };

    const Type24columns: ColumnsType<checkingStatusUploadDataDT> = [
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
            render: (data: checkingStatusUploadDataDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Speech".toLocaleUpperCase()}`,
            key: 'speech',
            width: 148,
            render: (data: checkingStatusUploadDataDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Audio Checker".toLocaleUpperCase()}`,
            key: 'audioChecker',
            width: 233,
            render: (data: checkingStatusUploadDataDT) => <div >
                <div className='flex items-center gap-x-[7px] pl-[2px]'>
                    <div className={`w-1.5 h-1.5 ${data.audioChecker.status === "Checking" ? "bg-primary-ct-magenta-60" : "bg-secondary-blue-50"} rounded-full`}></div>
                    <h1 className={`${data.audioChecker.status === "Checking" ? "text-primary-ct-magenta-60" : "text-secondary-blue-50"} text-xs font-medium leading-[27px]`}>{data.audioChecker.status}...</h1>
                </div>
                <div className='flex'>
                    <RoleImage role='audio checker' height='h-4' width='w-4' />
                    <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.audioChecker.name},</h1>
                    <p className='text-blue-gray-75 text-xxs font-normal pl-1'>{data.audioChecker.locality}</p>
                </div>
            </div>
        },
        {
            title: `${"DeadLine (DD/MM)".toLocaleUpperCase()}`,
            key: 'deadLine',
            width: 155,
            render: (data: checkingStatusUploadDataDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'details',
            fixed: 'right',
            width: 85,
            render: (_, record: checkingStatusUploadDataDT) => (
                <>

                    <div className='flex w-full justify-center items-center'>
                        <img
                            onClick={() => {
                                showDrawer();
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: checkingStatusUploadDataDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: checkingStatusUploadDataDT) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            // name: record.assignee.name,
        }),
    };

    const handlePageChange = (page: number) => {
        // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    }

    return (
        <div className="billing-table billing-table-even-bg type4-table horizontal-table-padding">
            <Table
                rowSelection={{
                    // type: selectionType,
                    columnWidth: 48,
                    fixed: 'left',
                    ...rowSelection,
                }}
                dataSource={data}
                columns={Type24columns}
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
                <Drawer.AudioManagement.Type2
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    id={singleTargetData.id}
                    speaker={singleTargetData.speaker}
                    others={singleTargetData.others}
                    // remark={singleTargetData.remark}
                    speechInfo={singleTargetData.speechInfo}
                    isEditHistory={false}
                    deadline={singleTargetData.deadLine}
                />
            }
        </div>
    )
}

export default Type24