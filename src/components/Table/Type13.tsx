import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import { Drawer } from '../Drawer';
import RoleImage from '../Image/RoleImage';
import { RoleInContext } from '../../context/RoleProvider';
import { roleDT } from '../../types/billingTypes';
import { targetAllSpeechDT, speechDt } from '../../types/assignTypes';
import { ColumnsType } from 'antd/es/table';
import Remark from '../common/Remark';
import AudioTrack from '../common/AudioTrack';
import Dropdown from '../Dropdown';

type Props = {
    // data: targetAllSpeechDT
    data: targetAllSpeechDT[]
}

const Type13 = ({ data }: Props) => {
    const [isSpeakerModal, setIsSpeakerModal] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    // const [speechData, setSpeechData] = useState<targetAllSpeechDT[]>(data?.speechData);

    const [remarkOpen, setRemarkOpen] = useState<boolean>(false);
    // const [singleTargetData, setSingleTargetData] = useState<speechDT3>();

    const [singleTargetData, setSingleTargetData] = useState<targetAllSpeechDT>();

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


    // const getColumnSearchProps = (dataIndex: string): ColumnType<speechDT3> => ({

    //     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (

    //         <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px] -mr-[94px] -mt-[2px]  rounded-[8px] overflow-hidden" >
    //             {
    //                 sortStatus?.map((item: string, i: number) => (
    //                     <div onClick={() => item === sortStatus[0] ? onUploadStatus(sortStatus[0]) : onUploadStatus(sortStatus[1])}
    //                         className={`${(isLatest && item === sortStatus[0]) ? 'bg-blue-10' : (isOlder && item === sortStatus[1]) ? 'bg-blue-10' : 'bg-white'} h-[48px] py-4 pl-4 pr-3 flex items-center justify-between ${item === sortStatus[1] ? 'rounded-[8px] border-[1px] rounded-t-none border-t-transparent border-blue-gray-30' : 'rounded-[8px] border-[1px] rounded-b-none border-b-transparent border-blue-gray-30 '}`} key={i}>
    //                         <div className='flex items-center gap-x-3'>
    //                             <img className='h-4 w-4' src={Icons.IconsWrapper} alt="" />
    //                             <h1 className='text-green-60 text-sm font-medium'>{item}</h1>
    //                         </div>
    //                         {
    //                             ((isLatest && item === sortStatus[0]) || (isOlder && item === sortStatus[1])) &&
    //                             <img className='h-3 w-4' src={Icons.CorrectIcon} alt="" />
    //                         }
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     ),
    //     filterIcon: (filtered: boolean) => (
    //         <div>
    //             <img src={Icons.Unfold_More} className="w-[18px] h-[18px] object-cover" alt='' />
    //         </div>
    //     ),
    // });

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


    const Type8columns: ColumnsType<targetAllSpeechDT> = [

        {
            title: `${"SN".toLocaleUpperCase()}`,
            key: 'key',
            width: 56,
            render: (text, record, index) => (
                <span>{(index + 1)}</span>
            ),
        },
        {
            title: `${"# Speech ID".toLocaleUpperCase()}`,
            key: 'key',
            width: 120,
            render: (data: speechDt) => <h1 className='w-20 truncate whitespace-nowrap'># {data.id}</h1>,

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
                <h4 className='text-gray-80 text-small'>{data?.submissionDate}</h4>

            )
        },

        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 80,
            align: "center",

            render: (data) => (
                <button
                    onClick={() => {
                        setRemarkOpen(true);
                        setSingleTargetData(data);
                    }}
                    className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-blue-gray-20 active:border active:border-blue-gray-A10' >
                    {
                        data?.remark === "" ?
                            <h4>-</h4>
                            :
                            <img src={Icons.File} className="h-4 w-4" alt="" />
                    }

                </button>
            )
        },

        {
            title: `${"Action".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'action',
            width: 92,
            render: (_, record) => (
                <div className='flex w-full justify-center items-center'>

                    <button className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10'>
                        <img
                            className='w-[14px] h-[14px] cursor-pointer'
                            src={Icons.open_in_new}
                            alt="" />
                    </button>

                </div>)
        },
    ];

    return (
        <div className='billing-table billing-table-even-bg type4-table' >

            <Table
                columns={Type8columns}
                dataSource={data}
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
                    roleName={singleTargetData?.collector?.name ? singleTargetData?.collector?.name : ''}
                    // roleName={''}
                    roleType={singleTargetData?.collector?.role ? singleTargetData?.collector?.role : ''}
                    // roleType={''}
                    dateTime={'07/02/2022, 5:34 PM'}
                    desc={singleTargetData?.remark ? singleTargetData?.remark : ''}
                />
            }


        </div >
    );
};

export default Type13;