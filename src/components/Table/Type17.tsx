import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { Dispatch, SetStateAction, useState } from 'react'
import Icons from '../../assets/Icons'
import { checkingStatusDT } from '../../types/audioManagementTypes'
import AudioTrack from '../common/AudioTrack'
import Speaker from '../containers/AudioManagement/TableField/AudioManagement/Speaker'
import RoleImage from '../Image/RoleImage'
import Pagination from '../Pagination'
import { Drawer } from '../Drawer'
import Remark2 from '../containers/AudioManagement/TableField/Remark2'

type Props = {
    data: checkingStatusDT[],
    setSelectedRowSData?: Dispatch<SetStateAction<checkingStatusDT[]>>,
}

const Type17 = ({ data, setSelectedRowSData }: Props) => {
    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<checkingStatusDT>();
    const [open, setOpen] = useState(false);
    console.log(singleTargetData);


    const showDrawer = (item: checkingStatusDT) => {
        setOpen(true);
    };

    const Type17columns: ColumnsType<checkingStatusDT> = [
        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'sn',
            width: 60,
            align: "center",
            render: (text, record, index) => (
                <span>{(index + 1)}</span>
            ),
        },
        {
            title: `${"# Task ID".toLocaleUpperCase()}`,
            key: 'id',
            // align: 'center',
            width: 120,
            render: (data: checkingStatusDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 180,
            render: (data: checkingStatusDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Script".toLocaleUpperCase()}`,
            key: 'script',
            width: 156,
            render: (data: checkingStatusDT) => <button className='flex w-full justify-start items-center gap-x-[10px]'
                onClick={() => {
                    showDrawer(data);
                    setSingleTargetData(data);
                }}
            >
                <h1 className='w-28 truncate whitespace-nowrap'>{data.script.id}</h1>
                <img
                    className='w-[10px] h-[10px] cursor-pointer'
                    src={Icons.openInNewGray}
                    alt="" />
            </button>,
        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 234,
            render: (data: checkingStatusDT) => <Speaker isLocality={true} data={data.speaker} />
        },
        {
            title: `${"Audio Checker".toLocaleUpperCase()}`,
            key: 'audioChecker',
            width: 233,
            render: (data: checkingStatusDT) => <div >
                <div className='flex items-center gap-x-[7px] pl-[2px]'>
                    <div className={`w-1.5 h-1.5 ${data.audioChecker.status === "Checking" ? "bg-primary-ct-magenta-60" : "bg-secondary-blue-50"} rounded-full`}></div>
                    <h1 className={`${data.audioChecker.status === "Checking" ? "text-primary-ct-magenta-60" : "text-secondary-blue-50"} text-xs font-medium leading-[27px]`}>{data.audioChecker.status}...</h1>
                </div>
                <div className='flex'>
                    <RoleImage role='audio checker' height='h-4' width='w-4' />
                    <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs '>{data.audioChecker.name},</h1>
                    <p className='text-blue-gray-75 text-xxs font-normal pl-1 '>{data.audioChecker.locality}</p>
                </div>
            </div>
        },
        {
            title: `${"DeadLine (DD/MM)".toLocaleUpperCase()}`,
            key: 'deadLine',
            width: 155,
            render: (data: checkingStatusDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 85,
            align: "center",
            render: (data: checkingStatusDT) => (
                <div className='flex justify-center relative'>
                    <button
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                        }}
                        className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-blue-gray-20 active:border active:border-blue-gray-A10'>
                        <img
                            src={Icons.File} className="h-[16px] w-[16px] cursor-pointer"
                            alt=""
                        />
                    </button>

                    {
                        remarkOpen &&
                        <div className='fixed top-[209px] right-[86px] z-[999] animate-fadeIn2'>
                            <Remark2
                                open={remarkOpen}
                                setOpen={setRemarkOpen}
                                data={data.remark}
                            />
                        </div>
                    }
                </div>
            )
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'details',
            fixed: 'right',
            width: 85,
            render: (_, record: checkingStatusDT) => (
                <div className='flex justify-center items-center'>
                    <button
                        onClick={() => {
                            showDrawer(record);
                            setSingleTargetData(record);
                        }}
                        className='flex hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full justify-center items-center'>
                        <img

                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>
                </div>)
        },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: checkingStatusDT[]) => {
            if (setSelectedRowSData) {
                setSelectedRowSData(selectedRows)
            }
        },
        getCheckboxProps: (record: checkingStatusDT) => ({
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
                dataSource={data}
                columns={Type17columns}
                scroll={{ x: 1366 }}
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
                    deadline={singleTargetData.deadline}
                />
            }
        </div>
    )
}

export default Type17