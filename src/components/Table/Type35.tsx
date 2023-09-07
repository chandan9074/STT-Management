import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import React, { useContext, useState } from "react"
import Icons from "../../assets/Icons"
import { validatedFilesUploadDT } from "../../types/audioManagementTypes"
import AudioTrack from "../common/AudioTrack"
import SpeechStatus from "../common/SpeechStatus"
import Remark2 from "../containers/AudioManagement/TableField/Remark2"
import { Drawer } from "../Drawer"
import RoleImage from "../Image/RoleImage"
import Pagination from "../Pagination"
import { STATUS_CLAIMED } from "../../helpers/ConditionVariable"
import { AudioManagementContext } from "../../context/AudioManagementProvider"
import { CustomModal } from "../common/CustomModal"
import ClaimApplicationModal from "../containers/AudioManagement/Annotation/AnnotatedFiles/ClaimApplicationModal"

type Props = {
    data: validatedFilesUploadDT[]
}

const Type35 = ({ data }: Props) => {


    const [remarkOpen, setRemarkOpen] = useState(false);
    const [singleTargetData, setSingleTargetData] = useState<validatedFilesUploadDT>();
    const [open, setOpen] = useState(false);
    const [isClaimModal, setIsClaimModal] = useState<boolean>(false);

    const { postClaimValidatedLevel } = useContext(AudioManagementContext);

    const showDrawer = (item: validatedFilesUploadDT) => {
        setOpen(true);
    };

    const handleClaimSubmit = (status: string, remark: string) => {
        if (singleTargetData?.id) {
            const body = {
                id: singleTargetData.id,
                remark: remark,
                status: status ? status : ""
            }

            postClaimValidatedLevel(body);
        }
    }

    const Type35columns: ColumnsType<validatedFilesUploadDT> = [
        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'sn',
            width: 55,
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
            render: (data: validatedFilesUploadDT) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,
        },
        {
            title: `${"Raw Audio".toLocaleUpperCase()}`,
            key: 'speech',
            width: 148,
            render: (data: validatedFilesUploadDT) => <>
                <AudioTrack data={data.speech} />
            </>,
        },
        {
            title: `${"Validator-Final".toLocaleUpperCase()}`,
            key: 'validatorFinal',
            width: 266,
            render: (data: validatedFilesUploadDT) =>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex'>
                        <RoleImage role={data.validatorFinal.role} height='h-4' width='w-4' />
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.validatorFinal.name}</h1>
                        <p className='text-blue-gray-75 text-xxs font-normal w-20 truncate'>, {data.validatorFinal.locality}</p>
                    </div>
                    <p className='text-xxs text-blue-gray-75 font-normal leading-[14.4px] pl-[22px]'>Picked: {data.validatorFinal.time}</p>
                </div>
        },
        {
            title: `${"Status".toLocaleUpperCase()}`,
            width: 150,
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
            title: `${"Validator 2".toLocaleUpperCase()}`,
            key: 'validatorFinal',
            width: 266,
            render: (data: validatedFilesUploadDT) =>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex'>
                        <RoleImage role={data.validator2.role} height='h-4' width='w-4' />
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.validator2.name}</h1>
                        <p className='text-blue-gray-75 text-xxs font-normal w-20 truncate'>, {data.validator2.locality}</p>
                    </div>
                    <p className='text-xxs text-blue-gray-75 font-normal leading-[14.4px] pl-[22px]'>Picked: {data.validator2.time}</p>
                </div>
        },
        {
            title: `${"Validator 1".toLocaleUpperCase()}`,
            key: 'validatorFinal',
            width: 266,
            render: (data: validatedFilesUploadDT) =>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex'>
                        <RoleImage role={data.validator1.role} height='h-4' width='w-4' />
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.validator1.name}</h1>
                        <p className='text-blue-gray-75 text-xxs font-normal w-20 truncate'>, {data.validator1.locality}</p>
                    </div>
                    <p className='text-xxs text-blue-gray-75 font-normal leading-[14.4px] pl-[22px]'>Picked: {data.validator1.time}</p>
                </div>
        },
        {
            title: `${"Annotator".toLocaleUpperCase()}`,
            key: 'annotator',
            // className: "audio-management-status",
            width: 206,
            // render: (data: annotatedFilesDT) => <Annotator data={data.annotator} />
            render: (data: validatedFilesUploadDT) =>
                <div >
                    <div className='flex'>
                        <RoleImage role='annotator' height='h-4' width='w-4' />
                        <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.annotator.annotator.name}</h1>
                    </div>
                    <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.annotator.locality}</p>
                </div>
        },
        {
            title: `${"Audio Checker".toLocaleUpperCase()}`,
            key: 'audioChecker',
            // className: "audio-management-status",
            width: 168,
            render: (data: validatedFilesUploadDT) => <div >
                <div className='flex'>
                    <RoleImage role='audio checker' height='h-4' width='w-4' />
                    <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.audioChecker.name}</h1>
                </div>
                <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.audioChecker.locality}</p>
            </div>
        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 168,
            render: (data: validatedFilesUploadDT) => <div >
                {/* <div className="flex flex-col gap-y-1">
                    {
                        data.speaker.speakers.map((item, idx) => (
                            <div className='flex'>
                                <RoleImage role={`${item.gender === "male" ? "speaker" : "speakerFemale"}`} height='h-4' width='w-4' />
                                <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{item.name}</h1>
                            </div>
                        ))
                    }
                </div> */}
                <div className='flex'>
                    <RoleImage role={`${data.annotator.annotator.gender === "male" ? "speaker" : "speakerFemale"}`} height='h-4' width='w-4' />
                    <h1 className='ml-1.5 text-blue-gray-80 font-medium text-xxs'>{data.annotator.annotator.name}</h1>
                </div>
                <p className='text-blue-gray-75 text-xxs font-normal pl-[22px]'>{data.annotator.locality}</p>
            </div>
        },
        {
            title: `${"DeadLine".toLocaleUpperCase()}`,
            key: 'deadLine',
            width: 155,
            render: (data: validatedFilesUploadDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Submission Date".toLocaleUpperCase()}`,
            key: 'submissionDate',
            width: 150,
            render: (data: validatedFilesUploadDT) => <h1 className='text-small text-blue-gray-80'>{data.deadLine}</h1>
        },
        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 85,
            align: "center",
            render: (data: validatedFilesUploadDT) => (
                <div className='flex justify-center relative'>
                    <button
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                        }}
                        className="flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-blue-gray-20 active:border active:border-blue-gray-A10">

                        <img

                            src={Icons.File} className="h-[16px] w-[16px] cursor-pointer"
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
            width: 85,
            render: (_, record: validatedFilesUploadDT) => (
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

    const handlePageChange = (page: number) => {
        // ScriptContext.setScriptFilter({ ...scriptContext.scriptFilter, page: page, pageSize: 10 })
    }


    return (
        <div className="billing-table billing-table-odd-bg type4-table horizontal-table-padding">
            <Table
                dataSource={data}
                columns={Type35columns}
                scroll={{ x: 1300 }}
                rowKey="id"
                pagination={false}
            />
            <div className='flex w-full justify-end mt-4 mb-2'>
                <Pagination.Type2
                    total={100}
                    pageSize={10}
                    handleDataChange={handlePageChange}
                />
            </div>

            {
                (open && singleTargetData) &&
                <Drawer.AudioManagement.Type2
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    isEditHistory={false}
                    speaker={singleTargetData.speaker}
                    remark={singleTargetData.remark}
                    speechInfo={singleTargetData.speechInfo}
                    others={singleTargetData.others}
                    id={singleTargetData.id}
                />
            }

            {singleTargetData?.claimReason && <CustomModal.Primary
                setOpen={setIsClaimModal}
                open={isClaimModal}
                width="658px"
            >
                <ClaimApplicationModal data={singleTargetData.claimReason} setOpen={setIsClaimModal} handleClaimSubmit={handleClaimSubmit} />
            </CustomModal.Primary>}
        </div>
    )
}

export default Type35