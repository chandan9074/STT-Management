import React, { useEffect, useState } from 'react';
import './type1.css'
interface Props {
    massages: string;
    iconSrc?: string;
}


const Type1 = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    const { massages, iconSrc } = props

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [open]);

    return (
        <div>
            <button onClick={() => setOpen(true)}>Toast</button>

            { open &&
                <div className='fixed left-[50%] bottom-5 animate-fadeIn2'>
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