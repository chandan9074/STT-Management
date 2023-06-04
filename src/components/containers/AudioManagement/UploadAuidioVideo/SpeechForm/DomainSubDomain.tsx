import { Grid } from '@mui/material';
import { FormikValues } from 'formik';
import { scriptDomainAddSpeech, scriptSubDomain } from '../../../../../data/Script/Domain';
import CustomSelect from '../../../../CustomSelect';


const DomainSubDomain = ({ formik }: { formik: FormikValues }) => {

    return (
        <div className='mb-[28px] domain'>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    {/* <div>


                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-helper-label">
                                <h1 className='comboBoxLabel'>Domain <span className='text-[red]'>*</span></h1>
                            </InputLabel>
                            <Select
                                style={{
                                    height: '44px',
                                    // border: selectedFieldOutline === 'Domain' ? '1px solid #136EE5' : '1px solid transparent'
                                }}
                                className="custom-select"
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Domain"
                                value={formik.values.domain}
                                defaultValue={formik.values.domain}
                                onChange={(event) => {
                                    if (typeof event.target.value === 'string') {

                                        formik.setFieldValue('domain', event.target.value)
                                        // sebDomain(event.target.value);


                                    } else {
                                        formik.setFieldValue('domain', '')
                                        // sebDomain('');

                                    }
                                }}
                                variant="outlined"
                            // onFocus={() => setSelectedFieldOutline("Domain")}
                            // onBlur={() => setSelectedFieldOutline("")}
                            >

                                {
                                    scriptDomainAddSpeech?.map((value, i) => (
                                        <MenuItem
                                            key={i}
                                            value={value}
                                        >
                                            {value}
                                        </MenuItem>
                                    ))
                                }
                            </Select>

                            {formik.touched.domain && formik.errors.domain ? (
                                <div className='text-red-600 text-xxs'>{formik.errors.domain}</div>
                            ) : null}
                        </FormControl>


                    </div> */}
                    <CustomSelect.Type1
                        formikValues={formik.values.domain}
                        data={scriptDomainAddSpeech}
                        formikError={formik.errors.domain}
                        formikTouched={formik.touched.domain}
                        formik={formik}
                        name={'domain'}
                        fieldLabel='Domain'
                    />
                </Grid>
                <Grid item xs={6}>

                    {/* <Autocomplete
                        classes={{ option: classes.option }}
                        disableClearable
                        placeholder='Choose one'
                        id="sub-domain"
                        disabled={formik.values.domain === ''}
                        className={`${formik.values.domain === '' && 'sub-domain'}`}
                        style={{ width: '100%', cursor: 'pointer', }}
                        options={scriptSubDomain}
                        // value={formik.values.subdomain || scriptsubdomain[0]}
                        value={formik.values.subdomain}
                        getOptionLabel={(option) => option}

                        // defaultValue={formik.values.subdomain}
                        onChange={(event, value) => {
                            if (typeof value === 'string') {
                                formik.setFieldValue('subdomain', value);
                            } else {
                                // formik.setFieldValue('subdomain', '');
                                formik.setFieldValue('subdomain', null)

                            }
                        }}

                        renderInput={(params) => (
                            <TextField
                                name="subdomain"
                                value={formik.values.subdomain}
                                onChange={formik.handleChange}
                                error={formik.touched.subdomain && Boolean(formik.errors.subdomain)}
                                helperText={formik.touched.subdomain && formik.errors.subdomain}
                                {...params}
                                // className='subdomain-cls'
                                sx={{
                                    backgroundColor: `${formik.values.domain === '' ? "#F9FAFC" : "white"}`, 
                                    borderRadius: "7px",
                                    '&:hover fieldset': {
                                        borderColor: 'rgb(19, 110, 229) !important',
                                    },
                                }}
                                label={<div className={`${focus === "subdomain" ? "" : "mt-[3px]"}`} ><span className={`${focus === "subdomain" ? "font-medium" : "text-[14px] font-semibold"}`}>Sub Domain</span><span className='text-[red]'>*</span></div>}
                                onFocus={() => setFocus("subdomain")}
                                onBlur={() => setFocus("")}

                                variant="outlined"
                            />
                        )}
                    /> */}
                    {/* </div> */}
                    <CustomSelect.Type1
                        formikValues={formik.values.subdomain}
                        data={scriptSubDomain}
                        formikError={formik.errors.subdomain}
                        formikTouched={formik.touched.subdomain}
                        formik={formik}
                        name={'subdomain'}
                        fieldLabel='Sub-Domain'
                    />
                </Grid>
            </Grid>


        </div>
    );
};

export default DomainSubDomain;