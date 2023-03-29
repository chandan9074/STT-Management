import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import Icons from "../../assets/Icons"
import { audioManagementDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import Speaker from "../common/TableField/AudioManagement/Speaker"

type Props = {
    data: audioManagementDT[]
}

const Type16 = ({ data }: Props) => {

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

            render: (data: audioManagementDT) => <div className='flex w-full justify-start items-center gap-x-[10px]'>
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
            width: 252,
            render: (data: audioManagementDT) => <Speaker data={data.speaker} />
        },
        {
            title: `${"Journey".toLocaleUpperCase()}`,
            key: "journey",
            align: 'center',
            width: 116,
            render: () => (
                <>
                    <div className="flex w-full justify-center items-center">
                        <img src={Icons.Conversion} alt="" />
                    </div>
                </>
            )
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            key: 'details',
            // fixed: 'right',
            width: 93,
            render: (data: audioManagementDT) => (
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

    return (
        <div className="billing-table billing-table-even-bg type4-table horizontal-table-padding">
            <Table dataSource={data} columns={Type16columns} />
        </div>
    )
}

export default Type16;