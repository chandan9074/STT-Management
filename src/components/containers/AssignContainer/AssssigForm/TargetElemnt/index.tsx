import { useFormik } from 'formik';
import * as yup from 'yup';
import SpeakerInformation from './SpeakerInformation';
import TargetSetting from './TargetSetting';
import './TargetElement.css'

const validationSchema = yup.object({
    // gender: yup.string().required('Gender is Required'),
    ageRange: yup.string().required('Age range is Required'),
    district: yup.string().required('District is Required'),
    // economicSituation: yup.string().required('Economic situation is Required'),
});

const TargetElement = () => {
    const formik = useFormik({
        initialValues: {
            gender: '',
            ageRange: '',
            district: '',
            profession: '',
            economicSituation: '',
            healthFactors: '',
            recordingArea: '',
            recordingDistance: '',
            target: '',
            deadline: '',
            reminder: []
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('submit------', values);

        },
    });


    return (
        <div className='bg-ct-blue-05 p-[28px] gap-x-[36px] flex'>
            <SpeakerInformation formik={formik} />
            <TargetSetting formik={formik} />
        </div>
    );
};


export default TargetElement;