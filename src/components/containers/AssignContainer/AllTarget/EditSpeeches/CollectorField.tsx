import { Autocomplete, Popper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Dispatch, SetStateAction, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { isEmpty } from '../../../../../helpers/Utils';
import { speechDt } from '../../../../../types/assignTypes';
import { roleDT } from '../../../../../types/billingTypes';
import Collector from '../../../../common/TableField/Collector';

type Props = {
    data: speechDt;
    roleDatas: roleDT[] | undefined
    collector: roleDT | undefined;
    speechData: speechDt[];
    setSpeechData: Dispatch<SetStateAction<speechDt[]>>;
    setCollector: Dispatch<SetStateAction<roleDT | undefined>>;
}

const CollectorField = ({ data, roleDatas, speechData, setSpeechData, collector, setCollector }: Props) => {
    const [collectorId, setCollectorId] = useState<string>("");
    // const [collector, setCollector] = useState<roleDT>();

    const collectorOnChange = (value: roleDT) => {

        setCollector(value ?? undefined);

        // Find the index of the object to update
        const index = speechData.findIndex((item: any) => item?.id === collectorId);

        // Create a new object with the updated data
        const updatedData = { ...speechData[index], collector: value };

        // Create a new array with the updated object at the same index as the original object
        const newData = speechData.map((item: speechDt, i: number) => i === index ? updatedData : item);


        // Update the state with the new array
        // setSpeechData(newData);
        setSpeechData(newData as speechDt[]);


        setCollectorId('')
    }

    return (
        <div >
            {
                collectorId === data?.id ?
                    <div className='animate-fadeIn'>
                        <div className="fixed top-0 left-0 opacity-50 bg-transparent w-full h-screen "
                            onClick={() => setCollectorId('')} />
                        <div className='relative'>

                            {/*  <Autocomplete
                            placeholder='Choose one'
                            id="sourceType"
                            style={{ width: '100%' }}
                            options={roleDatas ?? []}

                            value={collector}
                            getOptionLabel={(option) => {
                                if (!option) return '';
                                return `${option?.name}`;
                            }}

                            onChange={(event, value) => {
                                if (value !== null) {
                                    collectorOnChange(value);
                                }
                            }}

                            renderOption={(props, option) => (
                                <Box
                                    key={option.id}
                                    component="li"
                                    sx={{
                                        '& > img': { mr: 2, flexShrink: 0 }
                                    }}
                                    {...props}
                                   
                                >
                                    <h1
                                        className='text-small text-blue-gray-80 font-normal'
                                    >
                                        {`${option?.id} - ${option?.name}`}
                                    </h1>
                                </Box>
                            )}


                            renderInput={(params) => (

                                <TextField
                                    {...params}
                                    name="sourceType"
                                    placeholder='Add Collector'
                                />
                            )}
                        /> */}

                             <Autocomplete
                                placeholder='Choose one'
                                id="sourceType"
                                style={{ width: '100%' }}
                                options={roleDatas ?? []}
                                value={collector}
                                getOptionLabel={(option) => {
                                    if (!option) return '';
                                    return `${option?.name}`;
                                }}
                                onChange={(event, value) => {
                                    if (value !== null) {
                                        collectorOnChange(value);
                                    }
                                }}
                                PopperComponent={({ children, ...popperProps }: any) => (
                                    <Popper {...popperProps}>
                                        <Box
                                            sx={{
                                                width: '254px',
                                                // overflowX: 'hidden',
                                                // overflow: 'auto',
                                                // maxHeight: '200px',
                                                // '::-webkit-scrollbar': {
                                                //     width: '4px',
                                                //     height: '2px',
                                                // },
                                                // '::-webkit-scrollbar-thumb': {
                                                //     // background: 'rgba(0, 0, 0, 0.2)',
                                                //     borderRadius: '6px',
                                                //     background: 'red'
                                                // },
                                                // '::-webkit-scrollbar-thumb:hover': {
                                                //     background: 'red'
                                                // },
                                            }}
                                        >
                                            {children}
                                        </Box>
                                    </Popper>
                                )}
                                renderOption={(props, option) => (
                                    
                                    <Box
                                        key={option.id}
                                        component="li"
                                        sx={{
                                            '& > img': { mr: 2, flexShrink: 0 }
                                        }}
                                        {...props}
                                    >
                                        <h1
                                            className='text-small text-blue-gray-80 font-normal'
                                        >
                                            {`${option?.id} - ${option?.name}`}
                                        </h1>
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        name="sourceType"
                                        placeholder='Add Collector'
                                    />
                                )}
                            />
                        </div>
                    </div>
                    :
                    <div onClick={() => setCollectorId(data?.id)} className=' flex justify-between items-center cursor-pointer'>
                        {
                            !isEmpty(data?.collector) ?
                                <Collector data={data?.collector} />
                                // <div>
                                //     <div className='flex items-center gap-x-2'>
                                //         <RoleImage height='h-4' width='w-4' role={data?.collector?.role} />
                                //         <div>
                                //             <h1 className='text-blue-gray-80 text-xs font-medium'>{data?.collector?.name}</h1>
                                //             <h1 className='text-blue-gray-75 text-xxs'>{data?.collector?.address}</h1>
                                //         </div>
                                //     </div>
                                // </div>
                                :
                                <button className='flex items-center gap-x-[10px]'>
                                    <img className='w-4 h-4' src={Icons.AccountCircle} alt="" />
                                    <h1 className='text-blue-gray-60 text-xs font-medium'>Add Collector</h1>
                                </button>
                        }
                        {
                            <img className='w-[7px] h-1' src={Icons.arrow_drop_down_blue_gray} alt="" />
                        }
                    </div>
            }
        </div>
    );
};

export default CollectorField;