import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import RoleImage from '../Image/RoleImage';
import { Drawer } from '../Drawer';
import { EDIT_SPEECHES_PATH } from '../../helpers/Slug';
import { targetDT } from '../../types/assignTypes';


type Props = {
    setSelectedTarget: Dispatch<SetStateAction<targetDT[]>>;
    data: targetDT[]
}

const Type10 = ({ setSelectedTarget, data }: Props) => {
    // const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    // const [searchedColumn, setSearchedColumn] = useState("");

    const showDrawer = (item: targetDT) => {
        setOpen(true);
    };

    const getPercentage = (max: number, value: number) => {
        const result = (100 * value) / max;
        return result;
    }

    const [singleTargetData, setSingleTargetData] = useState<targetDT>();

    const Type8columns: ColumnsType<targetDT> = [
        // {
        //     title: '',
        //     dataIndex: 'selection',
        //     fixed: 'left', // add this property to fix the column
        //     render: (_, record) => (
        //         <Checkbox checked={record.selected} />
        //     ),
        // },

        {
            title: `${"# Target ID".toLocaleUpperCase()}`,
            key: 'key',
            // align: 'center',
            width: 120,
            render: (data: targetDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,

        },
        {
            title: `${"Script".toLocaleUpperCase()}`,
            key: 'script',
            width: 104,
            render: (data: targetDT) => <h1 className='w-20 truncate whitespace-nowrap'>{data.script.id}</h1>,



        },
        {
            title: `${"target".toLocaleUpperCase()}`,
            key: 'key',
            width: 88,
            render: (data: targetDT) => <h1 className='w-[88px] whitespace-nowrap'> {data.target.target}</h1>,

        },
        {
            title: `${"status".toLocaleUpperCase()}`,
            key: 'status',
            width: 160,
            render: (data: targetDT) => (
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
            render: (data: targetDT) => (
                <div className='flex items-center gap-x-[13px] w-[227px]'>
                    <div>
                        <div className='flex items-center gap-x-2'>
                            <img className='w-4 h-4' src={Icons.MusicBlue} alt="" />
                            <h1 className='text-xs text-secondary-blue-50 font-medium'>{data.speeches.uploaded + '/' + data?.speeches.total} Uploaded</h1>
                        </div>
                        <div className='bg-blue-gray-20 h-[6px] rounded-[21px] w-[175px]'>
                            {
                                data?.status > 0 &&
                                <div
                                    style={{
                                        width: `${getPercentage(data?.speeches.total, data?.speeches.uploaded)}%`
                                    }}
                                    className='bg-secondary-blue-50 h-full rounded-l-[21px]' />

                            }
                        </div>
                    </div>
                    <Link to={`${EDIT_SPEECHES_PATH}/${data?.id}`}>
                        <img className='w-[13px] h-[9px]' src={Icons.BlueRightArrow} alt="" />
                    </Link>

                </div>
            )
        },

        {
            title: `${"Assignee".toLocaleUpperCase()}`,
            key: 'assignee',
            width: 170,
            render: (data: targetDT) => (
                <div className='flex gap-x-2 w-[212px]'>
                    <RoleImage width='w-[18px]' height='h-[18px]' role='speaker' />
                    <div>
                        <h1 className='text-xs text-blue-gray-80 font-medium m-0 leading-[15px]'>{data.assignee.name}</h1>
                        <h1 className='text-xxs text-blue-gray-75 leading-[14px]'>{data.assignee.role}</h1>
                    </div>
                </div>
            )
        },

        {
            title: `${"Assigned date".toLocaleUpperCase()}`,
            key: 'assignedDate',
            width: 120,
            render: (data: targetDT) => <h1 className='w-[120px] whitespace-nowrap'>{data.assignedDate}</h1>,

        },
        {
            title: `${"Deadline".toLocaleUpperCase()}`,
            key: 'deadline',
            width: 120,
            render: (data: targetDT) => <h1 className='w-[120px] whitespace-nowrap'>{data.target.deadline}</h1>,

        },
        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 80,
            align: "center",
            render: (data: targetDT) => (
                <div className='flex justify-center'>
                    <img src={Icons.File} className="h-[15px] w-[12px]" alt="" />
                </div>
            )
        },

        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'details',
            fixed: 'right',
            width: 80,
            render: (_, record: targetDT) => (
                <>

                    <div className='flex w-full justify-center items-center'>
                        <img
                            onClick={() => {
                                showDrawer(record);
                                setSingleTargetData(record);
                            }}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </div>

                </>)
        },
    ];


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: targetDT[]) => {
            setSelectedTarget(selectedRows);

        },
        getCheckboxProps: (record: targetDT) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.assignee.name,
        }),
    };

    return (
        <div className='billing-table billing-table-odd-bg type4-table' >

            <Table
                rowSelection={{
                    // type: selectionType,
                    fixed: 'left',
                    ...rowSelection,
                }}
                columns={Type8columns}
                dataSource={data}
                // pagination={false}
                // scroll={{ x: 768, y: 1000 }}
                scroll={{ x: 1600 }}
                rowKey='id'
            />

            {
                open &&
                <Drawer.Target.Type1
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    data={singleTargetData}
    
                />
            }

        </div >
    );
};

export default Type10;