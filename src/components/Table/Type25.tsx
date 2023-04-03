import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useContext, useState } from "react"
import Icons from "../../assets/Icons"
import { CommonContext } from "../../context/CommonProvider"
import { allCheckedSpeechDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import Remark from "../common/Remark"
import SpeechStatus from "../common/SpeechStatus"
import RoleImage from "../Image/RoleImage"

type Props = {
    data: allCheckedSpeechDT[]
}
const Type25 = ({ data }: Props) => {

    const { roleName } = useContext(CommonContext);


    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<allCheckedSpeechDT>();

    const Type25columns: ColumnsType<allCheckedSpeechDT> = [
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
            width: 136,
            render: (data: allCheckedSpeechDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Speech".toLocaleUpperCase()}`,
            key: 'speech',
            width: 180,
            render: (data: allCheckedSpeechDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Audio Checker".toLocaleUpperCase()}`,
            key: 'audioChecker',
            width: 234,
            render: (data: allCheckedSpeechDT) =>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex'>
                        <RoleImage role={data.audioChecker.role} height='h-4' width='w-4' />
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.audioChecker.name}{roleName === data.audioChecker.name && " (Self)"}</h1>
                        {
                            roleName === data.audioChecker.name ? "" : <p className='text-blue-gray-75 text-xxs font-normal'>, {data.audioChecker.locality}</p>
                        }
                    </div>
                    <p className='text-xxs text-blue-gray-75 font-normal leading-[14.4px] pl-[22px]'>Picked: {data.audioChecker.time}</p>
                </div>
        },
        {
            title: `${"Status".toLocaleUpperCase()}`,
            key: 'status',
            align: "center",
            width: 141,
            render: (data: allCheckedSpeechDT) => <SpeechStatus data={data.status} />
        },
        {
            title: `${"DeadLine (DD/MM)".toLocaleUpperCase()}`,
            key: 'deadLine',
            width: 150,
            render: (data: allCheckedSpeechDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Submission Date".toLocaleUpperCase()}`,
            key: 'submissionDate',
            width: 137,
            render: (data: allCheckedSpeechDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 80,
            align: "center",
            render: (data: allCheckedSpeechDT) => (
                <div className='flex justify-center'>
                    <img
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
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
            width: 80,
            render: (_, record: allCheckedSpeechDT) => (
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: allCheckedSpeechDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: allCheckedSpeechDT) => ({
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
                columns={Type25columns}
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

export default Type25