import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import { FormikValues } from 'formik';
import { useContext, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { Grid, TextField } from '@mui/material';
import Dragger from 'antd/es/upload/Dragger';
import { urlPatternValidation } from '../../../../../helpers/Utils';
import LabelForm from '../../../../common/Form/LabelForm';
import { UserManagementContext } from '../../../../../context/UserManagementProvider';

const SourceReference = ({ formik }: { formik: FormikValues }) => {
    const [scriptSourceReference, setScriptSourceReference] = useState<{ isSource: boolean, isScript: boolean }>({
        isSource: true,
        isScript: false
    });
    const [focus, setFocus] = useState("")

    const { selectedFieldOutline } = useContext(UserManagementContext);

    const onSourceReferencehandle = (value: string) => {
        if (value === 'source') {

            setScriptSourceReference({
                isSource: true,
                isScript: false
            })
        } else {

            setScriptSourceReference({
                isSource: false,
                isScript: true
            })
        }
    }

    const handleFileUpload = (event: UploadChangeParam<UploadFile<File>>) => {
        // event.prevntDefault();


        if (event.fileList?.length !== 0) {
            let files = event.fileList[0];

            formik.setFieldValue("sourceFile", event.fileList[0]?.originFileObj);
            formik.setFieldValue("sourceFileName", files?.originFileObj?.name);

        } else {
            // getFile([]);
            formik.setFieldValue("sourceFile", '');
            formik.setFieldValue("sourceFileName", '');
            // formik.setFieldValue("file",  []);
        }
    }

    const onDeleteFile = () => {
        // formik.setFieldValue("sourceFile", []);
        formik.setFieldValue("sourceFile", []);
        formik.setFieldValue("sourceFileName", '');
    }



    return (
        <div className='mb-[28px] source-reference'>

            {/* <h1 className='mb-[12px] text-blue-gray-80 text-small font-medium'>Source Reference</h1> */}
            <LabelForm
                title='Source Reference'
                required={true}
            />

            <div className=' border-[1px] border-[#D6E5F5] rounded-[7px] mb-[28px] mt-3'>
                <Grid container >
                    <Grid item xs={6} style={{ cursor: 'pointer' }}>
                        <div onClick={(value) => onSourceReferencehandle('source')} className={`cursor-pointer p-[8px] ${scriptSourceReference?.isSource ? 'bg-ct-blue-20' : 'bg-ct-blue-10'}  flex justify-center items-center gap-x-[15px]`}>
                            <img src={scriptSourceReference?.isSource ? Icons.Link_Black : Icons.Link} className='h-[18px] w-[18px]' alt="" />
                            <h1 className={`${scriptSourceReference?.isSource ? 'text-ct-blue-95' : 'text-ct-blue-45'}  text-small font-medium`}>Add Source</h1>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div onClick={(value) => onSourceReferencehandle('script')} className={`cursor-pointer p-[8px] ${scriptSourceReference?.isScript ? 'bg-ct-blue-20' : 'bg-ct-blue-10'}  flex justify-center items-center gap-x-[15px]`}>
                            <img src={scriptSourceReference?.isScript ? Icons.AddLink_Black : Icons.AddLink} className='h-[18px] w-[18px]' alt="" />
                            <h1 className={`${scriptSourceReference?.isScript ? 'text-ct-blue-95' : 'text-ct-blue-45'}  text-small font-medium`}>Script Attachment</h1>
                        </div>
                    </Grid>
                </Grid>

                {
                    scriptSourceReference?.isSource ?
                        <div className='h-[104px] bg-white flex items-center px-[16px] rounded-[7px] source-reference'>

                            <Grid container spacing={6}>
                                <Grid item xs={6}>
                                    <div>
                                        <TextField
                                            id="sourceName"
                                            name="sourceName"
                                            size='small'
                                            sx={{
                                                '&:hover fieldset': {
                                                    borderColor: 'rgb(19, 110, 229) !important',
                                                },
                                            }}
                                            label={<div className={`${focus === "sourceName" ? "" : "mt-[3px]"}`} ><span className={`${focus === "sourceName" ? "font-medium" : "text-[14px] font-semibold"}`}>Source Name </span><span className='text-[red]'>*</span></div>}
                                            onFocus={() => setFocus("sourceName")}
                                            onBlur={() => setFocus("")}
                                            value={formik.values.sourceName}
                                            onChange={formik.handleChange}
                                            error={formik.touched.sourceName && Boolean(formik.errors.sourceName)}
                                            helperText={formik.touched.sourceName && formik.errors.sourceName}
                                            style={{ width: '100%', }}
                                            InputProps={{
                                                style: {
                                                    color: '#464E5F',
                                                    fontWeight: '600',
                                                    fontSize: '15px',
                                                    border: selectedFieldOutline === 'sourceName' ? '1px solid #136EE5' : '1px solid transparent'
                                                }
                                            }}
                                            variant="outlined"
                                        // onFocus={() => setSelectedFieldOutline("sourceName")}
                                        // onBlur={() => setSelectedFieldOutline("")} 
                                        />
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div>

                                        <TextField
                                            id="sourceUrl"
                                            name="sourceUrl"
                                            size='small'
                                            sx={{
                                                '&:hover fieldset': {
                                                    borderColor: 'rgb(19, 110, 229) !important',
                                                },
                                            }}
                                            label={<div className={`${focus === "sourceUrl" ? "" : "mt-[3px]"}`} ><span className={`${focus === "sourceUrl" ? "font-medium" : "text-[14px] font-semibold"}`}>Source URL </span><span className='text-[red]'>*</span></div>}
                                            onFocus={() => setFocus("sourceUrl")}
                                            onBlur={() => setFocus("")}
                                            value={formik.values.sourceUrl}
                                            onChange={formik.handleChange}
                                            error={formik.touched.sourceUrl && Boolean(formik.errors.sourceUrl)}
                                            helperText={formik.touched.sourceUrl && formik.errors.sourceUrl}
                                            style={{ width: '100%', }}
                                            InputProps={{
                                                style: {
                                                    color: '#464E5F',
                                                    fontWeight: '600',
                                                    fontSize: '15px',
                                                    border: selectedFieldOutline === 'sourceUrl' ? '1px solid #136EE5' : '1px solid transparent'
                                                }
                                            }}
                                            variant="outlined"
                                        // onFocus={() => setSelectedFieldOutline("sourceUrl")}
                                        // onBlur={() => setSelectedFieldOutline("")} 
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </div> :

                        // file upload
                        <div className={`bg-white w-[100%] `} >

                            <div className={`${(formik.values.sourceFile?.length === 0 || formik.values.sourceFil === '') ? '' : 'py-[24px] px-[16px]'}`}>
                                {
                                    (formik.values.sourceFile?.length === 0 || formik.values.sourceFile === '') &&
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

                                {/* Validation error message */}
                                {formik.errors.sourceFileName && formik.touched.sourceFileName && (
                                    <div className='text-red-600 text-xxs'>{formik.errors.sourceFileName}</div>
                                )}
                            </div>

                            {/* Validation error message */}
                            {formik.errors.sourceFile && formik.touched.sourceFile && (
                                <div className='text-red-600 text-xxs'>{formik.errors.sourceFile}</div>
                            )}
                        </div>
                }
            </div>
        </div>
    );
};

export default SourceReference;