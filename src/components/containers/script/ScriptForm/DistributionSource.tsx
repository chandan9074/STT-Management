import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Checkbox } from '@mui/material';

const distributionList = ['Read', 'Lecture', 'Command', 'Miscellaneous']


const DistributionSource = () => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(((event.target as HTMLInputElement).value));
    };
    return (
        <div className='mb-[33px]'>
            <div className='mb-[33px]'>
                <h1 className='text-ct-blue-95 text-[18px] font-medium'>Create Script</h1>
            </div>

            <div className='flex'>
                <div className='w-[580px]'>
                    <h1 className='text-[14px] font-medium text-blue-gray-75'>Distribution Source*</h1>

                    <div>
                        <FormControl>
                            {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
                            <RadioGroup
                                row
                                // aria-labelledby="demo-controlled-radio-buttons-group"
                                name="distribution-source-group"
                                // value={value}
                                onChange={handleChange}
                            >
                                {
                                    distributionList?.map((value, i) => (
                                        <FormControlLabel value={value} control={<Radio />} label={value} />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div>
                    <FormControl>
                        <h1 className='text-[14px] font-medium text-blue-gray-75 pl-[9px]'>Age</h1>

                        <Checkbox  />
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default DistributionSource;