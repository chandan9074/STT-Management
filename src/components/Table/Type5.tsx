import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { CustomModal } from '../common/CustomModal';
import { SideDrawer } from '../common/SideDrawer';
import { Table } from 'antd';
import Buttons from '../Buttons';
import './type4Table.css';
import { Status } from '../Status';
import { FilterValue, SorterResult } from 'antd/es/table/interface';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    status: string
}
interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Record<string, FilterValue>;
}

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No.',
        status: "Blocked",
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No.',
        status: "Active",
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No',
        status: "Active",
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. ',
        status: "Active",
    },
];
const Type5 = () => {
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState<any>();
    const [active, setActive] = useState<string>("")
    // const [searchedColumn, setSearchedColumn] = useState("");

    const showDrawer = (key: any) => {
        setOpen(true);
        setDrawerData(key)
    };

    const handleActiveBlockChange = (value: string, confirm: any) => {
        console.log("hhhhhhhhhhhhhhh", value);
        // confirm()

        setActive(value)
    }

    const getColumnSearchProps = (dataIndex: any): any => ({


        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px]">

                <div
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
                </div>
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


    const columns: ColumnsType<DataType> = [

        {
            title: `${"# ID".toLocaleUpperCase()}`,
            dataIndex: 'age',
            render: (text: string) => <p># {text}</p>,
            width: 120
        },
        {
            title: `${"Name".toLocaleUpperCase()}`,
            dataIndex: 'name',
            width: 136

        },
        {
            title: `${"Present District".toLocaleUpperCase()}`,
            dataIndex: 'address',
            width: 148
        },
        {
            title: `${"Email Address".toLocaleUpperCase()}`,
            dataIndex: 'address',
            width: 228
        },
        {
            title: `${"Mobile Number".toLocaleUpperCase()}`,
            dataIndex: 'address',
            width: 136
        },
        {
            title: `${"Reporting to".toLocaleUpperCase()}`,
            dataIndex: 'address',
            width: 136
        },
        {
            title: `${"Status".toLocaleUpperCase()}`,
            ...getColumnSearchProps('status'),
            dataIndex: "status",
            width: 136,
            align: "center",
            render: (data) => (<div>
                {/* <Status.Type2 status={data} label={data === "Active" ? "Active" : "Blocked"} /> */}
                {data}
            </div>),
            onFilter: (value, record) => (console.log("reeeeeeeeeeee", record))
        },
        {
            title: `${"Activity".toLocaleUpperCase()}`,
            // dataIndex: 'address',
            align: "center",
            width: 150,
            render: (_, record: { key: React.Key }) => (<>
                <Buttons.LabelButton.Tertiary
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
            width: 80,
            render: (_, record: { key: React.Key }) => (
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };



    const handleTableChange = (
        pagination: any, filters: any, sorter: any, extra: any
    ): any => {
        console.log("filter", filters)
    };

    return (
        <div className='type4-table'>

            <Table

                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                pagination={false}
                onChange={handleTableChange}
            />

            <SideDrawer.Type2 open={open} setOpen={setOpen} drawerData={drawerData} />

        </div >
    );
};

export default Type5;