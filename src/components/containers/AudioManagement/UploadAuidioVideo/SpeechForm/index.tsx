import Buttons from '../../../../Buttons';
import Icons from '../../../../../assets/Icons';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import VideoAudioUpload from './VideoAudioUpload';
import ActionButton from './ActionButton';
import SpeechInfo from './SpeechInfo';
import SourceReference from './SourceReference';
import DistributionSource from './DistributionSource';
import DomainSubDomain from './DomainSubDomain';
import SpeakerInfo from './SpeakerInfo';

const validationSchema = yup.object({
    sourceName: yup.string().required('Source name is required'),
    sourceUrl: yup.string().required('Source url is required'),
    domain: yup.string().required('Domain is required'),
    subdomain: yup.string().required('subdomain is required'),
    homeDistrict: yup.string().required('home District is required'),
    speechFile: yup.string().required('Speech file is required'),
    sourceFile: yup.string().required('Source file is required'),

});

const SpeechForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            sourceFile: '',
            sourceFileName: '',
            dataType: 'STT',
            sourceName: '',
            sourceUrl: '',
            speechFile: '',
            speechFileName: '',
            distributionSource: 'Read',
            domain: '',
            subdomain: '',
            speakerNumber: 0,
            gender: 'male',
            ageRange: [],
            homeDistrict: ''
        },
        validationSchema: validationSchema,

        onSubmit: (values: any) => {
            console.log('*********', values);

        }
    });

    return (
        <div className='w-full flex justify-center script-form '>
            <div className='bg-white-gray-45 w-[885px] rounded-xl'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='px-[53px] py-[24px]'>
                        <div className='flex justify-between'>
                            <h1 className='text-ct-blue-95 font-medium text-heading-6'>Add Speech</h1>
                            <Buttons.IconButton.Circle
                                size='medium'
                                variant="CT-Blue"
                                icon={<img src={Icons.CloseIconButton} alt="" />}
                                border='border'
                                background="white"
                                onClick={(e) => {
                                    navigate(-1);
                                    e.preventDefault();
                                }}
                            />
                        </div>
                        <div className='mt-[33px]'>
                            <VideoAudioUpload formik={formik} />
                        </div>
                        <div className='mt-12'>
                            <SpeechInfo formik={formik} />
                        </div>

                        <div className='mt-6'>
                            <SourceReference formik={formik} />
                        </div>

                        <div className='mt-6'>
                            <DistributionSource formik={formik} />
                        </div>

                        <div className='mt-6'>
                            <DomainSubDomain formik={formik} />
                        </div>

                        <div className='mt-12'>
                            <SpeakerInfo formik={formik} />
                        </div>
                    </div>

                    <div className='flex justify-end px-5 py-[28px] bg-white'>
                        <ActionButton />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpeechForm;