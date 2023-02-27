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
import { deviceData, recordingArea, recordingDistanceAssign } from '../../data/assign/AssignData';
import AudioUpload from '../containers/AssignContainer/AllTarget/EditSpeeches/AudioUpload';
import RemarkModal from '../containers/AssignContainer/AllTarget/EditSpeeches/RemarkModal';

const { Option } = Select;

const data: any = [
    {
        id: '1',
        key: '10-227a',
        speaker: [
            {
                name: 'Maksuda Alam',
                gender: 'male',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam1@gmail.com"
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam2@gmail.com"
            }
        ],
        collector: {
            name: 'Muhammad Miraz',
            gender: 'male',
            role: 'collector',
            contact: '019',
            address: 'Rajbongshi',
            id: "maksudalam1@gmail.com"
        },
        recordingArea: 'Inside Room',
        recordingDistance: '',
        device: 'Redmi Note 8',
        speeches: '355',
        maxSpeeches: '1000',
        remark: "",
        role: 'Manager'

    },
    {
        id: '2',
        key: '10-228a',
        speaker: [
            {
                name: 'Maksuda Alam',
                gender: 'male',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam3@gmail.com"
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam4@gmail.com"
            }
        ],
        collector: {
            name: 'Muhammad Miraz',
            gender: 'male',
            role: 'collector',
            contact: '019',
            address: 'Rajbongshi',
            id: "maksudalam1@gmail.com"
        },
        recordingArea: '',
        recordingDistance: '',
        device: '',
        speeches: '800',
        maxSpeeches: '2000',
        remark: "This Is Remark data",
        role: 'Team Leader'

    },
    {
        id: '3',
        key: '10-230a',
        speaker: [],
        collector: {},
        recordingArea: '',
        device: '',
        recordingDistance: 'Close',
        speeches: '100',
        maxSpeeches: '1000',
        remark: "This Is Remark data",
        role: 'Manager'

    },

    {
        id: '4',
        key: '10-240a',
        speaker: [
            {
                name: 'Maksuda Alam',
                gender: 'male',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam5@gmail.com"
            }
        ],
        collector: {
            name: 'Muhammad Miraz',
            gender: 'male',
            role: 'collector',
            contact: '019',
            address: 'Rajbongshi',
            id: "maksudalam1@gmail.com"
        },
        recordingArea: 'Inside Room',
        recordingDistance: 'Close',
        device: 'Redmi Note 8',
        speeches: '800',
        maxSpeeches: '3000',
        remark: "This Is Remark data",
        role: 'Manager'

    },
    {
        id: '5',
        key: '10-250a',
        speaker: [
            {
                name: 'Maksuda Alam',
                gender: 'male',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam6@gmail.com"
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam7@gmail.com"
            }
        ],
        collector: {},
        recordingArea: 'Inside Room',
        recordingDistance: 'Close',
        device: 'Redmi Note 8',
        speeches: '800',
        maxSpeeches: '3000',
        remark: "",
        role: 'Manager'

    },

    {
        id: '6',
        key: '10-260a',
        speaker: [],
        collector: {
            name: 'Muhammad Miraz',
            gender: 'male',
            role: 'collector',
            contact: '019',
            address: 'Rajbongshi',
            id: "maksudalam1@gmail.com"
        },
        recordingArea: 'Inside Room',
        recordingDistance: 'Close',
        device: 'Redmi Note 8',
        speeches: '800',
        maxSpeeches: '3000',
        remark: "",
        role: 'Manager'

    },
    {
        id: '7',
        key: '10-270a',
        speaker: [
            {
                name: 'Maksuda Alam',
                gender: 'male',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam8@gmail.com"
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam9@gmail.com"
            }
        ],
        collector: {
            name: 'Muhammad Miraz',
            gender: 'male',
            role: 'collector',
            contact: '019',
            address: 'Rajbongshi',
            id: "maksudalam1@gmail.com"
        },
        recordingArea: 'Inside Room',
        recordingDistance: 'Close',
        device: 'Redmi Note 8',
        speeches: '800',
        maxSpeeches: '3000',
        remark: "",
        role: 'Manager'

    }
];

const Type11 = () => {
    const [isSpeakerModal, setIsSpeakerModal] = useState<boolean>(false);
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
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

    const managerContext = useContext(RoleInContext);
    const { roleDatas } = managerContext;

    const managerParams = {
        id: '',
        role: 'Collector',
        type: ''
    }

    useEffect(() => {
        managerContext.getManager(managerParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showDrawer = (key: any) => {
        setOpen(true);
    };

    const onAddSpeaker = (id: any) => {
        setIsSpeakerModal(true)
        setSpeechId(id);
    }

    console.log('speech data', speechData);
    

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

    const Type8columns: ColumnsType<any> = [

        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'key',
            // align: 'center',
            width: 120,
            render: (data) => <h1 className='w-[120px] whitespace-nowrap'># {data.key}</h1>,

        },
        {
            title: `${"Speech".toLocaleUpperCase()}`,
            key: 'script',
            width: 206,
            render: (data) => <AudioUpload />
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
                                                <h1 className='text-small text-blue-gray-80 font-medium'>{`${option?.id} - ${option?.name}`}</h1>
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
            width: 174,
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
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 80,
            align: "center",
            render: (data) => (
                <button onClick={() => {
                    setRemarkOpen(true);
                    setRemarkId(data?.id);
                }} className='flex justify-center'>
                    <img src={Icons.Script} className="h-[15px] w-[12px]" alt="" />
                </button>
            )
        },

        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'details',
            fixed: 'right',
            width: 80,
            render: (_, record) => (
                <>

                    <div className='flex w-full justify-center items-center relative z-50'>
                        <img
                            onClick={() => showDrawer(record)}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
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
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={Type8columns}
                dataSource={speechData}
                scroll={{ x: 1600 }}
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
                />
            }

        </div >
    );
};

export default Type11;