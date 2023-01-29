import React, { useState } from 'react';
import Table from "../../../Table";
import Icons from "../../../../assets/Icons";
import { collectDataDT, createDataDT } from '../../../../types/dashboardTypes';
import Buttons from '../../../Buttons';

interface Props {
    data: createDataDT | collectDataDT;
    name: string;
    activePanel: string
}

const DataContainerModal = ({ data, name, activePanel }: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='relative'>
            <Buttons.IconButton.Circle
                size='medium'
                variant='CT-Blue'
                border='none'
                icon={<img
                    src={Icons.sourceDistributionMenu}
                    alt="" />}
                onClick={() => setOpen(true)}

            />

            {open ? (
                <div>

                    <div className='absolute'>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] animate-fadeIn outline-none focus:outline-none">
                            <div className="fixed top-0 left-0 w-full h-screen z-[90]"
                                onClick={() => setOpen(false)} />
                            <div className="relative w-auto my-6 mx-auto max-w-5xl z-[110] ">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div
                                        className="flex items-start justify-between pt-5 pb-5 pl-5 pr-5 bg-ct-blue-05 rounded-t-lg">
                                        <div>
                                            <p className='text-xxs font-medium text-ct-blue-40'>{name.toUpperCase()} DATA</p>
                                            <h3 className="text-heading-6 font-medium text-ct-blue-90">
                                                {activePanel} data distribution
                                            </h3>
                                            <p className="text-small font-normal text-ct-blue-90">(valid: {data.totalValid}h, last
                                                update: {data.lastUpdate})</p>
                                        </div>


                                        <Buttons.IconButton.Circle
                                            size='medium'
                                            variant="CT-Blue"
                                            icon={<img src={Icons.CloseIconButton} alt="" />}
                                            border='border'
                                            onClick={() => setOpen(false)}
                                            background="white"
                                        />


                                    </div>
                                    {/*body*/}
                                    <div className="relative flex-auto pt-2 pb-5 pr-5 pl-5">
                                        <Table.Type3 data={data} activePanel={activePanel} />
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