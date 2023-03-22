import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import Icons from "../../assets/Icons"
import { audioManagementDT } from "../../types/audioManagementTypes"
import { roleDT } from "../../types/billingTypes"
import AudioTrack from "../common/AudioTrack"

type Props = {
    data: audioManagementDT[]
}

const Type16 = ({ data }: Props) => {

    const Type16columns: ColumnsType<audioManagementDT> = [
        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'key',
            width: 48,
            // align: "center",
            render: (text, record, index) => (
                <span>{(index + 1)}</span>
            ),


        },
        {
            title: `${"# Target ID".toLocaleUpperCase()}`,
            key: 'key',
            // align: 'center',
            width: 136,
            render: (data: audioManagementDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 200,
            render: (data: audioManagementDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Script".toLocaleUpperCase()}`,
            key: 'script',
            width: 200,
            render: (data: audioManagementDT) => <h1 className='w-20 truncate whitespace-nowrap'>{data.script.id}</h1>,
        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 252,
            render: (data: audioManagementDT) =>
                <div>

                    <div className='flex justify-between items-center cursor-pointer'>
                        <div>
                            <div>
                                {
                                    data?.speaker.map((item: roleDT, i: number) => (
                                        <div key={i} className='gap-y-[6px]'>
                                            <div className='flex items-center gap-x-2'>
                                                <img className='h-4 w-4' src={item.gender === 'male' ? Icons.speakerMale : Icons.SpeakerFemale} alt="" />
                                                <h1 className='text-blue-gray-80 text-xs font-medium'>{item?.name}</h1>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                    </div>
                </div>
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
        <div className="billing-table type4-table remove-padding">
            <Table dataSource={data} columns={Type16columns} />
        </div>
    )
}

export default Type16;