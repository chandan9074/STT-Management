import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import Icons from '../../assets/Icons';
import { targetCompletedDT } from '../../types/assignTypes';
import Remark from '../common/Remark';
import RoleImage from '../Image/RoleImage';
import Dropdown from '../Dropdown';
import { Link, useLocation } from 'react-router-dom';
import * as PATH from '../../helpers/Slug';


type Props = {
    data: targetCompletedDT[]
}

const Type14 = ({ data }: Props) => {

    const location = useLocation();

    const [remarkOpen, setRemarkOpen] = useState(false);

    const [singleTargetData] = useState<targetCompletedDT>();

    const getColumnSearchProps = (dataIndex: any): any => ({


        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px]">



                <Dropdown.Type9 option1={`Sort by latest ${dataIndex}`} option2={`Sort by oldest ${dataIndex}`} />

            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[14px] h-[14px] object-cover" alt='' />
            </div>
        ),
    });


    const Type8columns: ColumnsType<targetCompletedDT> = [
        {
            title: `${"# Target ID".toLocaleUpperCase()}`,
            key: 'key',
            width: 120,
            render: (data: targetCompletedDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,

        },
        {
            title: `${"Assigned date".toLocaleUpperCase()}`,
            key: 'assignedDate',
            width: 120,
            render: (data: targetCompletedDT) => <h1 className='w-[120px] whitespace-nowrap'>{data.assignedDate}</h1>,

        },

        {
            title: `${"Assignee".toLocaleUpperCase()}`,
            key: 'assignee',
            width: 170,
            render: (data: targetCompletedDT) => (
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
            title: `${"target".toLocaleUpperCase()}`,
            key: 'key',
            width: 88,
            render: (data: targetCompletedDT) => <h1 className='w-[88px] whitespace-nowrap'> {data.target.target}</h1>,

        },
        {
            title: `${"status".toLocaleUpperCase()}`,
            key: 'status',
            width: 160,
            render: (data: targetCompletedDT) => (
                <div className='w-[160px]'>
                    <h1>{data.status > 0 ? data?.status + '%' : 'Not'} Assigned</h1>
                    <div className='bg-blue-gray-20 h-[6px] rounded-[21px]'>
                        {
                            data?.status > 0 &&
                            <div
                                style={{
                                    width: `${data.status}%`
                                }}
                                className='bg-secondary-blue-50 h-full rounded-l-[21px]' />

                        }
                    </div>
                </div>
            )
        },


        {
            title: `${"Deadline".toLocaleUpperCase()}`,
            key: 'deadline',
            width: 120,
            ...getColumnSearchProps('Deadline'),
            render: (data: targetCompletedDT) => <h1 className='w-[120px] whitespace-nowrap'>{data.target.deadline}</h1>,

        },

        {
            title: `${"Submission Date".toLocaleUpperCase()}`,
            key: 'deadline',
            width: 120,
            ...getColumnSearchProps('Submission'),
            render: (data: targetCompletedDT) => <h1 className='w-[120px] whitespace-nowrap'>{data?.submissionDate}</h1>,

        },
        {
            title: `${"Target Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'details',
            fixed: 'right',
            width: 85,
            render: (_, record: targetCompletedDT) => (
                <div className='flex justify-center items-center'>
targetCompletedData
                    <div className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full'>
                        <Link to={`${location.pathname}/${PATH.USER_MANAGEMENT_SPEECHES_PATH}/${record.id}`}>
                            <button className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10'>
                                <img
                                    className='w-[14px] h-[14px]'
                                    src={Icons.East}
                                    alt="" />
                            </button>
                        </Link>
                    </div>

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
                remarkOpen &&
                <Remark
                    open={remarkOpen}
                    setOpen={setRemarkOpen}
                    roleName={singleTargetData?.assignee?.name ? singleTargetData?.assignee?.name : ''}
                    roleType={singleTargetData?.assignee?.role ? singleTargetData?.assignee?.role : ''}
                    dateTime={'07/02/2022, 5:34 PM'}
                    desc={singleTargetData?.target?.remark ? singleTargetData?.target?.remark.des : ''}
                />
            }

        </div >
    );
};


export default Type14;