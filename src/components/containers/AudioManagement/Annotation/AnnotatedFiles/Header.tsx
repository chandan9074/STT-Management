import React, { Dispatch, SetStateAction, useState } from 'react';
import Buttons from '../../../../Buttons';
import { annotatedFilesDT } from '../../../../../types/audioManagementTypes';
import TableHeading from '../../../../common/TableHeading';
import { CustomModal } from '../../../../common/CustomModal';
import Icons from '../../../../../assets/Icons';

type Props = {
    setActiveTab: Dispatch<SetStateAction<string>>;
    selectedScript: annotatedFilesDT[];
    setSelectedScript: React.Dispatch<React.SetStateAction<annotatedFilesDT[]>>;
}

const Header = ({ setActiveTab, selectedScript, setSelectedScript }: Props) => {

    const [isConfirmModal, setIsConfirmModal] = useState<boolean>(false);
    // const [isClaimModal, setIsClaimModal] = useState<boolean>(false);

    const onSave = () => {
        setIsConfirmModal(false);
    }

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <TableHeading title='Annotated Files' />
                </div>
                <div className='flex items-center'>
                    <Buttons.BgHoverBtn
                        title="Re-Assign"
                        paddingY="py-2"
                        paddingX="px-4"
                        borderRadius="rounded-[6px]"
                        textColor="text-secondary-blue-50"
                        fontSize="text-small"
                        fontWeight="font-medium"
                        duration="duration-300"
                        hoverBgColor="hover:bg-white"
                        onClick={() => setIsConfirmModal(true)}
                    // marginX="mx-2"
                    />
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    {/* <p className='text-heading-6 font-medium text-ct-blue-95 pb-[11px]'>Annotated Files</p> */}
                    <Buttons.TabButton.Secondary setActiveData={setActiveTab} tabLabel={['Sentence', "Word", "Phoneme"]} />
                </div>
            </div>

            <CustomModal.Type3
                open={isConfirmModal}
                setOpen={setIsConfirmModal}
                onSave={onSave}
                title='Do you want to re-assign this and make available to other annotator?'
                cancelText='No'
                saveText='Yes'
                icon={Icons.AssignmentReturn}
                iconHeight='h-9'
                iconWidth='w-9'
            />

            {/* <CustomModal.Primary
                setOpen={setIsClaimModal}
                open={isClaimModal}
                width="658px"
            >
                <ClaimApplicationModal />
            </CustomModal.Primary> */}
        </div>
    );
};

export default Header;