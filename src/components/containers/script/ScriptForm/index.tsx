import { useState } from 'react';
import DistributionSource from './DistributionSource';
import Domain from './Domain';
import SourceReference from './SourceReference';
import TitleDescription from './TitleDescription';


import ActionButton from './ActionButton';
import './ScriptForm.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { distributionList } from '../../../../data/Script/Domain';

const theme = createTheme({

    components: {
        MuiFormLabel: {
            styleOverrides: {
                asterisk: { color: "red" },
            },
        },
    },

})


const validationSchema = yup.object({
    sourceType: yup.string().required('Source Type is required'),
    domain: yup.string().required('Domain is required'),
    subDomain: yup.string().required('Sub domain is required'),
    distributionSource: yup.string().required('Distribution Source is required'),

});

const ScriptForms = () => {

    const [file, setFile] = useState<any>([]);

    const getFile = (file: any) => {
        let formData = new FormData();
        formData.append('file', file)
        setFile(formData);
    }    

    const formik = useFormik({
        initialValues: {
            sourceurl: '',
            dataType: 'STT',
            sourceType: '',
            domain: distributionList && distributionList[0] ,
            subDomain: '',
            distributionSource: '',
            isChild: false,
            title: '',
            script: '',
            file: file ? file : ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const _data = { ...values, file: file }
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