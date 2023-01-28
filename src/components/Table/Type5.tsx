import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { CustomModal } from '../common/CustomModal';
import { SideDrawer } from '../common/SideDrawer';
import { Table } from 'antd';
import Buttons from '../Buttons';
import './type4Table.css';
import { Status } from '../Status';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    status: string
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
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modaData, setModalData] = useState<string>('')

    const showDrawer = (key: any) => {
        setOpen(true);
        setDrawerData(key)
    };


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
             dataIndex: 'status',
            width: 136,
            align: "center",
            render: (data) => (<div>
                <Status.Type2 status={data} label={data === "Active" ? "Active" : "Blocked"} />
            </div>)
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
            />

            <SideDrawer.Type2 open={open} setOpen={setOpen} drawerData={drawerData} />

        </div >
    );
};

export default Type5;