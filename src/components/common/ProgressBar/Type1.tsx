import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        background: theme.palette.mode === 'light' ? 'linear-gradient(90deg, rgb(0, 147, 217) 56%, rgb(78, 44, 190) 74%, rgb(255, 36, 251) 94%);' : '',
    },
}));
const Type1 = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <BorderLinearProgress variant="determinate" value={50}/>
        </Box>
    );
};

export default Type1;
