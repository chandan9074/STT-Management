import RoleSelect from './RoleSelect';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { organizeRole } from '../../../data/organize/OrganizerData';
import ActionButton from './ActionButton';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { OrganizerContext } from '../../../context/OrganizerProvider';
import { TextField } from '@mui/material';
import { RoleDataDT, roleBodyDT } from '../../../types/organizerTypes';

const validationSchema = yup.object({
    role: yup.string().required('Role is Required'),
});

type Props = {
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
    data?: RoleDataDT;
    handleEdit?: (value: boolean) => void;
    handleSelectRow?: (value: RoleDataDT[]) => void;
}

const UpdateForm = ({ setIsDrawerOpen, data, handleEdit, handleSelectRow }: Props) => {

    const organizerContext = useContext(OrganizerContext);
    // const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);

    const [focus, setFocus] = useState("")


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            role: data ? data?.role : '',
            description: data ? data.description : '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: roleBodyDT) => {
            console.log("dhukche")

            values.id = data?.id;
            organizerContext.updateRole(values);
            handleSelectRow && handleSelectRow([])
            handleEdit && handleEdit(false);

            // console.log('value-----', values);
            formik.resetForm();
            setIsDrawerOpen(false)

        }
    });

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
                        size='small'
                        sx={{
                            '&:hover fieldset': {
                                borderColor: 'rgb(19, 110, 229) !important',
                            },
                        }}
                        label={<div className={`${(focus === "description" || formik.values.description !== "") ? "" : "mt-[3px]"}`} ><span className={`${(focus === "description" || formik.values.description !== "") ? "font-medium" : "text-[14px] font-semibold"}`}>Description </span></div>}
                        onFocus={() => setFocus("description")}
                        onBlur={() => setFocus("")}
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
                                // border: selectedFieldOutline === 'description' ? '1px solid #136EE5' : '1px solid transparent',
                            }
                        }}
                        variant="outlined"
                    // onFocus={() => setSelectedFieldOutline("description")}
                    // onBlur={() => setSelectedFieldOutline("")}
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

export default UpdateForm;