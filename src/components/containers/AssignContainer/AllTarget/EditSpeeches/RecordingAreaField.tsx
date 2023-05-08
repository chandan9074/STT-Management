import { Select } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import Icons from '../../../../../assets/Icons';
import { recordingArea } from '../../../../../data/assign/AssignData';
import { speechDt } from '../../../../../types/assignTypes';

const { Option } = Select;

type Props = {
    data: speechDt;
    speechData:speechDt[];
    recordingAreaId: string;
    setSpeechData: Dispatch<SetStateAction<speechDt[]>>;

}

const RecordingAreaField = ({data, recordingAreaId,setSpeechData, speechData}: Props) => {

    const handleRecordingAreaChange = (value: string) => {
        
        const index = speechData.findIndex((item: speechDt) => item?.id === recordingAreaId);
        
        if (index === -1) {
            return;
        }
        console.log('----', index);
        
        const newData = [...speechData];
        newData[index] = {
            ...newData[index],
            recordingArea: value
        };
        
        setSpeechData(newData);
    };


    return (
        <div>
            {

                <div className=' flex justify-between items-center cursor-pointer assign'>

                    <Select
                        suffixIcon={<img src={Icons.arrow_drop_down_blue_gray} alt='' />}
                        placeholder={`Select one`}
                        style={{ border: 'none', width: '100%' }}
                        onChange={handleRecordingAreaChange} // Update this line
                        value={data?.recordingArea || undefined} // Update this line
                        // onChange={(value) => handleRecordingAreaChange(value)}
                        // defaultValue={data?.recordingArea ? data?.recordingArea : 'Select One'}
                    >
                        {
                            recordingArea?.map((m: string, i: number) => (
                                <Option key={m} value={m} id={m}>
                                    <h1 className='text-blue-gray-80 text-xs font-normal'>{m}</h1>
                                </Option>
                            ))
                        }
                    </Select>
                </div>
            }

        </div>
    );
};

export default RecordingAreaField;