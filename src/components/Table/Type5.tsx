import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { SideDrawer } from '../common/SideDrawer';
import { Table } from 'antd';
import Buttons from '../Buttons';
import "../../assets/css/table/type4Table.css";
import { useNavigate } from 'react-router-dom';
import { userManagementTableDT } from '../../types/userManagementTypes';
import SpeechStatus from '../common/SpeechStatus';
import Dropdown from '../Dropdown';
import { STATUS_ACTIVE, STATUS_BLOCKED } from '../../helpers/ConditionVariable';

type Props = {
    data: userManagementTableDT[];
    handleSelectedRow: (values: string[]) => void;
}

const Type5 = ({ data, handleSelectedRow }: Props) => {
    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState<userManagementTableDT>();
    const navigate = useNavigate();

    const showDrawer = (key: userManagementTableDT) => {

        setOpen(true);
        setDrawerData(key)
    };

    const getColumnSearchProps = (dataIndex: any): any => ({


        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px]">



                <Dropdown.Type8 data={[STATUS_ACTIVE, STATUS_BLOCKED]} option1={STATUS_ACTIVE} option2={STATUS_BLOCKED} />

            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[14px] h-[14px]" alt='' />
            </div>
        ),
        // onFilter: (value: any, record: any) =>
        //     record["status"]
        //         .toString()
        //         .toLowerCase()
        //         .includes(active.toLowerCase()),

        // render: (text: any) =>
        //     active === "Acitive" ? (
        //         // <Highlighter
        //         //   highlightStyle={{
        //         //     backgroundColor: '#ffc069',
        //         //     padding: 0,
        //         //   }}
        //         //   searchWords={[searchText]}
        //         //   autoEscape
        //         //   textToHighlight={text ? text.toString() : ''}
        //         // />
        //         <p>text</p>
        //     ) : (
        //         <p>hellow</p>
        //     )
    });


    const columns: ColumnsType<userManagementTableDT> = [

        {
            title: `${"# ID".toLocaleUpperCase()}`,
            dataIndex: 'id',
            render: (text: string) => <p className='w-24 truncate'># {text}</p>,
            width: 120
        },
        {
            title: `${"Name".toLocaleUpperCase()}`,
            dataIndex: 'name',
            render: (text: string) => <p className='text-small font-medium text-ct-blue-60'>{text}</p>,
            width: 170

        },
        {
            title: `${"Present District".toLocaleUpperCase()}`,
            dataIndex: 'presentDistrict',
            width: 148
        },
        {
            title: `${"Email Address".toLocaleUpperCase()}`,
            dataIndex: 'email',
            width: 228
        },
        {
            title: `${"Mobile Number".toLocaleUpperCase()}`,
            dataIndex: 'mobileNumber',
            width: 150
        },
        {
            title: `${"Reporting to".toLocaleUpperCase()}`,
            dataIndex: 'reportingTo',
            width: 150,
            render: (data: { name: string, role: string }) => (
                <div>
                    <h3 className='text-xs font-medium text-blue-gray-80'>{data.name}</h3>
                    <p className='text-xxs font-normal text-blue-gray-75'>{data.role}</p>
                </div>
            )
        },
        {
            title: `${"Status".toLocaleUpperCase()}`,
            ...getColumnSearchProps('status'),
            dataIndex: "status",
            width: 136,
            align: "center",
            render: (data) => (<div>
                {/* <Status.Type2 status={data} label={data === "Active" ? "Active" : "Blocked"} /> */}
                <SpeechStatus data={data} />
            </div>),
        },
        {
            title: `${"Activity".toLocaleUpperCase()}`,
            dataIndex: 'age',
            align: "center",
            width: 170,
            render: (_, data: userManagementTableDT) => (<>
                <Buttons.LabelButton.Tertiary
                    onClick={() => navigate(`/user-management/activity/${data.id}`)}
                    size='xSmall'
                    variant='Blue'
                    label='Check Activity'
                />
            </>)
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            dataIndex: 'Details',
            align: 'center',
            fixed: 'right',
            width: 85,
            render: (_, record: userManagementTableDT) => (
                <div className='flex w-full justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full'>

                    <button className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10'
                        onClick={() => showDrawer(record)}>
                        <img
                            className='w-[14px] h-[14px]'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>

                </div>)
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: userManagementTableDT[]) => {
            const selectedRowsId = selectedRows.map((row) => row.id)
            handleSelectedRow(selectedRowsId)
        },
        getCheckboxProps: (record: userManagementTableDT) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };



    const handleTableChange = (
        pagination: any, filters: any, sorter: any, extra: any
    ): any => {
    };

    return (
        <div className='type4-table billing-table billing-table-odd-bg'>

            <Table

                rowSelection={{
                    // type: selectionType,
                    ...rowSelection,
                    fixed: 'left',
                    columnWidth: 48,
                }}
                columns={columns}
                dataSource={data}
                pagination={false}
                onChange={handleTableChange}
                scroll={{ x: 1366 }}
                rowKey="id"
            />

            <SideDrawer.Type2 open={open} setOpen={setOpen} drawerData={drawerData ? drawerData : {} as userManagementTableDT} />

        </div >
    );
};

export default Type5;