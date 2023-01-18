import React, { Dispatch, SetStateAction } from 'react';

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const Type1 = ({ open, setOpen }: Props) => {
    return (
        <div>
            {open ? (
                <div>

                    <div className='absolute'>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] animate-fadeIn outline-none focus:outline-none">
                            <div
                                className="fixed top-0 left-0 w-full h-screen z-[90]"
                                onClick={() => setOpen(false)}
                            />

                            <div className="relative mx-auto w-[462px] z-[110] ">
                                <div className="border-0 rounded-lg shadow-lg w-full bg-white outline-none focus:outline-none">
                                    <div className="p-5 bg-ct-blue-05 rounded-t-lg">
                                        <p className='text-heading-6 font-medium text-ct-blue-95'>Create Script</p>
                                    </div>

                                    <div className="p-5">
                                        <p className='text-small font-medium text-blue-gray-75'>Select Data Type</p>

                                        <div className='flex gap-2 mt-4'>
                                            <div className='w-[160px] h-[61px] px-3 p-2 bg-blue-gray-05 rounded border border-[#E5E7EB]'>
                                                <p className='text-small font-normal text-blue-gray-75'>STT (Speech-to-Text)</p>
                                            </div>

                                            <div className='w-[160px] h-[61px] px-3 p-2 bg-blue-gray-05 rounded border border-[#E5E7EB]'>
                                                <p className='text-small font-normal text-blue-gray-75'>STT (Speech-to-Text)</p>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="bg-opacity-25 fixed inset-0 z-[90] bg-black animate-fadeIn"></div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Type1;