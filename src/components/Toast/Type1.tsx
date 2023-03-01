import { useContext, useEffect } from 'react';
import { CommonContext } from '../../context/CommonProvider';
import './type1.css';
interface Props {
    iconSrc?: string;
    // open: boolean;
    // setOpen: Dispatch<SetStateAction<boolean>>;
}


const Type1 = (props: Props) => {

    const commonContext = useContext(CommonContext);

    // const { massages, iconSrc, open, setOpen } = props
    const { iconSrc} = props


    useEffect(() => {
        const timer = setTimeout(() => {
            commonContext.handleToast(false);
        }, 3000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [commonContext.toastOpen]);

    console.log('toast open----', commonContext.toastOpen);
    

    return (
        <div>


            {commonContext.toastOpen &&
                <div className='fixed left-[40%] bottom-5 animate-fadeIn2 z-[99999]'>
                    <div
                        className='flex gap-2 bg-ct-blue-95 py-[10px] px-6 rounded-md shadow-toast-shadow items-center'>
                        <img src={iconSrc} className="h-4 w-4 mb-[3px]" alt="" />
                        <p className='text-white font-medium text-small '>
                            {/* {commonContext.toastMessage} */}
                            successfully create data
                            </p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Type1;