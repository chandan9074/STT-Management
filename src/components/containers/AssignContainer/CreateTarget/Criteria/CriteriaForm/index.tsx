import { useFormik } from 'formik';
import * as yup from 'yup';
import SpeakerInformation from './SpeakerInformation';
import TargetSetting from './TargetSetting';
import './TargetElement.css';
import ActionButton from './ActionButton';
import { useContext } from 'react';
import { AssignContext } from '../../../../../../context/AssignProvider';
import { isEmpty } from '../../../../../../helpers/Utils';

const validationSchema = yup.object({
    // gender: yup.string().required('Gender is Required'),
    ageRange: yup.string().required('Age range is Required'),
    district: yup.array().of(yup.string()).required('District is a required field')
});

type Props = {
    drawerClose: () => void,
    data?: any,
}

const CriteriaForm = ({ drawerClose, data }: Props) => {

    const AssignContexts = useContext(AssignContext);
    const {
        saveCriteria,
        singleCriteria,
        creteAssignCriteria,
        criterias,
        emptyCriteria,
        UpdateAssignCriteria
    } = AssignContexts;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            gender: data?.gender || singleCriteria?.gender || 'Male',
            ageRange: data?.ageRange || singleCriteria?.ageRange || '',
            district: data?.district || singleCriteria?.district || [],
            profession: data?.profession || singleCriteria?.profession || '',
            economicSituation: data?.economicSituation || singleCriteria?.economicSituation || '',
            healthFactors: data?.healthFactors || singleCriteria?.healthFactors || [],
            recordingArea: data?.recordingArea || singleCriteria?.recordingArea || '',
            recordingDistance: data?.recordingDistance || singleCriteria?.recordingDistance || '',
            // educationSituation: singleCriteria?.educationSituation || '',
            target: data?.target || singleCriteria?.target || 0,
            deadline: data?.deadline || singleCriteria?.deadline || '',
            reminder: data?.reminder || singleCriteria?.reminder || [],
            remark: data?.remark || singleCriteria?.remark || '',
            education: data?.education || singleCriteria?.education || ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            formik.resetForm();
            if (isEmpty(data)) {
                saveCriteria(values);
            } else {
                onCriteriaUpdata()
            }

        },
    });

    const onCriteriaUpdata = () => {
        const _data = {...formik.values, id: data?.id}
        UpdateAssignCriteria(_data);        
        drawerClose();
    }

    const onCreate = () => {
        creteAssignCriteria(criterias);
        emptyCriteria();
        drawerClose();
    }


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='bg-ct-blue-05 px-[28px] py-[22px] gap-x-[36px] flex'>
                    <SpeakerInformation formik={formik} />
                    <TargetSetting formik={formik} />
                </div>
                <ActionButton
                    formik={formik}
                    onCreate={onCreate}
                    data={data}
                />
            </form>

        </div>
    );
};


export default CriteriaForm;