import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useContext } from "react"
import Icons from "../../assets/Icons"
import { CommonContext } from "../../context/CommonProvider"
import { uploadAudioDataTypeFilterData } from "../../data/audioManagement/AudioManagementData"
import { uploadAudioDataDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import DataTypeFilter from "../common/TableField/AudioManagement/DataTypeFilter"
import RoleImage from "../Image/RoleImage"
import Pagination from "../Pagination"

type Props = {
    data: uploadAudioDataDT[]
}

const Type23 = ({ data }: Props) => {

    const { roleName } = useContext(CommonContext);

    const getColumnSearchProps = (dataIndex: string): any => ({


        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[266px] h-[92px] py-1.5 flex justify-center">
                <DataTypeFilter option1="STT" option2="TTS" data={uploadAudioDataTypeFilterData} />
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[18px] h-[18px] object-cover" alt='' />
            </div>
        ),
    });

    const Type23columns: ColumnsType<uploadAudioDataDT> = [
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
            title: `${"Data Type".toLocaleUpperCase()}`,
            key: 'dataType',
            ...getColumnSearchProps('Data Type'),
            // align: 'center',
            width: 126,
            render: (data: uploadAudioDataDT) => <h1 className='text-small font-normal text-blue-gray-80'>{data.dataType}</h1>,
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 201,
            render: (data: uploadAudioDataDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Upload Date".toLocaleUpperCase()}`,
            key: 'uploadDate',
            // align: 'center',
            width: 181,
            render: (data: uploadAudioDataDT) => <h1 className='text-small font-normal text-blue-gray-80'>{data.uploadDate}</h1>,
        },
        {
            title: `${"Uploader".toLocaleUpperCase()}`,
            key: 'uploader',
            // className: "audio-management-status",
            width: 249,
            render: (data: uploadAudioDataDT) => <div >
                <div className='flex'>
                    <RoleImage role='admin' height='h-4' width='w-4' />
                    <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xs'>{data.uploader.name}{roleName === data.uploader.name && " (Self)"}</h1>
                </div>
                <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.uploader.role}</p>
            </div>
        },
        {
            title: `${"Domain".toLocaleUpperCase()}`,
            key: 'domain',
            // align: 'center',
            width: 184,
            render: (data: uploadAudioDataDT) => <h1 className='text-small font-normal text-blue-gray-80'>{data.domain}</h1>,
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'details',
            fixed: 'right',
            width: 85,
            render: (_, record: uploadAudioDataDT) => (
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

    const handlePageChange = (page: number) => {
        // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    }

    return (
        <div className="billing-table billing-table-even-bg type4-table horizontal-table-padding">
            <Table dataSource={data} columns={Type23columns} pagination={false} />
            <div className='flex w-full justify-end mt-4 mb-2'>
                <Pagination.Type2
                    total={100}
                    pageSize={10}
                    // total={35}
                    // pageSize={5}
                    handleDataChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default Type23