import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useState } from "react"
import Icons from "../../assets/Icons"
import { audioManagementDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import Speaker from "../containers/AudioManagement/TableField/AudioManagement/Speaker"
import { Drawer } from "../Drawer"
import Pagination from "../Pagination"

type Props = {
    data: audioManagementDT[]
}

const Type16 = ({ data }: Props) => {

    const [open, setOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<audioManagementDT>();
    const [activePanel, setActivePanel] = useState('')

    const showDrawer = () => {
        setOpen(true);
    };


    const Type16columns: ColumnsType<audioManagementDT> = [
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
            title: `${"# Target ID".toLocaleUpperCase()}`,
            key: 'id',
            // align: 'center',
            width: 136,
            render: (data: audioManagementDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 205,
            render: (data: audioManagementDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Script".toLocaleUpperCase()}`,
            key: 'script',
            width: 200,

            render: (data: audioManagementDT) => <button className='flex w-full justify-start items-center gap-x-[10px]'
                onClick={() => {
                    showDrawer();
                    setSingleTargetData(data);
                }}
            >
                <h1 className='w-28 truncate whitespace-nowrap'>{data.script.id}</h1>
                <img
                    // onClick={() => {
                    //     showDrawer(record);
                    //     setSingleTargetData(record);
                    // }}
                    className='w-[10px] h-[10px] cursor-pointer'
                    src={Icons.openInNewGray}
                    alt="" />
            </button>,
        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 252,
            render: (data: audioManagementDT) => <Speaker isLocality={true} data={data.speaker} />
        },
        {
            title: `${"Journey".toLocaleUpperCase()}`,
            key: "journey",
            align: 'center',
            width: 116,
            render: (data: audioManagementDT) => (
                <>
                    <button className="flex w-full justify-center items-center"
                        onClick={() => {
                            showDrawer();
                            setSingleTargetData(data);
                            setActivePanel('Others');
                        }}
                    >
                        <img src={Icons.Conversion} alt="" />
                    </button>
                </>
            )
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            key: 'details',
            // fixed: 'right',
            width: 93,
            render: (_, record: audioManagementDT) => (
                <>

                    <button className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full'>
                        <img
                            onClick={() => {
                                showDrawer();
                                setSingleTargetData(record);
                                setActivePanel('Script');
                            }}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>

                </>)
        },
    ]

    const handlePageChange = (page: number) => {
        // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    }

    return (
        <div className="billing-table billing-table-even-bg type4-table horizontal-table-padding">
            <Table dataSource={data} columns={Type16columns} pagination={false} />
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
                    activePanelProp={activePanel}
                    targetTitle={true}
                />
            }
        </div>
    )
}

export default Type16;