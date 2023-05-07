import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Key, useState } from 'react';
import Icons from '../../assets/Icons';
import { SideDrawer } from '../common/SideDrawer';
import "../../assets/css/table/type4Table.css";
import { scriptResDT } from '../../types/script';
import { Tooltip } from '../Tooltip';



// rowSelection object indicates the need for row selection
;

interface Props {
    Data: scriptResDT[],
    handleSelectRow: (selectedRows: scriptResDT[]) => void
}

const Type4 = ({ Data, handleSelectRow }: Props) => {
    // const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState<scriptResDT>();

    const showDrawer = (data: scriptResDT) => {
        setOpen(true);
        setDrawerData(data)
    };


    const columns: ColumnsType<scriptResDT> = [
        {
            title: `${"Data type".toLocaleUpperCase()}`,
            dataIndex: 'module',
            width: 128,
            render: (module: string) => <h1 className='text-blue-gray-80 text-xs'>{module}</h1>
        },
        {
            title: `${"ID".toLocaleUpperCase()}`,
            dataIndex: 'id',
            width: 116,
            render: (id: number) => <div className=' flex flex-col items-start'>
                <div className='relative group flex flex-col items-center'>
                    <h1 className='text-ct-blue-60 text-xs font-medium w-14 truncate'>{id}</h1>
                    <div className="absolute group-hover:block hidden animate-fadeIn top-6 z-[99999]">
                        <Tooltip.Type1 title={id.toString()} align="center" />
                    </div>
                </div>
            </div>
        },
        {
            title: `${"distribution Source".toLocaleUpperCase()}`,
            dataIndex: 'distributionSource',
            width: 212,
            render: (distributionSource: string) => <h1 className='text-blue-gray-80 text-xs'>{distributionSource}</h1>
        },
        {
            title: `${"Script title".toLocaleUpperCase()}`,
            dataIndex: 'title',
            width: 216,
            render: (title: string) => <h1 className='text-blue-gray-80 text-xs line-clamp-2'>{title}</h1>
        },
        {
            title: `${"Description".toLocaleUpperCase()}`,
            dataIndex: 'description',
            width: 490,
            render: (description: string) => <h1 className='text-blue-gray-80 text-xs line-clamp-2'>{description}</h1>
        },
        {
            title: `${"Script Domain".toLocaleUpperCase()}`,
            dataIndex: 'domain',
            width: 184,
            render: (domain: string) => <h1 className='text-blue-gray-80 text-xs'>{domain}</h1>
        },
        {
            title: `${"Details".toLocaleUpperCase()}`,
            dataIndex: 'Details',
            fixed: 'right',
            align: 'center',
            width: 128,
            render: (_, record, data) => (
                <>

                    <div className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full'>
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
        onChange: (selectedRowKeys: Key[], selectedRows: scriptResDT[]) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            handleSelectRow(selectedRows)
        },
        // getCheckboxProps: (record: any) => ({
        //     // disabled: record.name === 'Disabled User', // Column configuration not to be checked

        // }),
    }

    return (
        <div className='billing-table type4-table billing-table-even-bg'>

            <Table

                rowSelection={{
                    // type: selectionType,
                    fixed: 'left',
                    ...rowSelection,
                }}
                rowKey="id"
                columns={columns}
                dataSource={Data}
                pagination={false}
                scroll={{ x: 1366 }}
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