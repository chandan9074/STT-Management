import { Autocomplete, Popper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import Icons from '../../../../../assets/Icons';
import { customMuiListStyle, isEmpty } from '../../../../../helpers/Utils';
import { speechDt } from '../../../../../types/assignTypes';
import { roleDT } from '../../../../../types/billingTypes';
import Collector from '../../../AudioManagement/TableField/Collector';
import { UserManagementContext } from '../../../../../context/UserManagementProvider';

type Props = {
    data: speechDt;
    roleDatas: roleDT[] | undefined
    collector: roleDT | undefined;
    speechData: speechDt[];
    setSpeechData: Dispatch<SetStateAction<speechDt[]>>;
    setCollector: Dispatch<SetStateAction<roleDT | undefined>>;
}

const CollectorField = ({ data, roleDatas, speechData, setSpeechData, collector, setCollector }: Props) => {
    const classes = customMuiListStyle();

    const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);


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
                            <div className={` ${selectedFieldOutline === data.id ? 'border border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                                <Autocomplete
                                    classes={{ option: classes.option }}
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
                                            variant="outlined"
                                            onFocus={() => setSelectedFieldOutline(data.id)}
                                            onBlur={() => setSelectedFieldOutline("")}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    :
                    <div onClick={() => setCollectorId(data?.id)} className=' flex justify-between items-center cursor-pointer'>
                        {
                            !isEmpty(data?.collector) ?
                                <Collector data={data?.collector} />
                             
                                :
                                <button className='flex items-center gap-x-[10px]'>
                                    <img className='w-4 h-4' src={Icons.AccountCircle} alt="" />
                                    <h1 className='text-blue-gray-60 text-xs font-medium'>Add Collector</h1>
                                </button>
                        }
                        {
                            <img className='w-2 h-2' src={Icons.arrow_drop_down_blue_gray} alt="" />
                        }
                    </div>
            }
        </div>
    );
};

export default CollectorField;