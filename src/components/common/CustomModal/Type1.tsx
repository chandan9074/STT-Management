import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CustomModal } from '.';
import Icons from '../../../assets/Icons';
import { ScriptContext } from '../../../context/ScriptProvider';
import { CREATE_SCRIPT, SCRIPT_PATH } from '../../../helpers/Slug';
import Buttons from '../../Buttons';

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    // setData: Dispatch<SetStateAction<string>>;
}

const Type1 = ({ open, setOpen }: Props) => {
    const scriptContext = useContext(ScriptContext)
    const [value, setValue] = useState<string>('');    

    useEffect(() => {
        setValue(scriptContext.scriptModule);
    }, [scriptContext.scriptModule]);

    const location = useLocation();

    const handleSave = () => {
        scriptContext.setScriptModule(value)
        setOpen(false)
    }

    const handleCancel = () => {
        setOpen(false);
        setValue(scriptContext.scriptModule)
    }

    return (
        <div>
            <CustomModal.Type5
                setOpen={setOpen}
                setValue={setValue}
                open={open}
                width="462px"
            >

                <div>
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
                        <Link to={location.pathname === SCRIPT_PATH ? CREATE_SCRIPT : ''}>
                            <Buttons.LabelButton.Primary
                                label='Start'
                                variant="CT-Blue"
                                size="small"
                                onClick={() => handleSave()}
                            />
                        </Link>

                        <Buttons.LabelButton.Secondary
                            label='Cancel'
                            variant="Blue"
                            size='small'
                            onClick={() => handleCancel()}
                        />

                    </div>
                </div>
            </CustomModal.Type5>
        </div>
    )
}

export default Type1;