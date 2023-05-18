import PersonalTitle from './PersonalTitle';
import Role from './Role';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ActionButton from '../../../Form/ActionButton';
import PersonalInformation from './PersonalInformation';
import FileReport from './FileReport';
import './UserForm.css';
import PersonalInformation2 from './PersonalInformation2';
import { useContext, useEffect, useState } from 'react';
import { userInfoDT } from '../../../../types/userManagementTypes';
import Layouts from '../../../Layouts';
import Buttons from '../../../Buttons';
import Icons from '../../../../assets/Icons';
import { CustomModal } from '../../../common/CustomModal';
import { UserManagementContext } from '../../../../context/UserManagementProvider';

// const validationSchema = yup.object({
//     role: yup.array().min(1, "Please select at least one role"),
//     primaryRole: yup.string().required('Primary Role is Required'),
//     name: yup.string().required('Name is Required'),
//     email: yup.string().email('Enter a valid email').required('Email is Required'),
//     mobileNumber: yup.string().required('Mobile number is Required'),
//     homeDistrict: yup.string().required('Home District is Required'),
//     presentDistrict: yup.string().required('Present District is Required'),
//     lastDegreeAchived: yup.string().required('Last Degree Achieved District is Required'),
//     cvFile: yup.mixed().required("File is required"),
//     // adminData: yup.string().required('Admin data is Required'),
// });


const validationSchemaSpeaker = yup.object({
    // Name: yup.string().required('Name is Required'),
    // dateOfBirth: yup.string().required('Date of Birth Name is Required'),
    // ageRange: yup.string().required('Age Range is Required'),
    // education: yup.string().required('Education is Required'),
    // educationSituation: yup.string().required('Education situation is Required'),
    // childhoodPlace: yup.string().required('Childhood place is Required'),
    // district: yup.string().required('District place is Required'),
    // upazilaCity: yup.string().required('Upazilla/ City is Required'),
    // villageArea: yup.string().required('Village/ Area is Required'),
    // profession: yup.string().required('Profession is Required'),
});

type Props = {
    data?: userInfoDT
}

const UserForm = ({ data }: Props) => {

    const [isSpeaker, setIsSpeaker] = useState<boolean>(false);
    const [isConfirmCancelModal, setIsConfirmCancelModal] = useState<boolean>(false);
    const { getUserRoleListByRole, createUser } = useContext(UserManagementContext);


    const onDrawerClose = () => {
        setIsConfirmCancelModal(false);
    }

    const initialValues = {
        role: data?.role || [],
        speakersName: data?.name || '',
        gender: data?.gender || 'Male',
        dateOfBirth: data?.dateOfBirth || '',
        ageRange: data?.ageRange || '',
        education: data?.education || '',
        educationSituation: data?.educationSituation || '',
        // profession: data?.profession || '',
        childhoodPlace: data?.childhoodPlace || '',
        district: data?.district || '',
        upazilaCity: data?.upazilaCity || '',
        villageArea: data?.villageArea || '',
        smoking: data?.smoking || '',
        stutter: data?.stutter || '',
        hearingStatus: data?.hearingStatus || '',
        reportingTo: data?.reportingTo || '',
        cvFile: data?.cvFile || '',
        cvFileName: data?.cvFileName || '',
        adminID: data?.adminID || '',
        adminData: {
            id: data?.adminData?.id || '',
            name: data?.adminData?.name || '',
            role: data?.adminData?.role || '',
            contact: data?.adminData?.contact || '',
            email: data?.adminData?.email || '',
            address: data?.adminData?.address || '',
            gender: data?.adminData?.gender || '',
        },
        primaryRole: data?.primaryRole || '',
        name: data?.name || '',
        email: data?.email || '',
        mobileNumber: data?.mobileNumber || '',
        nid: data?.nid || '',
        birthRegNumber: data?.birthRegNumber || '',
        homeDistrict: data?.homeDistrict || '',
        presentDistrict: data?.presentDistrict || '',
        lastDegreeAchived: data?.lastDegreeAchived || '',
        subjectInStudy: data?.subjectInStudy || '',
        // sourceUrl: data?.sourceUrl || '',
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        // validationSchema: isSpeaker ? validationSchemaSpeaker : validationSchema,
        validationSchema: validationSchemaSpeaker,


        onSubmit: (values) => {

            if (isSpeaker) {
                handleSpeakerSubmit(values as userInfoDT);
            } else {
                // handlePersonalInformationSubmit(values as userInfoDT);
                handleSpeakerSubmit(values as userInfoDT);

            }
            // handleSpeakerSubmit(values)
        },
    });

    const handleSpeakerSubmit = (values: userInfoDT) => {

        console.log('%%%values%%%%%', values);

        let formData = new FormData();

        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                const value = values[key as keyof typeof values];

                if (typeof value === 'string' || value instanceof Blob) {
                    formData.append(key, value);
                }
            }
        }

        formData.append('cvFile', values.cvFile);
        formData.append('role', JSON.stringify(values.role));

        createUser(formData);


        // let hasChanges = false;
        // for (const [key, value] of Object.entries(values)) {
        //     // Check if the value has changed from the initial data
        //     if (value !== data?.[key as keyof userInfoDT]) {
        //         hasChanges = true;
        //         // Convert boolean values to strings
        //         // const valueToAppend = typeof value === 'boolean' ? value.toString() : value;
        //         const valueToAppend: any = value ;
        //         // Check if the value is empty or null and add the default value " "

        //         if (!valueToAppend) {
        //             formData.append(key, " ");
        //         } else {
        //             if (key === 'cvFile' && formik.values.cvFile?.length === 0) {
        //                 const emptyFileBlob = new Blob([], { type: "application/pdf" });
        //                 formData.append(key, emptyFileBlob, '');
        //             }
        //             // this is create
        //             else {
        //                 formData.append(key, valueToAppend);
        //             }
        //         }
        //     }
        // }

        // // If no values have changed, add only the module field to the formData object
        // if (!hasChanges) {
        //     formData = new FormData();
        // }

        // // Add the id to the formData object if data exists
        // if (data && data.id) {
        //     formData.append('id', data.id);
        //     updateUser(formData);
        //     // updateScript(formData);
        //     // navigate(SCRIPT_PATH);
        // } else {
        //     if (formik.values.cvFile === '') {
        //         formData.delete('cvFile');
        //         createUser(formData)
        //     }
        //     // createScript(formData);
        //     // navigate(SCRIPT_PATH);
        // }

        setIsSpeaker(isSpeaker);
    }

    useEffect(() => {
        getUserRoleListByRole(formik.values.reportingTo)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.reportingTo])

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
        // let formData = new FormData();
        // if (file) {
        //     formData.append('file', file)
        //     formik.setFieldValue('cvFile', formData);
        // }
        // formik.setFieldValue('cvFile', file);
    }

    return (
        <Layouts.Sixth>
            <div className='w-full flex justify-center script-form bg-default mt-[34px] custom-grid'>
                <div className='bg-white-gray-45 w-[880px] rounded-xl'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='px-[48px] py-[24px]'>

                            <div className='flex justify-between'>
                                <h1 className='text-ct-blue-95 font-medium text-[18px] mb-[33px]'>Create User</h1>
                                <Buttons.IconButton.Circle
                                    size='medium'
                                    variant="CT-Blue"
                                    icon={<img src={Icons.CloseIconButton} alt="" />}
                                    border='border'
                                    background="white"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsConfirmCancelModal(true);
                                    }}
                                />
                            </div>


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

                {
                    (isConfirmCancelModal) &&
                    <CustomModal.Type6
                        open={isConfirmCancelModal}
                        setOpen={setIsConfirmCancelModal}
                        onSave={onDrawerClose}
                        title="Don't you want to create user?"
                        cancelText='No'
                        saveText='Yes'
                        icon={Icons.GoBack}
                        iconHeight='h-5'
                        iconWidth='w-6'
                    />
                }
            </div>
        </Layouts.Sixth>
    );
};

export default UserForm;