import { Button } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Icons from '../../../assets/Icons';
import Buttons from '../../Buttons';

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setData: Dispatch<SetStateAction<string>>;
}

const Type1 = ({ open, setOpen, setData }: Props) => {
    const [value, setValue] = useState<string>("STT")

    const handleSave = () => {
        setData(value)
        setOpen(false)
    }
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
                                            <div
                                                onClick={() => setValue("STT")}
                                                className={`w-[160px] h-[61px] px-3 p-2  rounded border cursor-pointer ${value === "STT" ?
                                                    'bg-blue-10 border-secondary-blue-50'
                                                    : 'bg-blue-gray-05 border-[#E5E7EB]'
                                                    }`}
                                            >
                                                <div className='flex gap-2 justify-center pb-2 items-center'>
                                                    <img
                                                        className='h-[18px] w-[18px]'
                                                        style={{
                                                            filter: value === "STT" ? "invert(36%) sepia(24%) saturate(6466%) hue-rotate(201deg) brightness(93%) contrast(97%)" : "inherit"
                                                        }}
                                                        src={Icons.MusicIcon}
                                                        alt=""
                                                    />
                                                    <img
                                                        className='h-[18px] w-[18px]'
                                                        style={{
                                                            filter: value === "STT" ? "invert(36%) sepia(24%) saturate(6466%) hue-rotate(201deg) brightness(93%) contrast(97%)" : "inherit"
                                                        }}
                                                        src={Icons.ArrowRightBack}
                                                        alt=""
                                                    />
                                                    <img
                                                        className='h-[14px] w-[14px]'
                                                        style={{
                                                            filter: value === "STT" ? "invert(36%) sepia(24%) saturate(6466%) hue-rotate(201deg) brightness(93%) contrast(97%)" : "inherit"
                                                        }}
                                                        src={Icons.Title}
                                                        alt=""
                                                    />
                                                </div>
                                                <p
                                                    className={`text-small font-normal ${value === "STT" ?
                                                        'text-secondary-blue-50'
                                                        : ' text-blue-gray-75'}`}
                                                >
                                                    STT (Speech-to-Text)
                                                </p>
                                            </div>

                                            <div
                                                onClick={() => setValue("TTS")}
                                                className={`w-[160px] h-[61px] px-3 p-2 cursor-pointer rounded border  ${value === "TTS" ?
                                                    'bg-blue-10 border-secondary-blue-50'
                                                    : 'bg-blue-gray-05 border-[#E5E7EB]'
                                                    }`}
                                            >
                                                <div className='flex gap-2 justify-center pb-2 items-center'>
                                                    <img
                                                        className='h-[14px] w-[14px]'
                                                        style={{
                                                            filter: value === "TTS" ? "invert(36%) sepia(24%) saturate(6466%) hue-rotate(201deg) brightness(93%) contrast(97%)" : "inherit"
                                                        }}
                                                        src={Icons.Title}
                                                        alt=""
                                                    />
                                                    <img
                                                        className='h-[18px] w-[18px]'
                                                        style={{
                                                            filter: value === "TTS" ? "invert(36%) sepia(24%) saturate(6466%) hue-rotate(201deg) brightness(93%) contrast(97%)" : "inherit"
                                                        }}
                                                        src={Icons.ArrowRightBack}
                                                        alt=""
                                                    />
                                                    <img
                                                        className='h-[18px] w-[18px]'
                                                        style={{
                                                            filter: value === "TTS" ? "invert(36%) sepia(24%) saturate(6466%) hue-rotate(201deg) brightness(93%) contrast(97%)" : "inherit"
                                                        }}
                                                        src={Icons.MusicIcon}
                                                        alt=""
                                                    />
                                                </div>

                                                <p
                                                    className={`text-small font-normal ${value === "TTS" ?
                                                        'text-secondary-blue-50'
                                                        : ' text-blue-gray-75'}`}
                                                >
                                                    TTS (Text-to-Speech)
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='flex gap-3 px-5 pb-5 pt-10'>
                                        {/* <button
                                            onClick={() => handleSave()}
                                            className='px-8 py-2 bg-ct-blue-60 text-small font-medium text-white rounded-md hover:bg-ct-blue-70'
                                        >
                                            Start
                                        </button> */}

                                        {/* <button
                                            onClick={() => setOpen(false)}
                                            className='px-8 py-2 border border-ct-blue-30 text-small font-medium text-ct-blue-80 rounded-md hover:bg-blue-gray-30'
                                        >
                                            Cancel
                                        </button> */}

                                        <Buttons.LabelButton.Primary

                                            label='Start'
                                            variant="CT-Blue"
                                            size="small"
                                            onClick={() => handleSave()}
                                           
                                        />

                                        <Buttons.LabelButton.Secondary
                                            label='Cancel'
                                            variant="Blue"
                                            size='small'
                                            onClick={() => setOpen(false)}
                                            
                                            
                                        />
                                       
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