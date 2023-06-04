import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Icons from "../../assets/Icons";
import { DeviceDataDT } from "../../types/organizerTypes";
import DeviceImage from "../Image/DeviceImage";
import { Drawer } from "../Drawer";
import SideDrawerContent from "../containers/Organizer/device/SideDrawerContent";
import { useState } from "react";
import UpdateForm from "../../pages/Organizer/DeviceForm/UpdateForm";

type Props = {
    data: DeviceDataDT[]
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleSelectRow: (value: DeviceDataDT[], key?: React.Key[]) => void;
    selectedRowKeys: React.Key[];
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
    isEdit: boolean;
}

const Type30 = ({ data, handleSelectRow, selectedRowKeys, setIsEdit, isEdit }: Props) => {

    const [open, setOpen] = useState<boolean>(false)
    const [selectedDeviceData, setSelectedDeviceData] = useState<DeviceDataDT>({} as DeviceDataDT);
    const [isFormDrawer, setIsFormDrawer] = useState(false);

    const handleEdit = () => {
        setIsFormDrawer(!isFormDrawer);
        setIsEdit(true);
    }


    const Type30columns: ColumnsType<DeviceDataDT> = [
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
            title: `${"Device Type".toLocaleUpperCase()}`,
            key: 'device',
            // align: 'center',
            width: 120,
            render: (data: DeviceDataDT) => <DeviceImage device={data.device} width="w-8" height="h-8" />,
        },
        {
            title: `${"Device Name".toLocaleUpperCase()}`,
            key: 'device',
            // align: 'center',
            width: 250,
            render: (data: DeviceDataDT) => <h1 className="text-small font-normal text-ct-blue-80">{data.device}</h1>,
        },
        {
            title: `${"Last date of Modification".toLocaleUpperCase()}`,
            key: 'lastDate',
            // align: 'center',
            width: 491,
            render: (data: DeviceDataDT) => <h1 className="text-small font-normal text-ct-blue-80">{data.lastDate}</h1>,
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            key: 'details',
            // fixed: 'right',
            width: 93,
            render: (data: DeviceDataDT) => (
                <div className="flex justify-center items-center">

                    <div className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10' onClick={() => { setOpen(true); setSelectedDeviceData(data); setIsEdit(false) }}>
                        <img
                            // onClick={() => {
                            //     showDrawer(record);
                            //     setSingleTargetData(record);
                            // }}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </div>

                </div>)
        },
    ]


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DeviceDataDT[]) => {
            // setSelectedTarget(selectedRows);
            handleSelectRow(selectedRows, selectedRowKeys)

        },
        getCheckboxProps: (record: DeviceDataDT) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            // name: record.assignee.name,
        }),
    };

    // const handlePageChange = (page: number) => {
    //     // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    // }

    return (
        <div className="billing-table billing-table-even-bg type4-table horizontal-table-padding">
            <Table
                dataSource={data}
                columns={Type30columns}
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
                // drawerClose={drawerClose}
                setIsDrawerClose={setOpen}
                headerBgColor="bg-ct-blue-05"
                title="Device Details"
                isEdit={true}
                handleEdit={handleEdit}
            >
                <div className=' w-full'>
                    {
                        isEdit ? <UpdateForm setIsFormOpen={setOpen} data={selectedDeviceData} handleEdit={handleEdit} /> : <SideDrawerContent data={selectedDeviceData} />
                    }
                </div>
            </Drawer.Organizer.Type1>
        </div>
    )
}

export default Type30