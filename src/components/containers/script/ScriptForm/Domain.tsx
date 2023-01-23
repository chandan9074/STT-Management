import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { scriptDomain, scriptSubDomain } from '../../../../data/Script/Domain';
import { Grid } from '@mui/material';

const Domain = ({ formik }: { formik: any }) => {
    const [domain, sebDomain] = useState<string>('');

    return (
        <div className='mb-[28px] domain'>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <div>
                        <Autocomplete
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
                        />
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
                            value={formik.values.subDomain}
                            defaultValue={formik.values.subDomain}

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
                                    error={formik.touched.subDomain && Boolean(formik.errors.subDomain)}
                                    helperText={formik.touched.subDomain && formik.errors.subDomain}
                                    {...params}
                                    // InputProps={{
                                    //     ...params.InputProps,
                                    //     style: { 
                                    //         cursor: `${domain === '' && 'not-allowed'}`,
                                    //      },
                                    //   }}
                                    label={<span className='comboBoxLabel'>Sub Domain <span className='text-[red]'>*</span></span>}

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