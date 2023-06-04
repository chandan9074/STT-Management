import { Grid, TextField } from '@mui/material';
import { FormikValues } from 'formik';
import { homeDistrict, lastDegreeAchived } from '../../../../data/userManagement/UserManagementData';
import HomeDistrictSelect from '../../../Form/HomeDistrictSelect';
import { useState } from 'react';
import CustomSelect from '../../../CustomSelect';


const PersonalInformation = ({ formik }: { formik: FormikValues }) => {

    const [focus, setFocus] = useState("")

    return (
        // <div className='disableAutocompleteColor'>
        <div >
            {/* <div className={`${!isHomeDistrict && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setIsHomeDistrict(false)}></div> */}
            <Grid container spacing={3}>
                {/* Primary Role */}
                <Grid item xs={6}>
                    {/* <div className={`${formik.values.role.length === 0 && 'disableAutocompleteColor'} mt-4`}>
                        <Autocomplete
                            classes={{ option: classes.option }}
                            disableClearable
                            placeholder='Choose one'
                            id="primaryRole"
                            style={{ width: '100%' }}
                            options={formik.values.role}
                            value={formik.values.primaryRole}
                            // value={formik.values.role || scriptrole[0]}
                            // defaultValue={formik.values.role}

                            disabled={formik.values.role.length === 0}
                            // className={`${formik.values.length === 0 && 'disableAutocompleteColor'}`}
                            // className='disableAutocompleteColor'

                            onChange={(event, value) => {
                                if (typeof value === 'string') {

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
                                    placeholder='Choose one'
                                    {...params}
                                    name="primaryRole"
                                    error={formik.touched.primaryRole && Boolean(formik.errors.primaryRole)}
                                    helperText={formik.touched.primaryRole && formik.errors.primaryRole}

                                    // Meem have to do
                                    // InputProps={{
                                    //     style: {
                                    //         color: '#464E5F',
                                    //         fontWeight: '600',
                                    //         fontSize: '15px',
                                    //         caretColor: '#136EE5',
                                    //         border: selectedFieldOutline === 'primaryRole' ? '1px solid #136EE5' : '1px solid transparent'
                                    //     }
                                    // }}
                                    variant="outlined"
                                    onFocus={() => setSelectedFieldOutline("primaryRole")}
                                    onBlur={() => setSelectedFieldOutline("")}

                                    label={<h1 className='comboBoxLabel'>Select Primary Role <span className='text-[red]'>*</span></h1>}

                                />
                            )}
                        />
                    </div> */}

                    <CustomSelect.RoleSelect
                        data={formik.values.role}
                        fieldLabel='Select Primary Role'
                        name='primaryRole'
                        formik={formik}
                    />

                </Grid>
                <Grid item xs={6}>

                </Grid>

                {/* Name */}
                <Grid item xs={6}>
                    <div className=''>
                        <TextField
                            id="name"
                            name="name"
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "name" ? "" : "mt-[3px]"}`} ><span className={`${focus === "name" ? "font-medium" : "text-[14px] font-semibold"}`}>Name <span className='text-[red]'>*</span></span></div>}
                            onFocus={() => setFocus("name")}
                            onBlur={() => setFocus("")}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'name' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("name")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        // classes={{
                        //     option: classes.focused,
                        // }}
                        // classes={{ option: classes.option }}
                        // className={formik.touched.name && formik.errors.name ? "focused" : ""}
                        />
                    </div>
                </Grid>
                <Grid item xs={6}></Grid>

                {/* Email */}
                <Grid item xs={6}>
                    <div className=''>
                        <TextField
                            id="email"
                            name="email"
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "email" ? "" : "mt-[3px]"}`} ><span className={`${focus === "email" ? "font-medium" : "text-[14px] font-semibold"}`}>Email <span className='text-[red]'>*</span></span></div>}
                            onFocus={() => setFocus("email")}
                            onBlur={() => setFocus("")}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'email' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("email")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        />
                    </div>
                </Grid>

                {/* Mobile Nujmber */}
                <Grid item xs={6}>
                    <div className=''>
                        <TextField
                            id="mobileNumber"
                            name="mobileNumber"
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "mobileNumber" ? "" : "mt-[3px]"}`} ><span className={`${focus === "mobileNumber" ? "font-medium" : "text-[14px] font-semibold"}`}>Mobile Number <span className='text-[red]'>*</span></span></div>}
                            onFocus={() => setFocus("mobileNumber")}
                            onBlur={() => setFocus("")}
                            value={formik.values.mobileNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                            helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'mobileNumber' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("mobileNumber")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        />
                    </div>
                </Grid>


                {/* NID */}

            </Grid>

            <div >
                <Grid container>
                    <Grid item xs={6.2}>
                        <div className='flex mt-6'>
                            <TextField
                                id="nid"
                                name="nid"
                                size='small'
                                sx={{
                                    '&:hover fieldset': {
                                        borderColor: 'rgb(19, 110, 229) !important',
                                    },
                                }}
                                label={<div className={`${focus === "nid" ? "" : "mt-[3px]"}`} ><span className={`${focus === "nid" ? "font-medium" : "text-[14px] font-semibold"}`}>NID <span className='text-[red]'>*</span></span></div>}
                                onFocus={() => setFocus("nid")}
                                onBlur={() => setFocus("")}
                                value={formik.values.nid}
                                onChange={formik.handleChange}
                                style={{ width: '100%' }}
                                InputProps={{
                                    style: {
                                        color: '#464E5F',
                                        fontWeight: '600',
                                        fontSize: '15px',
                                        caretColor: '#136EE5',
                                        // border: selectedFieldOutline === 'nid' ? '1px solid #136EE5' : '1px solid transparent'
                                    }
                                }}
                                variant="outlined"
                            // onFocus={() => setSelectedFieldOutline("nid")}
                            // onBlur={() => setSelectedFieldOutline("")}
                            />
                            <div className='w-[28px] text-small text-blue-gray-75 font-medium flex justify-center items-center'>or</div>
                        </div>
                    </Grid>

                    <Grid item xs={5.8}>
                        <div className='mt-6'>
                            <TextField
                                id="birthRegNumber"
                                name="birthRegNumber"
                                size='small'
                                sx={{
                                    '&:hover fieldset': {
                                        borderColor: 'rgb(19, 110, 229) !important',
                                    },
                                }}
                                label={<div className={`${focus === "birthRegNumber" ? "" : "mt-[3px]"}`} ><span className={`${focus === "birthRegNumber" ? "font-medium" : "text-[14px] font-semibold"}`}>Birth Registration Number </span></div>}
                                onFocus={() => setFocus("birthRegNumber")}
                                onBlur={() => setFocus("")}
                                value={formik.values.birthRegNumber}
                                onChange={formik.handleChange}
                                style={{ width: '100%' }}
                                InputProps={{
                                    style: {
                                        color: '#464E5F',
                                        fontWeight: '600',
                                        fontSize: '15px',
                                        caretColor: '#136EE5',
                                        // border: selectedFieldOutline === 'birthRegNumber' ? '1px solid #136EE5' : '1px solid transparent'
                                    }
                                }}
                                variant="outlined"
                            // onFocus={() => setSelectedFieldOutline("birthRegNumber")}
                            // onBlur={() => setSelectedFieldOutline("")}
                            />
                        </div>
                    </Grid>

                </Grid>
            </div>

            <Grid container spacing={3.5}>
                {/* Home District */}
                <Grid item xs={6}>
                    <div className='mt-6'>
                        <HomeDistrictSelect
                            required={true}
                            formikValues={formik.values.district}
                            data={homeDistrict}
                            formikError={formik.errors.district}
                            formikTouched={formik.touched.district}
                            formik={formik}
                            name={'district'}
                            fieldLabel='Home District'
                        />
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className='mt-6'>
                        <HomeDistrictSelect
                            required={true}
                            formikValues={formik.values.presentDistrict}
                            data={homeDistrict}
                            formikError={formik.errors.presentDistrict}
                            formikTouched={formik.touched.presentDistrict}
                            formik={formik}
                            name={'presentDistrict'}
                            fieldLabel='Present District'
                        />
                    </div>

                </Grid>



                <Grid item xs={6}>
                    {/* <div className={`border ${selectedFieldOutline === 'lastDegreeAchived' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                        <Autocomplete
                            classes={{ option: classes.option }}
                            disableClearable
                            placeholder='Choose one'
                            id="lastDegreeAchived"
                            style={{
                                width: '100%',
                            }}
                            options={lastDegreeAchived}
                            value={formik.values.lastDegreeAchived}
                            onChange={(event, value) => {
                                if (typeof value === 'string') {

                                    formik.setFieldValue('lastDegreeAchived', value)
                                } else {
                                    formik.setFieldValue('lastDegreeAchived', '')
                                }
                            }}

                            renderInput={(params) => (

                                <TextField
                                    placeholder='Choose one'
                                    {...params}
                                    name="lastDegreeAchived"
                                    error={formik.touched.lastDegreeAchived && Boolean(formik.errors.lastDegreeAchived)}
                                    helperText={formik.touched.lastDegreeAchived && formik.errors.lastDegreeAchived}

                                    label={<h1 className='comboBoxLabel'>Last Degree Achieved <span className='text-[red]'>*</span></h1>}
                                    // InputProps={{
                                    //     style: {
                                    //         color: '#464E5F',
                                    //         fontWeight: '600',
                                    //         fontSize: '15px',
                                    //         caretColor: '#136EE5',
                                    //         border: selectedFieldOutline === 'lastDegreeAchived' ? '1px solid #136EE5' : '1px solid transparent'
                                    //     }
                                    // }}
                                    variant="outlined"
                                    onFocus={() => setSelectedFieldOutline("lastDegreeAchived")}
                                    onBlur={() => setSelectedFieldOutline("")}
                                />
                            )}
                        />
                    </div> */}
                    <CustomSelect.Type1
                        data={lastDegreeAchived}
                        fieldLabel='Last Degree Achieved'
                        name='lastDegreeAchived'
                        formik={formik}
                        optionWidth='w-[380px]'
                    />
                </Grid>

                <Grid item xs={6}>
                    <div className=''>
                        <TextField
                            id="subjectInStudy"
                            name="subjectInStudy"
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "subjectInStudy" ? "" : "mt-[3px]"}`} ><span className={`${focus === "subjectInStudy" ? "font-medium" : "text-[14px] font-semibold"}`}>Subject in Study </span></div>}
                            onFocus={() => setFocus("subjectInStudy")}
                            onBlur={() => setFocus("")}
                            value={formik.values.subjectInStudy}
                            onChange={formik.handleChange}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'subjectInStudy' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("subjectInStudy")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        />
                    </div>
                </Grid>

            </Grid>


        </div >
    );
};

export default PersonalInformation;