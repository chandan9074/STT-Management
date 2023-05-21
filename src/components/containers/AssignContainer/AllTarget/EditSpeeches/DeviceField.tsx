import { Autocomplete, Box, Popper, TextField } from '@mui/material';
import { Dispatch, SetStateAction, useContext } from 'react';
import Icons from '../../../../../assets/Icons';
import { speechDt } from '../../../../../types/assignTypes';
import { customMuiListStyle } from '../../../../../helpers/Utils';
import { UserManagementContext } from '../../../../../context/UserManagementProvider';

type Props = {
    deviceId: string;
    data: speechDt;
    setDeviceId: Dispatch<SetStateAction<string>>;
    deviceData: string[];
    device: string | null | undefined;
    setDevice: Dispatch<SetStateAction<string | null | undefined>>;
    speechData: speechDt[];
    setSpeechData: Dispatch<SetStateAction<speechDt[]>>;
}

const DeviceField = ({ data, device, deviceData, deviceId, setDeviceId, setDevice, speechData, setSpeechData }: Props) => {
    const classes = customMuiListStyle();

    const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);

    const deviceOnChange = (value: string) => {
        setDevice(value ?? undefined);

        const index = speechData.findIndex((item: speechDt) => item?.id === deviceId);
        if (index === -1) {
            return;
        }
        const newData = [...speechData];
        newData[index] = {
            ...newData[index],
            device: value
        };
        setSpeechData(newData);

        setDeviceId('')
    }

    return (
        <div className='assign custom-dpd-icon'>
            {
                deviceId === data?.id ?
                    <div className='animate-fadeIn'>
                        <div className="fixed top-0 left-0 opacity-50 bg-transparent w-full h-screen "
                            onClick={() => setDeviceId('')} />
                        {/* <div className='relative border border-secondary-blue-50'> */}
                        <div className={`relative ${selectedFieldOutline === data.id ? 'border border-secondary-blue-50' : 'border-transparent'} rounded-[7px]`}>
                            <Autocomplete
                                classes={{ option: classes.option }}
                                placeholder='Choose one'
                                id="sourceType"
                                style={{ width: '100%' }}
                                options={deviceData ?? []}

                                value={device}


                                onChange={(event, value) => {
                                    if (value !== null) {
                                        deviceOnChange(value);
                                    }
                                }}

                                // popupIcon={< />}
                                PopperComponent={(props: any) => (
                                    <Popper {...props}>
                                      <Box
                                        sx={{
                                          width: '200px',
                                        }}
                                      >
                                        {props.children}
                                      </Box>
                                    </Popper>
                                  )}


                                renderOption={(props, option) => (
                                    <Box key={option} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        <h1 className='text-small text-blue-gray-80 font-medium'>{`${option}`}</h1>
                                    </Box>
                                )}

                                renderInput={(params) => (

                                    <TextField
                                        {...params}
                                        name="device"
                                        placeholder='Select One'
                                        style={{ outlineColor: "red" }}
                                        variant='outlined'
                                        onFocus={() => setSelectedFieldOutline(data.id)}
                                        onBlur={() => setSelectedFieldOutline("")}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    :
                    <div onClick={() => setDeviceId(data?.id)} className=' flex justify-between items-center cursor-pointer'>
                        {
                            // data?.device !== '' ?
                            data.device ?

                                <div>
                                    <h1 className='text-blue-gray-80 text-xs font-medium'>{data?.device}</h1>
                                </div>
                                :
                                <h1 className='text-blue-gray-60 text-xs font-medium'>Select One</h1>
                        }
                        <img className='w-2 h-2' src={Icons.arrow_drop_down_blue_gray} alt="" />
                    </div>
            }
        </div>
    );
};

export default DeviceField;