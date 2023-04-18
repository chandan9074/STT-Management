import { Autocomplete, Box, Grid, TextField } from '@mui/material';
import { FormikValues } from 'formik';
import { homeDistrict, lastDegreeAchived } from '../../../../data/userManagement/UserManagementData';
import HomeDistrictSelect from '../../../Form/HomeDistrictSelect';
import Image from '../../../Image';


const PersonalInformation = ({ formik }: { formik: FormikValues }) => {

    return (
        // <div className='disableAutocompleteColor'>
        <div >
            {/* <div className={`${!isHomeDistrict && 'hidden'} bg-transparent fixed top-0 left-0 h-full w-full z-[90]`} onClick={() => setIsHomeDistrict(false)}></div> */}
            <Grid container spacing={5}>
                {/* Primary Role */}
                <Grid item xs={6}>
                    <div className={`${formik.values.role.length === 0 && 'disableAutocompleteColor'} mt-[34px]`}>
                        <Autocomplete
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
                                    // InputProps={{
                                    //     style: {
                                    //         height: '44px'
                                    //     }
                                    // }}

                                    label={<h1 className='comboBoxLabel'>Primary Role <span className='text-[red]'>*</span></h1>}

                                />
                            )}
                        />
                    </div>
                </Grid>
                <Grid item xs={6}>

                </Grid>

                {/* Name */}
                <Grid item xs={6}>
                    <div className='mt-[17px]'>
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
                                    fontSize: '15px'
                                }
                            }}
                            variant="outlined" />
                    </div>
                </Grid>
                <Grid item xs={6}></Grid>

                {/* Email */}
                <Grid item xs={6}>
                   <div className='mt-[17px]'>
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
                                fontSize: '15px'
                            }
                        }}
                        variant="outlined" />
                   </div>
                </Grid>

                {/* Mobile Nujmber */}
                <Grid item xs={6}>
                   <div className='mt-[17px]'>
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
                                fontSize: '15px'
                            }
                        }}
                        variant="outlined" />
                   </div>
                </Grid>


                {/* NID */}

            </Grid>

            <div >
                <Grid container>
                    <Grid item xs={6.20}>
                        <div className='flex mt-[17px]'>
                            <TextField
                                id="nid"
                                name="nid"
                                label={<h1 className='comboBoxLabel'>Nid <span className='text-[red]'></span></h1>}
                                value={formik.values.nid}
                                onChange={formik.handleChange}
                                style={{ width: '100%', paddingRight: '9px' }}
                                InputProps={{
                                    style: {
                                        color: '#464E5F',
                                        fontWeight: '600',
                                        fontSize: '15px'
                                    }
                                }}
                                variant="outlined" />
                            <div className='w-[28px] text-small text-blue-gray-75 font-medium flex justify-center items-center'>or</div>
                        </div>
                    </Grid>

                    <Grid item xs={5.8}>
                        <div className='mt-[17px]'>
                        <TextField
                            id="birthRegNumber"
                            name="birthRegNumber"
                            label={<h1 className='comboBoxLabel'>Birth Registration Number <span className='text-[red]'></span></h1>}
                            value={formik.values.birthRegNumber}
                            onChange={formik.handleChange}
                            style={{ width: '100%', paddingLeft: '7px' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px'
                                }
                            }}
                            variant="outlined" />
                        </div>
                    </Grid>

                </Grid>
            </div>

            <Grid container spacing={5}>
                {/* Home District */}
                <Grid item xs={6}>
                    <div className='mt-[60px]'>
                        <HomeDistrictSelect
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
                    <div className='mt-[60px]'>
                        <HomeDistrictSelect
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
                   <div className='mt-[17px]'>
                   <Autocomplete
                        disableClearable
                        placeholder='Choose one'
                        id="lastDegreeAchived"
                        style={{ width: '100%' }}
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

                            />
                        )}
                    />
                   </div>
                </Grid>

                <Grid item xs={6}>
                    <div className='mt-[17px]'>
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
                                fontSize: '15px'
                            }
                        }}
                        variant="outlined" />
                    </div>
                </Grid>

            </Grid>


        </div >
    );
};

export default PersonalInformation;