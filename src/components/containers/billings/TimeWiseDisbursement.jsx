import React, {useEffect, useState} from 'react';

const TimeWiseDisbursement = ({data}) => {

    const [minValue, setMinValue] = useState([])

    Array.prototype.min = function() {
        return Math.min.apply(null, this);
    };

    useEffect(() => {
        getDataRatio();

    },[]);

    const getDataRatio = () => {
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
            <div className='grid grid-cols-12'>
                {
                    data.map(m => (
                        <div key={m.id}>
                            <div className="flex items-center duration-300">
                                <div
                                    className={`h-[2px] border border-dashed flex-1 rounded-tl-md rounded-bl-md bg-red-400`}
                                />
                                <div
                                    // className={`text-sm font-medium px-2.5 py-1 bg-red-400 rounded-full`}
                                    className={`text-sm font-medium h-[160px] w-[160px] py-1 bg-red-400 rounded-full flex justify-center items-center`}
                                >
                                    {m.totalAmounts}
                                </div>
                                <div
                                    className={`h-[2px] border border-dashed flex-1 rounded-tr-md rounded-br-md bg-red-400`}
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