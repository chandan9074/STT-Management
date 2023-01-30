import PersonalTitle from './PersonalTitle';
import Role from './Role';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ActionButton from '../../../Form/ActionButton';
import PersonalInformation from './PersonalInformation';
import FileReport from './FileReport';
import './UserForm.css';

const validationSchema = yup.object({
    role: yup.array().min(1, "Please select at least one role"),
    primaryRole: yup.string().required('Primary Role is Required'),
    name: yup.string().required('Name is Required'),
    email: yup.string().email('Enter a valid email').required('Email is Required'),
    mobileNumber: yup.string().required('Mobile number is Required'),
    homeDistrict: yup.string().required('Home District is Required'),
    presentDistrict: yup.string().required('Present District is Required'),
    lastDegreeAchived: yup.string().required('Last Degree Achieved District is Required'),
    cvFile: yup.mixed().required("File is required"),
    // adminData: yup.string().required('Admin data is Required'),
});


const UserForm = () => {
    const formik = useFormik({
        initialValues: {
            role: ['Admin', 'Speaker'],
            primaryRole: '',
            name: '',
            email: '',
            mobileNumber: '',
            nid: '',
            birthRegNumber: '',
            homeDistrict: '',
            presentDistrict: '',
            lastDegreeAchived: '',
            subjectInStudy: '',
            cvFile: '',
            reportingTo: '',
            adminData: {
                id: 4,
                name: 'Jahir Uddin',
                number: '018684660691'
            },
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submit------', values);
        },
    });

    const getFile = (file: any) => {
        console.log('file', file);
        let formData = new FormData();
        formData.append('file', file)
        formik.setFieldValue('cvFile', formData);

    }


    return (
        <div className='w-full flex justify-center script-form bg-default'>
            <div className='bg-white-gray-45 w-[880px]'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='px-[48px] py-[24px]'>

                        <h1 className='text-ct-blue-95 font-medium text-[22px] mb-[33px]'>Create User</h1>

                        <PersonalTitle />

                        <h1 className='text-ct-blue-60 text-[14px] font-semibold my-[28px]'>Personal Information</h1>

                        <div className='mb-[17px]'>
                            <Role formik={formik} />
                        </div>

                        <PersonalInformation formik={formik} />

                        <div className='mt-[24px] mb-[48px]'>
                            <FileReport formik={formik} getFile={getFile} />
                        </div>
                        <div>
                            <ActionButton />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;