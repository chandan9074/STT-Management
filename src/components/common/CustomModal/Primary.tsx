import React, { Dispatch, SetStateAction } from 'react';
interface Props {
    width: string
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
    modalZIndex?: number
    overlayZIndex?: number

}
const Primary: React.FunctionComponent<Props> = (props: Props) => {
    const { width, open, setOpen, modalZIndex, overlayZIndex, children } = props

    return (
        <div>
            {open ? (
                <div>
                    <div className='absolute'>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 animate-fadeIn outline-none focus:outline-none" style={{ zIndex: modalZIndex ? modalZIndex : 110 }}>
                            <div
                                className="fixed top-0 left-0 w-full h-screen z-[90]"
                                onClick={() => setOpen(false)}
                            />
                            <div
                                style={{
                                    width: `${width}`
                                }}
                                className="relative mx-auto z-[110] ">
                                <div className="border-0 rounded-lg shadow-lg w-full bg-white outline-none focus:outline-none">
                                    {
                                        children
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="bg-opacity-25 fixed inset-0 bg-black animate-fadeIn" style={{ zIndex: overlayZIndex ? overlayZIndex : 100 }}></div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Primary;