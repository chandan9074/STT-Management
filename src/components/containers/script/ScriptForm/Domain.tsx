import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { scriptDomain, scriptSubDomain } from '../../../../data/Script/Domain';
import { Grid } from '@mui/material';

const Domain = () => {
    const [value, setValue] = React.useState<string | null>(scriptDomain[0]);
    const [inputValue, setInputValue] = React.useState('');
    const [domain, setDomain] = useState<string>('');

    const onHandleChange = (e: any, value: any) => {        
        if (e === 'domain') {
            console.log('%%%%', value); 
            setDomain(value);
        } else if (e === 'sub-domain') {
            console.log('sub domain');

        }
    }

    console.log('value-------', domain);


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
                            onChange={(event: any, newValue: string | null) => {
                                onHandleChange('domain', newValue);
                            }}
                            renderInput={(params) => (
                                <TextField

                                    required={true} {...params}
                                    label={<span className='comboBoxLabel'>Domain</span>}

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
                            // disabled={domain !== '' ? true : false}
                            onChange={(event: any, newValue: string | null) => {
                                onHandleChange('sub-domain', newValue);
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