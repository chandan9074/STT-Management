import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useState } from "react"
import Icons from "../../assets/Icons"
import { annotationUploadDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import Remark2 from "../common/TableField/Remark2"
import { Drawer } from "../Drawer"
import Pagination from "../Pagination"

type Props = {
    data: annotationUploadDT[]
}

const Type26 = ({ data }: Props) => {

    const [remarkOpen, setRemarkOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const [singleTargetData, setSingleTargetData] = useState<annotationUploadDT>();

    const showDrawer = () => {
        setOpen(true);
    };

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
                <div className='flex justify-center relative'>
                    <img
                        onClick={() => {
                            setRemarkOpen(true);
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
            width: 71,
            render: (_, record: annotationUploadDT) => (
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: annotationUploadDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: annotationUploadDT) => ({
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
                columns={Type26columns}
                // scroll={{ x: 1366 }}
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
                <Drawer.AudioManagement.Type2
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    id={singleTargetData.id}
                    speaker={singleTargetData.speaker}
                    others={singleTargetData.others}
                    speechInfo={singleTargetData.speechInfo}
                    isEditHistory={false}
                    deadline={singleTargetData.deadLine}
                />
            }
        </div>
    )
}

export default Type26