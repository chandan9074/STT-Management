import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import { annotatedFilesUploadDT } from '../../types/audioManagementTypes';
import AudioTrack from '../common/AudioTrack';
import SpeechStatus from '../common/SpeechStatus';
import RoleImage from '../Image/RoleImage';
import Pagination from '../Pagination';
import { STATUS_CLAIMED } from '../../helpers/ConditionVariable';
import { CustomModal } from '../common/CustomModal';
import ClaimApplicationModal from '../containers/AudioManagement/Annotation/AnnotatedFiles/ClaimApplicationModal';
import { Drawer } from '../Drawer';
import Remark2 from '../containers/AudioManagement/TableField/Remark2';


type Props = {
    data: annotatedFilesUploadDT[]
    setSelectedRowsData: React.Dispatch<React.SetStateAction<annotatedFilesUploadDT[]>>
}

const Type33 = ({ data, setSelectedRowsData }: Props) => {

    const [open, setOpen] = useState(false);

    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<annotatedFilesUploadDT>();
    const [isClaimModal, setIsClaimModal] = useState<boolean>(false);

    const showDrawer = (item: annotatedFilesUploadDT) => {
        setOpen(true);
    };

    const Type33columns: ColumnsType<annotatedFilesUploadDT> = [
        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'sn',
            width: 50,
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
            render: (data: annotatedFilesUploadDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 180,
            render: (data: annotatedFilesUploadDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Annotator".toLocaleUpperCase()}`,
            key: 'annotator',
            // className: "audio-management-status",
            width: 206,
            // render: (data: annotatedFilesDT) => <Annotator data={data.annotator} />
            render: (data: annotatedFilesUploadDT) =>
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
            render: (data: annotatedFilesUploadDT) =>
                <div >
                    <div className='flex'>
                        <RoleImage role='audio checker' height='h-4' width='w-4' />
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data?.audioChecker?.name}</h1>
                    </div>
                    <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.audioChecker.locality}</p>
                </div>
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
            render: (data: annotatedFilesUploadDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
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
            render: (data: annotatedFilesUploadDT) => (
                <div className='flex justify-center relative'>
                    <img
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                        }}
                        src={Icons.File} className="h-4 w-4 cursor-pointer"
                        alt=""
                    />
                    {
                        (remarkOpen && data.id === singleTargetData?.id) &&
                        <div className='fixed top-[209px] right-[86px] z-[999] animate-fadeIn2'>
                            <Remark2
                                open={remarkOpen}
                                setOpen={setRemarkOpen}
                                data={data.remark}
                            />
                        </div>
                    }
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
            render: (_, record: annotatedFilesUploadDT) => (
                <div className="flex justify-center items-center">
                    <button
                        onClick={() => {
                            showDrawer(record);
                            setSingleTargetData(record);
                        }}
                        className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full'>
                        <img

                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>
                </div>)
        },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: annotatedFilesUploadDT[]) => {
            setSelectedRowsData(selectedRows)
        },
        getCheckboxProps: (record: annotatedFilesUploadDT) => ({
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
                columns={Type33columns}
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

            {/* 
            {
                (open && singleTargetData) &&
                <Drawer.AudioManagement.CheckingStatus
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    isEditHistory={true}
                    speaker={singleTargetData.speaker}
                    remark={singleTargetData.remark}
                    script={singleTargetData.script}
                    others={singleTargetData.others}
                    id={singleTargetData.id}
                    history={singleTargetData?.history}
                />
            } */}

            {
                (open && singleTargetData) &&
                <Drawer.AudioManagement.Type2
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    id={singleTargetData.id}
                    speaker={singleTargetData.speaker}
                    others={singleTargetData.others}
                    speechInfo={singleTargetData.speechInfo}
                    isEditHistory={true}
                    submission={singleTargetData.submissionDate}
                    history={singleTargetData.history}
                    remark={singleTargetData.remark}
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

export default Type33;
