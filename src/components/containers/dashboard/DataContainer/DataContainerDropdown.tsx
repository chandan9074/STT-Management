import React, {useState} from 'react';
import Icons from "../../../../assets/Icons";

interface Props {
    data: any;
    handleActivePanel: any;
}

const DataContainerDropdown = ({data, handleActivePanel}: Props) => {

    const [toggleOpen, setToggleOpen] = useState<boolean>(false)
    const [active, setActive] = useState<string>("Distribution Source-wise")

    const handleActiveButton = (value: any): any => {
        setActive(value.value)
        handleActivePanel(value.value)
        setToggleOpen(false)
    }
    return (
        <div className={`relative`} >

            <div
                onClick={() => setToggleOpen(!toggleOpen)}
                className={`flex gap-2 items-center justify-centerl hover:bg-ct-blue-20 cursor-pointer px-2 py-1 rounded-[4px]  
                ${toggleOpen ? "bg-ct-blue-20" : "bg-white"}
                `}>
                <p className="text-heading-6 font-medium text-ct-blue-60">{active}</p>
                <img
                    className="h-[7px] w-[10px]"
                    src={Icons.blueDropArrow}
                    alt=""/>
            </div>

            {
                toggleOpen ? <div >
                   <div>
                       <div className="fixed top-0 left-0 w-full h-screen z-[80]"
                            onClick={() => setToggleOpen(false)}/>
                       <div className="absolute z-[9999]">
                           <div
                               className="w-[245px] bg-white mt-1 rounded-[8px] py-[6px] shadow-bottom-light-blue-20">

                               {
                                   data.map((data: any) =>
                                       <div key={data.id}>
                                           <div
                                               onClick={() => handleActiveButton(data)}
                                               className={`flex justify-between items-center text-small font-medium ${active === data.value ?
                                                   "text-ct-blue-60 py-2 bg-ct-blue-10 cursor-pointer hover:bg-ct-blue-10 " :
                                                   "text-blue-gray-80 bg-white cursor-pointer hover:bg-purple-A10 duration-300 py-2"}`}>
                                               <p className={active === data.value ? "border-l-2 border-ct-blue-60 px-2" : "border-l-2 border-white px-2"}>
                                                   {data.value}
                                               </p>
                                               {active === data.value ?
                                                   <img
                                                       src={Icons.CorrectIcon}
                                                       className="w-[17px] h-[12px] mr-2.5"
                                                       alt=""/>
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

export default DataContainerDropdown;