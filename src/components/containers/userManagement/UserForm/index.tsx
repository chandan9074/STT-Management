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
});

const UserForm = () => {

    const [isSpeaker, setIsSpeaker] = useState<boolean>(false);
    const initialValues = isSpeaker
        ? {
            // Speaker
            role: [],
            speakersName: '',
            gender: '',
            dateOfBirth: '',
            ageRange: '',
            education: '',
            educationSituation: '',
            childhoodPlace: '',
            district: '',
            upazilaCity: '',
            villageArea: '',
            smoking: 'Yes',
            stutter: 'No',
            hearingStatus: '',
            reportingTo: '',
            adminData: {
                id: 4,
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
            reportingTo: '',
            adminData: {
                id: 4,
                name: 'Jahir Uddin',
                number: '018684660691'
            },
        };

        const handleSpeakerSubmit = (values: any) => {
            // Handle the submission of values from the speaker form
            console.log('Speaker form values:', values);
            setIsSpeaker(isSpeaker);
          }
          
          const handlePersonalInformationSubmit = (values: any) => {
            // Handle the submission of values from the PersonalInformation form
            console.log('Personal Information form values:', values);
            setIsSpeaker(isSpeaker);
          }


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: isSpeaker ? validationSchemaSpeaker : validationSchema,
        // onSubmit: (values) => {
        //     console.log('submit------', values);

        //     setIsSpeaker(isSpeaker);
        // },
        onSubmit: isSpeaker ? handleSpeakerSubmit : handlePersonalInformationSubmit,
    });

    console.log('ispeaker', isSpeaker);


    useEffect(() => {

        if (formik.values.role?.length === 0) {
            setIsSpeaker(false);
        }

        formik.values.role?.map((value) => {
            if (value === 'Speaker') {
                setIsSpeaker(true);
            }
            else {
                setIsSpeaker(false);
            }
        })
    }, [formik.values.role]);

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


                        {
                            isSpeaker ?
                                <div>
                                    <PersonalInformation2 formik={formik} />
                                    <div className='mt-[24px] mb-[48px]'>
                                        <FileReport formik={formik} getFile={getFile} />
                                    </div>

                                    <div>
                                        <ActionButton />
                                    </div>
                                </div>
                                :
                                <div>
                                    <PersonalInformation formik={formik} />
                                    <div className='mt-[24px] mb-[48px]'>
                                        <FileReport formik={formik} getFile={getFile} />
                                    </div>

                                    <div>
                                        <ActionButton />
                                    </div>
                                </div>
                        }

                        {/* <div className='mt-[24px] mb-[48px]'>
                            <FileReport formik={formik} getFile={getFile} />
                        </div>
                        
                        <div>
                            <ActionButton />
                        </div> */}

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;