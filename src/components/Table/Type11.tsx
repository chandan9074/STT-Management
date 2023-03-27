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
import { assignSpeechDT, speechDt } from '../../types/assignTypes';
import { ColumnsType, ColumnType } from 'antd/es/table';
import CollectorField from '../containers/AssignContainer/AllTarget/EditSpeeches/CollectorField';
import SpeakerField from '../containers/AssignContainer/AllTarget/EditSpeeches/SpeakerField';
import RecordingAreaField from '../containers/AssignContainer/AllTarget/EditSpeeches/RecordingAreaField';
import DeviceField from '../containers/AssignContainer/AllTarget/EditSpeeches/DeviceField';
import TargetStatus from '../containers/AssignContainer/AllTarget/EditSpeeches/TargetStatus';
import RecordingDistanceField from '../containers/AssignContainer/AllTarget/EditSpeeches/RecordingDistanceField';


type Props = {
    data: assignSpeechDT
}

type RecordType = speechDt;

const Type11 = ({ data }: Props) => {

    const [isSpeakerModal, setIsSpeakerModal] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const [speechData, setSpeechData] = useState<speechDt[]>(data?.speechData);
    const [speechId, setSpeechId] = useState<string>('');

    // const [collectorId, setCollectorId] = useState<string>("");
    const [collector, setCollector] = useState<roleDT>();

    const [deviceId, setDeviceId] = useState<string>('');
    const [device, setDevice] = useState<string | null | undefined>();

    const [recordingAreaId, setRecordingAreaId] = useState<string>('');

    const [recordingDistanceId, setRecordingDistanceId] = useState<string>('');

    const [remarkOpen, setRemarkOpen] = useState<boolean>(false);
    const [remarkId, setRemarkId] = useState<string>('');
    const [tempRemark, setTempRemark] = useState<string>('');

    const managerContext = useContext(RoleInContext);
    const { roleDatas } = managerContext;



    const managerParams = {
        id: '',
        role: 'Collector',
        type: ''
    }

    useEffect(() => {
        isSpeakerModal || remarkOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [isSpeakerModal, remarkOpen])

    useEffect(() => {
        managerContext.getManager(managerParams);
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

        const _speakerId = value?.speaker?.map((item: roleDT) => {
            return item?.id;
        })

        const _data = {
            speech: value?.speech,
            speaker: _speakerId,
            collector: collector?.id,
            recordingArea: value?.recordingArea,
            recordingDistance: value?.recordingDistance,
            device: value?.device,
            remark: value?.remark,
            speechID: value?.id,
            targetID: data?.id
        }

        console.log('this is data', _data);

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
            render: (data) =>
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
                        recordingAreaId={recordingAreaId}
                        setRecordingAreaId={setRecordingAreaId}
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
                        recordingDistanceId={recordingDistanceId}
                        setRecordingDistanceId={setRecordingDistanceId}
                        setSpeechData={setSpeechData}
                        speechData={speechData}

                    />
                </>
        },

        {
            title: `${"device".toLocaleUpperCase()}`,
            key: 'device',
            width: 126,
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
                <Status data={data?.audioUploadStatus} />
            )
        },

        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 80,
            align: "center",

            render: (data) => (
                <button onClick={() => {
                    setRemarkOpen(true);
                    setRemarkId(data?.id);
                    setTempRemark(data?.remark);
                }} className='flex justify-center'>
                    <img src={data?.remark === "" ? Icons.EditGray : Icons.File} className="h-[15px] w-[12px]" alt="" />
                </button>
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
                        <Buttons.LabelButton.Tertiary
                            label='Submit'
                            size='small'
                            variant='CT-Blue'
                            onClick={() => onsubmit(record)}
                        />
                    </div>

                </>)
        },
    ];


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: speechDt[]) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

        },
        getCheckboxProps: (record: RecordType) => ({

        }),
    };
    return (
        <div className='billing-table type4-table' >

            <Table
                rowSelection={{
                    ...rowSelection,
                }}
                columns={column}
                dataSource={speechData}
                scroll={{ x: 1600 }}
                rowKey='id'
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
                />
            }

        </div >
    );
};

export default Type11;