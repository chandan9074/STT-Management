import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import Icons from "../../assets/Icons"
import { collectAnnSenDataDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import Annotate from "../common/TableField/AudioManagement/Annotate"
import AudioChecker from "../common/TableField/AudioManagement/AudioChecker"
import Speaker from "../common/TableField/AudioManagement/Speaker"

type Props = {
    data: collectAnnSenDataDT[]
}

const Type20 = ({ data }: Props) => {

    // const [remarkOpen, setRemarkOpen] = useState(false);
    // const [singleTargetData, setSingleTargetData] = useState<collectAnnSenDataDT>();

    const Type20columns: ColumnsType<collectAnnSenDataDT> = [
        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'sn',
            width: 48,
            // align: "center",
            render: (text, record, index) => (
                <span>{(index + 1)}</span>
            ),
        },
        {
            title: `${"# Task ID".toLocaleUpperCase()}`,
            key: 'id',
            // align: 'center',
            width: 96,
            render: (data: collectAnnSenDataDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 148,
            render: (data: collectAnnSenDataDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Annotate".toLocaleUpperCase()}`,
            key: 'annotate',
            width: 184,
            render: (data: collectAnnSenDataDT) => <Annotate data={data.annotate} />
        },
        {
            title: `${"DeadLine (DD/MM)".toLocaleUpperCase()}`,
            key: 'deadLine',
            width: 165,
            render: (data: collectAnnSenDataDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Audio Checker".toLocaleUpperCase()}`,
            key: 'audioChecker',
            width: 233,
            render: (data: collectAnnSenDataDT) => <AudioChecker data={data.audioChecker} />
        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 234,
            render: (data: collectAnnSenDataDT) => <Speaker data={data.speaker} />
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'details',
            fixed: 'right',
            width: 90,
            render: (_, record: collectAnnSenDataDT) => (
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: collectAnnSenDataDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: collectAnnSenDataDT) => ({
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
                columns={Type20columns}
                dataSource={data}
                scroll={{ x: 1366 }}
                rowKey="id"
            />
        </div>
    )
}

export default Type20