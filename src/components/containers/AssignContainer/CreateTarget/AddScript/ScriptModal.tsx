import React, { useEffect, useRef, useState } from 'react'
import { singleScriptDT } from '../../../../../types/assignTypes'

type Props = {
    data: singleScriptDT
    modalOpen: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ScriptModal = ({ modalOpen, setModalOpen, data }: Props) => {

    const divRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [scriptHidden, setScriptHidden] = useState(true)

    useEffect(() => {
        if (divRef.current) {
            setHeight(divRef.current.offsetHeight);
            console.log('height:', divRef.current.offsetHeight);
        }
        console.log("its", height)
    }, [divRef]);


    return (
        <div className='fixed top-0 left-0 w-full h-screen z-[9999] flex items-center justify-center animate-fadeIn'>
            <div className='fixed top-0 left-0 bg-black w-full h-screen z-[9999] bg-opacity-25 cursor-pointer' onClick={() => setModalOpen(!modalOpen)} />
            <div className='p-4 rounded-[7px] bg-white relative z-[99999]'>
                <div className='w-[752px] flex items-center justify-between mb-3.5'>
                    <h3 className='text-heading-5 text-blue-gray-80 font-semibold m-0'>{data.id}- {data.title}</h3>
                    <h5 className='text-xs text-blue-gray-60 font-normal m-0'>{data.frequency} times used</h5>
                </div>
                <hr />
                <div onClick={() => setScriptHidden(!scriptHidden)} ref={divRef} className={`mt-3.5 pr-1 cursor-pointer text-left duration-300 ${scriptHidden ? "script-modal-description max-h-[9rem] " : "h-[26rem] w-[752px] overflow-y-auto"} `}>{data.description}</div>
                {height > 143 && <button className={`text-small text-ct-blue-60 font-normal ml-auto ${scriptHidden ? "block" : "hidden"}`} onClick={() => setScriptHidden(!scriptHidden)}>more</button>}
            </div>
        </div>
    )
}

export default ScriptModal