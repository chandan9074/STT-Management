import { useContext, useEffect } from 'react';
import { CommonContext } from '../../context/CommonProvider';
interface Props {
    iconSrc?: string;
    // open: boolean;
    // setOpen: Dispatch<SetStateAction<boolean>>;
}


const Type1 = () => {


    console.log("hello toast")

    // const commonContext = useContext(CommonContext);

    // const { massages, iconSrc, open, setOpen } = props
    // const { iconSrc} = props


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         commonContext.handleToast(false);
    //     }, 3000);
    //     return () => clearTimeout(timer);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [commonContext.toastOpen]);



    return (
        <div className='bg-red text-white p-5'>

            successfully toast open

            {/* {commonContext.toastOpen &&
                <div className='fixed left-[40%] bottom-5 animate-fadeIn2 z-[99999]'>
                    <div
                        className='flex gap-2 bg-ct-blue-95 py-[10px] px-6 rounded-md shadow-toast-shadow items-center'>
                        <img src={iconSrc} className="h-4 w-4 mb-[3px]" alt="" />
                        <p className='text-white font-medium text-small '>
                            successfully create data
                            </p>
                    </div>
                </div>
            } */}
        </div>
    );
};

export default Type1;