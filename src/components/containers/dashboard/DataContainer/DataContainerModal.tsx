import React, { useState } from 'react';
import Table from "../../../Table";
import Icons from "../../../../assets/Icons";
import { collectDataDT, createDataDT } from '../../../../types/dashboardTypes';
import Buttons from '../../../Buttons';
import { CustomModal } from '../../../common/CustomModal';

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

            <CustomModal.Primary
                open={open}
                setOpen={setOpen}
                width='853px'
            >
                <div>
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
            </CustomModal.Primary>
        </div>
    );
};

export default DataContainerModal;