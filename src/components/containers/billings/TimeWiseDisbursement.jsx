import React, {useEffect, useState} from 'react';

const TimeWiseDisbursement = ({data}) => {

    const [isStt, setIsStt] = useState(true);
    const [isTts, setIsTts] = useState(false);

    const [minValue, setMinValue] = useState([])

    const sttRoles = [
        {
            title: 'Manager'
        },
        {
            title: 'Team Leader'
        },
        {
            title: 'Collector'
        },
        {
            title: 'Speaker'
        },
        {
            title: 'Audio Checker'
        },
        {
            title: 'Annotator'
        },
        {
            title: 'Validator'
        }
    ]

    const ttsRoles = [
        {
            title: 'Speaker'
        },
        {
            title: 'Audio Checker'
        },
        {
            title: 'Annotator'
        },
        {
            title: 'Validator'
        }
    ]

    useEffect(() => {
        getDataRatio();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const onHandleStt = () => {
        setIsStt(true);
        setIsTts(false);
    }

    const onHandleTtt = () => {
        setIsStt(false);
        setIsTts(true);
    }

    const getDataRatio = () => {
        Array.prototype.min = function() {
            return Math.min.apply(null, this);
        }

        let _data = data.map(m => {
            // setTotalAmounts([...totalAMounts, m.totalAmounts]);

            return m.totalAmounts
        })

        const min = _data.min();

        const _ratioData = data.map(m => {
            return m.totalAmounts / min;
        });
        console.log('ratio data', _ratioData)

        setMinValue(_data.min());
    }


    // console.log('min', minValue)

    return (
        <div>
            <div className='h-[153px] bg-[#F4F7FA] pt-6'>
               <div className='flex flex-col justify-center items-center'>
                   <div className='h-[36px] w-[197px] rounded-[150px] bg-white flex justify-center items-center'>
                       <button className={`flex justify-center items-center w-[96px] h-[32px] ${isStt ? 'bg-[#2C79BE] text-white' : 'bg-white text-[#2C79BE] hover:bg-gray-300'} rounded-[24px]`} onClick={onHandleStt}>
                           Stt
                       </button>
                       <button className={`flex justify-center items-center w-[96px] h-[32px] ${isTts ? 'bg-[#851F58] text-white' : 'bg-white text-[#851F58] hover:bg-gray-300'} rounded-[24px]`} onClick={onHandleTtt}>
                           Stt
                       </button>
                   </div>
               </div>
            </div>
            <div className='grid grid-cols-12'>
                {
                    data.map(m => (
                        <div key={m.id}>
                            <div className="flex items-center duration-300">
                                <div
                                    className={`h-[2px] border border-dashed flex-1 rounded-tl-md rounded-bl-md bg-[#D1D3D6]`}
                                />
                                <div
                                    // className={`text-sm font-medium px-2.5 py-1 bg-red-400 rounded-full`}
                                    className={`text-sm font-medium h-[60px] w-[60px] py-1 bg-[#CCDDFE] rounded-full flex justify-center items-center`}
                                >
                                    {m.totalAmounts}
                                </div>
                                <div
                                    className={`h-[2px] border border-dashed flex-1 rounded-tr-md rounded-br-md bg-[#D1D3D6]`}
                                />
                            </div>
                            <div className='flex justify-center items-center mt-5'>
                                {m.month.slice(0, 3)}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TimeWiseDisbursement;