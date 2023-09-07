import { FormikValues } from 'formik';
import { urlPatternValidation } from '../../../../../helpers/Utils';
import Icons from '../../../../../assets/Icons';
import Dragger from 'antd/es/upload/Dragger';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import { useState } from 'react';

const VideoAudioUpload = ({ formik }: { formik: FormikValues }) => {

    const [loading, setLoading] = useState(false);

    const onDeleteFile = () => {
        formik.setFieldValue("speechFile", '');
        formik.setFieldValue("speechFileName", '');
    }

    const handleFileUpload = async (event: UploadChangeParam<UploadFile<File>>) => {
        if (event.fileList?.length !== 0) {
            let files = event.fileList[0];
            if (files && files.type === "audio/mpeg") {
                formik.setFieldValue("speechFile", event.fileList[0]?.originFileObj);
                formik.setFieldValue("speechFileName", files?.originFileObj?.name);
            }
            else {
                convertToMP3(files)
            }


        } else {
            formik.setFieldValue("speechFile", '');
            formik.setFieldValue("speechFileName", '');
        }
    }


    const convertToMP3 = async (files: any) => {
        const videoFile = files;
        setLoading(true)

        if (!videoFile) {
            setLoading(false);
            return;
        }

        const videoElement = document.createElement('video');
        const audioContext = new window.AudioContext();
        const sourceNode = audioContext.createMediaElementSource(videoElement);
        const destinationNode = audioContext.createMediaStreamDestination();
        const mediaRecorder = new MediaRecorder(destinationNode.stream);
        const chunks: Blob[] = [];

        sourceNode.connect(destinationNode);

        mediaRecorder.ondataavailable = (event) => {
            chunks.push(event.data);

        };

        mediaRecorder.addEventListener('stop', () => {
            const audioBlob = new Blob(chunks, { type: 'audio/mp3' });
            formik.setFieldValue("speechFile", audioBlob);
            formik.setFieldValue("speechFileName", files?.originFileObj?.name);
            setLoading(false);
            chunks.length = 0;
        });

        mediaRecorder.start();
        setTimeout(() => {
            mediaRecorder.stop();
            videoElement.pause();
            URL.revokeObjectURL(videoElement.src);
        }, videoElement.duration * 1000);
    };


    return (
        <div className={`bg-white w-[100%] `} >

            <div className={`${(formik.values.speechFile?.length === 0 || formik.values.speechFile === '') ? '' : 'py-[24px] px-[16px]'}`}>
                {
                    (formik.values.speechFile?.length === 0 || formik.values.speechFile === '') &&
                    <Dragger
                        multiple={false}
                        accept='audio/*, video/*'
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
                {loading && <span>loading...</span>}

                {
                    (formik.values.speechFile?.length !== 0) &&
                    <div className='rounded-[4px] py-4 px-4 bg-ct-blue-05'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-x-[11px] items-center'>
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