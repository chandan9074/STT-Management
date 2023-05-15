import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react"
import Buttons from "../../../../components/Buttons"
import { SearchBox } from "../../../../components/SearchBox"
import Table from "../../../../components/Table"
import { AudioManagementContext } from "../../../../context/AudioManagementProvider"
import { Filter } from "../../../../components/Filter"
import { targetFilterListDT } from "../../../../types/assignTypes"
import { collectedAudioAllCheckingStatusFilterData } from "../../../../data/audioManagement/AudioManagementData"
import { allCheckedAudioDT } from "../../../../types/audioManagementTypes"
import { CustomModal } from "../../../../components/common/CustomModal"
import Icons from "../../../../assets/Icons"
import { callingToast } from "../../../../helpers/Utils"

const AllCheckedAudios = () => {

  const [selectedRowsData, setSelectedRowSData] = useState<allCheckedAudioDT[]>([]);
  const [isConfirmCancelModal, setIsConfirmCancelModal] = useState<boolean>(false);

  const { getAllCheckedAudiosData, allCheckedAudiosData } = useContext(AudioManagementContext)

  useEffect(() => {
    getAllCheckedAudiosData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header selectedRowsData={selectedRowsData} isConfirmCancelModal={isConfirmCancelModal} setIsConfirmCancelModal={setIsConfirmCancelModal} />
      <Table.Type18 data={allCheckedAudiosData} setSelectedRowSData={setSelectedRowSData} />
    </div>
  )
}

export default AllCheckedAudios

type Props = {
  selectedRowsData: allCheckedAudioDT[],
  setIsConfirmCancelModal: Dispatch<SetStateAction<boolean>>,
  isConfirmCancelModal: boolean
}

const Header = ({ selectedRowsData, setIsConfirmCancelModal, isConfirmCancelModal }: Props) => {

  const [count, setCount] = useState<number>(0);
  const [filterList, setFilterList] = useState<targetFilterListDT>({
    script: [],
    audioChecker: [],
    audioChecker_district: [],
    audioChecker_details: [],
    collector: [],
    collector_district: [],
    collector_details: [],
    speaker: [],
    speaker_gender: [],
    speaker_age: [],
    speaker_district: [],
    speaker_details: [],
    audioSubmissionPeriod: [],
    status: [],
  })

  const { collectedAudioAllCheckingStatusScript, getCollectedAudioAllCheckingStatusScript, collectedAudioAllCheckingStatusCollector, getCollectedAudioAllCheckingStatusCollector, getCollectedAudioAllCheckingStatusSpeakers, collectedAudioAllCheckingStatusSpeaker, collectedAudioAllCheckingStatusChecker, getCollectedAudioAllCheckingStatusChecker, postReassignAudios } = useContext(AudioManagementContext);

  const prevScriptFilterRef = useRef(collectedAudioAllCheckingStatusScript);
  const prevCollectedAudioCollectorRef = useRef(collectedAudioAllCheckingStatusCollector);
  const prevCollectedAudioSpeakersRef = useRef(collectedAudioAllCheckingStatusSpeaker);
  const prevCollectedAudioCheckerRef = useRef(collectedAudioAllCheckingStatusChecker);



  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key].length > 0) {
        if (key === "script" || key === "collector" || key === "speaker" || key === "audioUploadPeriod" || key === "status" || key === "audioChecker") {
          count += 1
        }
      }
    }
    setCount(count)
  }, [filterList]);

  useEffect(() => {
    getCollectedAudioAllCheckingStatusScript();
    getCollectedAudioAllCheckingStatusCollector();
    getCollectedAudioAllCheckingStatusSpeakers();
    getCollectedAudioAllCheckingStatusChecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    if (collectedAudioAllCheckingStatusScript !== prevScriptFilterRef.current) {
      const collectorDetailsObject = collectedAudioAllCheckingStatusFilterData.find(obj => obj.key === "script");
      if (collectorDetailsObject) {
        collectorDetailsObject.child = collectedAudioAllCheckingStatusScript;
      }
    }
    if (collectedAudioAllCheckingStatusCollector !== prevCollectedAudioCollectorRef.current) {
      const collectorObject = collectedAudioAllCheckingStatusFilterData.find(obj => obj.key === "collector");
      if (collectorObject && collectorObject.selects) {
        // collectorDetailsObject.child = collectedAudioAllCheckingStatusCollector;
        const collectorDetailsObject = collectorObject.selects.find(obj => obj.key === "collector_details");
        if (collectorDetailsObject) {
          collectorDetailsObject.child = collectedAudioAllCheckingStatusCollector;
        }
      }
    }
    if (collectedAudioAllCheckingStatusChecker !== prevCollectedAudioCheckerRef.current) {
      const checkerObject = collectedAudioAllCheckingStatusFilterData.find(obj => obj.key === "audioChecker");
      if (checkerObject && checkerObject.selects) {
        // collectorDetailsObject.child = collectedAudioAllCheckingStatusChecker;
        const checkerDetailsObject = checkerObject.selects.find(obj => obj.key === "audioChecker_details");
        if (checkerDetailsObject) {
          checkerDetailsObject.child = collectedAudioAllCheckingStatusChecker;
        }
      }
    }
    if (collectedAudioAllCheckingStatusSpeaker !== prevCollectedAudioSpeakersRef.current) {
      const speakerObject = collectedAudioAllCheckingStatusFilterData.find(obj => obj.key === "speaker");
      if (speakerObject) {
        // collectorDetailsObject.child = collectedAudioAllCheckingStatusCollector;
        const selectObject = speakerObject.formData && speakerObject.formData.find(obj => obj.type === "multiple-select");
        if (selectObject && selectObject.selects) {
          const speakers = selectObject.selects.find(obj => obj.key === "speaker_details");
          if (speakers) {
            speakers.child = collectedAudioAllCheckingStatusSpeaker;
          }
        }
      }
    }

    prevScriptFilterRef.current = collectedAudioAllCheckingStatusScript;
    prevCollectedAudioCollectorRef.current = collectedAudioAllCheckingStatusCollector;
    prevCollectedAudioSpeakersRef.current = collectedAudioAllCheckingStatusSpeaker;
    prevCollectedAudioCheckerRef.current = collectedAudioAllCheckingStatusChecker;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectedAudioAllCheckingStatusScript, collectedAudioAllCheckingStatusCollector, collectedAudioAllCheckingStatusSpeaker, collectedAudioAllCheckingStatusChecker]);


  const handleFilterList = (key: string, value: string) => {
    if (filterList[key].includes(value)) {
      if (key === "collector_district" || key === "collector_details") {
        setFilterList({
          ...filterList,
          [key]: filterList[key].filter((item) => item !== value),
          collector: filterList.collector.filter((item) => item !== value),
        });
      }
      else if (key === "audioChecker_district" || key === "audioChecker_details") {
        setFilterList({
          ...filterList,
          [key]: filterList[key].filter((item) => item !== value),
          audioChecker: filterList.audioChecker.filter((item) => item !== value),
        });
      }
      else if (key === "speaker_gender" || key === "speaker_age" || key === "speaker_district" || key === "speaker_details") {
        setFilterList({
          ...filterList,
          [key]: filterList[key].filter((item) => item !== value),
          speaker: filterList.speaker.filter((item) => item !== value),
        });
      }
      else {
        setFilterList({
          ...filterList,
          [key]: filterList[key].filter((item) => item !== value),
        });
      }
    } else {
      if (key === "collector_district" || key === "collector_details") {
        setFilterList({
          ...filterList,
          [key]: [...filterList[key], value],
          collector: [...filterList.collector, value],
        });
      }
      else if (key === "audioChecker_district" || key === "audioChecker_details") {
        setFilterList({
          ...filterList,
          [key]: [...filterList[key], value],
          audioChecker: [...filterList.audioChecker, value],
        });
      }
      else if (key === "speaker_gender" || key === "speaker_age" || key === "speaker_district" || key === "speaker_details") {
        setFilterList({
          ...filterList,
          [key]: [...filterList[key], value],
          speaker: [...filterList.speaker, value],
        });
      }
      else {
        setFilterList({
          ...filterList,
          [key]: [...filterList[key], value],
        });
      }
    }
  }
  const handleReset = (key: string, type: "single" | "all") => {
    if (type === "all") {
      setFilterList({
        script: [],
        audioChecker: [],
        audioChecker_district: [],
        audioChecker_details: [],
        collector: [],
        collector_district: [],
        collector_details: [],
        speaker: [],
        speaker_gender: [],
        speaker_age: [],
        speaker_district: [],
        speaker_details: [],
        audioSubmissionPeriod: [],
        status: [],
      })
    }
    else {
      setFilterList({
        ...filterList,
        [key]: [],
      });
    }
  }

  const handleSubmitFilter = () => {
  }

  const onDrawerClose = () => {
    const selectedIds = selectedRowsData.map(item => item.id)
    setIsConfirmCancelModal(false)

    postReassignAudios(selectedIds)

    callingToast(selectedIds.length > 1 ? `${selectedIds[selectedIds.length - 1]} & ${selectedIds.length - 1} others has been reasigned.` : `${selectedIds[selectedIds.length - 1]} has been reasigned`)

  }

  return (
    <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
      <div>
        <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>All checked Audios</h1>
        <p className='text-small text-ct-blue-60 mt-1.5 font-medium'>{((selectedRowsData.length < 10) && selectedRowsData.length !== 0) ? `0` + selectedRowsData.length : selectedRowsData.length} Selected</p>
      </div>
      <div className='flex items-center gap-x-6'>
        {
          (selectedRowsData.length > 0) && <div className="flex items-center gap-x-3">
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
              onClick={() => setIsConfirmCancelModal(!isConfirmCancelModal)}
            />

            {
              (isConfirmCancelModal) &&
              <CustomModal.Type3
                open={isConfirmCancelModal}
                setOpen={setIsConfirmCancelModal}
                onSave={onDrawerClose}
                title='Do you want to re-assign this and make available to other Audio Checker?'
                cancelText='No'
                saveText='Yes'
                icon={Icons.AssignmentReturn}
                iconHeight='h-9'
                iconWidth='w-9'
              />
            }

          </div>
        }
        <div className='flex items-center gap-x-3'>
          <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
          <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={collectedAudioAllCheckingStatusFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
        </div>
      </div>

    </div>
  )
}