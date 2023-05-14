import React from "react";
import Icons from "../../../../../assets/Icons";
import Buttons from "../../../../Buttons";
import { CustomModal } from "../../../../common/CustomModal";
import "../../../../../assets/css/table/criteria_details.css";
import Image from "../../../../Image";
import { CriteriaItemDT } from "../../../../../types/assignTypes";
type Props = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: CriteriaItemDT;
};

const CriteriaDetailsModal = ({ modalOpen, setModalOpen, data }: Props) => {

  console.log("data=========", data)
  const singleValue1 = [
    {
      title: 'Gender',
      value: data?.gender || '-'
    },
    {
      title: 'Age Range',
      value: data?.ageRange || '-'
    },
    {
      title: 'Division/ District',
      value: data?.district
    },
    {
      title: 'profession',
      value: data?.profession || '-'
    },
    {
      title: 'Economic Situation',
      value: data?.economicSituation || '-'
    },
    {
      title: 'Education',
      value: data?.education || '-'
    },
    {
      title: 'Smoking Habit',
      value: data?.healthFactors?.includes('Smoker') ? 'Yes' : 'No'
    },
    {
      title: 'Hearing Disability',
      value: data?.healthFactors?.includes('Hearing') ? 'Yes' : 'No'
    },
    {
      title: 'Shutter',
      value: data?.healthFactors?.includes('Stutter') ? 'Yes' : 'No'
    },
    {
      title: 'Recording Area',
      value: data?.recordingArea || '-'
    },
    {
      title: 'Recording Distance',
      value: data?.recordingDistance || '-'
    },

  ]

  const singleValue2 = [
    {
      title: 'Target',
      value: data?.target || '-'
    },
    {
      title: 'Deadline',
      value: data?.deadline || '-'
    },
    {
      title: 'Reminder',
      value: data?.reminder || []
    },
    {
      title: 'Note',
      value: (typeof (data?.remark) !== "string" && data?.remark?.Des) || '-'
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
            data &&

            <div className='mt-[30px]'>
              <div

                className={`bg-ct-blue-10 h-[54px] w-[176px] rounded-[65px] flex justify-center items-center gap-x-2`}
              >
                <Image.RoleImage role={data?.gender === 'Male' ? 'Speaker' : 'speakerFemale'} />
                <div>
                  {/* <h1 className='text-ct-blue-80 text-xxs'>Target ID- 23-23456-7</h1> */}
                  <h1 className='text-ct-blue-90 text-xxs font-medium'>Target ID: {data.target}</h1>
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
