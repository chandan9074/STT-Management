import { TextareaAutosize, TextField } from '@mui/material';
import React from 'react';
import './TitleDescription.css'

const TitleDescription = () => {
    return (
        <div className='p-[16px] title-descrioption  rounded-[7px] bg-white border-[1px] border-blue-gray-30'>
            <TextField
                style={{
                    width: '100%',
                    marginBottom: '14px',
                
                }}
                id="outlined-basic" label="Title" variant="standard" />

            <TextareaAutosize
            className='writeScriptfield'
                aria-label="minimum height"
                minRows={4}
                placeholder="Write Script"
                style={{ 
                    width: '100%',
                 }}
            />

        </div>
    );
};

export default TitleDescription;