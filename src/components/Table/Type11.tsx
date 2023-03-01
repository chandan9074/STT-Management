import { Select, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useContext, useEffect, useState } from 'react';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import { Drawer } from '../Drawer';
import Buttons from '../Buttons';
import SpeakerModal from '../containers/AssignContainer/AllTarget/EditSpeeches/SpeakerModal';
import { isEmpty } from '../../helpers/Utils';
import RoleImage from '../Image/RoleImage';
import { Autocomplete, Box, TextField } from '@mui/material';
import { RoleInContext } from '../../context/RoleProvider';
import { roleDT } from '../../types/billingTypes';
import { deviceData, recordingArea, recordingDistanceAssign, uploadStatus } from '../../data/assign/AssignData';
import AudioUpload from '../containers/AssignContainer/AllTarget/EditSpeeches/AudioUpload';
import RemarkModal from '../containers/AssignContainer/AllTarget/EditSpeeches/RemarkModal';
import { AUDIO_FILE_FAILED, AUDIO_FILE_UPLOADED } from '../../helpers/Slug';
import Status from '../containers/AssignContainer/AllTarget/EditSpeeches/Status';

const { Option } = Select;

type Props = {
    data: any
}

const Type11 = ({ data }: Props) => {
    const [isSpeakerModal, setIsSpeakerModal] = useState<boolean>(false);
    // const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const [open, setOpen] = useState(false);
    const [speechData, setSpeechData] = useState<any>(data);
    const [speechId, setSpeechId] = useState<number>(NaN);

    const [collectorId, setCollectorId] = useState<number>(NaN);
    const [collector, setCollector] = useState<roleDT>();

    const [deviceId, setDeviceId] = useState<number>(NaN);
    const [device, setDevice] = useState<any>();

    const [recordingAreaId, setRecordingAreaId] = useState<number>(NaN);

    const [recordingDistanceId, setRecordingDistanceId] = useState<number>(NaN);

    const [remarkOpen, setRemarkOpen] = useState<boolean>(false);
    const [remarkId, setRemarkId] = useState<number>(NaN);
    const [tempRemark, setTempRemark] = useState<string>('');

    const managerContext = useContext(RoleInContext);
    const { roleDatas } = managerContext;

    // const [audioUploadStatus, setAudioUploadStatus] = useState<string>('');

    // const [active, setActive] = useState("Active");

    const [isUploaded, setIsUploaded] = useState<boolean>(false);
    const [isFailed, setIsFailed] = useState<boolean>(false);

    const managerParams = {
        id: '',
        role: 'Collector',
        type: ''
    }

    useEffect(() => {
        managerContext.getManager(managerParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const showDrawer = (key: any) => {
    //     setOpen(true);
    // };

    const onAddSpeaker = (id: any) => {
        setIsSpeakerModal(true)
        setSpeechId(id);
    }

    const collectorOnChange = (value: any) => {
        setCollector(value ?? undefined);

        // Find the index of the object to update
        const index = speechData.findIndex((item: any) => item?.id === collectorId);

        // Create a new object with the updated data
        const updatedData = { ...speechData[index], collector: value };

        // Create a new array with the updated object at the same index as the original object
        const newData = speechData.map((item: any, i: number) => i === index ? updatedData : item);

        // Update the state with the new array
        setSpeechData(newData);

        setCollectorId(NaN)
    }

    const deviceOnChange = (value: any) => {
        setDevice(value ?? undefined);

        const index = speechData.findIndex((item: any) => item?.id === deviceId);
        if (index === -1) {
            return;
        }
        const newData = [...speechData];
        newData[index] = {
            ...newData[index],
            device: value
        };
        setSpeechData(newData);

        setDeviceId(NaN)
    }

    const handleRecordingAreaChange = (value: string) => {
        const index = speechData.findIndex((item: any) => item?.id === recordingAreaId);
        if (index === -1) {
            return;
        }
        const newData = [...speechData];
        newData[index] = {
            ...newData[index],
            recordingArea: value
        };
        setSpeechData(newData);
        setRecordingAreaId(NaN);
    };

    const handleRecordingDistanceChange = (value: string) => {
        const index = speechData.findIndex((item: any) => item?.id === recordingDistanceId);
        if (index === -1) {
            return;
        }
        const newData = [...speechData];
        newData[index] = {
            ...newData[index],
            recordingDistance: value
        };
        setSpeechData(newData);
        setRecordingDistanceId(NaN);
    };

    // const handleActiveFrequencyChange = (value: string) => {
    //     setActive(value)
    // }

    console.log('upload', isUploaded);
    console.log('failed', isFailed);

    const onUploadStatus = (value: string) => {
        if (value === AUDIO_FILE_UPLOADED) {
            setIsUploaded(!isUploaded);
            setIsFailed(false);
        } else {
            setIsFailed(!isFailed);
            setIsUploaded(false);
        }
    }


    const getColumnSearchProps = (dataIndex: any): any => ({


        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px] -mr-[150px] -mt-[50px]  rounded-[8px]" >
                {
                    uploadStatus?.map((item: string, i: number) => (
                        <div  onClick={() => item === AUDIO_FILE_UPLOADED ? onUploadStatus(AUDIO_FILE_UPLOADED) : onUploadStatus(AUDIO_FILE_FAILED)} className={`${(isUploaded && item === AUDIO_FILE_UPLOADED) ? 'bg-green-10' : (isFailed && item === AUDIO_FILE_FAILED) ? 'bg-venetian-red' : 'bg-white'} h-[48px] py-4 pl-4 pr-3 flex items-center justify-between ${item === AUDIO_FILE_FAILED ? 'rounded-[8px] border-[1px] rounded-t-none border-t-transparent border-blue-gray-30' : 'rounded-[8px] border-[1px] rounded-b-none border-b-transparent border-blue-gray-30 '}`} key={i}>
                            <div className='flex items-center gap-x-3'>
                                <div className={`${(item === AUDIO_FILE_UPLOADED) ? 'bg-secondary-green-50' : (item === AUDIO_FILE_FAILED) ? 'bg-secondary-red-50' : ''} w-[9px] h-[9px] rounded-[50%] `} />
                                <h1 className='text-green-60 text-sm font-medium'>{item}</h1>
                            </div>
                            {
                                ((isUploaded && item === AUDIO_FILE_UPLOADED) || (isFailed && item === AUDIO_FILE_FAILED)) &&
                                <img className='h-6 w-6' src={Icons.check_green} alt="" />
                            }
                        </div>
                    ))
                }
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[18px] h-[18px] object-cover" alt='' />
            </div>
        ),
    });


    const Type8columns: ColumnsType<any> = [

        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'key',
            // align: 'center',
            width: 56,        
            // render: (text, record, index) => (
            //     <span>{(current * pageSize) + index + 1}</span>
            // ),  
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
                // setAudioUploadStatus={setAudioUploadStatus}
            />
        },

        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 182,
            // render: (data) => <h1 className='w-[88px] whitespace-nowrap'> {data.target}</h1>,
            render: (data) =>
                <div>

                    <div onClick={() => onAddSpeaker(data?.id)} className='flex justify-between items-center cursor-pointer'>
                        {
                            data?.speaker.length > 0 ?
                                <div>
                                    <div>
                                        {
                                            data?.speaker.map((item: any, i: number) => (
                                                <div key={i} className='gap-y-[6px]'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <img className='h-4 w-4' src={item.gender === 'male' ? Icons.speakerMale : Icons.SpeakerFemale} alt="" />
                                                        <h1 className='text-blue-gray-80 text-xs font-medium'>{item?.name}</h1>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                :
                                <button className='flex items-center gap-x-[10px]'>
                                    <img className='w-4 h-4' src={Icons.AccountCircle} alt="" />
                                    <h1 className='text-blue-gray-60 text-xs font-medium'>Add Speaker</h1>
                                </button>
                        }
                        <img className='w-[7px] h-1' src={Icons.arrow_drop_down_blue_gray} alt="" />


                    </div>
                </div>
        },

        {
            title: `${"collector".toLocaleUpperCase()}`,
            key: 'collector',
            width: 174,
            // render: (data) => <h1 className='w-[88px] whitespace-nowrap'> {data.target}</h1>,
            render: (data) =>
                <div>
                    {
                        collectorId === data?.id ?
                            <div className='animate-fadeIn'>
                                <div className="fixed top-0 left-0 opacity-50 bg-transparent w-full h-screen "
                                    onClick={() => setCollectorId(NaN)} />
                                <div className='relative'>
                                    <Autocomplete
                                        placeholder='Choose one'
                                        id="sourceType"
                                        style={{ width: '100%' }}
                                        options={roleDatas ?? []}

                                        value={collector}
                                        getOptionLabel={(option) => {
                                            if (!option) return '';
                                            return `${option?.name}`;
                                        }}

                                        onChange={(event, value) => collectorOnChange(value)}

                                        renderOption={(props, option) => (
                                            <Box key={option.id} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                <h1 className='text-small text-blue-gray-80 font-normal'>{`${option?.id} - ${option?.name}`}</h1>
                                            </Box>
                                        )}


                                        renderInput={(params) => (

                                            <TextField
                                                {...params}
                                                name="sourceType"
                                                placeholder='Add Collector'
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            :
                            <div onClick={() => setCollectorId(data?.id)} className=' flex justify-between items-center cursor-pointer'>
                                {
                                    !isEmpty(data?.collector) ?
                                        <div>
                                            <div className='flex items-center gap-x-2'>
                                                <RoleImage height='h-4' width='w-4' role='Collector' />
                                                <div>
                                                    <h1 className='text-blue-gray-80 text-xs font-medium'>{data?.collector?.name}</h1>
                                                    <h1 className='text-blue-gray-75 text-xxs'>{data?.collector?.address}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <button className='flex items-center gap-x-[10px]'>
                                            <img className='w-4 h-4' src={Icons.AccountCircle} alt="" />
                                            <h1 className='text-blue-gray-60 text-xs font-medium'>Add Collector</h1>
                                        </button>
                                }
                                <img className='w-[7px] h-1' src={Icons.arrow_drop_down_blue_gray} alt="" />
                            </div>
                    }
                </div>
        },

        {
            title: `${"Recording Area".toLocaleUpperCase()}`,
            key: 'recordingArea',
            width: 206,
            render: (data) => <div>
                {

                    <div className=' flex justify-between items-center cursor-pointer assign'>

                        <Select
                            suffixIcon={<img src={Icons.arrow_drop_down_blue_gray} alt='' />}
                            placeholder={`Select one`}
                            style={{ border: 'none', width: '100%' }}
                            onChange={(value) => handleRecordingAreaChange(value)}
                            defaultValue={data?.recordingArea ? data?.recordingArea : 'Select One'}
                        >
                            {
                                recordingArea?.map((m: any, i: number) => (
                                    <Option key={m} value={m} id={m}>
                                        <h1 className='text-blue-gray-80 text-xs font-normal'>{m}</h1>
                                    </Option>
                                ))
                            }
                        </Select>
                    </div>
                }

            </div>
        },

        {
            title: `${"Recording Distance".toLocaleUpperCase()}`,
            key: 'recordingDistance',
            width: 206,
            render: (data) => <div>
                {

                    <div className=' flex justify-between items-center cursor-pointer assign'>

                        <Select
                            suffixIcon={<img src={Icons.arrow_drop_down_blue_gray} alt='' />}
                            placeholder={`Select one`}
                            style={{ border: 'none', width: '100%' }}
                            onChange={(value) => handleRecordingDistanceChange(value)}
                            defaultValue={data?.recordingDistance ? data?.recordingDistance : 'Select One'}
                        >
                            {
                                recordingDistanceAssign?.map((m: any, i: number) => (
                                    <Option key={m} value={m} id={m}>
                                        <h1 className='text-blue-gray-80 text-xs font-normal'>{m}</h1>
                                    </Option>
                                ))
                            }
                        </Select>
                    </div>
                }

            </div>
        },

        {
            title: `${"device".toLocaleUpperCase()}`,
            key: 'device',
            width: 126,
            // render: (data) => <h1 className='w-[88px] whitespace-nowrap'> {data.target}</h1>,
            render: (data) =>
                <div className='assign'>
                    {
                        deviceId === data?.id ?
                            <div className='animate-fadeIn'>
                                <div className="fixed top-0 left-0 opacity-50 bg-transparent w-full h-screen "
                                    onClick={() => setDeviceId(NaN)} />
                                <div className='relative'>
                                    <Autocomplete
                                        placeholder='Choose one'
                                        id="sourceType"
                                        style={{ width: '100%' }}
                                        options={deviceData ?? []}

                                        value={device}
                                        // getOptionLabel={(option) => {
                                        //     if (!option) return '';
                                        //     return `${option}`;
                                        // }}

                                        onChange={(event, value) => deviceOnChange(value)}

                                        renderOption={(props, option) => (
                                            <Box key={option.id} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                <h1 className='text-small text-blue-gray-80 font-medium'>{`${option}`}</h1>
                                            </Box>
                                        )}


                                        renderInput={(params) => (

                                            <TextField
                                                {...params}
                                                name="device"
                                                placeholder='Select One'

                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            :
                            <div onClick={() => setDeviceId(data?.id)} className=' flex justify-between items-center cursor-pointer'>
                                {
                                    data?.device !== '' ?
                                        <div>
                                            <h1 className='text-blue-gray-80 text-xs font-medium'>{data?.device}</h1>
                                        </div>
                                        :
                                        <h1 className='text-blue-gray-60 text-xs font-medium'>Select One</h1>
                                }
                                <img className='w-[7px] h-1' src={Icons.arrow_drop_down_blue_gray} alt="" />
                            </div>
                    }
                </div>
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
                    <img src={data?.remark === "" ? Icons.EditGray : Icons.Script} className="h-[15px] w-[12px]" alt="" />
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
                        />
                    </div>

                </>)
        },
    ];


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: any) => ({
            // disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
    return (
        <div className='billing-table type4-table' >

            <Table
                rowSelection={{
                    // type: selectionType,
                    ...rowSelection,
                }}
                columns={Type8columns}
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