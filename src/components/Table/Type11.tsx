import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icons from '../../assets/Icons';
import "../../assets/css/table/type4Table.css";
import RoleImage from '../Image/RoleImage';
import { Drawer } from '../Drawer';
import { EDIT_SPEECHES_PATH } from '../../helpers/Slug';
import Buttons from '../Buttons';
import SpeakerModal from '../containers/AssignContainer/AllTarget/EditSpeeches/SpeakerModal';
import { roleDT } from '../../types/billingTypes';


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
                address: 'Dhaka'
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka'
            }
        ],
        script: 'Script id_227',
        target: 1000,
        status: "75",
        speeches: '355',
        maxSpeeches: '1000',
        assignee: "MD. Eman Hasan",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
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
                address: 'Dhaka'
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka'
            }
        ],
        script: 'Script id_227',
        target: 1000,
        status: "90",
        speeches: '800',
        maxSpeeches: '2000',
        assignee: "Sakib",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Team Leader'

    },
    {
        id: '3',
        key: '10-230a',
        speaker: [],
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '100',
        maxSpeeches: '1000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
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
                address: 'Dhaka'
            }
        ],
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
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
                address: 'Dhaka'
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka'
            }
        ],
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
        remark: "",
        role: 'Manager'

    },

    {
        id: '6',
        key: '10-260a',
        speaker: [],
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
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
                address: 'Dhaka'
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka'
            }
        ],
        script: 'Script id_227',
        target: 1000,
        status: "20",
        speeches: '800',
        maxSpeeches: '3000',
        assignee: "Mushfiqur",
        assignedDate: "30/01/2022",
        deadline: "30/01/2022",
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

    const showDrawer = (key: any) => {
        setOpen(true);
    };

    const getPercentage = (max: number, value: number) => {
        const result = (100 * value) / max;
        return result;
    }

    const onAddSpeaker = (id: any) => {
        setIsSpeakerModal(true)
        setSpeechId(id);
    }

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
            render: (data) => <div>
                <Buttons.IconWithTextButton.Secondary
                    label='Upload AUdio'
                    size='small'
                    variant='Megenta'
                    icon={<img src={Icons.UploadMagenta} alt='' />}
                    iconAlign="start"
                />
            </div>



        },
        {
            title: `${"Speaker".toLocaleUpperCase()}`,
            key: 'speaker',
            width: 182,
            // render: (data) => <h1 className='w-[88px] whitespace-nowrap'> {data.target}</h1>,
            render: (data) =>
                <div onClick={() => onAddSpeaker(data?.id)} className='flex justify-between items-center'>
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
                            <button  className='flex items-center gap-x-[10px]'>
                                <img className='w-4 h-4' src={Icons.AccountCircle} alt="" />
                                <h1 className='text-blue-gray-60 text-xs font-medium'>Add Speaker</h1>
                            </button>
                    }
                    <img className='w-[7px] h-1' src={Icons.arrow_drop_down_blue_gray} alt="" />
                </div>
        },

        {
            title: `${"REMARK".toLocaleUpperCase()}`,
            width: 80,
            align: "center",
            render: (data) => (
                <div className='flex justify-center'>
                    <img src={Icons.Script} className="h-[15px] w-[12px]" alt="" />
                </div>
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

                    <div className='flex w-full justify-center items-center'>
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
                // pagination={false}
                // scroll={{ x: 768, y: 1000 }}
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
                // speakerData={speakerData}
                // setSpeakerData={setSpeakerData}
                />
            }

        </div >
    );
};

export default Type11;