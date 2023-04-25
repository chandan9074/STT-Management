import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import { Drawer } from '../Drawer';
import { targetDT } from '../../types/assignTypes';
import RoleImage from '../Image/RoleImage';
import { Link, useLocation } from 'react-router-dom';
import Remark from '../common/Remark';
import * as PATH from '../../helpers/Slug';

type Props = {
    data: targetDT[]
}

const Type7 = ({ data }: Props) => {
    const [open, setOpen] = useState(false);
    const [remarkOpen, setRemarkOpen] = useState(false);
    const location = useLocation();

    const showDrawer = (item: targetDT) => {
        setOpen(true);
    };

    const getPercentage = (max: number, value: number) => {
        const result = (100 * value) / max;
        return result;
    }

    const [singleTargetData, setSingleTargetData] = useState<targetDT>();

    const Type8columns: ColumnsType<targetDT> = [
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
                <Link to={`${location.pathname}/${PATH.USER_MANAGEMENT_SPEECHES_PATH}/${data.id}`}>
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

                        <div className='flex w-full justify-center items-center'>

                            <button className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10'>
                                <img className='w-[13px] h-[9px]' src={Icons.BlueRightArrow} alt="" />
                            </button>

                        </div>
                    </div>
                </Link>
            )
        },

        {
            title: `${"Assignee".toLocaleUpperCase()}`,
            key: 'assignee',
            width: 170,
            render: (data: targetDT) => (
                <div className='flex gap-x-2 w-[212px]'>
                    <RoleImage width='w-[18px]' height='h-[18px]' role={data.assignee.role} />
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
                <div className='flex justify-center items-center'
                    onClick={() => {
                        setRemarkOpen(true);
                        setSingleTargetData(data);
                    }}>
                    <button className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-blue-gray-20 active:border active:border-blue-gray-A10'>
                        <img
                            src={Icons.File} className="h-4 w-4 cursor-pointer"
                            alt=""
                        />
                    </button>
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
                <div className='flex w-full justify-center items-center'>

                    <button className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10'
                        onClick={() => {
                            showDrawer(record)
                            setSingleTargetData(record)
                        }}>
                        <img
                            className='w-[14px] h-[14px]'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>

                </div>)
        },
    ];


    return (
        <div className='billing-table billing-table-odd-bg type4-table' >

            <Table

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

            {
                remarkOpen &&
                <Remark
                    open={remarkOpen}
                    setOpen={setRemarkOpen}
                    roleName={singleTargetData?.assignee?.name ? singleTargetData?.assignee?.name : ''}
                    roleType={singleTargetData?.assignee?.role ? singleTargetData?.assignee?.role : ''}
                    dateTime={'07/02/2022, 5:34 PM'}
                    desc={singleTargetData?.target?.remark ? singleTargetData?.target?.remark : ''}
                />
            }

        </div >
    );
};


export default Type7;