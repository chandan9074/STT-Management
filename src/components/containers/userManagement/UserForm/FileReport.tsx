import { Autocomplete, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Typography, Upload } from 'antd';
import { useState } from 'react';
import Icons from '../../../../assets/Icons';
import { adminData, reportingRoleData } from '../../../../data/userManagement/UserManagementData';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Image from '../../../Image';
import { FormikValues } from 'formik';
import { customMuiListStyle } from '../../../../helpers/Utils';

const FileReport = ({ getFile, formik }: { getFile: (file: File | null) => void, formik: FormikValues }) => {
    // const [file, setFile] = useState<any>([]);
    const classes = customMuiListStyle();

    const [file, setFile] = useState<File | null>(null);


    // const handleFileUpload = (event: any) => {
    const handleFileUpload = (event: any) => {
        if (event.fileList?.length !== 0) {
            // let files = event.fileList || event.file || event.target.files;
            let files = event.fileList[0];
            setFile(files);
            getFile(event.fileList[0]?.originFileObj);
        } else {
            // setFile([]);
            setFile(null);
            // getFile([]);
            getFile(null);
        }
    }

    return (
        <div>
            <div className='flex gap-x-[16px] items-center'>
                <h1 className='text-blue-gray-75 text-small font-medium'>Attach CV  <span className='text-[red]'>*</span></h1>
                {/* file?.length === 0 ? 'file-upload2' :  */}
                <div className={`${file === null ? 'file-upload2' : 'file-upload-hidden2 bg-white px-[18px] py-[5px] border-[1px] border-dashed border-blue-gray-A20 rounded-[4px]'} `}>
                    <Upload
                        accept='.doc, .pdf'
                        onChange={(event) => handleFileUpload(event)}
                    //  {...props}
                    >
                        <button className={` flex gap-x-2 pl-[17px] pr-[24px] py-[8px] border-[1px] border-ct-blue-30 rounded-[6px] bg-white`}>
                            <img className='w-[20px] h-[20px]' src={Icons.upload} alt='' />
                            <h1 className='text-ct-blue-80 text-small font-medium'> Attach</h1>
                        </button>
                    </Upload>
                </div>

                {
                    // file?.length === 0 &&
                    file === null &&
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
                <div className='radio-style'>
                    <FormControl>
                        <FormLabel style={{
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
                                            style={{ fontWeight: '800' }}
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
                    <div className='mt-[60px]'>
                        <Autocomplete
                            classes={{ option: classes.option }}
                            disableClearable
                            placeholder='Choose one'
                            id="adminData"
                            style={{ width: '100%' }}
                            options={adminData}
                            value={formik.values.adminData}
                            onChange={(event, value) => {
                                formik.setFieldValue('adminData', value)
                            }}
                            getOptionLabel={(option) => {
                                if (!option) return '';
                                return `${option.number} - ${option.name}`;
                            }}


                            renderOption={(props, option) => (
                                <Box key={option.id} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <Image.RoleImage role='Admin' /> <Typography>{`${option.number} - ${option.name}`}</Typography>
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
                                />
                            )}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default FileReport;