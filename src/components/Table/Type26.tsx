import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useState } from "react"
import Icons from "../../assets/Icons"
import { annotationUploadDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import Remark from "../common/Remark"

type Props = {
    data: annotationUploadDT[]
}

const Type26 = ({ data }: Props) => {

    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<annotationUploadDT>();

    const Type26columns: ColumnsType<annotationUploadDT> = [
        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'sn',
            width: 80,
            align: "center",
            render: (text, record, index) => (
                <span>{(index + 1)}</span>
            ),
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 244,
            render: (data: annotationUploadDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            // title: `${"Word annotation".toLocaleUpperCase().slice(0, 10)}...`,
            title: `${"Word annotation".toLocaleUpperCase()}`,
            key: 'wordAnnotation',
            align: "center",
            width: 244,
            render: () => <>unknown</>
        },
        {
            // title: `${"Phoneme annotation".toLocaleUpperCase().slice(0, 13)}...`,
            title: `${"Phoneme annotation".toLocaleUpperCase()}`,
            key: 'wordAnnotation',
            align: "center",
            width: 244,
            render: () => <>unknown</>
        },
        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 120,
            align: "center",
            render: (data: annotationUploadDT) => (
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
            width: 71,
            render: (_, record: annotationUploadDT) => (
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: annotationUploadDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: annotationUploadDT) => ({
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
                columns={Type26columns}
                // scroll={{ x: 1366 }}
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

export default Type26