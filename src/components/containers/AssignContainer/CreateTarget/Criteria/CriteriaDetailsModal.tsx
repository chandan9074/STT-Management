import React from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import { CustomModal } from "../../../../common/CustomModal";
import "../../../../../assets/css/table/criteria_details.css";
import { useAssigneeContext } from "../../../../../context/AssignProvider";
import Image from "../../../../Image";
type Props = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CriteriaDetailsModal = ({ modalOpen, setModalOpen }: Props) => {
  const { singleCriteriaData } = useAssigneeContext();

  const singleValue1 = [
    {
      title: 'Gender',
      value: singleCriteriaData?.gender || '-'
    },
    {
      title: 'Age Range',
      value: singleCriteriaData?.ageRange || '-'
    },
    {
      title: 'Division/ District',
      value: singleCriteriaData?.district
    },
    {
      title: 'profession',
      value: singleCriteriaData?.profession || '-'
    },
    {
      title: 'Econimic Situation',
      value: singleCriteriaData?.economicSituation || '-'
    },
    {
      title: 'Education',
      value: singleCriteriaData?.education || '-'
    },
    {
      title: 'Smoking Habit',
      value: singleCriteriaData?.healthFactors?.includes('Smoker') ? 'Yes' : 'No'
    },
    {
      title: 'Hearing Disability',
      value: singleCriteriaData?.healthFactors?.includes('Hearing') ? 'Yes' : 'No'
    },
    {
      title: 'Shutter',
      value: singleCriteriaData?.healthFactors?.includes('Stutter') ? 'Yes' : 'No'
    },
    {
      title: 'Recording Area',
      value: singleCriteriaData?.recordingArea || '-'
    },
    {
      title: 'Recording Distance',
      value: singleCriteriaData?.recordingDistance || '-'
    },

  ]

  const singleValue2 = [
    {
      title: 'Target',
      value: singleCriteriaData?.target || '-'
    },
    {
      title: 'Deadline',
      value: singleCriteriaData?.deadline || '-'
    },
    {
      title: 'Reminder',
      value: singleCriteriaData?.reminder || []
    },
    {
      title: 'Note',
      value: singleCriteriaData?.remark || '-'
    },

  ]


  return (
    <CustomModal.Primary
      open={modalOpen}
      setOpen={setModalOpen}
      width={"892px"}
    >
      <div className="flex flex-col p-6 pr-9 w-full">
        {/* heading  */}
        <div className="flex items-center w-full justify-between">
          <h2 className="text-[#143252] font-[500] text-[18px]">
            Criteria Details
          </h2>
          <Buttons.IconButton.Circle
            onClick={() => setModalOpen(false)}
            size="medium"
            variant="CT-Blue"
            icon={<img src={Icons.CloseIconButton} alt="" />}
            border="border"
            background="white"
          />
        </div>
        {/* user info  */}
        <div >
          {
            singleCriteriaData &&

            <div className='mt-[30px]'>
              <div

                className={`bg-ct-blue-10 h-[54px] w-[176px] rounded-[65px] flex justify-center items-center gap-x-2 cursor-pointer`}
              >
                <Image.RoleImage role={singleCriteriaData?.gender === 'Male' ? 'Speaker' : 'speakerFemale'} />
                <div>
                  {/* <h1 className='text-ct-blue-80 text-xxs'>Target ID- 23-23456-7</h1> */}
                  <h1 className='text-ct-blue-90 text-xxs font-medium'>target: {singleCriteriaData.target}</h1>
                </div>
              </div>


            </div>

          }
        </div>

        <div>

          <div className='mt-6 flex justify-between'>
            <div >
              {singleValue1?.map((item: any, i: number) => (
                <div className={` grid grid-cols-12`} key={i}>

                  <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue1.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3 pr-2 pl-3`}>
                    <h1 className="text-blue-gray-75 font-medium text-xxs leading-15px whitespace-nowrap">
                      {item?.title}
                    </h1>
                  </div>

                  <div className="col-span-8 pt-3 pr-2 pl-3">
                    {item?.title === "Division/ District" ? (
                      <h1 className="text-blue-gray-80 font-medium text-small  leading-15px">
                        {item?.value?.map((value: string, j: number) => {
                          return value + `${(item.value.length - 1) !== j ? ', ' : ''}`;
                        })}
                      </h1>
                    ) : (
                      <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                        {item?.value}
                      </h1>
                    )}
                  </div>

                </div>

              ))}
            </div>

            <div className='w-[391px] '>
              {singleValue2?.map((item: any, i: number) => (
                <div className={` grid grid-cols-12`} key={i}>

                  <div className={`${(i === 0) && 'rounded-t-[5px]'} ${(i === (singleValue2.length - 1)) && 'rounded-b-[5px] pb-[10px]'} col-span-4 bg-ct-blue-05 pt-3  pl-3`}>
                    <h1 className="text-blue-gray-75 font-medium text-xxs  leading-15px">
                      {item?.title}
                    </h1>
                  </div>

                  <div className="col-span-8 pt-3 pr-2 pl-3">
                    {
                      item?.title === "Reminder" ? (
                        <h1 className="text-blue-gray-80 font-medium text-small  leading-15px">
                          {
                            item.value?.length > 0 ?
                              item?.value?.map((value: string, j: number) => {
                                return value + `${(item.value.length - 1) !== j ? ', ' : ''}`;
                              }) :
                              '-'
                          }
                        </h1>
                      ) : (
                        <h1 className="text-blue-gray-80 font-medium text-small leading-15px">
                          {item?.value}
                        </h1>
                      )}
                  </div>

                </div>

              ))}
            </div>

          </div>

        </div>


      </div>
    </CustomModal.Primary>
  );
};

export default CriteriaDetailsModal;
