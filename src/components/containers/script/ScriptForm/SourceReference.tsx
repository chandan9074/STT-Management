import { Grid } from '@mui/material';
import Dragger from 'antd/es/upload/Dragger';
import { useState } from 'react';
import Icons from '../../../../assets/Icons';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { scriptSourceType } from '../../../../data/Script/Domain';

const SourceReference = ({ formik, getFile }: { formik: any, getFile: (file: any) => void }) => {
    const [file, setFile] = useState<any>([]);
    const [scriptSourceReference, setScriptSourceReference] = useState<{ isSource: boolean, isScript: boolean }>({
        isSource: true,
        isScript: false
    });

    const onSourceReferencehandle = (value: string) => {
        if (value === 'source') {
            console.log('source');

            setScriptSourceReference({
                isSource: true,
                isScript: false
            })
        } else {
            console.log('script');

            setScriptSourceReference({
                isSource: false,
                isScript: true
            })
        }
    }    

     const handleFileUpload = (event: any) => {

        if (event.fileList?.length !== 0) {
            // let files = event.fileList || event.file || event.target.files;
            let files = event.fileList[0];
            setFile(files);
            getFile(event.fileList[0]?.originFileObj);
        } else {
            setFile([]);
            getFile([]);
        }
    }


    return (
        <div className='mb-[28px] source-reference'>

            <h1 className='mb-[12px] text-blue-gray-80 text-[14px] font-medium'>Source Reference</h1>

            <div className=' border-[1px] border-[#D6E5F5] rounded-[7px] mb-[28px]'>
                <Grid container >
                    <Grid item xs={6} style={{ cursor: 'pointer' }}>
                        <div onClick={(value) => onSourceReferencehandle('source')} className={`cursor-pointer p-[8px] ${scriptSourceReference?.isSource ? 'bg-ct-blue-20' : 'bg-ct-blue-10'}  flex justify-center items-center gap-x-[15px]`}>
                            <img src={Icons.Link} className='h-[18px] w-[18px]' alt="" />
                            <h1 className='text-ct-blue-45 text-[14px] font-medium'>Add Source</h1>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div onClick={(value) => onSourceReferencehandle('script')} className={`cursor-pointer p-[8px] ${scriptSourceReference?.isScript ? 'bg-ct-blue-20' : 'bg-ct-blue-10'}  flex justify-center items-center gap-x-[15px]`}>
                            <img src={Icons.Link} className='h-[18px] w-[18px]' alt="" />
                            <h1 className='text-ct-blue-45 text-[14px] font-medium'>Script Attachment</h1>
                        </div>
                    </Grid>
                </Grid>

                {
                    scriptSourceReference?.isSource ?
                        <div className='h-[104px] bg-white flex items-center px-[16px] pt-[48px] rounded-[7px] source-reference'>

                            <Grid container spacing={6}>
                                <Grid item xs={6}>
                                    <div>
                                        <Autocomplete
                                            id="sourceType"
                                            style={{ width: '100%' }}
                                            options={scriptSourceType}
                                            value={formik.values.sourceType }
                                            onChange={(event, value) => {
                                                if (typeof value === 'string') {
                                                    console.log('event', event);

                                                    formik.setFieldValue('sourceType', value)
                                                } else {
                                                    formik.setFieldValue('sourceType', '')
                                                }
                                            }}

                                            renderInput={(params) => (

                                                <TextField
                                                    {...params}
                                                    name="sourceType"
                                                    error={formik.touched.sourceType && Boolean(formik.errors.sourceType)}
                                                    helperText={formik.touched.sourceType && formik.errors.sourceType}

                                                    label={<h1 className='comboBoxLabel'>Source Type <span className='text-[red]'>*</span></h1>}

                                                />
                                            )}
                                        />
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div>

                                        <TextField
                                            id="sourceurl"
                                            name="sourceurl"
                                            label={<h1 className='comboBoxLabel'>Source URL</h1>}

                                            value={formik.values.sourceurl}
                                            onChange={formik.handleChange}
                                           
                                            style={{ width: '100%', }}
                                            InputProps={{
                                                style: {
                                                    color: '#464E5F',
                                                    fontWeight: '600',
                                                    fontSize: '15px',
                                                   
                                                }
                                            }}
                                            variant="outlined" />


                                    </div>
                                </Grid>
                            </Grid>
                        </div> :

                        // file upload
                        <div className={`bg-white w-[100%] ${(file?.length === 0) ? 'file-upload' : 'file-upload-hidden '}`} >
                            
                            <div className={`${(file?.length === 0) ? '' : 'py-[24px] px-[16px]'}`}>
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
                                            <h1 className='text-ct-blue-80 text-[14px] font-medium'>Upload Script</h1>
                                        </div>
                                        <div>
                                            <span className='text-[14px] font-medium text-blue-gray-90'>Click to upload </span>
                                            <span className='text-[14px] font-medium text-blue-gray-75'>or Drag and Drop</span>
                                        </div>
                                    </div>
                                </Dragger>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default SourceReference;