import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import Icons from "../../assets/Icons"
import { RoleDataDT } from "../../types/organizerTypes"
import RoleImage from "../Image/RoleImage"
import Pagination from "../Pagination"

type Props = {
    data: RoleDataDT[]
    handleSelectRow: (value: RoleDataDT[]) => void;
}

const Type28 = ({ data,handleSelectRow }: Props) => {

    const Type28columns: ColumnsType<RoleDataDT> = [
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
            title: `${"Avatar".toLocaleUpperCase()}`,
            key: 'role',
            // align: 'center',
            width: 120,
            render: (data: RoleDataDT) => <RoleImage role={data.role} width="w-8" height="h-8" />,
        },
        {
            title: `${"Role Name".toLocaleUpperCase()}`,
            key: 'roleName',
            // align: 'center',
            width: 250,
            render: (data: RoleDataDT) => <h1 className="text-small font-medium text-ct-blue-60">{data.roleName}</h1>,
        },
        {
            title: `${"Last Date of Modification".toLocaleUpperCase()}`,
            key: 'lastDate',
            // align: 'center',
            width: 466,
            render: (data: RoleDataDT) => <h1 className="text-small font-normal text-blue-gray-80">{data.lastDate}</h1>,
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            key: 'details',
            // fixed: 'right',
            width: 93,
            render: (data: RoleDataDT) => (
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: RoleDataDT[]) => {
            // setSelectedTarget(selectedRows);
            handleSelectRow(selectedRows)

        },
        getCheckboxProps: (record: RoleDataDT) => ({
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
                columns={Type28columns}
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

export default Type28