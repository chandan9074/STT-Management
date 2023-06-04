import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Icons from "../../assets/Icons";
import { TagDataDT } from "../../types/organizerTypes";
import Pagination from "../Pagination";
import { Drawer } from "../Drawer";
import SideDrawerContent from "../containers/Organizer/tag/SideDrawerContent";
import { useState } from "react";
import UpdateForm from "../../pages/Organizer/TagForm/UpdateForm";

type Props = {
    data: TagDataDT[]
    handleSelectRow: (value: TagDataDT[], keys?: React.Key[]) => void;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedRowKeys: React.Key[];
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
    isEdit: boolean;
}

const Type29 = ({ data, handleSelectRow, open, setOpen, selectedRowKeys, isEdit, setIsEdit }: Props) => {

    const [selectedTagData, setSelectedTagData] = useState<TagDataDT>({} as TagDataDT);
    const [isFormDrawer, setIsFormDrawer] = useState(false);


    const handleEdit = () => {
        setIsFormDrawer(!isFormDrawer);
        setIsEdit(true);
    }

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
            key: 'tagName',
            // align: 'center',
            width: 194,
            render: (data: TagDataDT) => <h1 className="text-small font-medium text-ct-blue-60">{data.tagName}</h1>,
        },
        {
            title: `${"Shortcut".toLocaleUpperCase()}`,
            key: 'tagName',
            // align: 'center',
            width: 130,
            render: (data: TagDataDT) => <h1 className="text-small font-normal text-blue-gray-80">{data.shortCut}</h1>,
        },
        {
            title: `${"Description".toLocaleUpperCase()}`,
            key: 'description',
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
                <div className="flex justify-center items-center">

                    <button className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10' onClick={() => { setOpen(true); setSelectedTagData(data); setIsEdit(false) }}>
                        <img
                            // onClick={() => {
                            //     showDrawer(record);
                            //     setSingleTargetData(record);
                            // }}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>

                </div>)
        },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: TagDataDT[]) => {
            // setSelectedTarget(selectedRows);
            handleSelectRow(selectedRows, selectedRowKeys)

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
                    selectedRowKeys,
                    columnWidth: 48,
                    fixed: 'left',
                    ...rowSelection,
                }}
                rowKey="id"
                pagination={false}
            />
            {/* <div className='flex w-full justify-end mt-4 mb-2'>
                <Pagination.Type2
                    total={100}
                    pageSize={10}
                    // total={35}
                    // pageSize={5}
                    handleDataChange={handlePageChange}

                />
            </div> */}
            <Drawer.Organizer.Type1
                isDrawerOpen={open}
                headerBgColor="bg-ct-blue-05"
                // drawerClose={drawerClose}
                setIsDrawerClose={setOpen}
                title="Tag Details"
                isEdit={true}
                handleEdit={handleEdit}
                setIsEdit={setIsEdit}
            >
                {/* <div className=' flex items-center'>
                    <SideDrawerContent data={selectedTagData} />
                </div> */}
                <div className='w-full'>
                    {
                        isEdit ? <UpdateForm setIsFormOpen={setOpen} data={selectedTagData} handleEdit={handleEdit} /> : <SideDrawerContent data={selectedTagData} />
                    }
                </div>
            </Drawer.Organizer.Type1>
        </div>
    )
}

export default Type29