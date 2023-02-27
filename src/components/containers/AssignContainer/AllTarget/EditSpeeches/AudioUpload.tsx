import React, { useRef, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import Buttons from '../../../../Buttons';
import { Button, LinearProgress } from '@mui/material';

const AudioUpload = () => {
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [uploadProgress, setUploadProgress] = useState<any>(0);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // const handleFileSelect = (event: any) => {
    //     const file = event.target.files[0];
    //     setSelectedFile(file);

    //     const audio = new Audio();
    //     audio.src = URL.createObjectURL(file);
    //     audio.addEventListener('loadedmetadata', () => {
    //         console.log('Duration:', audio.duration);
    //     });
    // };

    const handleFileSelect = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      
        const audio = new Audio();
        audio.src = URL.createObjectURL(file);
        audio.addEventListener('canplaythrough', () => {
          const duration = audio.duration;
          const minutes = Math.floor(duration / 60);
          const seconds = Math.floor(duration % 60);
          console.log(`Duration: ${minutes}:${seconds}`);
          // do something with the duration, such as store it in state
        });
      };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
        // try {
        //   const response = await fetch('/upload', {
        //     method: 'POST',
        //     body: formData,
        //     onUploadProgress: (progressEvent: any) => {
        //       const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        //       setUploadProgress(progress);
        //     },
        //   });
        //   console.log(response);
        // } catch (error) {
        //   console.error(error);
        // }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    }

    return (
        <div>
            {/* Hide the input element */}
            <input type="file" accept="audio/mpeg" onChange={handleFileSelect} hidden ref={fileInputRef} />

            {/* Trigger file selection on button click */}
            <Buttons.IconWithTextButton.Secondary
                label='Upload AUdio'
                size='small'
                variant='Megenta'
                icon={<img src={Icons.UploadMagenta} alt='' />}
                iconAlign="start"
                onClick={handleButtonClick}
            />

            {/* <Button onClick={handleFileUpload}>Upload</Button> */}
            {/* <LinearProgress variant="determinate" value={uploadProgress} /> */}
        </div>
    );
};

export default AudioUpload;