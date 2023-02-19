import { useContext, useEffect } from 'react';
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

const ScriptForms = ({ data }: { data?: allScriptResDT }) => {

    const scriptContext = useContext(ScriptContext);
    const { createScript, updateScript, scriptModule, setScriptModule } = scriptContext;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            sourceUrl: data?.sourceUrl || '',
            // module: data?.module || 'STT',
            module: scriptModule || 'STT',
            sourceType: data?.sourceType || '',
            domain: data?.domain || '',
            subdomain: data?.subdomain || '',
            distributionSource: data?.distributionSource || distributionList[0],
            isAge: data?.isAge || false,
            title: data?.title || '',
            description: data?.description || '',
            sourceFile: data?.sourceFile || '',
            sourceFileName: data?.sourceFileName || ''
        },
        validationSchema: validationSchema,

        // onSubmit: (values) => {
        //     console.log('on submit');

        //     let formData = new FormData();

        //     // Keep track of whether any values have changed
        //     let hasChanges = false;

        //     // Loop through the values object
        //     for (const [key, value] of Object.entries(values)) {
        //       // Check if the value has changed from the initial data
        //       if (value !== data?.[key as keyof allScriptResDT]) {
        //         // Convert boolean values to strings
        //         const valueToAppend = typeof value === 'boolean' ? value.toString() : value;
        //         formData.append(key, valueToAppend);
        //         hasChanges = true;
        //       }
        //     }

        //     // If no changes have been made, exit the function
        //     if (!hasChanges) {
        //       return;
        //     }

        //     // Add the id to the formData object if data exists
        //     if (data) {
        //       formData.append('id', data.id);
        //       const res = updateScript(formData);
        //     } else {
        //       const res = createScript(formData);
        //     }
        //   },

        onSubmit: (values: allScriptResDT) => {

            
            if (scriptModule === 'TTS') {
                delete values.distributionSource;
                delete values.isAge;
            }



            let formData = new FormData();

            // Append the module field to the formData object
            formData.append('module', values.module);

            // Check if any field values have changed
            let hasChanges = false;
            for (const [key, value] of Object.entries(values)) {
                // Check if the value has changed from the initial data
                if (value !== data?.[key as keyof allScriptResDT]) {
                    hasChanges = true;
                    // Convert boolean values to strings
                    const valueToAppend = typeof value === 'boolean' ? value.toString() : value;
                    formData.append(key, valueToAppend);
                }
            }

            // If no values have changed, add only the module field to the formData object
            if (!hasChanges) {
                const module = values.module;
                formData = new FormData();
                formData.append('module', module);
            }

            // Add the id to the formData object if data exists
            if (data && data.id) {
                formData.append('id', data.id);
                const res = updateScript(formData);
            } else {
                const res = createScript(formData);
            }

            
        }
    });

    useEffect(() => {
        setScriptModule(formik.values.module)
    }, [formik.values.module]);

    return (
        <div className='w-full flex justify-center script-form'>
            <ThemeProvider theme={theme}>
                <div className='bg-white-gray-45 w-[885px]'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='px-[53px] py-[24px]'>

                            <DistributionSource formik={formik} />
                            <Domain formik={formik} />
                            <SourceReference formik={formik} />
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