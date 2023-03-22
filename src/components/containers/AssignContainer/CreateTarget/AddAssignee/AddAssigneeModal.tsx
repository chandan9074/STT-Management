import { StepBackwardOutlined } from '@ant-design/icons';
import { FormControl, FormControlLabel, Radio, RadioGroup, SelectChangeEvent } from '@mui/material';
import { Form, Select } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { AssignContext } from '../../../../../context/AssignProvider';
import { RoleInContext } from '../../../../../context/RoleProvider';
import { roleDT } from '../../../../../types/billingTypes';
import Buttons from '../../../../Buttons';
import RoleImage from '../../../../Image/RoleImage';

const { Option } = Select;

const roleData = [
    {
        title: "Manager",
    },
    {
        title: "Team Leader",
    },
    {
        title: "Collector",
    }
];

const AddAssigneeModal = ({
    handleModal,
    isRecreate
    // type
}: {
    handleModal: (value: boolean) => void,
    isRecreate?: boolean
}) => {

    const { createAssignee, assigneeForRecreate, setAssigneeForRecreate } = useContext(AssignContext)

    const [form] = Form.useForm();

    const [role, setRole] = useState<string>('Manager');
    const [customRoleData, setCustomRoleData] = useState<roleDT[]>([]);
    // const [type, setType] = useState<>

    const managerContext = useContext(RoleInContext);
    const { roleDatas } = managerContext;

    const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);
    const [dropDownCount, setDropDownCount] = useState<number>(0);
    const [isDropDownSelect, setIsDropDownSelect] = useState<boolean>(false);
    const [isDropItemClick, setIsDropItemClick] = useState<boolean>(false);

    const managerParams = {
        id: '',
        role: role,
        type: ''
    }

    useEffect(() => {
        managerContext.getManager(managerParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role]);

    useEffect(() => {
        if (!isDropDownVisible) {
            setIsDropItemClick(false);
        }
    }, [isDropDownVisible]);


    const onRoleChange = (e: SelectChangeEvent) => {
        setRole(e.target.value);
        form.resetFields();
    }

    useEffect(() => {
        if (dropDownCount === 2) {
            setIsDropDownVisible(false);
            setDropDownCount(0);
        }
    }, [dropDownCount]);


    const handleRoleChange = (id: string, p: any) => {

        const _data = roleDatas?.filter((m: roleDT) => m.id === p.key);

        const index = customRoleData.findIndex((data) => data.id === p.key);
        if (_data && index === -1) {
            setCustomRoleData([...customRoleData, _data[0]]);
        }
    }


    const deleteManager = (id: string | undefined) => {
        const _data = customRoleData?.filter((item: roleDT) => item.id !== id);
        setCustomRoleData(_data);
        setIsDropDownSelect(false);
        form.resetFields();
    }


    const onDropDownVisible = (open: boolean) => {
        setIsDropDownVisible(open);
        setDropDownCount(dropDownCount + 1);
        setIsDropItemClick(true);
    }


    const onInputKeyDown = () => {
    }

    const onSelect = () => {

        setIsDropDownSelect(true);
    }

    const onClose = () => {
        setCustomRoleData([]);
        handleModal(false)
    }

    const onDropDownClick = () => {
        setIsDropItemClick(true);
    }

    const outsideModalClick = () => {
        handleModal(false);
        setCustomRoleData([]);
    }

    const onAddHandle = () => {

        const _id = customRoleData?.map((item: roleDT) => {
            return item?.id;
        });

        const _data = { selectedAssignee: _id };
        createAssignee(_data);
        onClose();
    }

    const onAddRecreateHandle = () => {
        const assigneeForRecreateIds = assigneeForRecreate.map(assignee => assignee.id);
        const newAssignee = customRoleData.map((assignee: any) => {
            let newId: any;
            do {
                // Generate a new random id
                newId = Math.floor(Math.random() * 100000);
            } while (assigneeForRecreateIds.includes(newId));

            // Return a new criteria object with the new id
            return {
                ...assignee,
                id: newId
            };
        });

        setAssigneeForRecreate(prevTargetForRecreate => [
            ...prevTargetForRecreate,
            ...newAssignee
        ]);

        onClose();
    }

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
                                Search {role}
                            </h3>

                            <div className='flex items-center gap-x-6'>
                                <div className='flex justify-center items-center'>
                                    {/* <Link to={`${BILLING_PAYMENT_HISTORY_PATH}/${singleManager?.id}`}> */}
                                    <button
                                        onClick={() => isRecreate ? onAddRecreateHandle() : onAddHandle()}
                                        className=' text-white text-base bg-primary-ct-blue-60 rounded-[6px] py-[9px] px-8'>
                                        Add
                                    </button>
                                    {/* </Link> */}
                                </div>

                                <Buttons.IconButton.Circle
                                    size='medium'
                                    variant="CT-Blue"
                                    icon={<img src={Icons.CloseIconButton} alt="" />}
                                    border='border'
                                    background="white"
                                    onClick={() => onClose()}
                                />

                            </div>
                        </div>

                        <div className='rounded-md bg-white px-6 pt-7 pb-2 mt-4'>


                            <div className='flex items-center gap-x-6 mb-[21px]'>
                                <h1 className='text-[#5F6B7D] font-semibold text-small'> Select Role</h1>
                                <FormControl>

                                    <RadioGroup
                                        row
                                        name="reportingTo"
                                        value={role}
                                        onChange={(e) => onRoleChange(e)}
                                    >
                                        {
                                            roleData?.map((value, i) => (
                                                <FormControlLabel
                                                    style={{
                                                        color: `${role === value.title ? '#136EE5' : '#5F6B7D'} `,
                                                        fontSize: '14px',
                                                        marginRight: '22px',
                                                        height: '30px'
                                                    }}
                                                    className={`${role === value.title && 'ml-[4px] pr-[12px] bg-blue-50 rounded-[30px] border-[1px] border-[#136EE5]'}`}
                                                    key={i}
                                                    value={value.title}
                                                    control={<Radio
                                                    />}
                                                    label={value.title}
                                                />
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                            </div>


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
                                            className={`relative ${customRoleData.length !== 0 && 'bg-blue-gray-20'} border-[1px] ${isDropDownVisible ? 'border-secondary-blue-50' : 'border-blue-gray-20'} rounded-[7px] h-[44px] flex justify-center items-center ${isDropItemClick ? '' : isDropDownSelect ? 'searchByRoleSelect' : ''} ${(!isDropDownVisible) ? 'select-icon' : ''}`}>

                                            <Select

                                                // open={isDropItemClick ? true : isDropDownOpen}
                                                // mode='multiple'
                                                suffixIcon={<StepBackwardOutlined style={{ display: 'none' }} />}
                                                onClick={onDropDownClick}
                                                onDropdownVisibleChange={onDropDownVisible}
                                                onInputKeyDown={onInputKeyDown}
                                                onSelect={onSelect}
                                                showSearch
                                                placeholder={`Select ${role} by Login ID/ Name`}
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
                                                                <RoleImage role={role} />
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
                                            <p className='text-blue-gray-80 font-bold text-xxs'>{role}</p>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>

                        </div>
                    </div>

                    {/*body*/}
                    {

                        customRoleData.length !== 0 ?
                            <div className='border-[1px] border-blue-gray-20 m-6 rounded-[4px] max-h-[200px] overflow-y-auto'>
                                {
                                    customRoleData?.map((item: roleDT, i: number) => (
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
                                                            <h1 className='text-small text-ct-blue-90'>{item?.role}</h1>
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
                                <h1 className='text-ct-blue-45 text-xs mt-[8px]'>By adding, {role} will be
                                    shown here</h1>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default AddAssigneeModal;