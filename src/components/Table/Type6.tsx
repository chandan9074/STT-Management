import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import Icons from '../../assets/Icons';

type tableDataDT =
    {
        key: string;
        role: string;
        img: string;
        block: boolean;
    }


const Type6 = () => {

    const [tableData, setTableData] = useState<tableDataDT[]>([
        {
            key: "1",
            role: "Admin",
            img: Icons.admin,
            block: false,

        },
        {
            key: "2",
            role: "Manager",
            img: Icons.manager,
            block: false
        },
        {
            key: "3",
            role: "Team Leader",
            img: Icons.teamLeader,
            block: true
        },
        {
            key: "4",
            role: "Collector",
            img: Icons.collector,
            block: false

        },
    ])

    // const [block, setBlock] = useState<any>({
    //     id: "",
    //     block: false
    // })

    const handleBlock = (id: string, index: number, value: boolean) => {

        // const find = tableData.find((d: tableDataDT) => d.key === id);

        // tableData[index] = { ...find, block: value };
        tableData[index].block = value;


        setTableData([...tableData]);


    }


    const columns: ColumnsType<tableDataDT> = [
        {
            title: "ROLE",
            key: "role",
            render: (data) => {
                return (
                    <>
                        <div className="flex items-center gap-2 ml-4">
                            <img src={data.img} className="h-6 w-6" alt="" />
                            <p className="text-small font-medium text-blue-gray-75">{data.role}</p>
                        </div>
                    </>
                )
            }
        },
        {
            title: 'ACTION',
            key: "action",
            width: 184,
            render: (data, _, index: number) => (
                <>
                    <div className='flex rounded-md border border-blue-gray-30 mr-5 ml-4'>
                        <button
                            onClick={() => handleBlock(data.key, index, true)}
                            // className={`p-2 w-[50%] rounded-l-md text-xs font-medium ${(data.key === block.id && block.block) ? "bg-[#FF293D] text-white border-[#FF293D]" : "bg-white"}`}>
                            className={`p-2 w-[50%] rounded-l-md text-xs font-medium ${(data.block) ? "bg-[#FF293D] text-white border-[#FF293D]" : "bg-white"}`}>
                            Block
                        </button>
                        <button
                            onClick={() => handleBlock(data.key, index, false)}
                            className={`p-2  w-[50%] rounded-r-md text-xs font-medium ${(data.block) ? "bg-white" : "bg-[#05956F] border-[#05956F] text-white"}`}>
                            Unblock
                        </button>
                    </div>
                </>
            )
        },

    ];


    return (
        <div>
            <Table
                pagination={false}
                dataSource={tableData}
                columns={columns}
            />
        </div>
    );
};

export default Type6;