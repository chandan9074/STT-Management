
import { useFormik } from 'formik';
import * as yup from 'yup';
import SpeakerInformation from './SpeakerInformation';
import TargetSetting from './TargetSetting';
import './TargetElement.css';
import ActionButton from './ActionButton';
import { useContext } from 'react';
import { AssignContext, useAssigneeContext } from '../../../../../../context/AssignProvider';
import { isEmpty } from '../../../../../../helpers/Utils';
import { CriteriaItemDT } from '../../../../../../types/assignTypes';
import { CommonContext } from '../../../../../../context/CommonProvider';

const validationSchema = yup.object({
    // gender: yup.string().required('Gender is Required'),
    ageRange: yup.string().required('Age range is Required'),
    district: yup.array().of(yup.string()).required('District is a required field')
});

type Props = {
    drawerClose: () => void,
    data?: CriteriaItemDT,
    isRecreate?: boolean
}

const CriteriaForm = ({ drawerClose, data, isRecreate }: Props) => {

    const { targetForRecreate, setTargetForRecreate } = useAssigneeContext();

    const AssignContexts = useContext(AssignContext);
    const {
        saveCriteria,
        singleCriteria,
        creteAssignCriteria,
        criterias,
        emptyCriteria,
        UpdateAssignCriteria
    } = AssignContexts;

    const commonContext = useContext(CommonContext);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: data?.id || singleCriteria?.id || '',
            gender: data?.gender || singleCriteria?.gender || 'Male',
            ageRange: data?.ageRange || singleCriteria?.ageRange || '',
            district: data?.district || singleCriteria?.district || [],
            profession: data?.profession || singleCriteria?.profession || '',
            economicSituation: data?.economicSituation || singleCriteria?.economicSituation || '',
            healthFactors: data?.healthFactors || singleCriteria?.healthFactors || [],
            recordingArea: data?.recordingArea || singleCriteria?.recordingArea || '',
            recordingDistance: data?.recordingDistance || singleCriteria?.recordingDistance || '',
            // educationSituation: singleCriteria?.educationSituation || '',
            target: data?.target || singleCriteria?.target ,
            deadline: data?.deadline || singleCriteria?.deadline || '',
            reminder: data?.reminder || singleCriteria?.reminder || [],
            remark:(typeof( data?.remark) !== 'string' && data?.remark?.Des) || (typeof( singleCriteria?.remark) !== 'string' && singleCriteria?.remark?.Des)  || '',
            education: data?.education || singleCriteria?.education || '',
            buttonName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: CriteriaItemDT) => {
            console.log('values', values)

            // formik.resetForm();
            // if (isEmpty(data)) {
            //     saveCriteria(values);
            // } else {
            //     onCriteriaUpdate()
            // }

            values.remarkRoleID = commonContext.roleId;
            if(values.remark && (typeof(values.remark) === 'string')) {
                values.remarkDes = values.remark;
            }

            delete values.remark;

            if (values.buttonName && values?.buttonName === 'create-button') {
                formik.resetForm();

                if (isEmpty(data)) {
                    if (isRecreate) {
                        onSingleRecreate(values);
                    } else {

                        const { buttonName, ...newValues } = values;
                        creteAssignCriteria([newValues]);
                        emptyCriteria();
                        drawerClose();
                    }
                } else {
                    UpdateAssignCriteria(values)
                }

            } else {
                formik.resetForm();
                if (isEmpty(data)) {
                    saveCriteria(values);
                } else {
                    onCriteriaUpdate()
                }
            }
        }
    });


    const onSingleRecreate = (values: CriteriaItemDT) => {

        const targetForRecreateIds = targetForRecreate.map((target) => target.id);
        let newId: number;
        do {
            // Generate a new random id
            newId = Math.floor(Math.random() * 100000);
        } while (targetForRecreateIds.includes(newId.toString()));

        // Add the new id to the values object
        const newValues = {
            ...values,
            id: newId.toString(),
            //   target: 0 // Set the target property to a default value
        };

        setTargetForRecreate((prevTargetForRecreate) => [
            ...prevTargetForRecreate,
            newValues
        ]);

        emptyCriteria();
        drawerClose();
    }

    const onCriteriaUpdate = () => {
        // const _data = { ...formik.values, id: data?.id }
        const _data = { ...formik.values, id: data?.id || '' }
        UpdateAssignCriteria(_data);
        drawerClose();
    }

    const onCreate = () => {
        console.log('onCreate', criterias);
        creteAssignCriteria(criterias);
        emptyCriteria();
        drawerClose();
    }

    const onRecreateCreate = () => {

        const targetForRecreateIds = targetForRecreate.map(target => target.id);
        const newCriterias = criterias.map((criteria: CriteriaItemDT) => {
            let newId: number;
            do {
                // Generate a new random id
                newId = Math.floor(Math.random() * 100000);
            } while (targetForRecreateIds.includes(newId.toString()));

            // Return a new criteria object with the new id
            return {
                ...criteria,
                id: newId.toString()
            };
        });

        setTargetForRecreate(prevTargetForRecreate => [
            ...prevTargetForRecreate,
            ...newCriterias
        ]);
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
                    onCreate={isRecreate ? onRecreateCreate : onCreate}
                    data={data}
                />
            </form>

        </div>
    );
};


export default CriteriaForm;