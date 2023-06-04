import { useFormik } from 'formik';
import * as yup from 'yup';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { OrganizerContext } from '../../../context/OrganizerProvider';
import { TextField } from '@mui/material';
import ActionButton from '../RoleForm/ActionButton';
import Icons from '../../../assets/Icons';
import { DeviceDataDT, deviceBodyDT } from '../../../types/organizerTypes';

const validationSchema = yup.object({
    // gender: yup.string().required('Gender is Required'),
});

type Props = {
    setIsFormOpen: Dispatch<SetStateAction<boolean>>;
    data?: DeviceDataDT;
    isEdit?: boolean;
    handleEdit?: () => void;
    handleSelectRow?: (value: DeviceDataDT[]) => void;
}

const DeviceForm = ({ setIsFormOpen, data, isEdit, handleEdit, handleSelectRow }: Props) => {

    const organizerContext = useContext(OrganizerContext);
    // const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);
    const [focus, setFocus] = useState("")

    const [active, setActive] = useState(data?.device ? data.device : "");

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            deviceName: isEdit ? data ? data?.brand : '' : "",
            model: isEdit ? data ? data?.model : '' : "",
            deviceType: isEdit ? data ? data?.device : '' : "",
        },
        validationSchema: validationSchema,
        onSubmit: (values: deviceBodyDT) => {

            if (isEdit && data) {
                console.log("edit activate");
                values.id = data.id;
                values.deviceType = active;
                organizerContext.updateDevice(values);
                handleSelectRow && handleSelectRow([])
                handleEdit && handleEdit();
            }
            else {
                values.deviceType = active;
                organizerContext.postDevice(values)
            }
            // console.log('value-----', values);
            formik.resetForm();
            setIsFormOpen(false)
        }
    });

    const devices = [
        {
            device: "Laptop",
            icon: Icons.Laptop
        },
        {
            device: "Mobile Phone",
            icon: Icons.Mobile
        },
        {
            device: "Audio Recorder",
            icon: Icons.AudioRecorder
        },
    ]

    return (
        <div className='px-6 py-6'>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-y-7'>
                    <div className='flex flex-col gap-y-4'>
                        <h1 className='text-small font-medium text-blue-gray-75'>Device Type</h1>
                        <div className='flex gap-x-3'
                        >
                            {
                                devices.map((item, index) =>
                                    <button
                                        key={index}
                                        onClick={(e) => { e.preventDefault(); setActive(item.device) }}
                                        className={`w-32 h-20 flex flex-col gap-y-2 justify-center items-center border ${(active.toLowerCase() === item.device.toLowerCase()) ? 'border-secondary-blue-50 bg-secondary-blue-50-55%' : 'border-border-light-blue'} rounded-lg`}>
                                        <img src={item.icon} alt="" />
                                        <p className='text-small text-blue-gray-75'
                                        >{item.device}</p>
                                    </button>
                                )
                            }
                        </div>
                    </div>
                    <TextField
                        id="deviceName"
                        name="deviceName"
                        size='small'
                        sx={{
                            '&:hover fieldset': {
                                borderColor: 'rgb(19, 110, 229) !important',
                            },
                        }}
                        label={<div className={`${focus === "deviceName" ? "" : "mt-[3px]"}`} ><span className={`${focus === "deviceName" ? "font-medium" : "text-[14px] font-semibold"}`}>Device Name </span><span className='text-[red]'>*</span></div>}
                        onFocus={() => setFocus("deviceName")}
                        onBlur={() => setFocus("")}
                        value={formik.values.deviceName}
                        onChange={formik.handleChange}
                        error={formik.touched.deviceName && Boolean(formik.errors.deviceName)}
                        helperText={formik.touched.deviceName && formik.errors.deviceName}
                        style={{ width: '100%' }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px',
                                caretColor: '#136EE5',
                                // border: selectedFieldOutline === 'deviceName' ? '1px solid #136EE5' : '1px solid transparent'
                            }
                        }}
                        variant="outlined"

                    // onFocus={() => setSelectedFieldOutline("deviceName")}
                    // onBlur={() => setSelectedFieldOutline("")}
                    // classes={{
                    //     option: classes.focused,
                    // }}
                    // classes={{ option: classes.option }}
                    // className={formik.touched.name && formik.errors.name ? "focused" : ""}
                    />
                    <TextField
                        id="model"
                        name="model"
                        size='small'
                        sx={{
                            '&:hover fieldset': {
                                borderColor: 'rgb(19, 110, 229) !important',
                            },
                        }}
                        label={<div className={`${focus === "model" ? "" : "mt-[3px]"}`} ><span className={`${focus === "model" ? "font-medium" : "text-[14px] font-semibold"}`}>Model </span><span className='text-[red]'>*</span></div>}
                        onFocus={() => setFocus("model")}
                        onBlur={() => setFocus("")}
                        value={formik.values.model}
                        onChange={formik.handleChange}
                        error={formik.touched.model && Boolean(formik.errors.model)}
                        helperText={formik.touched.model && formik.errors.model}
                        style={{ width: '100%' }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px',
                                caretColor: '#136EE5',
                                // border: selectedFieldOutline === 'model' ? '1px solid #136EE5' : '1px solid transparent'
                            }
                        }}
                        variant="outlined"
                    // onFocus={() => setSelectedFieldOutline("model")}
                    // onBlur={() => setSelectedFieldOutline("")}
                    // classes={{
                    //     option: classes.focused,
                    // }}
                    // classes={{ option: classes.option }}
                    // className={formik.touched.name && formik.errors.name ? "focused" : ""}
                    />
                </div>
                <ActionButton setIsDrawerOpen={setIsFormOpen} />
            </form>
        </div>
    );
};

export default DeviceForm;