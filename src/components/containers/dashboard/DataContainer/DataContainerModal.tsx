import React, {useState} from 'react';
import Table from "../../../Table";
import Icons from "../../../../assets/Icons";


const DataContainerModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='relative'>
            <div
                className="w-[32px] h-[32px] rounded-full bg-white hover:bg-ct-blue-20 cursor-pointer flex items-center justify-center"
                onClick={() => setOpen(true)}
            >
                <img
                    src={Icons.sourceDistributionMenu}
                    alt=""/>
            </div>

            {open ? (
               <div>

                   <div className='absolute'>
                       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] animate-fadeIn outline-none focus:outline-none">
                           <div className="fixed top-0 left-0 w-full h-screen z-[90]"
                                onClick={() => setOpen(false)}/>
                           <div className="relative w-auto my-6 mx-auto max-w-5xl z-[110] ">
                               {/*content*/}
                               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                   {/*header*/}
                                   <div
                                       className="flex items-start justify-between pt-5 pb-5 pl-5 pr-5 bg-ct-blue-05 rounded-t-lg">
                                       <div>
                                           <h3 className="text-heading-6 font-medium text-ct-blue-90">
                                               Distribution source-wise data distribution
                                           </h3>
                                           <p className="text-small font-normal text-ct-blue-90">(valid: 1000h, last
                                               update: 22 Aug 2022)</p>
                                       </div>

                                       <div
                                           onClick={() => setOpen(false)}
                                           className="h-[32px] w-[32px] rounded-full bg-white flex items-center justify-center hover:bg-ct-blue-20 active:bg-bg-ct-blue-20 focus:outline-none focus:ring focus:ring-ct-blue-05 cursor-pointer">
                                           <img src={Icons.CloseIconButton} alt=""/>
                                       </div>


                                   </div>
                                   {/*body*/}
                                   <div className="relative flex-auto pt-2 pb-5 pr-5 pl-5">
                                       <Table.Type3/>
                                   </div>
                                   {/*footer*/}

                               </div>
                           </div>
                       </div>
                       <div className="bg-opacity-25 fixed inset-0 z-[90] bg-black animate-fadeIn"></div>
                   </div>
               </div>
            ) : null}

        </div>
    );
};

export default DataContainerModal;