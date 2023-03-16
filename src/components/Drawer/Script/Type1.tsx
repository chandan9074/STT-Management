import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import Icons from "../../../assets/Icons";
import { scriptColorData } from "../../../data/assign/AssignData";
import { getRandomInt } from "../../../helpers/Utils";
import Buttons from "../../Buttons";
import { SearchBox } from "../../SearchBox";
import Table from "../../Table";
import { useAssigneeContext } from "../../../context/AssignProvider";
import Pagination from "../../Pagination";
import { postSelectedScriptBodyDT, singleScriptDT } from "../../../types/assignTypes";

type Props = {
    isDrawerOpen: boolean,
    drawerClose: () => void,
    modalOpen: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setModalScript: React.Dispatch<React.SetStateAction<singleScriptDT>>
    isRecreate?: boolean
}

const Type1 = ({ isDrawerOpen, drawerClose, modalOpen, setModalOpen, setModalScript, isRecreate }: Props) => {
    const [scriptParams, setScriptParams] = useState({ page: 1, pageSize: 15 })
    const [selectedScript, setSelectedScript] = useState<singleScriptDT[]>([])
    const [uncheckedScript, setUncheckedScript] = useState<string>("")

    const { postSelectedScript, setScriptForRecreate } = useAssigneeContext()

    const { getAllScript, allScript } = useAssigneeContext()

    useEffect(() => {
        getAllScript(scriptParams)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scriptParams])

    const handleScriptRemove = (id: string) => {
        setUncheckedScript(id)
        const newScript = selectedScript.filter((item) => item.id !== id);
        setSelectedScript(newScript)
    }

    const handlePageChange = (page: number) => {
        setScriptParams({ ...scriptParams, page })
    }

    const handleSelectedScript = (value: singleScriptDT[]) => {
        setSelectedScript(value)
    }

    const onClose = () => {
        drawerClose();
    };

    const handleSubmit = () => {
        if (isRecreate) {
            let newScript = [];
            for (let script of selectedScript) {
                newScript.push(script.id)
            }
            // console.log("newscript", newScript)

            const body: postSelectedScriptBodyDT = {
                scriptList: newScript
            }

            postSelectedScript(body)
            setSelectedScript([])
            drawerClose();
        }
        else {
            if (selectedScript.length > 0) {
                setScriptForRecreate(prev => [...prev, ...selectedScript])
                setSelectedScript([])
                drawerClose();
            }
        }
    }

    return (
        <Drawer
            closeIcon={false}
            placement="right"
            onClose={onClose}
            open={isDrawerOpen}
            // width={drawer ? "auto" : "555px"}
            style={{ position: 'absolute', top: '0', right: selectedScript.length > 0 ? "0" : "-325px", zIndex: 999, width: "auto", transition: "0.3s" }}
        >
            <div className={`relative flex items-start `}>
                <div className={`bg-ct-blue-05 w-[560px] flex flex-col`}>
                    <div className='p-6'>
                        <div className='flex items-center gap-x-7 mb-6'>
                            <Buttons.IconButton.Circle
                                size='medium'
                                variant="CT-Blue"
                                icon={<img src={Icons.CloseIconButton} alt="" />}
                                border='border'
                                background="white"
                                onClick={() => onClose()}
                            />
                            <h1 className='text-ct-blue-95 text-[18px] font-medium'>Select Script</h1>
                        </div>
                        <div className='inline-flex items-center justify-between w-full'>
                            <div className='inline-flex items-center'>
                                <SearchBox.Type1 inputWidth='w-[172px]' placeholder='Search' bgColor='bg-blue-gray-A10' paddingX='px-3' paddingY='py-2' textColor='text-blue-gray-80' />
                                {/* <Filter.Type1 filterData={filterData} align="center" /> */}
                            </div>
                            {selectedScript.length > 0 && <Buttons.LabelButton.Primary label='Save' size='small' variant='Blue' onClick={handleSubmit} />}
                        </div>
                    </div>
                    <div className='h-[calc(100vh-30vh)] overflow-y-scroll custom-scrollBar pr-1'>
                        {allScript?.scripts && <Table.Type9 data={allScript.scripts} handleSelectedScript={handleSelectedScript} uncheckedScript={uncheckedScript} isDrawerOpen={isDrawerOpen} />}
                    </div>
                    <div className="self-end py-2.5 pr-3.5">
                        {allScript?.totalScript && <Pagination.Type1 pageSize={scriptParams.pageSize} total={allScript?.totalScript} handlePageChange={handlePageChange} />}
                    </div>
                </div>
                <SubDrawer data={selectedScript} setModalOpen={setModalOpen} modalOpen={modalOpen} setModalScript={setModalScript} handleScriptRemove={handleScriptRemove} />
            </div>
        </Drawer>
    );
};


export default Type1;

type subDrawerProps = {
    data: singleScriptDT[];
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalOpen: boolean;
    setModalScript: React.Dispatch<React.SetStateAction<singleScriptDT>>
    handleScriptRemove: (id: string) => void;
}

const SubDrawer = ({ data, modalOpen, setModalOpen, setModalScript, handleScriptRemove }: subDrawerProps) => {

    type DomainCount = {
        [key: string]: number;
    };

    const countScriptsByDomain = (scripts: singleScriptDT[]) => {
        const domainCount: DomainCount = {};
        scripts.forEach((script) => {
            const domain = script.domain;
            if (domainCount[domain] === undefined) {
                domainCount[domain] = 1;
            } else {
                domainCount[domain]++;
            }
        });

        const countsArray = [];
        for (const [domain, count] of Object.entries(domainCount)) {
            countsArray.push({ domain, count });
        }
        return countsArray;
    }

    return (
        <div className='relative w-[328px]'>
            <div className='p-6'>
                <h1 className='text-ct-blue-95 text-[18px] font-medium'>Selected Scripts- {data.length}</h1>
            </div>
            <div className='flex items-center gap-x-2 ml-4 w-[312px] overflow-x-auto scrollbar-hide'>
                {countScriptsByDomain(data).map((item, index) => (
                    <div className='py-1.5 px-3 rounded-[20px] bg-ct-blue-05 text-blue-gray-75 font-medium whitespace-nowrap'>{item.domain} {item.count}</div>
                ))}
                {/* <div className='py-1.5 px-3 rounded-[20px] bg-ct-blue-05 text-blue-gray-75 font-medium whitespace-nowrap'>Natural and Pure Sceince (10)</div> */}
            </div>
            <div className='pb-3 mt-3 pl-4 pr-2 flex flex-col gap-y-2 h-[calc(100vh-20vh)] overflow-y-scroll custom-scrollBar'>
                {data.map((item, index) => (
                    <div className={`${scriptColorData[getRandomInt(0, 6, index)].rowBg} rounded-[4px] py-3 px-2 inline-flex items-center gap-x-2 w-full`}>
                        <button className='inline-flex gap-x-2 items-center' onClick={() => { setModalOpen(!modalOpen); setModalScript(item) }}><div className={`${scriptColorData[getRandomInt(0, 6, index)].id} text-xxs font-semibold px-1.5 py-0.5 rounded-[4px] ${scriptColorData[getRandomInt(0, 6, index)].idBg} w-14 truncate`}>{item.id}</div>
                            <p className='m-0 text-ct-blue-95 text-xs font-[300] truncate text-ellipsis w-[190px]'>{item.description}</p></button>
                        <button onClick={() => handleScriptRemove(item.id)}><img src={Icons.cancel} alt="" /></button>
                    </div>
                ))}
            </div>
        </div>
    )
}