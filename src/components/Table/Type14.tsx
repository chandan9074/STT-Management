import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import Icons from '../../assets/Icons';
import { targetCompletedDT } from '../../types/assignTypes';
import Buttons from '../Buttons';
import Remark from '../common/Remark';
import RoleImage from '../Image/RoleImage';


type Props = {
    data: targetCompletedDT[]
}

const Type14 = ({ data }: Props) => {
    const [remarkOpen, setRemarkOpen] = useState(false);

    const [singleTargetData, setSingleTargetData] = useState<targetCompletedDT>();

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
            render: (data: targetCompletedDT) => <h1 className='w-[120px] whitespace-nowrap'>{data.target.deadline}</h1>,

        },

        {
            title: `${"Submission Date".toLocaleUpperCase()}`,
            key: 'deadline',
            width: 120,
            render: (data: targetCompletedDT) => <h1 className='w-[120px] whitespace-nowrap'>{data?.submissionDate}</h1>,

        },

        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 80,
            align: "center",
            render: (data: targetCompletedDT) => (
                <div className='flex justify-center'>
                    <img
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                        }}
                        src={Icons.Script} className="h-[15px] w-[12px] cursor-pointer"
                        alt=""
                    />
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
            render: (_, record: targetCompletedDT) => (
                <>

                    <div className='flex w-full justify-center items-center'>
                        <Buttons.IconButton.Circle
                            size='medium'
                            variant="CT-Blue"
                            icon={<img src={Icons.East} alt="" />}
                            border='none'
                            background="white"
                        />
                    </div>

                </>)
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
                    desc={singleTargetData?.target?.remark ? singleTargetData?.target?.remark : ''}
                />
            }

        </div >
    );
};


export default Type14;