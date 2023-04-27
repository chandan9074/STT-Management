import RoleSelect from './RoleSelect';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { organizeRole } from '../../../data/organize/OrganizerData';
import TextArea from 'antd/es/input/TextArea';
import ActionButton from './ActionButton';
import { Dispatch, SetStateAction, useContext } from 'react';
import { OrganizerContext } from '../../../context/OrganizerProvider';

const validationSchema = yup.object({
    // gender: yup.string().required('Gender is Required'),
});

type Props = {
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const RoleForm = ({ setIsDrawerOpen }: Props) => {

    const organizerContext = useContext(OrganizerContext);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            role: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {

            organizerContext.createScript(values)
            console.log('value-----', values);

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

                    <TextArea
                        id="description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        placeholder='Description'
                        style={{ width: '100%', height: '120px', fontSize: "13px", fontWeight: '500', lineHeight: '15.6px', resize: 'none' }}
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