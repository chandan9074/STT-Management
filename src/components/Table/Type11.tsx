import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import { Drawer } from '../Drawer';
import Buttons from '../Buttons';
import SpeakerModal from '../containers/AssignContainer/AllTarget/EditSpeeches/SpeakerModal';
import { RoleInContext } from '../../context/RoleProvider';
import { roleDT } from '../../types/billingTypes';
import { deviceData } from '../../data/assign/AssignData';
import AudioUpload from '../containers/AssignContainer/AllTarget/EditSpeeches/AudioUpload';
import RemarkModal from '../containers/AssignContainer/AllTarget/EditSpeeches/RemarkModal';
import Status from '../containers/AssignContainer/AllTarget/EditSpeeches/Status';
import { assignSpeechDT, remark, speechDt } from '../../types/assignTypes';
import { ColumnsType, ColumnType } from 'antd/es/table';
import CollectorField from '../containers/AssignContainer/AllTarget/EditSpeeches/CollectorField';
import SpeakerField from '../containers/AssignContainer/AllTarget/EditSpeeches/SpeakerField';
import RecordingAreaField from '../containers/AssignContainer/AllTarget/EditSpeeches/RecordingAreaField';
import DeviceField from '../containers/AssignContainer/AllTarget/EditSpeeches/DeviceField';
import TargetStatus from '../containers/AssignContainer/AllTarget/EditSpeeches/TargetStatus';
import RecordingDistanceField from '../containers/AssignContainer/AllTarget/EditSpeeches/RecordingDistanceField';
import Pagination from '../Pagination';
import { AssignContext } from '../../context/AssignProvider';
import { CommonContext } from '../../context/CommonProvider';
import '../../assets/css/table/speech_upload.css'
import SingleRemark from '../containers/AudioManagement/TableField/SingleRemark';


type Props = {
    data: assignSpeechDT,
    onsubmitSpeech: (data: FormData) => void,
    handlePageChange: (page: number) => void,
}

const Type11 = ({ data, onsubmitSpeech, handlePageChange }: Props) => {

    const assignContext = useContext(AssignContext);
    const commonContext = useContext(CommonContext);

    const [isSpeakerModal, setIsSpeakerModal] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const [speechData, setSpeechData] = useState<speechDt[]>(data?.speechData);
    const [speechId, setSpeechId] = useState<string>('');
    const page = 1;

    const [collector, setCollector] = useState<roleDT>();

    const [deviceId, setDeviceId] = useState<string>('');
    const [device, setDevice] = useState<string | null | undefined>();

    const [remarkOpen, setRemarkOpen] = useState<boolean>(false);
    const [remarkId, setRemarkId] = useState<string>('');
    const [tempRemark, setTempRemark] = useState<remark>({} as remark);

    const managerContext = useContext(RoleInContext);
    const { roleDatas } = managerContext;

    const [singleRemarkOpen, setSingleRemarkOpen] = useState<boolean>(false);

    // const [remarkModal2, setRemarkModal2] = useState<boolean>(false);

    const managerParams = {
        id: '',
        role: 'Collector',
        type: ''
    }

    useEffect(() => {
        setSpeechData(data.speechData);
    }, [data]);

    useEffect(() => {
        isSpeakerModal || remarkOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [isSpeakerModal, remarkOpen])

    useEffect(() => {
        managerContext.getManager(managerParams);
        assignContext.getResPredefinedRemarks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getColumnSearchProps = (dataIndex: string): ColumnType<speechDt> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px] -mr-[150px] -mt-[50px]  rounded-[8px]" >
                <TargetStatus />
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[18px] h-[18px] object-cover" alt='' />
            </div>
        ),
    });

    const onsubmit = (value: speechDt) => {

        let formData = new FormData();

        const _speakerId = value?.speaker?.map((item: roleDT) => {
            return item?.id;
        });

        const _data = {
            speechID: value?.id,
            targetID: data?.id,
            speech: value?.speech,
            speaker: _speakerId.join(','),
            collector: collector?.id,
            recordingArea: value?.recordingArea,
            recordingDistance: value?.recordingDistance,
            device: value?.device,
            remark: value?.remark?.desc,
            fmt: 'mp3',
            role: commonContext.roleName,
            roleName: commonContext.role
        }

        for (const key in _data) {
            if (_data.hasOwnProperty(key)) {
                const value = _data[key as keyof typeof _data];

                if (typeof value === 'string' || value instanceof Blob) {
                    formData.append(key, value);
                }
            }
        }

        onsubmitSpeech(formData);

    }


    const column: ColumnsType<speechDt> = [

        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'key',
            width: 56,
            render: (text, record, index) => (
                <span>{(index + 1)}</span>
            ),
        },
        {
            title: `${"Speech".toLocaleUpperCase()}`,
            key: 'speech',
            width: 206,
            render: (data) => <AudioUpload
                data={data?.speech}
                setSpeechData={setSpeechData}
                speechData={speechData}
                audioId={data?.id}
                isUpload={true}
            />
        },

        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 182,
            render: (data) =>
                <>
                    <SpeakerField
                        data={data}
                        setIsSpeakerModal={setIsSpeakerModal}
                        setSpeechId={setSpeechId}
                    />
                </>
        },

        {
            title: `${"collector".toLocaleUpperCase()}`,
            key: 'collector',
            width: 174,
            render: (data, index) =>
                <>
                    <CollectorField
                        collector={collector}
                        data={data}
                        roleDatas={roleDatas}
                        setCollector={setCollector}
                        setSpeechData={setSpeechData}
                        speechData={speechData}
                    />
                </>
        },

        {
            title: `${"Recording Area".toLocaleUpperCase()}`,
            key: 'recordingArea',
            width: 206,
            render: (data) =>
                <div>
                    <RecordingAreaField
                        data={data}
                        // recordingAreaId={recordingAreaId}
                        recordingAreaId={data?.id}
                        setSpeechData={setSpeechData}
                        speechData={speechData}
                    />

                </div>
        },

        {
            title: `${"Recording Distance".toLocaleUpperCase()}`,
            key: 'recordingDistance',
            width: 206,
            render: (data) =>
                <>
                    <RecordingDistanceField
                        data={data}
                        // recordingDistanceId={recordingDistanceId}
                        recordingDistanceId={data.id}
                        setSpeechData={setSpeechData}
                        speechData={speechData}

                    />
                </>
        },

        {
            title: `${"device".toLocaleUpperCase()}`,
            key: 'device',
            width: 160,
            render: (data) =>
                <>
                    <DeviceField
                        data={data}
                        device={device}
                        deviceData={deviceData}
                        deviceId={deviceId}
                        setDevice={setDevice}
                        setDeviceId={setDeviceId}
                        setSpeechData={setSpeechData}
                        speechData={speechData}
                    />
                </>
        },

        {
            title: `${"Status".toLocaleUpperCase()}`,
            width: 120,
            align: "center",
            ...getColumnSearchProps('Frequency'),
            render: (data) => (
                <Status data={data?.status} />
            )
        },

        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 80,
            align: "center",

            render: (data) => (
                <div className='flex justify-center relative'>

                    <div>
                        {
                            data?.status === 'Uploaded' ?
                                // !data?.remark ?
                                <button onClick={() => {
                                    setSingleRemarkOpen(true)
                                }} className='flex justify-center'>
                                    <img src={Icons.File} className="h-4 w-4" alt="" />
                                </button>
                                :
                                <button onClick={() => {
                                    setRemarkOpen(true);
                                    setRemarkId(data?.id);
                                    setTempRemark(data?.remark);
                                }} className='flex justify-center'>
                                    <img src={Icons.EditGray} className="h-4 w-4" alt="" />
                                </button>

                        }

                        {
                            singleRemarkOpen &&
                            <SingleRemark
                                open={singleRemarkOpen}
                                setOpen={setSingleRemarkOpen}
                                data={data?.remark}
                            />
                        }
                    </div>
                </div>
            )
        },

        {
            title: `${"Action".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'action',
            fixed: 'right',
            width: 92,
            render: (_, record) => (
                <>

                    <div className='flex w-full justify-center items-center'>
                        {
                            // (record?.speech && record?.speaker && record?.collector && record?.recordingArea && record?.recordingDistance && record.device && record?.remark) ?
                            (record?.speech && record?.speaker && record?.collector && record?.recordingArea && record?.recordingDistance && record.device && record?.remark) ?
                                <div>
                                    {
                                        assignContext.loading ?
                                            <Buttons.LoadingButton.Tertiary
                                                label='loading'
                                                size='xSmall'
                                                variant='CT-Blue'
                                                iconAlign='start'
                                            />
                                            :
                                            <Buttons.LabelButton.Tertiary
                                                label='Submit'
                                                size='xSmall'
                                                variant='CT-Blue'
                                                onClick={() => onsubmit(record)}
                                            />
                                    }
                                </div>

                                :
                                <h2 className='font-medium text xs text-blue-gray-60'>
                                    ---
                                </h2>
                        }

                    </div>

                </>)
        },
    ];

    return (<>

        <div className='billing-table billing-table-odd-bg type4-table bg-white' >

            <Table
                columns={column}
                dataSource={speechData}
                scroll={{ x: 1600 }}
                rowKey='id'
                pagination={false}
            />

            <Drawer.Target.Type1
                isDrawerOpen={open}
                setIsDrawerOpen={setOpen}

            />

            {
                isSpeakerModal &&
                <SpeakerModal
                    setModal={setIsSpeakerModal}
                    setData={setSpeechData}
                    speechId={speechId}
                    data={speechData}
                />
            }

            {
                <RemarkModal
                    open={remarkOpen}
                    setOpen={setRemarkOpen}
                    remarkId={remarkId}
                    setSpeechData={setSpeechData}
                    speechData={speechData}
                    setRemarkId={setRemarkId}
                    tempRemark={tempRemark}
                    setTempRemark={setTempRemark}
                />
            }


        </div >

        <div className='flex w-full justify-end mt-4 mb-2'>

            <Pagination.Type2
                total={assignContext.singleTargetSpeechesLength}
                pageSize={page}
                // total={35}
                // pageSize={5}
                handleDataChange={handlePageChange}
            />
        </div>
    </>
    );
};

export default Type11;