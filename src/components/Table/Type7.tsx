import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../assets/Icons';
import Buttons from '../Buttons';
import ProgressBar from '../common/ProgressBar';
import { SideDrawer } from '../common/SideDrawer';
import './type4Table.css';

// interface DataType {
//     key: React.Key;
//     name: string;
//     age: number;
//     address: string;
//     status: string
// }


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
        status: "75",
        speeches: '35',
        assignee: "MD. Eman Hasan",
        assigned_date: "30/01/2022",
        deadline: "30/01/2022",
        remark: ""
    },
    {
        key: '10-229a',
        script: 'Script id_227',
        target: 1000,
        status: "75",
        speeches: '35',
        assignee: "MD. Eman Hasan",
        assigned_date: "30/01/2022",
        deadline: "30/01/2022",
        remark: ""
    }, {
        key: '10-230a',
        script: 'Script id_227',
        target: 1000,
        status: "75",
        speeches: '35',
        assignee: "MD. Eman Hasan",
        assigned_date: "30/01/2022",
        deadline: "30/01/2022",
        remark: ""
    },


];
const Type7 = () => {
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




    const columns: ColumnsType<any> = [

        {
            title: `${"# Target ID".toLocaleUpperCase()}`,
            render: (data) => <p># {data.key}</p>,

        },
        {
            title: `${"Script".toLocaleUpperCase()}`,
            dataIndex: 'script',


        },
        {
            title: `${"target".toLocaleUpperCase()}`,
            dataIndex: 'target',

        },
        {
            title: `${"status".toLocaleUpperCase()}`,
            width: 160,
            render: (data) => (
                <div >
                    <p>{data.status}% Assigned</p>
                    <ProgressBar.Type2
                        bgColor='#F5AC42'
                        value={100}
                        height={6}

                    />
                </div>
            )

        },
        {
            title: `${"Speeches".toLocaleUpperCase()}`,
            width: 227,
            render: (data) => (
                <div className='flex gap-3 items-center'>
                    <div>
                        <div className="flex gap-2 items-center">
                            <img src={Icons.BlueMusicIcon} className="w-[16px] h-[16px]" alt="" />
                            <p className='text-secondary-blue-50'>{data.speeches}0/1000 Uploaded</p>
                        </div>
                        <ProgressBar.Type2
                            bgColor='#136EE5'
                            value={50}
                            height={6}

                        />
                    </div>
                    <Buttons.IconButton.Circle
                        size='medium'
                        variant='Blue'
                        icon={<img src={Icons.BlueRightArrow} />}

                    />

                </div>
            )

        },
        {
            title: `${"Assignee".toLocaleUpperCase()}`,
            dataIndex: 'assignee',

        },
        {
            title: `${"Assigned date".toLocaleUpperCase()}`,
            dataIndex: 'assigned_date',

        },
        {
            title: `${"Deadline".toLocaleUpperCase()}`,
            dataIndex: 'deadline',

        },
        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 136,
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






    return (
        <div className='type4-table'>

            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />

            <SideDrawer.Type3 open={open} setOpen={setOpen} drawerData={drawerData} />

        </div >
    );
};

export default Type7;