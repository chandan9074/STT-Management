import { useContext, useState } from 'react';
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
import { ScriptContext } from '../../../../context/ScriptProvider';

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

    const scriptContext = useContext(ScriptContext);
    const { createScript } = scriptContext;
    // const {ScriptContext}

    const [file, setFile] = useState<any>([]);


    const formik = useFormik({
        initialValues: {
            sourceurl: '',
            module: 'STT',
            sourceType: '',
            domain: '',
            subDomain: '',
            distributionSource: distributionList[0],
            isAge: false,
            title: '',
            description: '',
            file: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // const _data = { ...values}
            console.log('submit------', values);
            createScript(values);

            console.log('file---------------************', formik.values.file);
            const valuess = Array.from(formik.values.file);
            for (const value of valuess) {
                console.log('file---------------************', value);
            }

        },
    });

    const getFile = (file: any) => {
        let formData = new FormData();
        formData.append('file', file)
        setFile(formData);
        formik.setFieldValue("file",  formData);
    }


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