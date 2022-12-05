import React from 'react';
import {CloseOutlined} from "@ant-design/icons";
import {Select} from "antd";

const {Option} = Select;

const ManagerSearchModal = ({setShowModal}) => {

    const managerData:any = [
        {
            value: '1',
            name: 'Maksuda Alam',
        },
        {
            value: '2',
            name: 'Rahim',
        },
        {
            value: '3',
            name: 'Karim',
        },
        {
            value: '4',
            name: 'Zobbar',
        }
    ]

    const handleMangerChange = (name) => {
        console.log('value', name)
    }

    return (
       <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className='bg-ct-blue-05 h-[200px] p-5'>
                        <div className="flex items-start justify-between  ">
                            <h3 className="text-3xl font-semibold">
                                Search Manager
                            </h3>
                            <button
                                className='bg-white rounded-[50%]'
                                onClick={() => setShowModal(false)}
                            >
                                <CloseOutlined
                                    className='m-[10px] text-ct-blue-30'
                                />
                            </button>
                        </div>

                        <div className='bg-white px-6 py-8 mt-4 rounded-[10px]'>
                            <Select
                                showSearch
                                placeholder="Search to Select"
                                className='w-full'
                                onChange={(value) => handleMangerChange(value)}
                            >
                                {
                                    managerData.map(m => (
                                        <Option key={m.name} value={m.name}>{m.name}</Option>
                                    ))
                                }
                            </Select>

                        </div>
                    </div>

                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the main
                            thing people are controlled by! Thoughts- their perception
                            of themselves! They're slowed down by their perception of
                            themselves. If you're taught you can’t do anything, you
                            won’t do anything. I was taught I could do everything.
                        </p>
                    </div>
                    {/*/!*footer*!/*/}
                    {/*<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">*/}
                    {/*    <button*/}
                    {/*        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                    {/*        type="button"*/}
                    {/*        onClick={() => setShowModal(false)}*/}
                    {/*    >*/}
                    {/*        Close*/}
                    {/*    </button>*/}
                    {/*    <button*/}
                    {/*        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                    {/*        type="button"*/}
                    {/*        onClick={() => setShowModal(false)}*/}
                    {/*    >*/}
                    {/*        Save Changes*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    );
};

export default ManagerSearchModal;