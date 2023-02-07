import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { CustomModal } from '../common/CustomModal';
import { SideDrawer } from '../common/SideDrawer';
import './type4Table.css';

interface DataType {
    key: React.Key;
    id: number;
    script: string;
    frequency: number;
}


const data: DataType[] = [
    {
        key: '1',
        id: 227,
        script: "শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা। শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা",
        frequency: 1200,
    },
    {
        key: '2',
        id: 228,
        script: "শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা। শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা",
        frequency: 200,
    },
    {
        key: '3',
        id: 229,
        script: "শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা। শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা",
        frequency: 1200,
    },
    {
        key: '4',
        id: 230,
        script: "শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা। শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা",
        frequency: 200,
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
        // disabled: record.name === 'Disabled User', // Column configuration not to be checked
        // record.id,
        // console.log(record.id)
    }),
};

const Type9 = () => {
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState<any>();

    const showDrawer = (key: any) => {
        setOpen(true);
        setDrawerData(key)
    };


    const columns: ColumnsType<DataType> = [
        {
            title: "ID",
            width: 100,
            // align: "center",
            dataIndex: 'id',
            render: (id: number) => <span className='text-ct-blue-60 text-xs font-medium'>{id}</span>,
        },
        {
            title: "Script",
            width: 372,
            dataIndex: 'script',
            render: (script: number) => <span className='text-blue-gray-80 text-xs'>{script}</span>,
        },
        {
            title: "Frequency",
            align: "center",
            width: 112,
            dataIndex: 'frequency',
            render: (frequency: number) => <span className='text-blue-gray-80 text-xs'>{frequency}</span>,
        },
    ];


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
        </div >
    );
};

export default Type9;