import { Autocomplete, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Typography, Upload } from 'antd';
import { useContext, useState } from 'react';
import Icons from '../../../../assets/Icons';
import { reportingRoleData } from '../../../../data/userManagement/UserManagementData';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Image from '../../../Image';
import { FormikValues } from 'formik';
import { customMuiListStyle, urlPatternValidation } from '../../../../helpers/Utils';
import { UserManagementContext } from '../../../../context/UserManagementProvider';
import CustomSelect from '../../../CustomSelect';

type Props = {
    getFile: (file: File | null) => void,
    formik: FormikValues,
}

const FileReport = ({ getFile, formik }: Props) => {
    const classes = customMuiListStyle();

    const [file, setFile] = useState<File | null>(null);

    const { newRoleList, selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);

    const handleFileUpload = (event: any) => {
        if (event.fileList?.length !== 0) {
            // let files = event.fileList || event.file || event.target.files;
            let files = event.fileList[0];
            setFile(files);
            // getFile(event.fileList[0]?.originFileObj);

            formik.setFieldValue("cvFile", event.fileList[0]?.originFileObj);
        } else {
            // setFile([]);
            setFile(null);
            // getFile([]);
            getFile(null);
        }
    }

    const onDeleteFile = () => {
        // formik.setFieldValue("sourceFile", []);
        formik.setFieldValue("cvFile", []);
        setFile(null);
        // getFile([]);
        getFile(null);
    }

    return (
        <div>
            <div className='flex gap-x-[16px] items-center'>
                <h1 className='text-blue-gray-75 text-small font-medium'>Attach CV  <span className='text-[red]'>*</span></h1>
                {/* file?.length === 0 ? 'file-upload2' :  */}
                {
                    (formik.values.cvFile?.length !== 0) ?
                        <div className='rounded-[4px] pt-[8px] pb-4 px-4 bg-ct-blue-05'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-x-[11px] items-center'>
                                    <img src={Icons.Pdf} alt="" />
                                    <a href={urlPatternValidation(formik.values.cvFile) && formik.values.cvFile} rel="noreferrer" target="_blank" className='cursor-pointer'>
                                        <div >
                                            {
                                                typeof (formik.values.cvFile) !== 'string' ?
                                                    formik.values.cvFile.name
                                                    :
                                                    formik.values.cvFileName
                                                // (formik.values.cvFileName && formik.values.cvFileName !== '') ? formik.values.cvFileName : formik.values.cvFile.name  
                                            }
                                        </div>
                                    </a>
                                </div>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    onDeleteFile();
                                }}>
                                    <img className='w-[13px] h-[14px] ml-4' src={Icons.deleteIcon} alt="" />
                                </button>
                            </div>
                        </div>
                        :
                        <div className={`${file === null ? 'file-upload2' : 'file-upload-hidden2 bg-ct-blue-05 px-[18px] py-[5px] rounded-[4px]'} `}>
                            {/* <Upload */}
                            <Upload
                                accept='.doc, .pdf'
                                onChange={(event) => {
                                    handleFileUpload(event);
                                    return false;
                                }}
                            //  {...props}
                            >
                                <button
                                    onClick={(event) => {
                                        event.preventDefault(); // Prevents the default click behavior of the button
                                    }}
                                    className={` flex items-center gap-x-[5px] pl-[16px] pr-6 py-2 border-[1px] border-ct-blue-30 rounded-[6px] bg-white hover:bg-ct-blue-10 active:bg-ct-blue-30 transition ease-out duration-300`}>
                                    <img className='w-[20px] h-[20px]' src={Icons.upload} alt='' />
                                    <h1 className='text-ct-blue-80 text-small font-medium leading-[17px]'> Attach</h1>
                                </button>
                            </Upload>
                        </div>
                }


                {
                    // file?.length === 0 &&
                    (file === null && formik.values.cvFile?.length === 0) &&
                    <h2 className='text-blue-gray-75 text-small'>Format: .doc, .pdf</h2>
                }

                <div>

                </div>

            </div>

            {formik.touched.cvFile && formik.errors.cvFile ? (
                <div className='text-red-600 text-xxs mt-[5px] ml-[10px]'>{formik.errors.cvFile}</div>
            ) : null}


            {/* Reporting To */}
            <div>
                <h1 className='text-ct-blue-60 text-small font-semibold mt-[57px] mb-[28px]'>Reporting</h1>
                <div className='custom-radio-button'>
                    <FormControl>
                        <FormLabel
                            style={{
                                color: '#5F6B7D',
                                fontWeight: '600',
                                fontSize: '14px',
                                marginBottom: '13px'
                            }}

                        >
                            Reporting To
                        </FormLabel>
                        <RadioGroup
                            row
                            name="reportingTo"
                            value={formik.values.reportingTo}
                            onChange={formik.handleChange}
                            onBlur={() => formik.setFieldTouched("reportingTo", true)}
                        // defaultValue='Read'
                        >
                            {
                                reportingRoleData?.map((value, i) => (
                                    <FormControlLabel
                                        style={{
                                            color: `${formik.values.reportingTo === value ? '#136EE5' : '#5F6B7D'} `,
                                            // fontSize: '5px',
                                            marginRight: '22px',
                                            fontWeight: '800'
                                        }}
                                        className={`${formik.values.reportingTo === value && 'ml-[4px] pr-[12px] bg-blue-50 rounded-[30px] border-[1px] border-[#136EE5]'}`}
                                        key={i}
                                        value={value}
                                        control={<Radio
                                            style={{ fontWeight: '800', fontSize: '17px' }}
                                            size='small'
                                        />}
                                        // label={value }
                                        label={<span
                                            style={
                                                {
                                                    fontWeight: formik.values.reportingTo === value ? '600' : '',
                                                    fontSize: '14px',
                                                }}
                                        >{value}</span>}
                                    />
                                ))
                            }
                        </RadioGroup>
                        {formik.touched.reportingTo && formik.errors.reportingTo ? (
                            <div className='text-red-600 text-xxs'>{formik.errors.reportingTo}</div>
                        ) : null}
                    </FormControl>
                </div>
            </div>

            <Grid container spacing={5}>
                <Grid item xs={6}>
                    {/* <div className={`border ${selectedFieldOutline === 'adminData' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px] mt-[60px]`}>
                        <Autocomplete
                            classes={{ option: classes.option }}
                            disableClearable
                            placeholder='Choose one'
                            id="adminData"
                            style={{ width: '100%' }}
                            options={newRoleList}
                            value={formik.values.adminData}
                            onChange={(event, value) => {
                                formik.setFieldValue('adminID', value.id);
                                formik.setFieldValue('adminData', value);
                            }}

                            getOptionLabel={(option) => {
                                if (!option) return '';
                                return `${option.id !== '' ? (option.id + ' - ' + option.name) : ''}`;
                            }}


                            renderOption={(props, option) => (
                                <Box key={option.id} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <Image.RoleImage role='Admin' /> <Typography>{`${option.id} - ${option.name}`}</Typography>
                                </Box>
                            )}


                            renderInput={(params) => (

                                <TextField
                                    placeholder='Choose one'
                                    {...params}
                                    name="adminData"
                                    error={formik.touched.adminData && Boolean(formik.errors.adminData)}
                                    helperText={formik.touched.adminData && formik.errors.adminData}
                                    label={<h1 className='comboBoxLabel'>Select Admin <span className='text-[red]'>*</span></h1>}
                                    // InputProps={{
                                    //     style: {
                                    //         color: '#464E5F',
                                    //         fontWeight: '600',
                                    //         fontSize: '15px',
                                    //         caretColor: '#136EE5',
                                    //         border: selectedFieldOutline === 'adminData' ? '1px solid #136EE5' : '1px solid transparent'
                                    //     }
                                    // }}
                                    variant="outlined"
                                    onFocus={() => setSelectedFieldOutline("adminData")}
                                    onBlur={() => setSelectedFieldOutline("")}
                                />
                            )}
                        />
                    </div> */}
                    <div className='mt-7'>
                        <CustomSelect.RoleSelect
                            data={formik.values.role}
                            fieldLabel='Select Admin'
                            name='selectAdmin'
                            formik={formik}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default FileReport;