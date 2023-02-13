import { useFormik } from 'formik';
import * as yup from 'yup';
import SpeakerInformation from './SpeakerInformation';
import TargetSetting from './TargetSetting';
import './TargetElement.css';
import ActionButton from './ActionButton';
import { useContext, useEffect } from 'react';
import { AssignContext } from '../../../../../../context/AssignProvider';

const validationSchema = yup.object({
    // gender: yup.string().required('Gender is Required'),
    ageRange: yup.string().required('Age range is Required'),
    district: yup.array().of(yup.string()).required('District is a required field')
});

const CriteriaForm = () => {

    const AssignContexts = useContext(AssignContext);
    const {
        saveCriteria,
        singleCriteria,
        criterias,
        setEmptySingleCriteria
    } = AssignContexts;

    console.log('----#############', singleCriteria);
    

    const formik = useFormik({
        initialValues: {
            gender: singleCriteria?.gender || 'Male',
            ageRange: singleCriteria?.ageRange || '',
            district: singleCriteria?.district || [],
            profession: singleCriteria?.profession || '',
            economicSituation: singleCriteria?.economicSituation || '',
            healthFactors: singleCriteria?.healthFactors || [],
            recordingArea: singleCriteria?.recordingArea || '',
            recordingDistance: singleCriteria?.recordingDistance || '',
            educationSituation: singleCriteria?.educationSituation || '',
            target: singleCriteria?.target || 0,
            deadline: singleCriteria?.deadline || '',
            reminder: singleCriteria?.reminder || [],
            remark: singleCriteria?.remark || ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            saveCriteria(values);
            formik.resetForm();
            // setEmptySingleCriteria();
            console.log('submit------', values);
        },
    });
    

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='bg-ct-blue-05 p-[28px] gap-x-[36px] flex'>
                    <SpeakerInformation formik={formik} />
                    <TargetSetting formik={formik} />
                </div>
                <ActionButton formik={formik} />
            </form>

        </div>
    );
};


export default CriteriaForm;