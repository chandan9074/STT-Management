// import React, { useContext, useEffect } from 'react'
// import Table from '../../../../components/Table'
// import { AudioManagementContext } from '../../../../context/AudioManagementProvider'

// const ValidatedFiles = () => {

//     const {getValidatedFilesData,validatedFilesData} = useContext(AudioManagementContext)

//     useEffect(()=>{
//         getValidatedFilesData()
//            // eslint-disable-next-line react-hooks/exhaustive-deps
//       },[])

//   return (
//     <div>
//         <Table.Type31 data={validatedFilesData}/>
//     </div>
//   )
// }

// export default ValidatedFiles


import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import Icons from "../../../../assets/Icons";
import Buttons from "../../../../components/Buttons";
import { CustomModal } from "../../../../components/common/CustomModal";
import TableHeading from "../../../../components/common/TableHeading";
import { CategoryMap } from "../../../../components/containers/dashboard/DataContainer/CollectData";
import Table from "../../../../components/Table";
import { AudioManagementContext } from "../../../../context/AudioManagementProvider";
import { validatedFilesDT } from "../../../../types/audioManagementTypes";

const ValidatedFiles = () => {

  const [activeTab, setActiveTab] = useState<string>("Sentence");
  const [selectedSpeech, setSelectedSpeech] = useState<validatedFilesDT[]>([] as validatedFilesDT[]);

  const { getValidatedFilesData, validatedFilesData } = useContext(AudioManagementContext);

  useEffect(() => {
    getValidatedFilesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const allTergetMenu = (key: string) => {
    const Category: CategoryMap = {
      "Sentence": <><Table.Type31 data={validatedFilesData} /></>,
      "Word": <></>,
      "Phoneme": <></>
    };
    return Category[key];
  };

  return (
    <div className="pl-[26px]">
      <Header setActiveTab={setActiveTab} selectedSpeech={selectedSpeech} setSelectedSpeech={setSelectedSpeech} />
      <div>
        {allTergetMenu(activeTab)}
      </div>
    </div>
  );
};

type Props = {
  setActiveTab: Dispatch<SetStateAction<string>>;
  selectedSpeech: validatedFilesDT[];
  setSelectedSpeech: React.Dispatch<React.SetStateAction<validatedFilesDT[]>>;
}


const Header = ({ setActiveTab, selectedSpeech, setSelectedSpeech }: Props) => {

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


export default ValidatedFiles;

