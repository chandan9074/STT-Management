import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Key } from 'antd/lib/table/interface';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import { singleScriptDT } from '../../types/assignTypes';
import { Tooltip } from '../Tooltip';
import Dropdown from '../Dropdown';


// interface DataType {
//     key: React.Key;
//     id: number;
//     script: string;
//     frequency: number;
// }


// const data: DataType[] = [
//     {
//         key: '1',
//         id: 227,
//         script: "শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা। শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা",
//         frequency: 1200,
//     },
//     {
//         key: '2',
//         id: 228,
//         script: "শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা। শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা",
//         frequency: 200,
//     },
//     {
//         key: '3',
//         id: 229,
//         script: "শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা। শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা",
//         frequency: 1200,
//     },
//     {
//         key: '4',
//         id: 230,
//         script: "শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা। শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা",
//         frequency: 200,
//     },
// ];



type Props = {
    data: singleScriptDT[];
    handleSelectedScript: (data: singleScriptDT[]) => void;
    uncheckedScript: string;
    isDrawerOpen: boolean;
}

const Type9 = ({ data, handleSelectedScript, uncheckedScript, isDrawerOpen }: Props) => {
    // const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const selectionType = "checkbox";
    // const [active, setActive] = useState("Active");
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
    const tableRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (isDrawerOpen) {
            const newSelectedRowKeys = selectedRowKeys.filter((k) => k !== uncheckedScript);
            setSelectedRowKeys(newSelectedRowKeys);
        }
        else {
            setSelectedRowKeys([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uncheckedScript, isDrawerOpen])

    // const showDrawer = (key: any) => {
    //     setOpen(true);
    //     setDrawerData(key)
    // };

    // const handleActiveFrequencyChange = (value: string) => {
    //     setActive(value)
    // }

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: singleScriptDT[]) => {
            handleSelectedScript(selectedRows)
            setSelectedRowKeys(selectedRowKeys);
        },
    };

    const getColumnSearchProps = (dataIndex: string): any => ({


        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px]">

                {/* <div
                    className={`flex gap-1 items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer ${active === "asc" ? "text-[#2C79BE] font-bold bg-[rgba(44,121,190,0.12)]" : ""}`}
                    onClick={() => handleActiveFrequencyChange("asc")}
                >
                    <div className="flex items-center gap-2">
                        <div>
                            <img alt="" src={active === "asc" ? Icons.North : Icons.NorthNeviBlue} />
                        </div>
                        <div>
                            <p>Sort Ascending</p>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={Icons.CorrectIcon} />
                    </div>

                </div>
                <div
                    className={`flex gap-1 items-center justify-between px-4 py-3 rounded-t-lg cursor-pointer ${active === "desc" ? "text-[#2C79BE] font-bold bg-[rgba(44,121,190,0.12)]" : ""}`}
                    onClick={() => handleActiveFrequencyChange("desc")}>
                    <div className="flex items-center gap-2">
                        <div>
                            <img alt="" src={active === "asc" ? Icons.South : Icons.SouthNeviBlue} />
                        </div>
                        <div>
                            <p>Sort Decending</p>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={Icons.CorrectIcon} />
                    </div>

                </div> */}
                <Dropdown.Type9 option1={`Sort Ascending`} option2={`Sort Descending`} icon="arrowStick" />

            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[18px] h-[18px] object-cover" alt='' />
            </div>
        ),
        // onFilter: (value: any, record: any) =>
        //     record["status"]
        //         .toString()
        //         .toLowerCase()
        //         .includes(active.toLowerCase()),

        // render: (text: any) =>
        //     active === "Acitive" ? (
        //         <Highlighter
        //           highlightStyle={{
        //             backgroundColor: '#ffc069',
        //             padding: 0,
        //           }}
        //           searchWords={[searchText]}
        //           autoEscape
        //           textToHighlight={text ? text.toString() : ''}
        //         />
        //         <p>text</p>
        //     ) : (
        //         <p>hellow</p>
        //     )
    });




    const columns: ColumnsType<singleScriptDT> = [
        {
            title: "ID",
            width: 100,
            // align: "center",
            dataIndex: 'id',
            render: (id: number) => <div className=' flex flex-col items-start'>
                <div className='relative group flex flex-col items-center'>
                    <h1 className='text-ct-blue-60 text-xs font-medium w-11 truncate'>{id}</h1>
                    <div className="absolute group-hover:block hidden animate-fadeIn top-6 left-2 z-[99999]">
                        <Tooltip.Type1 title={id.toString()} align="left" />
                    </div>
                </div>
            </div>
        },
        {
            title: "Script",
            width: 372,
            dataIndex: 'description',
            render: (script: number) => <span className='text-blue-gray-80 text-xs line-clamp-2'>{script}</span>,
        },
        {
            title: "Frequency",
            ...getColumnSearchProps('Frequency'),
            dataIndex: "frequency",
            width: 112,
            align: "right",
            render: (frequency: number) => <span className='text-blue-gray-80 text-xs'>{frequency}</span>,
        },
    ];


    return (
        <div className='type4-table billing-table billing-table-even-bg'>

            <Table

                rowSelection={{
                    type: selectionType,
                    selectedRowKeys,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                pagination={false}
                rowKey="id"
                ref={tableRef}
            />
        </div >
    );
};

export default Type9;