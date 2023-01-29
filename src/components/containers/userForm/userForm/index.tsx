import React from 'react';
import PersonalTitle from './PersonalTitle';
import Role from './Role';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ActionButton from '../../../Form/ActionButton';
import PersonalInformation from './PersonalInformation';
import { homeDistrict } from '../../../../data/userManagement/UserManagementData';

const validationSchema = yup.object({
    role: yup.array().min(1, "Please select at least one role"),
    primaryRole: yup.string().required('Primary Role is Required'),
    name: yup.string().required('Name is Required'),
    email: yup.string().email('Enter a valid email').required('Email is Required'),
    mobileNumber: yup.string().required('Mobile number is Required'),
    homeDistrict: yup.string().required('Home District is Required'),
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
            homeDistrict: 'Bhola'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submit------', values);
        },
    });

    
    return (
        <div className='w-full flex justify-center script-form'>
            <div className='bg-white-gray-45 w-[880px]'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='px-[48px] py-[24px]'>

                        <h1 className='text-ct-blue-95 font-medium text-[22px] mb-[33px]'>Create User</h1>

                        <PersonalTitle />

                        <h1 className='text-ct-blue-60 text-[14px] font-semibold my-[28px]'>Personal Information</h1>

                        <div className='mb-[17px]'>
                        <Role formik={formik}/>
                        </div>

                        <PersonalInformation formik={formik}/>

                        <ActionButton />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;