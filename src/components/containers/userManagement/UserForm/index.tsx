import PersonalTitle from './PersonalTitle';
import Role from './Role';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ActionButton from '../../../Form/ActionButton';
import PersonalInformation from './PersonalInformation';
import FileReport from './FileReport';
import './UserForm.css';
import PersonalInformation2 from './PersonalInformation2';
import { useEffect, useState } from 'react';
import { userRoleInformationDt, userSpeakerDt } from '../../../../types/userManagementTypes';
import Layouts from '../../../Layouts';

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


const validationSchemaSpeaker = yup.object({
    speakersName: yup.string().required('Speakers Name is Required'),
    ageRange: yup.string().required('Age Range is Required'),
    education: yup.string().required('Education is Required'),
    educationSituation: yup.string().required('Education situation is Required'),
    childhoodPlace: yup.string().required('Childhood place is Required'),
    district: yup.string().required('District place is Required'),
    upazilaCity: yup.string().required('Upazilla/ City is Required'),
    villageArea: yup.string().required('Village/ Area is Required'),
    profession: yup.string().required('Profession is Required'),
});

const UserForm = () => {

    const [isSpeaker, setIsSpeaker] = useState<boolean>(false);

    const initialValues =
        isSpeaker
            ? {
                // Speaker
                role: ['Speaker'],
                speakersName: '',
                gender: 'Male',
                dateOfBirth: '',
                ageRange: '',
                education: '',
                educationSituation: '',
                profession: '',
                childhoodPlace: '',
                district: '',
                upazilaCity: '',
                villageArea: '',
                smoking: '',
                stutter: '',
                hearingStatus: '',
                reportingTo: '',
                cvFile: '',
                cvFileName: '',
                adminData: {
                    id: '4',
                    name: 'Jahir Uddin',
                    number: '018684660691'
                },
            }
            : {
                role: [],
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
                cvFileName: '',
                reportingTo: '',
                adminData: {
                    id: '10',
                    name: 'Jahir Uddin',
                    number: '018684660691'
                },
            };

    const handleSpeakerSubmit = (values: userSpeakerDt) => {
        setIsSpeaker(isSpeaker);
    }

    const handlePersonalInformationSubmit = (values: userRoleInformationDt) => {
        setIsSpeaker(isSpeaker);
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        validationSchema: isSpeaker ? validationSchemaSpeaker : validationSchema,

        onSubmit: (values) => {

            if (isSpeaker) {
                handleSpeakerSubmit(values as userSpeakerDt);
            } else {
                handlePersonalInformationSubmit(values as userRoleInformationDt);
            }
        },
    });

    useEffect(() => {

        if (formik.values?.role?.length === 0) {
            setIsSpeaker(false);
        }

        formik.values.role?.map((value) => {
            if (value.toLowerCase() === 'speaker') {
                setIsSpeaker(true);
            } else {
                setIsSpeaker(false);
            }
            return isSpeaker
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.role]);

    const getFile = (file: File | null) => {
        let formData = new FormData();
        if (file) {
            formData.append('file', file)
            formik.setFieldValue('cvFile', formData);
        }
    }



    return (
        <Layouts.Sixth>
            <div className='w-full flex justify-center script-form bg-default mt-[34px] custom-grid'>
                <div className='bg-white-gray-45 w-[880px] rounded-xl'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='px-[48px] py-[24px]'>

                            <h1 className='text-ct-blue-95 font-medium text-[18px] mb-[33px]'>Create User</h1>

                            {/* {
                                (isSpeaker && formik.values.speakersName !== '') ?
                                    <PersonalTitle
                                        name={formik.values.speakersName}
                                        role={['speaker']}
                                        gender={formik.values.gender}
                                    />
                                    :
                                    (!isSpeaker && formik.values.name !== '' && formik.values.primaryRole !== '' && formik.values.role.length > 0) ?
                                        <PersonalTitle
                                            name={formik.values.name}
                                            primaryRole={formik.values.primaryRole}
                                            role={formik.values.role}
                                        />
                                        :
                                        <img className='h-8 ' src={Icons.UserSnippet} alt="" />
                            } */}

                            {
                                isSpeaker ?
                                    <PersonalTitle
                                        name={formik.values.speakersName}
                                        role={['speaker']}
                                        gender={formik.values.gender}
                                    />
                                    :
                                    <PersonalTitle
                                        name={formik.values.name}
                                        primaryRole={formik.values.primaryRole}
                                        role={formik.values.role}
                                    />

                            }

                            <h1 className='text-ct-blue-60 text-small font-semibold my-[28px]'>Personal Information</h1>

                            <div className='mb-[17px]'>
                                <Role formik={formik} />
                            </div>




                            {/* <div className='mt-[24px] mb-[48px]'>
                            <FileReport formik={formik} getFile={getFile} />
                        </div>
                        
                        <div>
                            <ActionButton />
                        </div> */}

                        </div>
                        {
                            isSpeaker ?
                                <>
                                    <div className='px-12'>
                                        <PersonalInformation2 formik={formik} />
                                        <div className='mt-6 mb-12'>
                                            <FileReport formik={formik} getFile={getFile} />
                                        </div>
                                    </div>
                                    <ActionButton />
                                </>
                                :
                                <>
                                    <div className='px-12'>
                                        <PersonalInformation formik={formik} />
                                        <div className='mt-6 mb-12'>
                                            <FileReport formik={formik} getFile={getFile} />
                                        </div>
                                    </div>
                                    <ActionButton />
                                </>
                        }
                    </form>
                </div>
            </div>
        </Layouts.Sixth>
    );
};

export default UserForm;