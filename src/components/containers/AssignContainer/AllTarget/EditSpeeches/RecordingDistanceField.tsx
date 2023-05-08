import { Select } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import Icons from '../../../../../assets/Icons';
import { recordingDistanceAssign } from '../../../../../data/assign/AssignData';
import { speechDt } from '../../../../../types/assignTypes';

const { Option } = Select;

type Props = {
    data: speechDt;
    speechData: speechDt[];
    setSpeechData: Dispatch<SetStateAction<speechDt[]>>;
    recordingDistanceId: string;
}

const RecordingDistanceField = ({data, setSpeechData, speechData, recordingDistanceId}: Props) => {

    const handleRecordingDistanceChange = (value: string) => {
        const index = speechData.findIndex((item: speechDt) => item?.id === recordingDistanceId);
        if (index === -1) {
            return;
        }
        const newData = [...speechData];
        newData[index] = {
            ...newData[index],
            recordingDistance: value
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
                        onChange={(value) => handleRecordingDistanceChange(value)}
                        defaultValue={data?.recordingDistance ? data?.recordingDistance : 'Select One'}
                    >
                        {
                            recordingDistanceAssign?.map((m: string, i: number) => (
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

export default RecordingDistanceField;