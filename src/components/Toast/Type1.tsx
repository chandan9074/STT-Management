import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './type1.css'
interface Props {
    massages: string;
    iconSrc?: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}


const Type1 = (props: Props) => {

    const { massages, iconSrc, open, setOpen } = props

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [open]);

    return (
        <div>


            {open &&
                <div className='fixed left-[40%] bottom-5 animate-fadeIn2'>
                    <div
                        className='flex gap-2 bg-ct-blue-95 py-[10px] px-6 rounded-md shadow-toast-shadow items-center'>
                        <img src={iconSrc} className="h-4 w-4 mb-[3px]" alt="" />
                        <p className='text-white font-medium text-small '>{massages}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Type1;