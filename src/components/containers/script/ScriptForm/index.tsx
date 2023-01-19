import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DistributionSource from './DistributionSource';
import Domain from './Domain';
import SourceReference from './SourceReference';
import TitleDescription from './TitleDescription';
import ActionButton from './ActionButton';
import './ScriptForm.css';

const distributionList = ['Read', 'Lecture', 'Command', 'Miscellaneous']

const ScriptForms = () => {

    return (
        <div className='w-full flex justify-center script-form'>
            <div className='bg-white-gray-45 w-[885px]'>
                <form>
                    <div className='px-[53px] py-[24px]'>
                        <DistributionSource />
                        <Domain />
                        <SourceReference />
                        <TitleDescription />
                    </div>

                    <div className='flex justify-end px-5 py-[28px] bg-white'>
                        <ActionButton />
                    </div>

                </form>

            </div>
        </div>
    );
};


export default ScriptForms;