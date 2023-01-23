import { Divider, TextareaAutosize, TextField } from '@mui/material';
import { Input } from 'antd';
import React from 'react';
import './TitleDescription.css';

const TitleDescription = ({ formik }: { formik: any }) => {
    return (
        <div className='p-[16px] title-descrioption  rounded-[7px] bg-white border-[1px] border-blue-gray-30'>
            <div className='flex items-center'>
                <TextField
                    style={{
                        width: '100%',

                    }}
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    label="Title"
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                    }}

                // variant="standard"
                />
                <h1 className='w-[107px] text-[13px] text-blue-gray-60'>{formik.values.script.length} characters</h1>
            </div>

            <Divider 
            sx={{ bgcolor: "#E5E7EBd" }}
            style={{
                marginTop: '10px',
                marginBottom: '10px'
            }} />

            <TextareaAutosize
                id="script"
                name="script"

                value={formik.values.script}
                onChange={formik.handleChange}
                // error={formik.touched.script && Boolean(formik.errors.script)}
                // helperText={formik.touched.script && formik.errors.script}
                className='writeScriptfield'
                aria-label="minimum height"
                minRows={4}
                placeholder="Write Script"
                style={{
                    width: '100%',
                    border: 'none'
                }}
            />

        </div>
    );
};

export default TitleDescription;