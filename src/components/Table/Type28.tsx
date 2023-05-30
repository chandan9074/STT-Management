import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import Icons from "../../assets/Icons"
import { RoleDataDT } from "../../types/organizerTypes"
import RoleImage from "../Image/RoleImage"
import Pagination from "../Pagination"
import { Drawer } from "../Drawer"
import SideDrawerContent from "../containers/Organizer/role/SideDrawerContent"
import { useState } from "react"
import RoleForm from "../../pages/Organizer/RoleForm"
import UpdateForm from "../../pages/Organizer/RoleForm/UpdateForm"

type Props = {
    data: RoleDataDT[]
    handleSelectRow: (value: RoleDataDT[], keys?: React.Key[]) => void;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedRowKeys: React.Key[];
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
    isEdit: boolean;
}

const Type28 = ({ data, handleSelectRow, open, setOpen, selectedRowKeys, setIsEdit, isEdit }: Props) => {

    const [selectedRoleData, setSelectedRoleData] = useState<RoleDataDT>({} as RoleDataDT);
    const [isFormDrawer, setIsFormDrawer] = useState(false);
    console.log(isEdit, "isedit")

    const handleEdit = () => {
        // setIsFormDrawer(!isFormDrawer);
        setIsEdit(true)
    }

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
            render: (data: RoleDataDT) => <h1 className="text-small font-medium text-ct-blue-60">{data.role}</h1>,
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
                <div className='flex w-full justify-center items-center'>

                    <button className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10'
                        // onClick={() => {
                        //     showDrawer(record)
                        //     setSingleTargetData(record)
                        // }}
                        onClick={() => { setOpen(true); setSelectedRoleData(data); setIsEdit(false) }}>
                        <img
                            className='w-[14px] h-[14px]'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>

                </div>)
        },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: RoleDataDT[]) => {
            // setSelectedTarget(selectedRows);
            handleSelectRow(selectedRows, selectedRowKeys)

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
        <div className="billing-table billing-table-even-bg type4-table horizontal-table-padding w-full">
            <Table
                dataSource={data}
                columns={Type28columns}
                rowSelection={{
                    // type: selectionType,
                    selectedRowKeys,
                    columnWidth: 48,
                    fixed: 'left',
                    ...rowSelection,
                }}
                rowKey="id"
                pagination={false}
            />
            <div className="w-full">
                <Drawer.Organizer.Type1
                    isDrawerOpen={open}
                    // drawerClose={drawerClose}
                    setIsDrawerClose={setOpen}
                    isEdit={true}
                    headerBgColor="bg-ct-blue-05"
                    title={isEdit ? "Update Role" : "Role Details"}
                    handleEdit={handleEdit}
                >
                    <div className='w-full'>
                        {
                            isEdit ? <UpdateForm setIsDrawerOpen={setOpen} data={selectedRoleData} handleEdit={handleEdit} /> : <SideDrawerContent data={selectedRoleData} />
                        }
                    </div>
                </Drawer.Organizer.Type1>
            </div>
            {/* <div className='flex w-full justify-end mt-4 mb-2'>
                <Pagination.Type2
                    total={100}
                    pageSize={10}
                    // total={35}
                    // pageSize={5}
                    handleDataChange={handlePageChange}

                />
            </div> */}
            {/* <Drawer.Organizer.Type1
                isDrawerOpen={isFormDrawer}
                // drawerClose={drawerClose}
                setIsDrawerClose={setIsFormDrawer}
                headerBgColor="bg-ct-blue-20"
                title="Create Role"
                isEdit={false}
            >
                <RoleForm setIsDrawerOpen={setIsDrawerOpen} data={selectedData} />
            </Drawer.Organizer.Type1> */}
        </div>
    )
}

export default Type28