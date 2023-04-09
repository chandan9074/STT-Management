import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormikValues } from 'formik';
import { scriptDomain, scriptSubDomain } from '../../../../../data/Script/Domain';


const DomainSubDomain = ({ formik }: { formik: FormikValues }) => {
    return (
        <div className='mb-[28px] domain'>
        <Grid container spacing={5}>
            <Grid item xs={6}>
                <div>


                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel id="demo-simple-select-helper-label">
                            <h1 className='comboBoxLabel'>Domain <span className='text-[red]'>*</span></h1>
                        </InputLabel>
                        <Select
                            style={{ height: '44px' }}
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
                        >

                            {
                                scriptDomain?.map((value, i) => (
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


                </div>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <Autocomplete
                        
                        disableClearable
                        placeholder='Choose one'
                        id="sub-domain"
                        disabled={formik.values.domain === ''}
                        className={`${formik.values.domain === '' && 'sub-domain'}`}
                        style={{ width: '100%', cursor: 'pointer' }}
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
                                label={<h1 className={`${formik.values.domain === '' ? 'text-blue-gray-A30 text-small font-medium' : 'comboBoxLabel'}`}>Sub Domain <span className='text-[red]'>*</span></h1>}

                            // InputProps={{
                            //     style: {
                            //         height: '44px'
                            //     }
                            // }}
                            />
                        )}
                    />
                </div>
            </Grid>
        </Grid>


    </div>
    );
};

export default DomainSubDomain;