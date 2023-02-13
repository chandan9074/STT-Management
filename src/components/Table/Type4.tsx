import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { CustomModal } from '../common/CustomModal';
import { SideDrawer } from '../common/SideDrawer';
import "../../assets/css/table/type4Table.css";
import { allScriptResDT } from '../../types/script';



// rowSelection object indicates the need for row selection
;

interface Props {
    Data: any
}

const Type4 = ({ Data }: Props) => {
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState<any>();

    const showDrawer = (data: any) => {
        setOpen(true);
        setDrawerData(data)
    };


    const columns: ColumnsType<any> = [
        {
            title: `${"Data type".toLocaleUpperCase()}`,
            dataIndex: 'module',
        },
        {
            title: `${"ID".toLocaleUpperCase()}`,
            dataIndex: 'id',
        },
        {
            title: `${"distribution Source".toLocaleUpperCase()}`,
            dataIndex: 'distributionSource',
        },
        {
            title: `${"Script title".toLocaleUpperCase()}`,
            dataIndex: 'title',
        },
        {
            title: `${"Description".toLocaleUpperCase()}`,
            dataIndex: 'description',
        },
        {
            title: `${"Script Domain".toLocaleUpperCase()}`,
            dataIndex: 'domain',
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            dataIndex: 'Details',
            align: 'center',
            render: (_, record, data) => (
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
        onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        // getCheckboxProps: (record: any) => ({
        //     // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            
        // }),
    }

    return (
        <div className='type4-table billing-table'>

            <Table

                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                rowKey={(render) => render.id}
                columns={columns}
                dataSource={Data}
                pagination={false}
            />

            <SideDrawer.Type1
                open={open}
                setOpen={setOpen}
                drawerData={drawerData}
            />
        </div >
    );
};

export default Type4;