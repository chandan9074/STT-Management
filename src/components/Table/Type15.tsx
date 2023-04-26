import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import { Drawer } from '../Drawer';
import RoleImage from '../Image/RoleImage';
import { RoleInContext } from '../../context/RoleProvider';
import { roleDT } from '../../types/billingTypes';
import { speechDt2, targetSpeechDT } from '../../types/assignTypes';
import { ColumnsType } from 'antd/es/table';
import Remark from '../common/Remark';
import SpeechStatus from '../common/SpeechStatus';
import AudioTrack from '../common/AudioTrack';
import Dropdown from '../Dropdown';

type Props = {
    data: targetSpeechDT
}

const Type15 = ({ data }: Props) => {
    const [isSpeakerModal, setIsSpeakerModal] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
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
        isSpeakerModal || remarkOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [isSpeakerModal, remarkOpen])

    useEffect(() => {
        managerContext.getManager(managerParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onAddSpeaker = (id: string) => {
        setIsSpeakerModal(true)
    }

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
            width: 200,
            render: (data) =>
                <div>

                    <div onClick={() => onAddSpeaker(data?.id)} className='flex justify-between items-center cursor-pointer'>
                        <div>
                            <div>
                                {
                                    data?.speaker.map((item: roleDT, i: number) => (
                                        <div key={i} className='gap-y-[6px]'>
                                            <div className='flex items-center gap-x-2'>
                                                {/* <img className='h-4 w-4' src={item.gender === 'male' ? Icons.speakerMale : Icons.SpeakerFemale} alt="" /> */}
                                                <RoleImage role={item.gender === "male" ? "speaker" : "speakerFemale"} height="w-4" width="h-4" />
                                                <h1 className='text-blue-gray-80 text-xs font-medium'>{item?.name}</h1>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                    </div>
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
            width: 208,
            ...getColumnSearchProps('submissionDate'),
            render: (data) => (
                <h4 className='text-gray-80 w-[120px] whitespace-nowrap'>{data?.submissionDate}</h4>
            )
        },

        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 80,
            align: "center",

            render: (data) => (
                <button onClick={() => {
                    setRemarkOpen(true);
                    setSingleTargetData(data);
                }} className=''>
                    {
                        data?.remark === "" ?
                            <h4>-</h4>
                            :
                            <img src={Icons.File} className="h-4 w-4 cursor-pointer" alt="" />
                    }

                </button>
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
                <>

                    <div className='flex w-full justify-center items-center'>
                        <img
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </div>

                </>)
        },
    ];

    return (
        <div className='billing-table billing-table-even-bg type4-table' >

            <Table
                columns={Type8columns}
                dataSource={data?.speechData}
                // scroll={{ x: 1600 }}
                rowKey='id'
            />

            <Drawer.Target.Type1
                isDrawerOpen={open}
                setIsDrawerOpen={setOpen}

            />

            {/* {
                isSpeakerModal &&
                <SpeakerModal
                    setModal={setIsSpeakerModal}
                    setData={setSpeechData}
                    speechId={speechId}
                    data={speechData}
                />
            } */}

            {
                remarkOpen &&
                <Remark
                    open={remarkOpen}
                    setOpen={setRemarkOpen}
                    // roleName={singleTargetData?.assignee?.name ? singleTargetData?.assignee?.name : ''}
                    roleName={''}
                    // roleType={singleTargetData?.assignee?.role ? singleTargetData?.assignee?.role : ''}
                    roleType={''}
                    dateTime={'07/02/2022, 5:34 PM'}
                    desc={singleTargetData?.remark ? singleTargetData?.remark : ''}
                />
            }


        </div >
    );
};

export default Type15;