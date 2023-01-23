import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DistributionSource from './DistributionSource';
import Domain from './Domain';
import SourceReference from './SourceReference';
import TitleDescription from './TitleDescription';


import ActionButton from './ActionButton';
import './ScriptForm.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';

const theme = createTheme({

    components: {
        MuiFormLabel: {
            styleOverrides: {
                asterisk: { color: "red" },
            },
        },
    },

})

const distributionList = ['Read', 'Lecture', 'Command', 'Miscellaneous']

const validationSchema = yup.object({
    // sourceurl: yup.string().required('Source URL is required'),
    sourceType: yup.string().required('Source Type is required'),
    domain: yup.string().required('Domain is required'),
    subDomain: yup.string().required('Sub domain is required'),
    distributionSource: yup.string().required('Distribution Source is required'),

});

const ScriptForms = () => {

    const [file, setFile] = useState<any>([]);

    const getFile = (file: any) => {
        setFile(file);
        console.log('file---', file);

    }

    const formik = useFormik({
        initialValues: {
            sourceurl: '',
            sourceType: '',
            domain: '',
            subDomain: '',
            distributionSource: '',
            isAgeChecked: false,
            title: '',

            script: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const _data = {...values, file: file}
            console.log('submit------', _data);
        },
    });

    return (
        <div className='w-full flex justify-center script-form'>
            <ThemeProvider theme={theme}>
                <div className='bg-white-gray-45 w-[885px]'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='px-[53px] py-[24px]'>
                            <DistributionSource formik={formik} />
                            <Domain formik={formik} />
                            <SourceReference getFile={getFile} formik={formik} />
                            <TitleDescription formik={formik} />

                        </div>

                        <div className='flex justify-end px-5 py-[28px] bg-white'>
                            <ActionButton />
                        </div>

                    </form>

                </div>
            </ThemeProvider>
        </div>
    );
};


export default ScriptForms;