import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useContext, useState } from "react"
import Icons from "../../assets/Icons"
import { CommonContext } from "../../context/CommonProvider"
import { allCheckedSpeechDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import SpeechStatus from "../common/SpeechStatus"
import RoleImage from "../Image/RoleImage"
import Pagination from "../Pagination"
import { Drawer } from "../Drawer"
import Remark2 from "../containers/AudioManagement/TableField/Remark2"

type Props = {
    data: allCheckedSpeechDT[]
}
const Type25 = ({ data }: Props) => {

    const { roleName } = useContext(CommonContext);

    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<allCheckedSpeechDT>();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

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
                <div className='flex justify-center relative'>
                    <img
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                        }}
                        src={Icons.File} className="h-[16px] w-[16px] cursor-pointer"
                        alt=""
                    />
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
            width: 80,
            render: (_, record: allCheckedSpeechDT) => (
                <>
                    <div className='flex hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 justify-center items-center'>
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: allCheckedSpeechDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: allCheckedSpeechDT) => ({
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
                columns={Type25columns}
                scroll={{ x: 1366 }}
                rowKey="id"
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
                    speechInfo={singleTargetData.speechInfo}
                    isEditHistory={true}
                    submission={singleTargetData.submissionDate}
                    history={singleTargetData.history}
                />
            }
        </div>
    )
}

export default Type25