import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import { Drawer } from '../Drawer';
import RoleImage from '../Image/RoleImage';
import { RoleInContext } from '../../context/RoleProvider';
import { speechDt2, targetAllSpeechDT, targetSpeechDT } from '../../types/assignTypes';
import { ColumnsType } from 'antd/es/table';
import SpeechStatus from '../common/SpeechStatus';
import AudioTrack from '../common/AudioTrack';
import Dropdown from '../Dropdown';
import Speaker from '../containers/AudioManagement/TableField/AudioManagement/Speaker';
import Remark2 from '../containers/AudioManagement/TableField/Remark2';

type Props = {
    data: targetSpeechDT
}

const Type15 = ({ data }: Props) => {
    const [open, setOpen] = useState(false);
    const [isSpeaker, setIsSpeaker] = useState<boolean>(false);
    // const [speechData, setSpeechData] = useState<speechDt2[]>(data?.speechData);

    const [remarkOpen, setRemarkOpen] = useState<boolean>(false);
    const [singleTargetData, setSingleTargetData] = useState<speechDt2>();


    const managerContext = useContext(RoleInContext);

    // const [isLatest, setIsLatest] = useState<boolean>(false);
    // const [isOlder, setIsOlder] = useState<boolean>(false);


    const managerParams = {
        id: '',
        role: 'Collector',
        type: ''
    }

    useEffect(() => {
        isSpeaker || remarkOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [isSpeaker, remarkOpen])

    useEffect(() => {
        managerContext.getManager(managerParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onAddSpeaker = (data: speechDt2) => {
        // setIsSpeakerModal(true)
        setIsSpeaker(true);
        setOpen(true);
        setSingleTargetData(data);
    }

    const showDrawer = (item: targetAllSpeechDT) => {
        setOpen(true);
    };

    // const onUploadStatus = (value: string) => {
    //     if (value === sortStatus[0]) {
    //         setIsLatest(!isLatest);
    //         setIsOlder(false);
    //     } else {
    //         setIsOlder(!isOlder);
    //         setIsLatest(false);
    //     }
    // }


    const getColumnSearchProps = (dataIndex: any): any => ({


        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: any) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[300px]">



                <Dropdown.Type9 option1={`Sort by latest ${dataIndex}`} option2={`Sort by oldest ${dataIndex}`} />

            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <div>
                <img src={Icons.Unfold_More} className="w-[14px] h-[14px] object-cover" alt='' />
            </div>
        ),
    });


    const Type8columns: ColumnsType<speechDt2> = [

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
            width: 188,
            render: (data) =>
                <AudioTrack data={data?.speech} />
        },

        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 234,
            render: (data: speechDt2) =>
                <div className='cursor-pointer' onClick={() => onAddSpeaker(data)}>
                    <Speaker isLocality={false} data={data.speaker} />
                </div>
        },

        {
            title: `${"collector".toLocaleUpperCase()}`,
            key: 'collector',
            width: 218,
            render: (data) =>
                <div>
                    <div className='flex items-center gap-x-2'>
                        <RoleImage height='h-4' width='w-4' role={data?.collector?.role} />
                        <div>
                            <h1 className='text-blue-gray-80 text-xs font-medium'>{data?.collector?.name}</h1>
                            <h1 className='text-blue-gray-75 text-xxs'>{data?.collector?.address}</h1>
                        </div>
                    </div>
                </div>
        },

        {
            title: `${"Submission Date & Time".toLocaleUpperCase()}`,
            width: 220,
            ...getColumnSearchProps('submissionDate'),
            render: (data) => (
                <h4 className='text-gray-80 w-[120px] whitespace-nowrap'>{data?.submissionDate}</h4>
            )
        },

        {
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 85,
            // align: "center",
            render: (data: speechDt2) => (
                <div className='flex justify-center relative'>
                    <img
                        onClick={() => {
                            setRemarkOpen(true);
                            setSingleTargetData(data);
                        }}
                        src={Icons.File} className="h-[16px] w-[16px] cursor-pointer"
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
            title: `${"Status".toLocaleUpperCase()}`,
            width: 150,
            align: 'center',
            render: (data) => (
                <>
                    {
                        data?.status !== '' &&
                        <SpeechStatus data={data?.status} />

                    }
                </>
            )
        },


        {
            title: `${"Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'action',
            width: 92,
            render: (_, record) => (
                <div className='flex w-full justify-center items-center'>

                    <button className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10'>
                        <img
                            onClick={() => {
                                showDrawer(record);
                                setSingleTargetData(record);
                                setIsSpeaker(false);
                            }}
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>

                </div>)
        },

        // {
        //     title: `${"Details".toLocaleUpperCase()}`,
        //     align: 'center',
        //     dataIndex: 'details',
        //     key: 'action',
        //     width: 92,
        //     render: (_, record) => (
        //         <div className='flex justify-center items-center hover:bg-ct-blue-10 active:bg-ct-blue-20 h-9 w-9 rounded-full'>

        //             <div className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10'>
        //                 <img
        //                     className='w-[14px] h-[14px] cursor-pointer'
        //                     src={Icons.open_in_new}
        //                     alt="" />
        //             </div>

        //         </div>)
        // },
    ];

    return (
        <div className='billing-table billing-table-even-bg type4-table' >

            <Table
                columns={Type8columns}
                dataSource={data?.speechData}
                // scroll={{ x: 1600 }}
                rowKey='id'
            />

            {/* <Drawer.Target.Type1
                isDrawerOpen={open}
                setIsDrawerOpen={setOpen}

            /> */}

            {
                (open && singleTargetData) &&
                <Drawer.AudioManagement.TargetDetails2
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    isEditHistory={false}
                    speaker={singleTargetData.speaker}
                    remark={singleTargetData.remark}
                    script={singleTargetData.script}
                    others={singleTargetData.others}
                    id={singleTargetData.id}
                    prevSpeaker={isSpeaker}
                    status={singleTargetData.status}
                />
            }


        </div >
    );
};

export default Type15;