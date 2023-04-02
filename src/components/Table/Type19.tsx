import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useState } from "react"
import Icons from "../../assets/Icons"
import { annotationDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import Remark from "../common/Remark"
import Speaker from "../common/TableField/AudioManagement/Speaker"

type Props = {
    data: annotationDT[]
}

const Type19 = ({ data }: Props) => {

    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<annotationDT>();

    const Type19columns: ColumnsType<annotationDT> = [
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
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 155,
            render: (data: annotationDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Script".toLocaleUpperCase()}`,
            key: 'script',
            width: 172,
            render: (data: annotationDT) => <div className='flex w-full justify-start items-center gap-x-[10px]'>
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
            width: 160,
            render: (data: annotationDT) => <Speaker data={data.speaker} />
        },
        {
            title: `${"Word annotation".toLocaleUpperCase().slice(0, 10)}...`,
            key: 'wordAnnotation',
            align: "center",
            width: 119,
            render: () => <>unknown</>
        },
        {
            title: `${"Phoneme annotation".toLocaleUpperCase().slice(0, 13)}...`,
            key: 'wordAnnotation',
            align: "center",
            width: 120,
            render: () => <>unknown</>
        },
        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 85,
            align: "center",
            render: (data: annotationDT) => (
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
            width: 85,
            render: (_, record: annotationDT) => (
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: annotationDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: annotationDT) => ({
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
                columns={Type19columns}
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

export default Type19