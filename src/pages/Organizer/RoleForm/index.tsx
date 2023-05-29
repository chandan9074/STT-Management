import RoleSelect from './RoleSelect';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { organizeRole } from '../../../data/organize/OrganizerData';
import TextArea from 'antd/es/input/TextArea';
import ActionButton from './ActionButton';
import { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { OrganizerContext } from '../../../context/OrganizerProvider';
import { TextField } from '@mui/material';
import { UserManagementContext } from '../../../context/UserManagementProvider';
import { RoleDataDT, roleBodyDT } from '../../../types/organizerTypes';

const validationSchema = yup.object({
    role: yup.string().required('Role is Required'),
});

type Props = {
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
    data?: RoleDataDT;
    isEdit?: boolean;
    handleEdit?: () => void;
    handleSelectRow?: (value: RoleDataDT[]) => void;
}

const RoleForm = ({ setIsDrawerOpen, data, isEdit, handleEdit, handleSelectRow }: Props) => {

    const organizerContext = useContext(OrganizerContext);
    const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            role: isEdit ? data ? data?.role : '' : "",
            description: isEdit ? data ? data.description : '' : "",
        },
        validationSchema: validationSchema,
        onSubmit: (values: roleBodyDT) => {

            if (isEdit) {
                console.log("edit activate");
                values.id = data?.id;
                organizerContext.updateRole(values);
                handleSelectRow && handleSelectRow([])
                handleEdit && handleEdit();
            }
            else {
                organizerContext.postRole(values)
            }
            // console.log('value-----', values);
            formik.resetForm();
            setIsDrawerOpen(false)

        }
    });

    useEffect(() => {
        if (!isEdit) {
            formik.resetForm();
        }
    }, [isEdit])

    return (
        <div className='px-6 py-6'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <RoleSelect
                        formikValues={formik.values.role}
                        data={organizeRole}
                        formikError={formik.errors.role}
                        formikTouched={formik.touched.role}
                        formik={formik}
                        name={'role'}
                        fieldLabel='Role'
                    />
                </div>

                <div className='mt-4'>

                    <TextField
                        id="description"
                        name="description"
                        multiline={true}
                        rows={4}
                        label={<h1 className='comboBoxLabel'>Description </h1>}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        style={{ width: '100%' }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px',
                                caretColor: '#136EE5',
                                border: selectedFieldOutline === 'description' ? '1px solid #136EE5' : '1px solid transparent',
                            }
                        }}
                        variant="outlined"
                        onFocus={() => setSelectedFieldOutline("description")}
                        onBlur={() => setSelectedFieldOutline("")}
                    />
                    {/* {formik.touched.description && formik.errors.description ? (
                    <div className='text-red-600 text-xxs'>{formik.errors.description}</div>
                ) : null} */}
                </div>

                <ActionButton setIsDrawerOpen={setIsDrawerOpen} />
            </form>
        </div>
    );
};

export default RoleForm;