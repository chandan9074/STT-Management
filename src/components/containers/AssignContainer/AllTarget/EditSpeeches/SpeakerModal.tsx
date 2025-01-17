import { StepBackwardOutlined } from '@ant-design/icons';
import { Form, Select } from 'antd';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { RoleInContext } from '../../../../../context/RoleProvider';
import { speechDt } from '../../../../../types/assignTypes';
import { roleDT } from '../../../../../types/billingTypes';
import Buttons from '../../../../Buttons';
import RoleImage from '../../../../Image/RoleImage';

const { Option } = Select;

type Props = {
    setModal: Dispatch<SetStateAction<boolean>>;
    setData: Dispatch<SetStateAction<speechDt[]>>;
    speechId: string,
    data: speechDt[]
}

const SpeakerModal = ({
    setModal,
    setData,
    speechId,
    data
}: Props) => {
    const [form] = Form.useForm();



    const managerContext = useContext(RoleInContext);
    const { roleDatas } = managerContext;

    const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);
    const [dropDownCount, setDropDownCount] = useState<number>(0);
    const [isDropDownSelect, setIsDropDownSelect] = useState<boolean>(false);
    const [isDropItemClick, setIsDropItemClick] = useState<boolean>(false);
    const [speakerData, setSpeakerData] = useState<roleDT[]>([]);

    const [tempSpeakerData, setTempSpeakerData] = useState<roleDT[]>([]);



    const managerParams = {
        id: '',
        role: 'Speaker',
        type: ''
    }



    useEffect(() => {
        const _data = data?.filter((item: speechDt) => item?.id === speechId);

        if (_data[0].speaker) {
            setSpeakerData(_data[0].speaker);
            setTempSpeakerData(_data[0].speaker)
        } else {
            setSpeakerData([]);
            setTempSpeakerData([])
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        managerContext.getManager(managerParams);

        const _data = data?.filter((item: speechDt) => item?.id === speechId);

        if (_data[0].speaker) {
            setTempSpeakerData(_data[0].speaker)
        } else {
            setTempSpeakerData([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [speakerData]);

    useEffect(() => {
        if (!isDropDownVisible) {
            setIsDropItemClick(false);
        }
    }, [isDropDownVisible]);


    useEffect(() => {
        if (dropDownCount === 2) {
            setIsDropDownVisible(false);
            setDropDownCount(0);
        }
    }, [dropDownCount]);


    // const handleRoleChange = (id: string, p: any) => {
    //     const _data = roleDatas?.filter((m: roleDT) => m.id === p.key);
    //     if (_data) {
    //         setSpeakerData([...speakerData, _data[0]]);
    //     }    
    // }

    const handleRoleChange = (id: string, p: any) => {

        const _data = roleDatas?.filter((m: roleDT) => m.id === p.id);

        const index = speakerData.findIndex((data) => data.id === p.id);
        if (_data && index === -1) {
            setSpeakerData([...speakerData, _data[0]]);
        }
    };




    const deleteManager = (id: string | undefined) => {
        const _data = speakerData?.filter((item: roleDT) => item.id !== id);
        setSpeakerData(_data);
        setIsDropDownSelect(false);
        form.resetFields();
    }


    const onDropDownVisible = (e: boolean) => {
        setIsDropDownVisible(true);
        setDropDownCount(dropDownCount + 1);
        setIsDropItemClick(true);
    }


    const onInputKeyDown = () => {
    }

    const onSelect = () => {

        setIsDropDownSelect(true);
    }

    const onClose = () => {
        setSpeakerData([]);
        setModal(false);
        // handleModal(false)
    }

    const onDropDownClick = () => {
        setIsDropItemClick(true);
    }

    const outsideModalClick = () => {
        // handleModal(false);
        setSpeakerData([]);
        setModal(false);
    }

    const onAdd = () => {
        const index = data?.findIndex((item: speechDt) => item.id === speechId);
        if (index !== -1) {
            const newData = [...data];
            newData[index] = { ...newData[index], speaker: speakerData };
            setData(newData);
        }
        setModal(false);
    };


    return (
        <div className='fixed top-0 left-0 flex justify-center items-center w-full h-screen z-40 animate-fadeIn2 '>
            <div className="fixed top-0 left-0 opacity-50 bg-black w-full h-screen z-40"
                onClick={() => outsideModalClick()} />
            <div className="relative z-50">

                <div
                    className="border-0 overflow-hidden rounded-lg shadow-lg relative flex flex-col w-[700px] bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className='bg-ct-blue-05  p-5'>


                        <div>
                        </div>

                        <div className="flex justify-between items-center ">
                            <h3 className="titleParagraphMedium">
                                Add Speaker
                            </h3>

                            <div className='flex items-center gap-x-6'>

                                <Buttons.LabelButton.Tertiary
                                    label='Cancel'
                                    size='small'
                                    variant='CT-Blue'
                                    onClick={() => onClose()}
                                />

                                {
                                    (speakerData.length !== 0 || tempSpeakerData.length > 0) && <div className='flex justify-center items-center'>
                                        <Buttons.LabelButton.Primary
                                            label='Add'
                                            size='small'
                                            variant='CT-Blue'
                                            onClick={() => onAdd()}
                                        />

                                    </div>
                                }

                            </div>
                        </div>

                        <div className='rounded-md bg-white px-6 pt-7 pb-2 mt-4'>



                            <div>
                                <Form
                                    layout='vertical'
                                    name="basic"
                                    form={form}
                                >
                                    <Form.Item
                                        name="managerId"
                                    >

                                        <div
                                            className={`relative ${speakerData?.length !== 0 && 'bg-blue-gray-20'} border-[1px] ${isDropDownVisible ? 'border-secondary-blue-50' : 'border-blue-gray-20'} rounded-[7px] h-[44px] flex justify-center items-center ${isDropItemClick ? '' : isDropDownSelect ? 'searchByRoleSelect' : ''} ${(!isDropDownVisible) ? 'select-icon' : ''}`}>

                                            <Select

                                                // open={isDropItemClick ? true : isDropDownOpen}
                                                // mode='multiple'
                                                suffixIcon={<StepBackwardOutlined style={{ display: 'none' }} />}
                                                onClick={onDropDownClick}
                                                onDropdownVisibleChange={onDropDownVisible}
                                                onInputKeyDown={onInputKeyDown}
                                                onSelect={onSelect}
                                                showSearch
                                                placeholder={`Select speaker by Login ID/ Name`}
                                                style={{ border: 'none' }}
                                                onChange={(value, p) => handleRoleChange(value, p)}
                                                filterOption={(inputValue, option) =>
                                                    (option?.value ?? '').toString().toLowerCase().includes(inputValue.toLowerCase())

                                                }
                                            // options

                                            >
                                                {
                                                    roleDatas?.map((m: roleDT, i: number) => (
                                                        <Option key={i} value={`${m.id} - ${m.name}`} id={m.id}>
                                                            {/* <Option key={i} value={m.name} id={m.id}> */}
                                                            <div className='flex gap-x-4'>

                                                                <RoleImage role={'Speaker'} />
                                                                <h1 className='text-blue-gray-90 text-small'>{m.id} - {m.name}</h1>
                                                            </div>
                                                        </Option>
                                                    ))
                                                }
                                            </Select>
                                            <div
                                                // className={(!isDropDownVisible) ? 'bg-whitelock h-[24px] w-[24px] flex justify-center items-center pr-[15px]' : 'hidden'}>
                                                className={(!isDropDownVisible) ? 'select-icon' : 'hidden'}>
                                                {/*<img onClick={dropDownArrowClick} className='' src={arrowDropDownIcon} alt=""/>*/}
                                            </div>
                                        </div>


                                        <div
                                            className={isDropDownVisible ? 'bg-white px-[6px] block w-[fit-content] absolute bottom-[34px] left-[12px]' : 'hidden'}>
                                            <p className='text-blue-gray-80 font-bold text-xxs'>{'Speaker'}</p>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>

                        </div>
                    </div>

                    {/*body*/}
                    {

                        speakerData?.length !== 0 ?
                            <div className='border-[1px] border-blue-gray-20 m-6 rounded-[4px] max-h-[200px] overflow-y-auto'>
                                {
                                    speakerData?.map((item: roleDT, i: number) => (
                                        <div key={i} className=''>
                                            <div className="relative  ">
                                                <div className=' px-3 py-4  flex justify-between '>
                                                    <div className='flex items-center gap-x-4'>
                                                        <div className='flex gap-x-2'>
                                                            {/* <img className='h-[20px] w-[20px]' src={Icons.manager} alt="" /> */}
                                                            <RoleImage role={item?.role} />
                                                            <h1 className='nameParagraph1'>
                                                                {item?.name}
                                                            </h1>
                                                        </div>
                                                        <div className='flex items-center gap-x-2'>
                                                            <img className='h-4 w-4' src={Icons.Military} alt="" />
                                                            <h1 className='text-small text-ct-blue-90-70%'>{item?.role}{item?.gender && '-'}{item?.gender}</h1>
                                                        </div>
                                                        <div className='flex items-center gap-x-2'>
                                                            <img className='h-4 w-4' src={Icons.Power} alt="" />
                                                            <h1 className='text-small text-ct-blue-90'>{item?.id}</h1>
                                                        </div>
                                                        <div className='flex items-center gap-x-2'>
                                                            <img className='h-4 w-4' src={Icons.Home} alt="" />
                                                            <h1 className='text-small text-ct-blue-90'>{item?.address}</h1>
                                                        </div>
                                                    </div>
                                                    <button onClick={(id) => deleteManager(item?.id)}>
                                                        <img className='deleteIcon' src={Icons.deleteIcon} alt="" />
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            :
                            <div className='p-6 h-[195px] flex  justify-center items-center'>
                                <div className='relative w-14 flex items-center'>
                                    <div className='relative z-20 border-[1.5px] border-white rounded-full'>
                                        <RoleImage height='h-6' width='w-6' role={'speakerFemale'} />
                                    </div>
                                    <div className='absolute left-4 z-10'>
                                        <RoleImage height='h-6' width='w-6' role={'speaker'} />
                                    </div>
                                </div>
                                <p className='text-small font-normal leading-[16.8px] text-ct-blue-90 text-opacity-70'>No speaker have been selected yet!</p>
                            </div>
                    }

                </div>

            </div>
        </div >
    );
};

export default SpeakerModal;


