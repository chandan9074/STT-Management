import React, { useState } from 'react';
import Icons from '../../assets/Icons';
import Buttons from '../Buttons';

interface Props {
    data: string[];
    handleActivePanel: (value: string) => void;
    active: string;
}

const Type4 = ({ data, handleActivePanel, active }: Props) => {

    const [toggleOpen, setToggleOpen] = useState<boolean>(false)

    const handleActiveButton = (value: string): void => {
        handleActivePanel(value)
        setToggleOpen(false)
    }
    return (
        <div className={`relative`} >
            <Buttons.Dropdown active={active} onClick={() => setToggleOpen(!toggleOpen)} />
            {
                toggleOpen ? <div >
                    <div>
                        <div className="fixed top-0 left-0 w-full h-screen z-[80]"
                            onClick={() => setToggleOpen(false)} />
                        <div className="absolute z-[9999]">
                            <div
                                className="w-[245px] bg-white mt-1 rounded-[8px] py-[6px] shadow-bottom-light-blue-20">

                                {
                                    data.map((item: string, index: number) =>
                                        <div key={index}>
                                            <div
                                                onClick={() => handleActiveButton(item)}
                                                className={`flex justify-between items-center text-small font-medium ${active === item ?
                                                    "text-ct-blue-60 py-2 bg-blue-10 hover:bg-blue-20 active:bg-blue-30 cursor-pointer" :
                                                    "text-blue-gray-80 hover:text-ct-blue-60 active:text-ct-blue-60  cursor-pointer hover:bg-ct-blue-05 active:bg-ct-blue-10 duration-300 py-2"}`}>
                                                <p className={active === item ? "border-ct-blue-60 px-2" : "border-white px-2"}>
                                                    {item}
                                                </p>
                                                {active === item ?
                                                    <img
                                                        src={Icons.CorrectIcon}
                                                        className="w-[17px] h-[12px] mr-2.5"
                                                        alt="" />
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    )
                                }


                            </div>
                        </div>
                    </div>
                </div>
                    : null
            }
        </div>
    );
};

export default Type4;