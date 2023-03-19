import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import { Drawer } from '../Drawer';
import SpeakerModal from '../containers/AssignContainer/AllTarget/EditSpeeches/SpeakerModal';
import RoleImage from '../Image/RoleImage';
import { RoleInContext } from '../../context/RoleProvider';
import { roleDT } from '../../types/billingTypes';
import { sortStatus } from '../../data/assign/AssignData';
import AudioUpload from '../containers/AssignContainer/AllTarget/EditSpeeches/AudioUpload';
import { assignSpeechDT, speechDt } from '../../types/assignTypes';
import { ColumnsType, ColumnType } from 'antd/es/table';
import Remark from '../common/Remark';

type Props = {
    data: assignSpeechDT
}

const Type13 = ({ data }: Props) => {
    const [isSpeakerModal, setIsSpeakerModal] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const [speechData, setSpeechData] = useState<speechDt[]>(data?.speechData);
    const [speechId, setSpeechId] = useState<string>('');

    const [remarkOpen, setRemarkOpen] = useState<boolean>(false);
    const [singleTargetData, setSingleTargetData] = useState<speechDt>();

    const managerContext = useContext(RoleInContext);

    const [isLatest, setIsLatest] = useState<boolean>(false);
    const [isOlder, setIsOlder] = useState<boolean>(false);

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
        setSpeechId(id);
    }

    const onUploadStatus = (value: string) => {
        if (value === sortStatus[0]) {
            setIsLatest(!isLatest);
            setIsOlder(false);
        } else {
            setIsOlder(!isOlder);
            setIsLatest(false);
        }
    }
    

    const getColumnSearchProps = (dataIndex: string): ColumnType<speechDt> => ({

        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (

            <div onKeyDown={(e) => e.stopPropagation()} className="w-[260px] -mr-[94px] -mt-[2px]  rounded-[8px] overflow-hidden" >
                {
                    sortStatus?.map((item: string, i: number) => (
                        <div onClick={() => item === sortStatus[0] ? onUploadStatus(sortStatus[0]) : onUploadStatus(sortStatus[1])}
                            className={`${(isLatest && item === sortStatus[0]) ? 'bg-blue-10' : (isOlder && item === sortStatus[1]) ? 'bg-blue-10' : 'bg-white'} h-[48px] py-4 pl-4 pr-3 flex items-center justify-between ${item === sortStatus[1] ? 'rounded-[8px] border-[1px] rounded-t-none border-t-transparent border-blue-gray-30' : 'rounded-[8px] border-[1px] rounded-b-none border-b-transparent border-blue-gray-30 '}`} key={i}>
                            <div className='flex items-center gap-x-3'>
                                <img className='h-4 w-4' src={Icons.IconsWrapper} alt="" />
                                <h1 className='text-green-60 text-sm font-medium'>{item}</h1>
                            </div>
                            {
                                ((isLatest && item === sortStatus[0]) || (isOlder && item === sortStatus[1])) &&
                                <img className='h-3 w-4' src={Icons.CorrectIcon} alt="" />
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


    const Type8columns: ColumnsType<speechDt> = [

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
            render: (data) => <AudioUpload
                data={data?.speech}
                setSpeechData={setSpeechData}
                speechData={speechData}
                audioId={data?.id}
                isUpload={false}
            />
        },

        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 266,
            render: (data) =>
                <div>

                    <div onClick={() => onAddSpeaker(data?.id)} className='flex justify-between items-center cursor-pointer'>
                        <div>
                            <div>
                                {
                                    data?.speaker.map((item: roleDT, i: number) => (
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
            title: `${"Submission Date: Time".toLocaleUpperCase()}`,
            width: 208,
            ...getColumnSearchProps('submissionDate'),
            render: (data) => (
                <h4 className='text-gray-80 text-xxs'>{data?.submissionDate}</h4>

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
                }} className='flex justify-center'>
                    {
                        data?.remark === "" ?
                            <h4>-</h4>
                            :
                            <img src={Icons.Script} className="h-[15px] w-[12px]" alt="" />
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
        <div className='billing-table type4-table' >

            <Table
                columns={Type8columns}
                dataSource={speechData}
                // scroll={{ x: 1600 }}
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

export default Type13;