import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { scriptDomain, scriptSubDomain } from '../../../../data/Script/Domain';
import { Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Domain = ({ formik }: { formik: any }) => {
    const [domain, sebDomain] = useState<string>('');

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
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Domain"
                                value={formik.values.domain}
                                defaultValue={formik.values.domain}
                                onChange={(event) => {
                                    if (typeof event.target.value === 'string') {

                                        formik.setFieldValue('domain', event.target.value)
                                        sebDomain(event.target.value);
                                        console.log('*********', event.target.value);


                                    } else {
                                        formik.setFieldValue('domain', '')
                                        sebDomain('');

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
                                <div className='text-red-600 text-[12px]'>{formik.errors.domain}</div>
                            ) : null}
                        </FormControl>

                        {/* <Autocomplete
                            id="Domain"
                            style={{
                                width: '100%',
                            }}

                            options={scriptDomain}
                            value={formik.values.domain}
                            defaultValue={formik.values.domain}

                            onChange={(event, value) => {
                                if (typeof value === 'string') {

                                    formik.setFieldValue('domain', value)
                                    sebDomain(value);

                                } else {
                                    formik.setFieldValue('domain', '')
                                    sebDomain('');

                                }
                            }}
                            renderInput={(params) => (
                                <TextField
                                    name="domain"
                                    error={formik.touched.domain && Boolean(formik.errors.domain)}
                                    helperText={formik.touched.domain && formik.errors.domain}
                                    {...params}

                                    label={<span className='comboBoxLabel'>Domain <span className='text-[red]'>*</span></span>}

                                />
                            )}
                        /> */}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Autocomplete
                            disabled={domain === ''}
                            id="sub-domain"
                            className={`${domain === '' && 'sub-domain'}`}
                            style={{ width: '100%', cursor: 'pointer' }}
                            options={scriptSubDomain}
                            // value={formik.values.subDomain || scriptSubDomain[0]}
                            value={formik.values.subDomain}
                            // defaultValue={formik.values.subDomain}

                            onChange={(event, value) => {
                                if (typeof value === 'string') {
                                    formik.setFieldValue('subDomain', value);
                                } else {
                                    formik.setFieldValue('subDomain', '');

                                }
                            }}

                            renderInput={(params) => (
                                <TextField
                                    name="subDomain"
                                    value={formik.values.subDomain}
                                    onChange={formik.handleChange}
                                    error={formik.touched.subDomain && Boolean(formik.errors.subDomain)}
                                    helperText={formik.touched.subDomain && formik.errors.subDomain}
                                    {...params}
                                    label={<h1 className='comboBoxLabel'>Sub Domain <span className='text-[red]'>*</span></h1>}

                                />
                            )}
                        />
                    </div>
                </Grid>
            </Grid>


        </div>
    );
};

export default Domain;