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
import { allScriptResDT } from '../../../../types/script';

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
    subdomain: yup.string().required('Sub domain is required'),
    distributionSource: yup.string().required('Distribution Source is required'),

});

const ScriptForms = ({data}: {data?: allScriptResDT}) => {

    const scriptContext = useContext(ScriptContext);
    const { createScript } = scriptContext;
    // const {ScriptContext}

    console.log('get data by id', data);
    

    const [file, setFile] = useState<any>([]);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            sourceUrl: data?.sourceUrl || '',
            module: data?.module || 'STT',
            sourceType: data?.sourceType || '',
            domain: data?.domain || '',
            subdomain: data?.subDomain || '',
            distributionSource: data?.distributionSource || distributionList[0],
            isAge: data?.isAge || false,
            title: data?.title || '',
            description: data?.description || '',
            sourceFile: data?.sourceFile || '',
            sourceFileName: data?.sourceFileName || ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // const _data = { ...values}
            let formData = new FormData();
            formData.append('sourceUrl', values.sourceUrl);
            formData.append('module', values.module);
            formData.append('sourceType', values.sourceType);
            formData.append('domain', values.domain);
            formData.append('subdomain', values.subdomain);
            formData.append('distributionSource', values.distributionSource);
            formData.append('isAge', values.isAge.toString());
            formData.append('title', values.title);
            formData.append('description', values.description);
            formData.append('sourceFile', values.sourceFile);
            console.log('submit------', values);
           const res = createScript(formData);
           console.log('********res', res);
           
        },
    });

    const getFile = (file: any) => {
        // let formData = new FormData();
        // formData.append('file', file)
        setFile(file);
        formik.setFieldValue("sourceFile", file);
    }

    // const getFile = (file: any) => {
        // let formData = new FormData();
        // formData.append('file', file)
    //     setFile(formData);
    //     formik.setFieldValue("sourceFile",  formData);
    // }


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