import React from 'react';

const ProfessionWise = () => {
    const data = [
        {
            name: "Unemployed",
            value: 10,
            color: "#FFF5CC"
        },
        {
            name: "Self- Employed",
            value: 15,
            color: "#FFD3D3"
        },
        {
            name: "Job Holder",
            value: 30,
            color: "#374345"
        },
        {
            name: "Student",
            value: 45,
            color: "#E2FBD7"
        },

    ]



    return (
        <div className=''>
            <div className="h-[300px] w-full">

                {
                    data.map((value) => <div
                        style={{ height: `${value.value}%` }}
                        className='flex w-full items-center'>
                        <div className='h-full w-[20%] flex justify-end'>
                            <div className='bg-red-80 w-[65px] h-full' />
                        </div>
                        <div className='w-[60%]'>
                            <hr className='border-t-2 border-dashed border-blue-500' />
                        </div>
                        <div className='flex gap-2 h-full w-[20%] items-center '>
                            <div className='w-3 h-3 rounded-full bg-yellow-A10' />
                            <p>Unemployed</p>
                            <p>100h</p>
                        </div>
                    </div>)
                }



            </div>
        </div>
    );
};

export default ProfessionWise;