import { Checkbox, Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useState } from "react"
import Icons from "../../assets/Icons"
import { annotationDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import Speaker from "../containers/AudioManagement/TableField/AudioManagement/Speaker"
import Remark2 from "../containers/AudioManagement/TableField/Remark2"
import { Drawer } from "../Drawer"
import Pagination from "../Pagination"
import { CheckboxChangeEvent } from "antd/es/checkbox"

type Props = {
    data: annotationDT[]
}

const Type19 = ({ data }: Props) => {

    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<annotationDT>();
    const [open, setOpen] = useState(false);

    const showDrawer = (item: annotationDT) => {
        setOpen(true);
    };

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };

    const Type19columns: ColumnsType<annotationDT> = [
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
            width: 176,
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
            width: 193,
            render: (data: annotationDT) => <Speaker isLocality={true} data={data.speaker} />
        },
        {
            title: `${"Word annotation".toLocaleUpperCase().slice(0, 10)}...`,
            key: 'wordAnnotation',
            align: "center",
            width: 119,
            render: () => <><Checkbox onChange={onChange}></Checkbox></>
        },
        {
            title: `${"Phoneme annotation".toLocaleUpperCase().slice(0, 13)}...`,
            key: 'wordAnnotation',
            align: "center",
            width: 119,
            render: () => <><Checkbox onChange={onChange}></Checkbox></>
        },
        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 80,
            align: "center",
            render: (data: annotationDT) => (
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
            render: (_, record: annotationDT) => (
                <>

                    <div className='flex hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full justify-center items-center'>
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: annotationDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: annotationDT) => ({
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
                columns={Type19columns}
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
                />
            }
        </div>
    )
}

export default Type19