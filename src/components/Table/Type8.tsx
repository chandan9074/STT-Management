import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../assets/Icons';
import { SideDrawer } from '../common/SideDrawer';
import "../../assets/css/table/type4Table.css";

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
const Type8 = () => {
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




    const Type8columns: ColumnsType<any> = [

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
            />

            <SideDrawer.Type3 open={open} setOpen={setOpen} drawerData={drawerData} />

        </div >
    );
};

export default Type8;