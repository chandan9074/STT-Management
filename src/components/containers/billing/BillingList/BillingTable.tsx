import React, {useState} from 'react';
import {Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import type {TableRowSelection} from 'antd/es/table/interface';
import './billingTable.css'
import Primary from "./Primary";
import {InputNumber} from 'antd';

interface Person {
    title: string;
    subTitle: string;
}

interface DataType {
    key: React.Key;
    manager: Person
    hour: string;
    amountPaid: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'MANAGER',
        dataIndex: 'manager',
        width: 100,
        render: (data) => (
            <>
                <p>{data.title}</p>
                <p>{data.subTitle}</p>
            </>
        )

    },
    {
        title: 'HOUR ',
        dataIndex: 'hour',
        width: 100,


    },
    {
        title: 'AMOUNT PAID',
        dataIndex: 'amountPaid',
        width: 100,

    },
];

const data: DataType[] = [];
for (let i = 0; i < 7; i++) {
    data.push({
        key: i,
        manager: {
            title: `Edward King ${i}`,
            subTitle: `sub-title ${i}`,

        },
        hour: '32',
        amountPaid: `London, Park Lane no. ${i}`,
    });
}

const BillingTable = () => {
    const changeEntry = (value: any) => {
        console.log('changed', value);
    };
    return (
        <div className="billing-table my-2">
            <Table columns={columns} dataSource={data} pagination={false}/>
            <div className="my-4 w-100 flex items-center gap-8 justify-end">
                <Primary total={100}/>
               <div className="flex items-center gap-2">
                   <p>Entry</p>
                   <InputNumber min={1} max={10} defaultValue={3} onChange={changeEntry}/>
               </div>
            </div>
        </div>
    );
};

export default BillingTable;