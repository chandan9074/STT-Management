import { InboxOutlined } from '@ant-design/icons';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dragger from 'antd/es/upload/Dragger';
import React, { useEffect, useState } from 'react';
import Icons from '../../../../assets/Icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { scriptSourceType } from '../../../../data/Script/Domain';
import { styled, lighten, darken } from '@mui/system';


const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : darken(theme.palette.primary.main, 0.8),
}));



const SourceReference = () => {
    const [file, setFile] = useState<any>();

    useEffect(() => {
        console.log('file', file?.status);
    }, [file])
    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            setFile(info.file)
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);

            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className='mb-[28px] source-reference'>
                                

            <h1 className='mb-[12px] text-blue-gray-80 text-[14px] font-medium'>source reference</h1>

            <div className=' border-[1px] border-[#D6E5F5] rounded-[7px] mb-[28px]'>
                <Grid container>
                    <Grid item xs={6}>
                        <div className='p-[8px] bg-ct-blue-20 flex justify-center items-center gap-x-[15px]'>
                            <img src={Icons.Link} className='h-[18px] w-[18px]' alt="" />
                            <h1 className='text-ct-blue-45 text-[14px] font-medium'>Add Source</h1>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='p-[8px] bg-ct-blue-10 flex justify-center items-center gap-x-[15px]'>
                            <img src={Icons.Link} className='h-[18px] w-[18px]' alt="" />
                            <h1 className='text-ct-blue-45 text-[14px] font-medium'>Script Attachment</h1>
                        </div>
                    </Grid>
                </Grid>

                <div className='h-[104px] bg-white flex items-center px-[16px]'>

                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                            <div>
                                <Autocomplete
                                    id="source-type"
                                    style={{ width: '100%' }}
                                    options={scriptSourceType}
                                    // onChange={(event: any, newValue: string | null) => {
                                    //     onHandleChange(event, newValue);
                                    // }}
                                    renderInput={(params) => (

                                        <TextField required={true} {...params}
                                            label={<span className='comboBoxLabel'>Source Type</span>}

                                        />
                                    )}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={6}>
                            <div>

                                    <TextField
                                        style={{ width: '100%' }}
                                        InputProps={{
                                            style: {
                                                color: '#464E5F',
                                                fontWeight: '600',
                                                fontSize: '15px'
                                            }
                                        }}
                                        id="outlined-basic" label="Source URL" variant="outlined" />


                            </div>
                        </Grid>
                    </Grid>
                </div>


            </div>

            {/* File Upload */}
            <div className=' border-[1px] border-[#D6E5F5] rounded-[7px]'>
                <Grid container>
                    <Grid item xs={6}>
                        <div className='p-[8px] bg-ct-blue-10 flex justify-center items-center gap-x-[15px]'>
                            <img src={Icons.Link} className='h-[18px] w-[18px]' alt="" />
                            <h1 className='text-ct-blue-45 text-[14px] font-medium'>Add Source</h1>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='p-[8px] bg-ct-blue-20 flex justify-center items-center gap-x-[15px]'>
                            <img src={Icons.Link} className='h-[18px] w-[18px]' alt="" />
                            <h1 className='text-ct-blue-45 text-[14px] font-medium'>Script Attachment</h1>
                        </div>
                    </Grid>
                </Grid>

                <div className={`bg-white w-[100%] ${(file === undefined || file?.status === 'removed') ? 'file-upload' : 'file-upload-hidden '}`} >
                    <div className={`${(file === undefined || file?.status === 'removed') ? '' : 'py-[24px] px-[16px]'}`}>
                        <Dragger
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 'none'
                            }}
                            {...props}>
                            <div className={`
                        h-[114px] ant-upload-drag-icon flex flex-col justify-center items-center gap-y-[8px]`}>
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
            </div>
        </div>
    );
};

export default SourceReference;