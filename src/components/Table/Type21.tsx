import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { annotatedFilesDT } from '../../types/audioManagementTypes';
import AudioTrack from '../common/AudioTrack';
import Remark from '../common/Remark';
import SpeechStatus from '../common/SpeechStatus';
import SpeakerField from '../common/TableField/AudioManagement/SpeakerField';
import RoleImage from '../Image/RoleImage';
import Pagination from '../Pagination';
import { STATUS_CLAIMED } from '../../helpers/ConditionVariable';
import { CustomModal } from '../common/CustomModal';
import ClaimApplicationModal from '../containers/AudioManagement/Annotation/AnnotatedFiles/ClaimApplicationModal';


type Props = {
    data: annotatedFilesDT[]
}

const Type21 = ({ data }: Props) => {

    const [singleTargetData, setSingleTargetData] = useState<annotatedFilesDT>();
    const [remarkOpen, setRemarkOpen] = useState(false);
    const [isClaimModal, setIsClaimModal] = useState<boolean>(false);

    const Type20columns: ColumnsType<annotatedFilesDT> = [
        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'sn',
            width: 48,
            align: "center",
            render: (text, record, index) => (
                <span>{(index + 1)}</span>
            ),
        },
        {
            title: `${"# Task ID".toLocaleUpperCase()}`,
            key: 'id',
            // align: 'center',
            width: 96,
            render: (data: annotatedFilesDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 180,
            render: (data: annotatedFilesDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Annotate".toLocaleUpperCase()}`,
            key: 'annotator',
            // className: "audio-management-status",
            width: 206,
            // render: (data: annotatedFilesDT) => <Annotator data={data.annotator} />
            render: (data: annotatedFilesDT) =>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex'>
                        <RoleImage role={data.annotator.annotator.role} height='h-4' width='w-4' />
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.annotator.annotator.name},</h1>
                        <p className='text-blue-gray-75 text-xxs font-normal pl-1'>{data.annotator.locality}</p>
                    </div>
                    <p className='text-xxs text-blue-gray-75 font-normal leading-[14.4px] pl-[22px]'>Picked: {data.annotator.time}</p>
                </div>
        },
        {
            title: `${"Audio Checker".toLocaleUpperCase()}`,
            key: 'audioChecker',
            width: 180,
            render: (data: annotatedFilesDT) =>
                <div >
                    <div className='flex'>
                        <RoleImage role='audio checker' height='h-4' width='w-4' />
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data?.audioChecker?.audioCheckers?.name}</h1>
                    </div>
                    <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.audioChecker.locality}</p>
                </div>
        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 206,
            render: (data: annotatedFilesDT) => <SpeakerField data={data.speaker} />
        },

        {
            title: `${"Status".toLocaleUpperCase()}`,
            width: 150,
            render: (data) => (
                <>
                    {
                        data?.status !== '' &&
                        <div className='flex gap-x-2'>
                            <SpeechStatus data={data?.status} />
                            {
                                data?.status === STATUS_CLAIMED &&
                                <img src={Icons.openInNewGray} alt="" className='cursor-pointer' onClick={() => setIsClaimModal(true)} />
                            }
                        </div>
                    }
                </>
            )
        },

        {
            title: `${"DeadLine".toLocaleUpperCase()}`,
            key: 'deadLine',
            width: 130,
            render: (data: annotatedFilesDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Submission Date".toLocaleUpperCase()}`,
            width: 208,
            render: (data) => (
                <h4 className='text-gray-80 text-small'>{data?.submissionDate}</h4>

            )
        },
        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 110,
            align: "center",
            render: (data: annotatedFilesDT) => (
                <div className='flex justify-center'>
                    <img
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                        }}
                        src={Icons.File} className="h-[15px] w-[12px] cursor-pointer"
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
            width: 100,
            render: (_, record: annotatedFilesDT) => (
                <>

                    <div className='flex w-full justify-center items-center'>
                        <img
                            // onClick={() => {
                            //     showDrawer(record);
                            //     setSingleTargetData(record);
                            // }}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </div>

                </>)
        },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: annotatedFilesDT[]) => {
            // setSelectedTarget(selectedRows);
            console.log('*******', selectedRows);


        },
        getCheckboxProps: (record: annotatedFilesDT) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            // name: record.assignee.name,
        }),
    };

    const handlePageChange = (page: number) => {
        // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    }

    return (
        <div className='billing-table billing-table-odd-bg type4-table pr-4 mt-5'>
            <Table
                rowSelection={{
                    // type: selectionType,
                    columnWidth: 48,
                    fixed: 'left',
                    ...rowSelection,
                }}
                columns={Type20columns}
                dataSource={data}
                scroll={{ x: 1366 }}
                rowKey="id"
                pagination={false}
            />
            <div className='flex w-full justify-end mt-4 mb-2'>
                <Pagination.Type2
                    total={100}
                    pageSize={10}
                    // total={35}
                    // pageSize={5}
                    handleDataChange={handlePageChange}
                />
            </div>

            {
                remarkOpen &&
                <Remark
                    open={remarkOpen}
                    setOpen={setRemarkOpen}
                    roleName={singleTargetData?.remark?.roleInfo?.name ? singleTargetData?.remark?.roleInfo?.name : ''}
                    roleType={singleTargetData?.remark?.roleInfo?.role ? singleTargetData?.remark?.roleInfo?.role : ''}
                    dateTime={'07/02/2022, 5:34 PM'}
                    desc={singleTargetData?.remark?.des ? singleTargetData?.remark?.des : ''}
                />
            }

            <CustomModal.Primary
                setOpen={setIsClaimModal}
                open={isClaimModal}
                width="658px"
            >
                <ClaimApplicationModal />
            </CustomModal.Primary>
        </div>
    );
};

export default Type21;
