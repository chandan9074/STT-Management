import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { scriptDomain, scriptSubDomain } from '../../../../data/Script/Domain';
import { Grid } from '@mui/material';

const Domain = () => {
    const [value, setValue] = React.useState<string | null>(scriptDomain[0]);
    const [inputValue, setInputValue] = React.useState('');

    const onHandleChange = (e: any, value: any) => {

    }

    return (
        <div className='mb-[28px]'>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <div>
                        <Autocomplete
                            id="domain"
                            style={{ width: '100%' }}
                            options={scriptDomain}
                            onChange={(event: any, newValue: string | null) => {
                                onHandleChange(event, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField required={true} {...params}
                                    label={<span className='comboBoxLabel'>domain</span>}

                                />
                            )}
                        />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Autocomplete
                            id="sub-domain"
                            style={{ width: '100%' }}
                            options={scriptSubDomain}
                            onChange={(event: any, newValue: string | null) => {
                                onHandleChange(event, newValue);
                            }}
                            renderInput={(params) => (
                                <TextField required={true} {...params}
                                    label={<span className='comboBoxLabel'>Sub Domain</span>}

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