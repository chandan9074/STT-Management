import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import RoleImage from '../Image/RoleImage';
import { Drawer } from '../Drawer';


const data: any = [
    {
        key: '10-227a',
        script: 'Script id_227',
        target: 1000,
        status: "75",
        speeches: '355',
        maxSpeeches: '1000',
        assignee: "MD. Eman Hasan",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
    {
        key: '10-228a',
        script: 'Script id_227',
        target: 1000,
        status: "90",
        speeches: '800',
        maxSpeeches: '2000',
        assignee: "Sakib",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Team Leader'

    },
    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '100',
        maxSpeeches: '1000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },

    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },

    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
    {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },
];

const Type10 = () => {
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    // const [searchedColumn, setSearchedColumn] = useState("");

    const showDrawer = (key: any) => {
        setOpen(true);
    };

    const getPercentage = (max: number, value: number) => {
        const result = (100 * value) / max;
        return result;
    }

    const Type8columns: ColumnsType<any> = [

        {
            title: `${"# Target ID".toLocaleUpperCase()}`,
            key: 'key',
            // align: 'center',
            width: 120,
            render: (data) => <h1 className='w-[120px] whitespace-nowrap'># {data.key}</h1>,

        },
        {
            title: `${"Script".toLocaleUpperCase()}`,
            key: 'script',
            width: 104,
            render: (data) => <h1 className='w-[104px] whitespace-nowrap'>{data.script}</h1>,



        },
        {
            title: `${"target".toLocaleUpperCase()}`,
            key: 'key',
            width: 88,
            render: (data) => <h1 className='w-[88px] whitespace-nowrap'> {data.target}</h1>,

        },
        {
            title: `${"status".toLocaleUpperCase()}`,
            key: 'status',
            width: 160,
            render: (data) => (
                <div className='w-[160px]'>
                    <h1>{data.status > 0 ? data?.status + '%' : 'Not'} Assigned</h1>
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
            key: 'speeches',
            width: 227,
            render: (data) => (
                <div className='flex items-center gap-x-[13px] w-[227px]'>
                    <div>
                        <div className='flex items-center gap-x-2'>
                            <img className='w-4 h-4' src={Icons.MusicBlue} alt="" />
                            <h1 className='text-xs text-secondary-blue-50 font-medium'>{data.speeches + '/' + data?.maxSpeeches} Uploaded</h1>
                        </div>
                        <div className='bg-blue-gray-20 h-[6px] rounded-[21px] w-[175px]'>
                            {
                                data?.status > 0 &&
                                <div
                                    style={{
                                        width: `${getPercentage(data?.maxSpeeches, data?.speeches)}%`
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
            width: 170,
            render: (data) => (
                <div className='flex gap-x-2 w-[212px]'>
                    <RoleImage width='w-[18px]' height='h-[18px]' role='speaker' />
                    <div>
                        <h1 className='text-xs text-blue-gray-80 font-medium m-0 leading-[15px]'>{data.assignee}</h1>
                        <h1 className='text-xxs text-blue-gray-75 leading-[14px]'>{data.role}</h1>
                    </div>
                </div>
            )
        },

        {
            title: `${"Assigned date".toLocaleUpperCase()}`,
            key: 'assignedDate',
            width: 120,
            render: (data) => <h1 className='w-[120px] whitespace-nowrap'># {data.assignedDate}</h1>,

        },
        {
            title: `${"Deadline".toLocaleUpperCase()}`,
            key: 'deadline',
            width: 120,
            render: (data) => <h1 className='w-[120px] whitespace-nowrap'># {data.deadline}</h1>,

        },
        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 80,
            align: "center",
            render: (data) => (
                <div className='flex justify-center'>
                    <img src={Icons.Script} className="h-[15px] w-[12px]" alt="" />
                </div>
            )
        },

        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            key: 'details',
            fixed: 'right',
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
        <div className='billing-table type4-table' >

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={Type8columns}
                dataSource={data}
                // pagination={false}
                // scroll={{ x: 768, y: 1000 }}
                scroll={{ x: 1600 }}
            />

            <Drawer.Target.Type1
                isDrawerOpen={open}
                setIsDrawerOpen={setOpen}
            />

        </div >
    );
};

export default Type10;