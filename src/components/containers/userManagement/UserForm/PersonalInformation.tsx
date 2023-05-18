import { Autocomplete, Box, Grid, TextField } from '@mui/material';
import { FormikValues } from 'formik';
import { homeDistrict, lastDegreeAchived } from '../../../../data/userManagement/UserManagementData';
import HomeDistrictSelect from '../../../Form/HomeDistrictSelect';
import Image from '../../../Image';
import { customMuiListStyle } from '../../../../helpers/Utils';
import { useContext } from 'react';
import { UserManagementContext } from '../../../../context/UserManagementProvider';


const PersonalInformation = ({ formik }: { formik: FormikValues }) => {
    const classes = customMuiListStyle();

    const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);

    console.log('*************************', formik.values.role);


    return (
        // <div className='disableAutocompleteColor'>
        <div >
            {/* <div className={`${!isHomeDistrict && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setIsHomeDistrict(false)}></div> */}
            <Grid container spacing={3}>
                {/* Primary Role */}
                <Grid item xs={6}>
                    <div className={`${formik.values.role.length === 0 && 'disableAutocompleteColor'} mt-4`}>
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
                    </div>
                </Grid>
                <Grid item xs={6}>

                </Grid>

                {/* Name */}
                <Grid item xs={6}>
                    <div className=''>
                        <TextField
                            id="name"
                            name="name"
                            label={<h1 className='comboBoxLabel'>Name <span className='text-[red]'>*</span></h1>}
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
                                    border: selectedFieldOutline === 'name' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                            onFocus={() => setSelectedFieldOutline("name")}
                            onBlur={() => setSelectedFieldOutline("")}
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
                            label={<h1 className='comboBoxLabel'>Email <span className='text-[red]'>*</span></h1>}
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
                                    border: selectedFieldOutline === 'email' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                            onFocus={() => setSelectedFieldOutline("email")}
                            onBlur={() => setSelectedFieldOutline("")}
                        />
                    </div>
                </Grid>

                {/* Mobile Nujmber */}
                <Grid item xs={6}>
                    <div className=''>
                        <TextField
                            id="mobileNumber"
                            name="mobileNumber"
                            label={<h1 className='comboBoxLabel'>Mobile Number <span className='text-[red]'>*</span></h1>}
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
                                    border: selectedFieldOutline === 'mobileNumber' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                            onFocus={() => setSelectedFieldOutline("mobileNumber")}
                            onBlur={() => setSelectedFieldOutline("")}
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
                                label={<h1 className='comboBoxLabel'>Nid <span className='text-[red]'></span></h1>}
                                value={formik.values.nid}
                                onChange={formik.handleChange}
                                style={{ width: '100%' }}
                                InputProps={{
                                    style: {
                                        color: '#464E5F',
                                        fontWeight: '600',
                                        fontSize: '15px',
                                        caretColor: '#136EE5',
                                        border: selectedFieldOutline === 'nid' ? '1px solid #136EE5' : '1px solid transparent'
                                    }
                                }}
                                variant="outlined"
                                onFocus={() => setSelectedFieldOutline("nid")}
                                onBlur={() => setSelectedFieldOutline("")}
                            />
                            <div className='w-[28px] text-small text-blue-gray-75 font-medium flex justify-center items-center'>or</div>
                        </div>
                    </Grid>

                    <Grid item xs={5.8}>
                        <div className='mt-6'>
                            <TextField
                                id="birthRegNumber"
                                name="birthRegNumber"
                                label={<h1 className='comboBoxLabel'>Birth Registration Number <span className='text-[red]'></span></h1>}
                                value={formik.values.birthRegNumber}
                                onChange={formik.handleChange}
                                style={{ width: '100%' }}
                                InputProps={{
                                    style: {
                                        color: '#464E5F',
                                        fontWeight: '600',
                                        fontSize: '15px',
                                        caretColor: '#136EE5',
                                        border: selectedFieldOutline === 'birthRegNumber' ? '1px solid #136EE5' : '1px solid transparent'
                                    }
                                }}
                                variant="outlined"
                                onFocus={() => setSelectedFieldOutline("birthRegNumber")}
                                onBlur={() => setSelectedFieldOutline("")}
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
                            formikValues={formik.values.homeDistrict}
                            data={homeDistrict}
                            formikError={formik.errors.homeDistrict}
                            formikTouched={formik.touched.homeDistrict}
                            formik={formik}
                            name={'homeDistrict'}
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
                    <div className={`border ${selectedFieldOutline === 'lastDegreeAchived' ? 'border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
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
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className=''>
                        <TextField
                            id="subjectInStudy"
                            name="subjectInStudy"
                            label={<h1 className='comboBoxLabel'>Subject in study <span className='text-[red]'></span></h1>}
                            value={formik.values.subjectInStudy}
                            onChange={formik.handleChange}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    border: selectedFieldOutline === 'subjectInStudy' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                            onFocus={() => setSelectedFieldOutline("subjectInStudy")}
                            onBlur={() => setSelectedFieldOutline("")}
                        />
                    </div>
                </Grid>

            </Grid>


        </div >
    );
};

export default PersonalInformation;