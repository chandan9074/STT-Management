import { FormikValues } from 'formik';
import { urlPatternValidation } from '../../../../../helpers/Utils';
import Icons from '../../../../../assets/Icons';
import Dragger from 'antd/es/upload/Dragger';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';

const VideoAudioUpload = ({ formik }: { formik: FormikValues }) => {

    const onDeleteFile = () => {
        formik.setFieldValue("speechFile", []);
        formik.setFieldValue("speechFileName", '');
    }

    const handleFileUpload = async (event: UploadChangeParam<UploadFile<File>>) => {
        // event.prevntDefault();
        if (event.fileList?.length !== 0) {
            // let files = event.fileList || event.file || event.target.files;
            let files = event.fileList[0];
            // getFile(event.fileList[0]?.originFileObj);

            formik.setFieldValue("speechFile", event.fileList[0]?.originFileObj);
            formik.setFieldValue("speechFileName", files?.originFileObj?.name);

        } else {
            // getFile([]);
            formik.setFieldValue("speechFile", []);
            formik.setFieldValue("speechFileName", '');
            // formik.setFieldValue("file",  []);
        }
    }


    console.log('speech file', formik.values.speechFile);



    return (
        <div className={`bg-white w-[100%] `} >

            <div className={`${(formik.values.speechFile?.length === 0 || formik.values.speechFile === '') ? '' : 'py-[24px] px-[16px]'}`}>
                {
                    (formik.values.speechFile?.length === 0 || formik.values.speechFile === '') &&
                    <Dragger
                        multiple={false}
                        accept='audio/*, video/*'
                        // customRequest={selectFiles}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 'none'
                        }}
                        onChange={(event) => handleFileUpload(event)}

                    >
                        <div className={`h-[114px] ant-upload-drag-icon flex flex-col justify-center items-center gap-y-[8px]`}>
                            <div className='border-[1px] border-ct-blue-30 px-[18px] rounded-[6px] flex justify-center items-center gap-x-[5px] pl-[17px] pr-6 pt-[9px] pb-2'>
                                <img src={Icons.Backup} alt="" />
                                <h1 className='text-ct-blue-80 text-small font-medium'>Upload Audio/ Video</h1>
                            </div>
                            <div>
                                <span className='text-small font-medium text-blue-gray-90 underline'>Click to upload </span>
                                <span className='text-small font-medium text-blue-gray-75'>or Drag and Drop</span>
                            </div>
                        </div>
                    </Dragger>
                }

                {
                    (formik.values.speechFile?.length !== 0) &&
                    <div className='rounded-[4px] py-4 px-4 bg-ct-blue-05'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-x-[11px] items-center'>
                                {/* <img src={Icons.Pdf} alt="" /> */}
                                <a href={urlPatternValidation(formik.values.speechFile) && formik.values.speechFile} rel="noreferrer" target="_blank" className='cursor-pointer'>
                                    <div >
                                        {
                                            formik.values.speechFileName
                                        }
                                    </div>
                                </a>
                            </div>
                            <button onClick={(e) => {
                                e.preventDefault();
                                onDeleteFile();
                            }}>
                                <img className='w-5 h-5' src={Icons.deleteIcon} alt="" />
                            </button>
                        </div>
                    </div>
                }

                {/* Validation error message */}
                {formik.errors.speechFile && formik.touched.speechFile && (
                    <div className='text-red-600 text-xxs'>{formik.errors.speechFile}</div>
                )}
            </div>
        </div>
    );
};

export default VideoAudioUpload;