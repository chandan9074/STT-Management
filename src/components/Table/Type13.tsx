import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import { Drawer } from '../Drawer';
import RoleImage from '../Image/RoleImage';
import { RoleInContext } from '../../context/RoleProvider';
import { targetAllSpeechDT, speechDt } from '../../types/assignTypes';
import { ColumnsType } from 'antd/es/table';
import AudioTrack from '../common/AudioTrack';
import Dropdown from '../Dropdown';
import Speaker from '../containers/AudioManagement/TableField/AudioManagement/Speaker';
import Remark2 from '../containers/AudioManagement/TableField/Remark2';

type Props = {
    data: targetAllSpeechDT[]
}

const Type13 = ({ data }: Props) => {
    const [isSpeaker, setIsSpeaker] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const [remarkOpen, setRemarkOpen] = useState<boolean>(false);
    const [singleTargetData, setSingleTargetData] = useState<targetAllSpeechDT>();
    const managerContext = useContext(RoleInContext);

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

    useEffect(() => {
        if (!open) {
            setIsSpeaker(false);
        }
    }, [open]);

    const onAddSpeaker = (data: targetAllSpeechDT) => {
        setIsSpeaker(true);
        setOpen(true);
        setSingleTargetData(data);
    }

    const showDrawer = (item: targetAllSpeechDT) => {
        setOpen(true);
    };

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
            width: 48,
            render: (text, record, index) => (
                <span>{(index + 1)}</span>
            ),
        },
        {
            title: `${"# Speech ID".toLocaleUpperCase()}`,
            key: 'key',
            width: 100,
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
            width: 150,
            render: (data: targetAllSpeechDT) =>
                <div className='cursor-pointer' onClick={() => onAddSpeaker(data)}>
                    <Speaker isLocality={false} data={data.speaker} />
                </div>
        },

        {
            title: `${"collector".toLocaleUpperCase()}`,
            key: 'collector',
            width: 150,
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
            title: `${"Remark".toLocaleUpperCase()}`,
            key: 'remark',
            width: 80,
            // align: "center",
            render: (data: targetAllSpeechDT) => (
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
            title: `${"Target Details".toLocaleUpperCase()}`,
            align: 'center',
            dataIndex: 'details',
            key: 'action',
            width: 118,
            render: (_, record) => (
                <div className='flex w-full justify-center items-center'>

                    <button
                        onClick={() => {
                            showDrawer(record);
                            setSingleTargetData(record);
                            setIsSpeaker(false);
                        }}
                        className='flex justify-center items-center w-9 h-9 rounded-full transition ease-out duration-300 hover:bg-ct-blue-10 active:border active:border-ct-blue-10'>
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

            {/* <Drawer.Target.Type1
                isDrawerOpen={open}
                setIsDrawerOpen={setOpen}

            /> */}
            {
                (open && singleTargetData) &&
                <Drawer.AudioManagement.CheckingStatus
                    isDrawerOpen={open}
                    setIsDrawerOpen={setOpen}
                    isEditHistory={false}
                    speaker={singleTargetData.speaker}
                    remark={singleTargetData.remark}
                    script={singleTargetData.script}
                    others={singleTargetData.others}
                    id={singleTargetData.id}
                    prevSpeaker={isSpeaker}
                />
            }

        </div >
    );
};

export default Type13;