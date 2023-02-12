import { useFormik } from 'formik';
import * as yup from 'yup';
import SpeakerInformation from './SpeakerInformation';
import TargetSetting from './TargetSetting';
import './TargetElement.css';
import ActionButton from './ActionButton';
import { useContext } from 'react';
import { AssignContext } from '../../../../../../context/AssignProvider';

const validationSchema = yup.object({
    // gender: yup.string().required('Gender is Required'),
    ageRange: yup.string().required('Age range is Required'),
    // district: yup.string().required('District is Required'),
});

const CriteriaForm = () => {

    const AssignContexts = useContext(AssignContext);
    const {
        saveCriteria,
        criterias
    } = AssignContexts;

    const formik = useFormik({
        initialValues: {
            gender: 'Male',
            ageRange: '',
            district: [],
            profession: '',
            economicSituation: '',
            healthFactors: [],
            recordingArea: '',
            recordingDistance: '',
            educationSituation: '',
            target: 0,
            deadline: '',
            reminder: [],
            remark: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            saveCriteria(values);
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
                <ActionButton />
            </form>

        </div>
    );
};


export default CriteriaForm;