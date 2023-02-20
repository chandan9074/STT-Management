import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../assets/Icons';
import { SideDrawer } from '../common/SideDrawer';
import "../../assets/css/table/type4Table.css";
import RoleImage from '../Image/RoleImage';


const data: any = [
    {
        key: '10-227a',
        script: 'Script id_227',
        target: 1000,
        status: "75",
        speeches: '35',
        assignee: "MD. Eman Hasan",
        assigned_date: "30/01/2022",
        deadline: "30/01/2022",
        remark: ""
        
    },
    {
        key: '10-228a',
        script: 'Script id_227',
        target: 1000,
        status: "90",
        speeches: '80',
        assignee: "Sakib",
        assigned_date: "30/01/2022",
        deadline: "30/01/2022",
        remark: ""
        
    },
    {
        key: '10-229a',
        script: 'Script id_227',
        target: 1000,
        status: "0",
        speeches: '55',
        assignee: "Tamim",
        assigned_date: "30/01/2022",
        deadline: "30/01/2022",
        remark: ""
        
    }, {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '10',
        assignee: "Mushfiqur",
        assigned_date: "30/01/2022",
        deadline: "30/01/2022",
        remark: ""
        
    },


];

const Type10 = () => {
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState<any>();
    const [active, setActive] = useState<string>("")
    const navigate = useNavigate();
    // const [searchedColumn, setSearchedColumn] = useState("");

    const showDrawer = (key: any) => {
        setOpen(true);
        setDrawerData(key)
    };

    const getPercentage = (max: number, value: number) => {
        const result = (max * value) / 100;
        return result;
    }

    const Type8columns: ColumnsType<any> = [

        {
            title: `${"# Target ID".toLocaleUpperCase()}`,
            key: 'key',
            render: (data) => <p># {data.key}</p>,

        },
        {
            title: `${"Script".toLocaleUpperCase()}`,
            dataIndex: 'script',
            key: 'script',



        },
        {
            title: `${"target".toLocaleUpperCase()}`,
            key: 'target',
            dataIndex: 'target',

        },
        {
            title: `${"status".toLocaleUpperCase()}`,
            key: 'status',
            width: 136,
            render: (data) => (
                <div>
                    <h1>{data.status > 0 ? data?.status : 'Not'} Assigned</h1>
                    <div className='bg-blue-gray-20 h-[6px] rounded-[21px]'>
                        {
                            data?.status > 0 &&
                            <div
                                style={{
                                    width: `${data.status}%`
                                }}
                                className='bg-secondary-yellow-50 h-full rounded-l-[21px]' />

                        }
                    </div>
                </div>
            )
        },

        {
            title: `${"speeches".toLocaleUpperCase()}`,
            width: 227,
            key: 'speeches',
            render: (data) => (
                <div className='flex items-center gap-x-[13px]'>
                    <div>
                        <h1>{data.status > 0 ? data?.speeches : 'Not'} Assigned</h1>
                        <div className='bg-blue-gray-20 h-[6px] rounded-[21px] w-[175px]'>
                            {
                                data?.status > 0 &&
                                <div
                                    style={{
                                        width: `${data.speeches}%`
                                    }}
                                    className='bg-secondary-blue-50 h-full rounded-l-[21px]' />

                            }
                        </div>
                    </div>
                    <img className='w-[13px] h-[9px]' src={Icons.BlueRightArrow} alt="" />

                </div>
            )
        },

        {
            title: `${"Assignee".toLocaleUpperCase()}`,
            key: 'assignee',
            width: 212,
            render: (data) => (
                <div className='flex gap-x-2'>
                    <RoleImage width='w-[18px]' height='h-[18px]' role='speaker' />
                    <div>
                        <h1 className='text-xs text-blue-gray-80 font-medium m-0 leading-[15px]'>{data.assignee}</h1>
                        <h1 className='text-xxs text-blue-gray-75 leading-[14px]'>Manager</h1>
                    </div>
                </div>
            )
        },

        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            key: 'details',
            width: 80,
            render: (_, record) => (
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: any) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
    return (
        <div className='billing-table type4-table'>

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={Type8columns}
                dataSource={data}
                pagination={false}
                // scroll={{x: 768, y: 1000}}
            />

            <SideDrawer.Type3 open={open} setOpen={setOpen} drawerData={drawerData} />

        </div >
    );
};

export default Type10;