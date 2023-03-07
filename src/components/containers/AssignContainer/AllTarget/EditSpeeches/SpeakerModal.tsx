import { StepBackwardOutlined } from '@ant-design/icons';
import { Form, Select } from 'antd';
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { RoleInContext } from '../../../../../context/RoleProvider';
import { roleDT } from '../../../../../types/billingTypes';
import Buttons from '../../../../Buttons';
import RoleImage from '../../../../Image/RoleImage';

const { Option } = Select;

type Props = {
    setModal: Dispatch<SetStateAction<boolean>>;
    setData: Dispatch<SetStateAction<any>>;
    speechId: number,
    data: any
}

const SpeakerModal = ({
    setModal,
    setData,
    speechId,
    data
}: Props) => {
    const [form] = Form.useForm();

    console.log(speechId);


    const managerContext = useContext(RoleInContext);
    const { roleDatas } = managerContext;

    const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);
    const [dropDownCount, setDropDownCount] = useState<number>(0);
    const [isDropDownSelect, setIsDropDownSelect] = useState<boolean>(false);
    const [isDropItemClick, setIsDropItemClick] = useState<boolean>(false);
    // const [speakerData, setSpeakerData] = useState<roleDT[]>([]);
    const [speakerData, setSpeakerData] = useState<roleDT[]>([]);

    const managerParams = {
        id: '',
        role: 'Speaker',
        type: ''
    }

    useEffect(() => {
        const _data = data?.filter((item: any) => item?.id === speechId);
        setSpeakerData(_data[0].speaker);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        managerContext.getManager(managerParams);
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
        const _data = roleDatas?.filter((m: roleDT) => m.id === p.key);

        const index = speakerData.findIndex((data) => data.id === p.key);
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


    const onDropDownVisible = (e: any) => {
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
        const index = data?.findIndex((item: any) => item.id === speechId);
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

                                <div className='flex justify-center items-center'>
                                    <Buttons.LabelButton.Primary
                                        label='Add'
                                        size='small'
                                        variant='CT-Blue'
                                        onClick={() => onAdd()}
                                    />

                                </div>

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
                                            className={`relative ${speakerData.length !== 0 && 'bg-blue-gray-20'} border-[1px] ${isDropDownVisible ? 'border-secondary-blue-50' : 'border-blue-gray-20'} rounded-[7px] h-[44px] flex justify-center items-center ${isDropItemClick ? '' : isDropDownSelect ? 'searchByRoleSelect' : ''} ${(!isDropDownVisible) ? 'select-icon' : ''}`}>

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
                                                filterOption={(inputValue: string, option: any) =>
                                                    option.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 ||
                                                    option.id.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
                                                }

                                            >
                                                {
                                                    roleDatas?.map((m: roleDT, i: number) => (
                                                        <Option key={m.id} value={m.name} id={m.id}>
                                                            <div className='flex gap-x-4'>
                                                                {/* <img className='h-[18px] w-[18px]' src={Icons.manager}
                                                                    alt="" /> */}
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

                        speakerData.length !== 0 ?
                            <div className='border-[1px] border-blue-gray-20 m-6 rounded-[4px] max-h-[200px] overflow-y-auto'>
                                {
                                    speakerData?.map((item: roleDT, i: number) => (
                                        <div key={i} className=''>
                                            <div className="relative  ">
                                                <div className=' px-3 py-4  flex justify-between '>
                                                    <div className='flex items-center gap-x-4'>
                                                        <div className='flex gap-x-2'>
                                                            {/* <img className='h-[20px] w-[20px]' src={Icons.manager} alt="" /> */}
                                                            <RoleImage role={item.role} />
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
                            <div className='p-6 h-[195px] flex flex-col justify-center items-center'>
                                <div
                                    className='h-[40px] w-[40px] rounded-[50%] bg-blue-gray-05 flex items-center justify-center'>
                                    <img className='w-[18px] h-[18px]' src={Icons.Face} alt="" />
                                </div>
                                <h1 className='text-ct-blue-45 text-xs mt-[8px]'>By adding, speaker will be
                                    shown here</h1>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default SpeakerModal;