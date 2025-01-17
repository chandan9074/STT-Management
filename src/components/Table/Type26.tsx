import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useState } from "react"
import Icons from "../../assets/Icons"
import { annotationUploadDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import Remark2 from "../containers/AudioManagement/TableField/Remark2"
import { Drawer } from "../Drawer"
import Pagination from "../Pagination"
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox"

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

    const onChange = (e: CheckboxChangeEvent) => {
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
            width: 260,
            render: (data: annotationUploadDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Word annotation".toLocaleUpperCase()}`,
            key: 'wordAnnotation',
            align: "center",
            width: 260,
            render: () => <><Checkbox onChange={onChange}></Checkbox></>
        },
        {
            title: `${"Phoneme annotation".toLocaleUpperCase()}`,
            key: 'wordAnnotation',
            align: "center",
            width: 260,
            render: () => <><Checkbox onChange={onChange}></Checkbox></>
        },
        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 120,
            align: "center",
            render: (data: annotationUploadDT) => (
                <div className='flex justify-center relative'>
                    <button
                        className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-blue-gray-20 active:border active:border-blue-gray-A10'
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                        }}>
                        <img
                            src={Icons.File} className="h-[16px] w-[16px] cursor-pointer"
                            alt=""
                        />
                    </button>
                    {
                        (remarkOpen && data.id === singleTargetData?.id) &&
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
                <div className="flex justify-center items-center">
                    <button
                        onClick={() => {
                            showDrawer();
                            setSingleTargetData(record);
                        }}
                        className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full'>
                        <img

                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>
                </div>)
        },
    ]

    const handlePageChange = (page: number) => {
        // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    }

    return (
        <div className='billing-table billing-table-even-bg type4-table horizontal-table-padding'>
            <Table
                dataSource={data}
                columns={Type26columns}
                rowKey="id"
                pagination={false}
            />
            <div className='flex w-full justify-end mt-4 mb-2'>
                <Pagination.Type2
                    total={100}
                    pageSize={10}
                    handleDataChange={handlePageChange}
                />
            </div>
            {
                (open && singleTargetData) &&
                <Drawer.AudioManagement.Type2
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    speaker={singleTargetData.speaker}
                    others={singleTargetData.others}
                    speechInfo={singleTargetData.speechInfo}
                    isEditHistory={false}
                    remark={singleTargetData.remark}
                />
            }
        </div>
    )
}

export default Type26