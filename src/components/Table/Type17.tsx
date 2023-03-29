import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useState } from 'react'
import Icons from '../../assets/Icons'
import { checkingStatusDT } from '../../types/audioManagementTypes'
import AudioTrack from '../common/AudioTrack'
import Remark from '../common/Remark'
import Speaker from '../common/TableField/AudioManagement/Speaker'
import RoleImage from '../Image/RoleImage'

type Props = {
    data: checkingStatusDT[]
}

const Type17 = ({ data }: Props) => {
    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<checkingStatusDT>();



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
            render: (data: checkingStatusDT) => <div className='flex w-full justify-start items-center gap-x-[10px]'>
                <h1 className='w-28 truncate whitespace-nowrap'>{data.script.id}</h1>
                <img
                    // onClick={() => {
                    //     showDrawer(record);
                    //     setSingleTargetData(record);
                    // }}
                    className='w-[10px] h-[10px] cursor-pointer'
                    src={Icons.openInNewGray}
                    alt="" />
            </div>,
        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 234,
            render: (data: checkingStatusDT) => <Speaker data={data.speaker} />
        },
        {
            title: `${"Audio Checker".toLocaleUpperCase()}`,
            key: 'audioChecker',
            width: 240,
            render: (data: checkingStatusDT) => <div >
                <div className='flex items-center gap-x-[7px] pl-[2px]'>
                    <div className='w-1.5 h-1.5 bg-primary-ct-magenta-60 rounded-full'></div>
                    <h1 className='text-primary-ct-magenta-60 text-xs font-medium'>{data.audioChecker.status}...</h1>
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
            render: (data: checkingStatusDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 85,
            align: "center",
            render: (data: checkingStatusDT) => (
                <div className='flex justify-center'>
                    <img
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                            console.log(singleTargetData);

                        }}
                        src={Icons.File} className="h-[16px] w-[16px] cursor-pointer"
                        alt=""
                    />
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
                <>

                    <div className='flex w-full justify-center items-center'>
                        <img
                            // onClick={() => {
                            //     showDrawer(record);
                            //     setSingleTargetData(record);
                            // }}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </div>

                </>)
        },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: checkingStatusDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: checkingStatusDT) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            // name: record.assignee.name,
        }),
    };


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
            />

            {
                remarkOpen &&
                <Remark
                    open={remarkOpen}
                    setOpen={setRemarkOpen}
                    roleName={'meem'}
                    roleType={'speaker'}
                    dateTime={singleTargetData?.deadLine ? singleTargetData?.deadLine : ''}
                    desc={'this is remark'}
                />
            }
        </div>
    )
}

export default Type17