import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { CustomModal } from '../common/CustomModal';
import { SideDrawer } from '../common/SideDrawer';
import './type2BillingTable.css';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}


const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
        // disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

const Type4 = () => {
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState<any>();
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const showDrawer = (key: any) => {
        setOpen(true);
        setDrawerData(key)
    };


    const columns: ColumnsType<DataType> = [
        {
            title: `${"Data type".toLocaleUpperCase()}`,
            dataIndex: 'name',
            // render: (text: string) => <>{text}</>,
        },
        {
            title: `${"ID".toLocaleUpperCase()}`,
            dataIndex: 'age',
        },
        {
            title: `${"distribution Source".toLocaleUpperCase()}`,
            dataIndex: 'address',
        },
        {
            title: `${"Script title".toLocaleUpperCase()}`,
            dataIndex: 'address',
        },
        {
            title: `${"Description".toLocaleUpperCase()}`,
            dataIndex: 'address',
        },
        {
            title: `${"Script Domain".toLocaleUpperCase()}`,
            dataIndex: 'address',
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            dataIndex: 'Details',
            align: 'center',
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


    return (
        <div>

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                pagination={false}
            />

            <SideDrawer.Type1 open={open} setOpen={setOpen} drawerData={drawerData} />


            <button
                onClick={() => setModalOpen(true)}
            >Open modal</button>

            <CustomModal.Type1 open={modalOpen} setOpen={setModalOpen} />

        </div >
    );
};

export default Type4;