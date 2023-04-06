import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Icons from "../../assets/Icons";
import { TagDataDT } from "../../types/organizerTypes";
import Pagination from "../Pagination";

type Props = {
    data: TagDataDT[]
    handleSelectRow: (value: TagDataDT[]) => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Type29 = ({ data,handleSelectRow,setOpen }: Props) => {

    const Type29columns: ColumnsType<TagDataDT> = [
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
            title: `${"Tag Name".toLocaleUpperCase()}`,
            key: 'roleName',
            // align: 'center',
            width: 194,
            render: (data: TagDataDT) => <h1 className="text-small font-medium text-ct-blue-60">{data.tagName}</h1>,
        },
        {
            title: `${"Shortcut".toLocaleUpperCase()}`,
            key: 'roleName',
            // align: 'center',
            width: 130,
            render: (data: TagDataDT) => <h1 className="text-small font-normal text-blue-gray-80">{data.shortcut}</h1>,
        },
        {
            title: `${"Description".toLocaleUpperCase()}`,
            key: 'roleName',
            // align: 'center',
            width: 537,
            render: (data: TagDataDT) => <h1 className="text-small font-normal text-blue-gray-80">{data.description}</h1>,
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            key: 'details',
            // fixed: 'right',
            width: 93,
            render: (data: TagDataDT) => (
                <>

                    <div className='flex w-full justify-center items-center' onClick={()=>setOpen(true)}>
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: TagDataDT[]) => {
            // setSelectedTarget(selectedRows);
            handleSelectRow(selectedRows)

        },
        getCheckboxProps: (record: TagDataDT) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            // name: record.assignee.name,
        }),
    };

    const handlePageChange = (page: number) => {
        // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    }

    return (
        <div className="billing-table billing-table-even-bg type4-table horizontal-table-padding">
            <Table
                dataSource={data}
                columns={Type29columns}
                rowSelection={{
                    // type: selectionType,
                    columnWidth: 48,
                    fixed: 'left',
                    ...rowSelection,
                }}
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
        </div>
    )
}

export default Type29