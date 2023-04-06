import { FormikValues } from 'formik';
import React from 'react';
import { urlPatternValidation } from '../../../../../helpers/Utils';
import Icons from '../../../../../assets/Icons';
import Dragger from 'antd/es/upload/Dragger';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';

const VideoAudioUpload = ({ formik }: { formik: FormikValues }) => {

    const onDeleteFile = () => {
        formik.setFieldValue("sourceFile", []);
        formik.setFieldValue("sourceFileName", '');
    }

    const handleFileUpload = (event: UploadChangeParam<UploadFile<File>>) => {
        // event.prevntDefault();


        if (event.fileList?.length !== 0) {
            // let files = event.fileList || event.file || event.target.files;
            let files = event.fileList[0];
            // getFile(event.fileList[0]?.originFileObj);

            formik.setFieldValue("sourceFile", event.fileList[0]?.originFileObj);
            formik.setFieldValue("sourceFileName", files?.originFileObj?.name);

        } else {
            // getFile([]);
            formik.setFieldValue("sourceFile", []);
            formik.setFieldValue("sourceFileName", '');
            // formik.setFieldValue("file",  []);
        }
    }

    return (
        <div className={`bg-white w-[100%] `} >

            <div className={`${(formik.values.sourceFile?.length === 0 || formik.values.sourceFil === '') ? '' : 'py-[24px] px-[16px]'}`}>
                {
                    (formik.values.sourceFile?.length === 0 || formik.values.sourceFil === '') &&
                    <Dragger
                        multiple={false}
                        accept='.txt, .docx, .pdf, .jpg, .jpeg, .png'
                        // customRequest={selectFiles}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 'none'
                        }}
                        onChange={(event) => handleFileUpload(event)}

                    >
                        <div className={`h-[114px] ant-upload-drag-icon flex flex-col justify-center items-center gap-y-[8px]`}>
                            <div className='border-[1px] border-ct-blue-30 w-[160px] h-[36px] px-[18px] py-[8px] rounded-[6px] flex justify-center items-center gap-x-[5px]'>
                                <img src={Icons.Backup} alt="" />
                                <h1 className='text-ct-blue-80 text-small font-medium'>Upload Script</h1>
                            </div>
                            <div>
                                <span className='text-small font-medium text-blue-gray-90 underline'>Click to upload </span>
                                <span className='text-small font-medium text-blue-gray-75'>or Drag and Drop</span>
                            </div>
                        </div>
                    </Dragger>
                }



                {
                    // (formik.values.sourceFileName || formik.values.sourceFile !== '' || formik.values.sourceFile?.length !== 0) &&
                    (formik.values.sourceFile?.length !== 0) &&
                    <div className='rounded-[4px] pt-[8px] pb-4 px-4 bg-ct-blue-05'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-x-[11px] items-center'>
                                <img src={Icons.Pdf} alt="" />
                                <a href={urlPatternValidation(formik.values.sourceFile) && formik.values.sourceFile} rel="noreferrer" target="_blank" className='cursor-pointer'>
                                    <div >
                                        {
                                            formik.values.sourceFileName
                                        }
                                    </div>
                                </a>
                            </div>
                            <button onClick={(e) => {
                                e.preventDefault();
                                onDeleteFile();
                            }}>
                                <img className='w-[13px] h-[14px]' src={Icons.deleteIcon} alt="" />
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default VideoAudioUpload;