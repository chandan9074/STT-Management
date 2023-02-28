import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { CustomModal } from '../common/CustomModal';
import { SideDrawer } from '../common/SideDrawer';
import "../../assets/css/table/type4Table.css";

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
    const [active, setActive] = useState("Active");
    const [drawerData, setDrawerData] = useState<any>();

    const showDrawer = (key: any) => {
        setOpen(true);
        setDrawerData(key)
    };

    const handleActiveFrequencyChange=(value:string,confirm:any)=>{
    setActive(value)
    }

     const getColumnSearchProps = (dataIndex: any): any => ({


        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px]">

                <div
                    className={`flex gap-1 items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer ${active === "asc" ? "text-[#2C79BE] font-bold bg-[rgba(44,121,190,0.12)]" : ""}`}
                    onClick={() => handleActiveFrequencyChange("asc", confirm)}
                >
                    <div className="flex items-center gap-2">
                      <div>
                        <img src={active === "asc"?Icons.North:Icons.NorthNeviBlue}/>
                      </div>
                      <div>
                        <p>Sort Ascending</p>
                       </div>
                    </div>
                    <div>
                        <img src={Icons.CorrectIcon}/>
                    </div>

                </div>
                <div
                    className={`flex gap-1 items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer ${active === "desc" ? "text-[#2C79BE] font-bold bg-[rgba(44,121,190,0.12)]" : ""}`}
                    onClick={() => handleActiveFrequencyChange("desc", confirm)}>
                    <div className="flex items-center gap-2">
                      <div>
                        <img src={active === "asc"?Icons.South:Icons.SouthNeviBlue}/>
                      </div>
                      <div>
                        <p>Sort Decending</p>
                       </div>
                    </div>
                    <div>
                        <img src={Icons.CorrectIcon}/>
                    </div>

                </div>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[18px] h-[18px] object-cover" alt='' />
            </div>
        ),
        onFilter: (value: any, record: any) =>
            record["status"]
                .toString()
                .toLowerCase()
                .includes(active.toLowerCase()),

        render: (text: any) =>
            active === "Acitive" ? (
                // <Highlighter
                //   highlightStyle={{
                //     backgroundColor: '#ffc069',
                //     padding: 0,
                //   }}
                //   searchWords={[searchText]}
                //   autoEscape
                //   textToHighlight={text ? text.toString() : ''}
                // />
                <p>text</p>
            ) : (
                <p>hellow</p>
            )
    });

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
            render: (script: number) => <span className='text-blue-gray-80 text-xs line-clamp-2'>{script}</span>,
        },
        {
            title: "Frequency",
            ...getColumnSearchProps('Frequency'),
            dataIndex: "frequency",
            width: 112,
            render: (frequency: number) => <span className='text-blue-gray-80 text-xs'>{frequency}</span>,
            onFilter: (value, record) => (console.log("reeeeeeeeeeee", record))
        },
    ];


    return (
        <div className='type4-table billing-table'>

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