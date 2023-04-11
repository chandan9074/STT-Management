import React, { useState } from 'react';
import { historyDT } from '../../types/audioManagementTypes';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import RoleImage from '../Image/RoleImage';
import SpeechStatus from '../common/SpeechStatus';
import Icons from '../../assets/Icons';
import Remark2 from '../common/TableField/Remark2';

const Type32 = ({ data }: { data: historyDT[] }) => {
    const [remarkOpen, setRemarkOpen] = useState(false);

    const Type18columns: ColumnsType<historyDT> = [
        {
            title: `${"Last Edited".toLocaleUpperCase()}`,
            key: 'lastEdited',
            // align: 'center',
            width: 107,
            render: (data: historyDT) => <div className=''>
                <h1 className='w-20 truncate whitespace-nowrap'>{data.lastEdited}</h1>
            </div>,
        },
        {
            title: `${"Edited By".toLocaleUpperCase()}`,
            key: 'editedBy',
            // align: 'center',
            width: 145,
            render: (data: historyDT) => <div className='flex justify-between'>
                <div className='flex gap-x-[10px]'>
                    <RoleImage height='h-6' width='w-6' role={data.role} />
                    <div>
                        <h2 className='text-blue-gray-80 font-medium text-xxs leading-[14.4px] mb-[2px]'>{data.name}</h2>
                        <p className='text-blue-gray-75 text-xxs leading-[15.6px]'>{data.role}</p>
                    </div>
                </div>
            </div>,
        },
        {
            title: `${"Status".toLocaleUpperCase()}`,
            key: 'status',
            align: 'center',
            width: 124,
            render: (data: historyDT) => <SpeechStatus data={data.status} />,
        },
        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            // width: 67,
            // align: "center",
            render: (data: historyDT) => (
                <div className='relative'>
                    <div className='flex justify-center'>
                        <img
                            onClick={() => {
                                setRemarkOpen(true);
                            }}
                            src={Icons.File} className="h-[16px] w-[16px] cursor-pointer"
                            alt=""
                        />
                    </div>
                    {
                        remarkOpen &&
                        <div className='fixed top-[209px] right-[86px] z-[999] animate-fadeIn2'>
                            <Remark2
                                open={remarkOpen}
                                setOpen={setRemarkOpen}
                                data={data.remark}
                            />
                        </div>

                    }
                </div >
            )
        },
    ]
    return (
        <div>
            <div className='billing-table'>
                <Table
                    dataSource={data}
                    columns={Type18columns}
                    // scroll={{ x: 1366 }}
                    pagination={false}
                />
            </div>

        </div>
    );
};

export default Type32;