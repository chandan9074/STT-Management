import Buttons from '../../../../Buttons';
import Icons from '../../../../../assets/Icons';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import VideoAudioUpload from './VideoAudioUpload';

const validationSchema = yup.object({
    title: yup.string().required('Source Type is required'),
});

const SpeechForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            sourceFile: '',
            sourceFileName: ''
        },
        validationSchema: validationSchema,

        onSubmit: (values: any) => {

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

                            <VideoAudioUpload formik={formik} />

                        </div>
                    </div>

                    {/* <div className='flex justify-end px-5 py-[28px] bg-white'>
                        <ActionButton data={data} />
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default SpeechForm;