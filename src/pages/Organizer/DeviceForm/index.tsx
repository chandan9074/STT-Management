import { useFormik } from 'formik';
import * as yup from 'yup';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { OrganizerContext } from '../../../context/OrganizerProvider';
import { Grid, TextField } from '@mui/material';
import { UserManagementContext } from '../../../context/UserManagementProvider';
import ActionButton from '../RoleForm/ActionButton';
import Icons from '../../../assets/Icons';

const validationSchema = yup.object({
    // gender: yup.string().required('Gender is Required'),
});

type Props = {
    setIsFormOpen: Dispatch<SetStateAction<boolean>>;
}

const DeviceForm = ({ setIsFormOpen }: Props) => {

    const organizerContext = useContext(OrganizerContext);
    const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);

    const [active, setActive] = useState("");

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            deviceName: '',
            model: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {

            organizerContext.createScript(values)
            console.log('value-----', values);

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
                                        onClick={() => setActive(item.device)}
                                        className={`w-32 h-20 flex flex-col gap-y-2 justify-center items-center border ${(active === item.device) ? 'border-secondary-blue-50 bg-secondary-blue-50-55%' : 'border-border-light-blue'} rounded-lg`}>
                                        <img src={item.icon} alt="" />
                                        <p className='text-small text-blu-gray-75'
                                        >{item.device}</p>
                                    </button>
                                )
                            }
                        </div>
                    </div>
                    <TextField
                        id="deviceName"
                        name="deviceName"
                        label={<h1 className='comboBoxLabel'>Device Name <span className='text-[red]'>*</span></h1>}
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
                                border: selectedFieldOutline === 'deviceName' ? '1px solid #136EE5' : '1px solid transparent'
                            }
                        }}
                        variant="outlined"
                        onFocus={() => setSelectedFieldOutline("deviceName")}
                        onBlur={() => setSelectedFieldOutline("")}
                    // classes={{
                    //     option: classes.focused,
                    // }}
                    // classes={{ option: classes.option }}
                    // className={formik.touched.name && formik.errors.name ? "focused" : ""}
                    />
                    <TextField
                        id="model"
                        name="model"
                        label={<h1 className='comboBoxLabel'>Model <span className='text-[red]'>*</span></h1>}
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
                                border: selectedFieldOutline === 'model' ? '1px solid #136EE5' : '1px solid transparent'
                            }
                        }}
                        variant="outlined"
                        onFocus={() => setSelectedFieldOutline("model")}
                        onBlur={() => setSelectedFieldOutline("")}
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