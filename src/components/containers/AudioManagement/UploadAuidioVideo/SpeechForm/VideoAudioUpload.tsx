import { FormikValues } from 'formik';
import { urlPatternValidation } from '../../../../../helpers/Utils';
import Icons from '../../../../../assets/Icons';
import Dragger from 'antd/es/upload/Dragger';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import { useState } from 'react';

const VideoAudioUpload = ({ formik }: { formik: FormikValues }) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [convertedFileUrl, setConvertedFileUrl] = useState<string>("");
    const [conversionProgress, setConversionProgress] = useState(0);
    const [conversionETA, setConversionETA] = useState('');
    const [loading, setLoading] = useState(false);

    const onDeleteFile = () => {
        formik.setFieldValue("speechFile", '');
        formik.setFieldValue("speechFileName", '');
    }

    const handleFileUpload = async (event: UploadChangeParam<UploadFile<File>>) => {
        // event.prevntDefault();
        if (event.fileList?.length !== 0) {
            // let files = event.fileList || event.file || event.target.files;
            let files = event.fileList[0];
            // getFile(event.fileList[0]?.originFileObj);
            if (files && files.type === "audio/mpeg") {
                console.log(files, "files")
                formik.setFieldValue("speechFile", event.fileList[0]?.originFileObj);
                formik.setFieldValue("speechFileName", files?.originFileObj?.name);
            }
            else {
                convertToMP3(files)
            }


        } else {
            // getFile([]);
            formik.setFieldValue("speechFile", '');
            formik.setFieldValue("speechFileName", '');
            // formik.setFieldValue("file",  []);
        }
    }


    const convertToMP3 = async (files: any) => {
        const videoFile = files;
        setLoading(true)
        console.log("hello")

        if (!videoFile) {
            console.error('Please select a video file.');
            setLoading(false);
            return;
        }

        const videoElement = document.createElement('video');
        // videoElement.src = URL.createObjectURL(videoFile);

        // try {
        //     await videoElement.play();
        // } catch (error) {
        //     console.error('Error playing the video:', error);
        //     return;
        // }

        // const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const audioContext = new window.AudioContext();
        const sourceNode = audioContext.createMediaElementSource(videoElement);
        const destinationNode = audioContext.createMediaStreamDestination();
        const mediaRecorder = new MediaRecorder(destinationNode.stream);
        const chunks: Blob[] = [];

        sourceNode.connect(destinationNode);

        mediaRecorder.ondataavailable = (event) => {
            console.log('Data available:', event.data);
            chunks.push(event.data);
            const progress = Math.floor((chunks.length / (videoElement.duration * 20)) * 100); // Assuming 20 chunks per second
            setConversionProgress(progress);

            const etaSeconds = Math.floor(((100 - progress) / progress) * (videoElement.duration / 20));
            const etaMinutes = Math.floor(etaSeconds / 60);
            const etaSecondsRemaining = etaSeconds % 60;
            setConversionETA(`${etaMinutes}m ${etaSecondsRemaining}s`);
        };

        mediaRecorder.addEventListener('stop', () => {
            const audioBlob = new Blob(chunks, { type: 'audio/mp3' });
            // const audioUrl = URL.createObjectURL(audioBlob);
            console.log(audioBlob, "audio blob")
            formik.setFieldValue("speechFile", audioBlob);
            formik.setFieldValue("speechFileName", files?.originFileObj?.name);
            // setConvertedFileUrl(audioUrl);
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
                {loading && <span>loading...</span>}

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