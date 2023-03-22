import { useState, useEffect } from 'react';
interface IReturn{
    open:boolean;
    handleOpen:()=>void;
}

const useOutsideClick=(ref:React.RefObject<HTMLElement>):IReturn=>{
    const [open,setOpen]=useState(false);

    useEffect(() => {
        const handleClickOutside=(event: MouseEvent | null) =>{
          if (ref.current && !ref.current?.contains(event?.target as Node)) {
             setOpen(false)
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);

     const handleOpen=()=>{
        setOpen(prev=>!prev);
     }

      return{
        open:open,
        handleOpen
      }

}

export default useOutsideClick;