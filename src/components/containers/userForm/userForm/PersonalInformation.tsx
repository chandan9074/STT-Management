import { Autocomplete, Box, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { homeDistrict } from '../../../../data/userManagement/UserManagementData';
import { homeDistrictSearch } from '../../../../helpers/Utils';
import HomeDistrictSelect from '../../../Form/HomeDistrictSelect';
import Image from '../../../Image';


const PersonalInformation = ({ formik }: { formik: any }) => {
    const [isHomeDistrict, setIsHomeDistrict] = useState<boolean>(false);
    const [onTextField, setOnTextField] = useState<string>(formik.values.homeDistrict)
    const [divisionChangeName, setDivisionChangeName] = useState<string>('');

    const [filteredDistrict, setFilteredDistrict] = useState<any>(homeDistrict);

    const handleSearch = (event: any) => {
        const _data = homeDistrictSearch(event.target.value, homeDistrict);
        setFilteredDistrict(_data)
    }

    const onHomeDistrictFocus = () => {
        setIsHomeDistrict(true)
    }

    const onHomeDistrictValue = (value: string) => {
        setOnTextField(value);
    }




    return (
        <div>
            <div className={`${!isHomeDistrict && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setIsHomeDistrict(false)}></div>
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

                    <div className='relative z-[100]'>

                        <TextField
                            onMouseDown={onHomeDistrictFocus}
                            id="homeDistrict"
                            name="homeDistrict"
                            label={<div>Home District <span className='text-[red]'>*</span></div>}
                            value={onTextField || ''}
                            onChange={(e) => {
                                handleSearch(e);
                                setOnTextField(e.target.value);
                            }}
                            error={formik.touched.homeDistrict && Boolean(formik.errors.homeDistrict)}
                            helperText={formik.touched.homeDistrict && formik.errors.homeDistrict}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px'
                                }
                            }}
                            variant="outlined"
                        />

                        {
                            isHomeDistrict &&
                            <div className='absolute w-full '>
                                <HomeDistrictSelect
                                    filteredDistrict={filteredDistrict}
                                    formik={formik}
                                    onHomeDistrictValue={onHomeDistrictValue}
                                />
                            </div>
                        }

                    </div>
                </Grid>

            </Grid>




        </div >
    );
};

export default PersonalInformation;