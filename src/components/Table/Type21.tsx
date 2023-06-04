import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import Icons from '../../assets/Icons';
import { annotatedFilesDT } from '../../types/audioManagementTypes';
import AudioTrack from '../common/AudioTrack';
import SpeechStatus from '../common/SpeechStatus';
import RoleImage from '../Image/RoleImage';
import Pagination from '../Pagination';
import { STATUS_CLAIMED } from '../../helpers/ConditionVariable';
import { CustomModal } from '../common/CustomModal';
import ClaimApplicationModal from '../containers/AudioManagement/Annotation/AnnotatedFiles/ClaimApplicationModal';
import { Drawer } from '../Drawer';
import Speaker from '../containers/AudioManagement/TableField/AudioManagement/Speaker';
import Remark2 from '../containers/AudioManagement/TableField/Remark2';
import { AudioManagementContext } from '../../context/AudioManagementProvider';


type Props = {
    data: annotatedFilesDT[],
    setSelectedRowSData?: Dispatch<SetStateAction<annotatedFilesDT[]>>,

}

const Type21 = ({ data, setSelectedRowSData }: Props) => {

    const [open, setOpen] = useState(false);

    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<annotatedFilesDT>();
    const [isClaimModal, setIsClaimModal] = useState<boolean>(false);

    const { postClaimAnnotatedFiles } = useContext(AudioManagementContext);

    const showDrawer = (item: annotatedFilesDT) => {
        setOpen(true);
    };

    const handleClaimSubmit = (status: string, remark: string) => {
        if (singleTargetData?.id) {
            const body = {
                id: singleTargetData.id,
                remark: remark,
                status: status ? status : ""
            }

            postClaimAnnotatedFiles(body);
        }
    }

    const Type20columns: ColumnsType<annotatedFilesDT> = [
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
            title: `${"Annotator".toLocaleUpperCase()}`,
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
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data?.audioChecker?.name}</h1>
                    </div>
                    <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.audioChecker.locality}</p>
                </div>
        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 206,
            render: (data: annotatedFilesDT) => <Speaker isLocality={true} data={data.speaker} />
        },

        {
            title: `${"Status".toLocaleUpperCase()}`,
            width: 150,
            align: "center",
            render: (data) => (
                <div className='flex gap-x-2'>
                    <SpeechStatus data={data?.status} />
                    {
                        data?.status === STATUS_CLAIMED &&
                        <button onClick={() => { setSingleTargetData(data); setIsClaimModal(true); }}>
                            <img src={Icons.openInNewGray} alt="" className='cursor-pointer' />
                        </button>
                    }
                </div>
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
                <div className='flex justify-center relative'>
                    <button
                        className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-blue-gray-20 active:border active:border-blue-gray-A10'
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                        }}>
                        <img
                            src={Icons.File} className="h-4 w-4 cursor-pointer"
                            alt=""
                        />
                    </button>
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
            render: (_, record: annotatedFilesDT) => (
                <div className='flex justify-center items-center'>

                    <button
                        onClick={() => {
                            showDrawer(record);
                            setSingleTargetData(record);
                        }}
                        className='flex hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full justify-center items-center'>
                        <img

                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>

                </div>)
        },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: annotatedFilesDT[]) => {
            if (setSelectedRowSData) {
                setSelectedRowSData(selectedRows)
            }
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
                    submissionDate={singleTargetData.submissionDate}
                />
            }

            {singleTargetData?.claimReason && <CustomModal.Primary
                setOpen={setIsClaimModal}
                open={isClaimModal}
                width="658px"
            >
                <ClaimApplicationModal data={singleTargetData?.claimReason} setOpen={setIsClaimModal} handleClaimSubmit={handleClaimSubmit} />
            </CustomModal.Primary>}
        </div>
    );
};

export default Type21;
