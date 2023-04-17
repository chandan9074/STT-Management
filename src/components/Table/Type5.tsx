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
    data: userManagementTableDT[]
}
// interface TableParams {
//     pagination?: TablePaginationConfig;
//     sortField?: string;
//     sortOrder?: string;
//     filters?: Record<string, FilterValue>;
// }

// const data: DataType[] = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No.',
//         status: "Blocked",
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No.',
//         status: "Active",
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No',
//         status: "Active",
//     },
//     {
//         key: '4',
//         name: 'Disabled User',
//         age: 99,
//         address: 'Sidney No. ',
//         status: "Active",
//     },
// ];
const Type5 = ({ data }: Props) => {
    // const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState<userManagementTableDT>();
    const [active, setActive] = useState<string>("")
    const navigate = useNavigate();
    // const [searchedColumn, setSearchedColumn] = useState("");

    const showDrawer = (key: userManagementTableDT) => {

        setOpen(true);
        setDrawerData(key)
    };

    const handleActiveBlockChange = (value: string, confirm: any) => {
        // confirm()

        setActive(value)
    }


    const getColumnSearchProps = (dataIndex: any): any => ({


        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px]">

                {/* <div
                    className={`flex gap-1 items-center px-4 py-3 rounded-t-lg cursor-pointer ${active === "Active" ? "bg-[#DEF7F0]" : ""}`}
                    onClick={() => handleActiveBlockChange("Active", confirm)}
                >
                    <div className='w-[9px] h-[9px] rounded-full bg-green/50-05956F' />
                    <p>Active</p>
                </div>
                <div
                    onClick={() => handleActiveBlockChange("Blocked", confirm)}
                    className={`flex gap-1 items-center px-4 py-3 rounded-b-lg cursor-pointer ${active === "Blocked" ? "bg-[#F7DEE0]" : ""}`}>
                    <div className='w-[9px] h-[9px] rounded-full bg-[#FF293D]' />
                    <p>Blocked</p>
                </div> */}

                <Dropdown.Type8 data={[STATUS_ACTIVE,STATUS_BLOCKED]} option1={STATUS_ACTIVE} option2={STATUS_BLOCKED} />

            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[14px] h-[14px]" alt='' />
            </div>
        ),
        onFilter: (value: any, record: any) =>
            record["status"]
                .toString()
                .toLowerCase()
                .includes(active.toLowerCase()),

        render: (text: any) =>
            active === "Acitive" ? (
                // <Highlighter
                //   highlightStyle={{
                //     backgroundColor: '#ffc069',
                //     padding: 0,
                //   }}
                //   searchWords={[searchText]}
                //   autoEscape
                //   textToHighlight={text ? text.toString() : ''}
                // />
                <p>text</p>
            ) : (
                <p>hellow</p>
            )
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
            width: 136

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
            width: 136
        },
        {
            title: `${"Reporting to".toLocaleUpperCase()}`,
            dataIndex: 'reportingTo',
            width: 136,
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
                <SpeechStatus data={data}/>
            </div>),
            onFilter: (value, record) => (console.log("reeeeeeeeeeee", record))
        },
        {
            title: `${"Activity".toLocaleUpperCase()}`,
            dataIndex: 'age',
            align: "center",
            width: 112,
            render: (data) => (<>
                <Buttons.LabelButton.Tertiary
                    onClick={() => navigate(`/user-management/activity/${data}`)}
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
            width: 80,
            render: (_, record: userManagementTableDT) => (
                <>

                    <div className='flex w-full justify-center items-center'>
                        <img
                            onClick={() => showDrawer(record)}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </div>

                </>)
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: userManagementTableDT[]) => {
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
        <div className='type4-table billing-table billing-table-even-bg'>

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
            />

            <SideDrawer.Type2 open={open} setOpen={setOpen} drawerData={drawerData} />

        </div >
    );
};

export default Type5;