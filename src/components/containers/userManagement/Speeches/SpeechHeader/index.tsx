import RoleImage from '../../../../Image/RoleImage';
import Icons from '../../../../../assets/Icons';
import { speechOtherInfoDT } from '../../../../../types/assignTypes';
import AudioStatusTooltip from '../../../AssignContainer/AllTarget/Statistics/AudioStatusTooltip';
import { tooltipData } from '../../../../../data/assign/AssignData';

const SpeechHeader = ({ data }: { data: speechOtherInfoDT }) => {
  return (
    <div className='grid grid-cols-12 gap-x-24'>
      <div className='col-span-4'>
        <UserInfoPart data={data} />
      </div>
      <div className='col-span-8'>
        <AudioInfoPart data={data} />
      </div>
    </div>
  )
}

export default SpeechHeader;

const UserInfoPart = ({ data }: { data: speechOtherInfoDT }) => {
  return (
    <div className='w-full'>
      <h3 className='mb-0 text-small text-ct-blue-60 font-semibold'>Assigned to</h3>
      <div className='mt-4 bg-blue-gray-05 border-[1px] border-blue-gray-30 p-4'>
        <div className='flex items-center gap-x-2'>
          <RoleImage role={`${data.roleInfo.role}`} width='w-4' height='h-4' />
          <h3 className='text-base text-ct-blue-95 font-semibold mb-0'>{data.roleInfo.name}</h3>
        </div>
        <div className='mt-3 grid grid-cols-12 w-full gap-x-4'>
          <div className='col-span-7 w-full'>
            <div className='flex items-center gap-x-2'>
              <img src={Icons.military_tech} alt="" className='w-4 h-4' />
              <h5 className='text-ct-blue-90-70% text-small mb-0'>{data.roleInfo.role}</h5>
            </div>
            <div className='flex items-center gap-x-2 mt-2'>
              <img src={Icons.mail} alt="" className='w-4 h-4' />
              <h5 className='text-ct-blue-90-70% text-small mb-0'>{data.roleInfo.email}</h5>
            </div>
          </div>
          <div className='col-span-5 w-full'>
            <div className='flex items-center gap-x-2'>
              <img src={Icons.call} alt="" className='w-4 h-4' />
              <h5 className='text-ct-blue-90-70% text-small mb-0'>{data.roleInfo.contact}</h5>
            </div>
            <div className='flex items-center gap-x-2 mt-2'>
              <img src={Icons.home} alt="" className='w-4 h-4' />
              <h5 className='text-ct-blue-90-70% text-small mb-0'>{data.roleInfo.address}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AudioInfoPart = ({ data }: { data: speechOtherInfoDT }) => {
  return (
    <div>
      <div className='flex items-center'>
        <h3 className='text-ct-blue-60 text-small font-semibold mr-7'>Audio Status</h3>
        <div className='flex items-center gap-x-2 mr-6'>
          <div className='w-2 h-2 rounded-full bg-[#00B86E]' />
          <h5 className='font-semibold text-xxs text-ct-blue-90-70%'>Valid</h5>
        </div>
        <div className='flex items-center gap-x-2'>
          <div className='w-2 h-2 rounded-full bg-[#A10008]' />
          <h5 className='font-semibold text-xxs text-ct-blue-90-70%'>Reject</h5>
        </div>
      </div>
      <div className='mt-9'>
        <div className='flex items-center justify-between mb-2'>
          <div className='flex items-center gap-x-4'>
            <h3 className='text-ct-blue-90-70% text-small'>Received : {data.receivedHour}hr, {data.receivedSpeech} speeches;</h3>
            <div className='flex items-center gap-x-2'>
              <img src={Icons.schedule} alt="" />
              <h3 className='text-ct-blue-90-70% text-small'>Last Update: {data.lastUpdate}</h3>
            </div>
          </div>
          <h3 className='text-small text-ct-blue-60 font-medium'>Target: 1000 speeches</h3>
        </div>
        <div className='h-[70px] w-full mb-0.5 flex items-start relative'>
          <div className='h-3 rounded-[10px] w-full bg-blue-gray-20 border-[1px] border-white flex items-center relative z-50'>
            {["valid", "reject"].map((item, index) => (
              <div key={index}
                className={`${item === "valid" ? "bg-[#00B86E]" : "bg-[#A10008]"} h-full ${index === 1 ? "" : "border-r-[1px] border-white"} ${index === 1 ? "rounded-r-[15px]" : ""} ${index === 0 ? "rounded-l-[15px]" : ""} flex justify-center group ${tooltipData.filter(tData => tData.name === (item === "valid" ? "Valid" : "Rejected"))[0].barBgHover}  duration-200`}
                style={{
                  width: `${Math.round((item === "valid" ? ((data.audioStatus.valid * 100) / data.receivedHour) : ((data.audioStatus.invalid * 100) / data.receivedHour)))}%`,
                }}>
                <AudioStatusTooltip data={tooltipData.filter(tData => tData.name === (item === "valid" ? "Valid" : "Rejected"))[0]} hour={item === "valid" ? data.audioStatus.valid : data.audioStatus.invalid} />
              </div>
            ))}
          </div>
          <div className='absolute top-[13px] h-full w-full flex items-center rounded-t-[6px] overflow-hidden'>
            {["valid", "reject"].map((item, index) => (
              <div key={index} className={`${item === "valid" ? "bg-gradient-to-b from-light-green-17% to-light-green-0% rounded-tl-[10px]" : "bg-gradient-to-b from-light-red-17% to-light-red-0% rounded-tr-[10px]"} h-full ${index === 1 ? "" : "border-r-[1px] border-white"} `} style={{
                width: `${Math.round((item === "valid" ? ((data.audioStatus.valid * 100) / data.receivedHour) : ((data.audioStatus.invalid * 100) / data.receivedHour)))}%`,
              }}>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}