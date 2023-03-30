import { Divider, TextareaAutosize, TextField } from '@mui/material';
import { FormikValues } from 'formik';
import './TitleDescription.css';

const TitleDescription = ({ formik }: { formik: FormikValues }) => {
    return (
        <div className='p-[16px] title-descrioption  rounded-[7px] bg-white border-[1px] border-blue-gray-30'>
            <div className='flex items-center'>
                <TextField
                    style={{
                        width: '100%',
                    }}
                    className='scriptCustomPlaceholder'
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    // label={<h1 className='text-blue-gray-A30 text-[18px] font-medium'>Title</h1>}
                    placeholder='Title'
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                    }}

                // variant="standard"
                />
                <h1 className='w-[107px] text-xs text-blue-gray-60'>{formik.values.description.length} characters</h1>
            </div>



            <Divider
                sx={{ bgcolor: "#E5E7EBd" }}
                style={{
                    marginTop: '10px',
                    marginBottom: '10px'
                }} />

            <TextareaAutosize
                id="description"
                name="description"
                value={formik.values.description}
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

            {formik.touched.domain && formik.errors.description ? (
                <div className='text-red-600 text-xxs'>{formik.errors.description}</div>
            ) : null}

        </div>
    );
};

export default TitleDescription;