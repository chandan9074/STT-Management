import { Autocomplete, Box, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { homeDistrict } from '../../../../data/userManagement/UserManagementData';
import Image from '../../../Image';


const PersonalInformation = ({ formik }: { formik: any }) => {
    const [selectedDivision, setSelectedDivision] = useState<any>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<any>(null);

    const handleDivisionChange = (event: any, newDivision: any) => {
        setSelectedDivision(newDivision);
    };

    const handleDistrictChange = (event: any, newDistrict: any) => {
        setSelectedDistrict(newDistrict);
    };

    return (
        <div>
            <Grid container spacing={5}>
                {/* Primary Role */}
                <Grid item xs={6}>
                    <Autocomplete
                        id="primaryRole"
                        style={{ width: '100%' }}
                        options={formik.values.role}
                        value={formik.values.primaryRole}
                        // value={formik.values.role || scriptrole[0]}
                        // defaultValue={formik.values.role}

                        onChange={(event, value) => {
                            if (typeof value === 'string') {
                                console.log('event', value);

                                formik.setFieldValue('primaryRole', value)
                            } else {
                                formik.setFieldValue('primaryRole', '')
                            }
                        }}

                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>

                                <Image.RoleImage role={option} />
                                {option}
                            </Box>
                        )}

                        renderInput={(params) => (

                            <TextField
                                {...params}
                                name="primaryRole"
                                error={formik.touched.primaryRole && Boolean(formik.errors.primaryRole)}
                                helperText={formik.touched.primaryRole && formik.errors.primaryRole}

                                label={<span className='comboBoxLabel'>Primary Role <span className='text-[red]'>*</span></span>}

                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>

                </Grid>

                {/* Name */}
                <Grid item xs={6}>
                    <TextField
                        id="name"
                        name="name"
                        label={<div>Name <span className='text-[red]'>*</span></div>}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        style={{ width: '100%' }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px'
                            }
                        }}
                        variant="outlined" />
                </Grid>
                <Grid item xs={6}></Grid>

                {/* Email */}
                <Grid item xs={6}>
                    <TextField
                        id="email"
                        name="email"
                        label={<div>Email <span className='text-[red]'>*</span></div>}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        style={{ width: '100%' }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px'
                            }
                        }}
                        variant="outlined" />
                </Grid>

                {/* Mobile Nujmber */}
                <Grid item xs={6}>
                    <TextField
                        id="mobileNumber"
                        name="mobileNumber"
                        label={<div>Mobile Number <span className='text-[red]'>*</span></div>}
                        value={formik.values.mobileNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                        helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                        style={{ width: '100%' }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px'
                            }
                        }}
                        variant="outlined" />
                </Grid>


                {/* NID */}

            </Grid>

            <div className='py-[40px]'>
                <Grid container>
                    <Grid item xs={6.20}>
                        <div className='flex'>
                            <TextField
                                id="nid"
                                name="nid"
                                label={<div>Nid <span className='text-[red]'>*</span></div>}
                                value={formik.values.nid}
                                onChange={formik.handleChange}
                                error={formik.touched.nid && Boolean(formik.errors.nid)}
                                helperText={formik.touched.nid && formik.errors.nid}
                                style={{ width: '100%', paddingRight: '9px' }}
                                InputProps={{
                                    style: {
                                        color: '#464E5F',
                                        fontWeight: '600',
                                        fontSize: '15px'
                                    }
                                }}
                                variant="outlined" />
                            <div className='w-[28px] text-[14px] text-blue-gray-75 font-medium flex justify-center items-center'>or</div>
                        </div>
                    </Grid>

                    <Grid item xs={5.8}>
                        <TextField
                            id="birthRegNumber"
                            name="birthRegNumber"
                            label={<div>Birth Registration Number <span className='text-[red]'>*</span></div>}
                            value={formik.values.birthRegNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.birthRegNumber && Boolean(formik.errors.birthRegNumber)}
                            helperText={formik.touched.birthRegNumber && formik.errors.birthRegNumber}
                            style={{ width: '100%', paddingLeft: '7px' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px'
                                }
                            }}
                            variant="outlined" />
                    </Grid>

                </Grid>
            </div>

            <Grid container spacing={5}>
                {/* Home District */}
                <Grid item xs={6}>
                    <Autocomplete
                        id="homeDistrict"
                        style={{ width: '100%' }}

                        options={homeDistrict}

                        // groupBy={(option) => option?.division}
                        // getOptionLabel={(option) => option?.district}

                        value={formik.values.homeDistrict}
                        onChange={(event, value) => {
                            if (typeof value === 'string') {
                                console.log('event', value);

                                formik.setFieldValue('homeDistrict', value)
                            } else {
                                formik.setFieldValue('homeDistrict', '')
                            }
                        }}

                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                {option.district}
                            </Box>
                        )}

                        renderInput={(params) => (
                            <TextField
                                {...params}
                                name="homeDistrict"
                                error={formik.touched.homeDistrict && Boolean(formik.errors.homeDistrict)}
                                helperText={formik.touched.homeDistrict && formik.errors.homeDistrict}
                                label={<span className='comboBoxLabel'>Home District <span className='text-[red]'>*</span></span>}

                            />
                        )}
                    />
                </Grid>

            </Grid>

        </div >
    );
};

export default PersonalInformation;