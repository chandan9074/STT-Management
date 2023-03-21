import RoleImage from '../../../../Image/RoleImage';
import Icons from '../../../../../assets/Icons';

const SpeechHeader = () => {
  return (
    <div className='grid grid-cols-12 gap-x-24'>
      <div className='col-span-4'>
        <UserInfoPart />
      </div>
      <div className='col-span-8'>
        <AudioInfoPart />
      </div>
    </div>
  )
}

export default SpeechHeader;

const UserInfoPart = () => {
  return (
    <div className='w-full'>
      <h3 className='mb-0 text-small text-ct-blue-60 font-semibold'>Assigned to</h3>
      <div className='mt-4 bg-blue-gray-05 border-[1px] border-blue-gray-30 p-4'>
        <div className='flex items-center gap-x-2'>
          <RoleImage role='manager' width='w-4' height='h-4' />
          <h3 className='text-base text-ct-blue-95 font-semibold mb-0'>MD. Eman Hasan</h3>
        </div>
        <div className='mt-3 grid grid-cols-12 w-full gap-x-4'>
          <div className='col-span-7 w-full'>
            <div className='flex items-center gap-x-2'>
              <img src={Icons.military_tech} alt="" className='w-4 h-4' />
              <h5 className='text-ct-blue-90-70% text-small mb-0'>Manager</h5>
            </div>
            <div className='flex items-center gap-x-2 mt-2'>
              <img src={Icons.mail} alt="" className='w-4 h-4' />
              <h5 className='text-ct-blue-90-70% text-small mb-0'>miraz2710@gmail.com</h5>
            </div>
          </div>
          <div className='col-span-5 w-full'>
            <div className='flex items-center gap-x-2'>
              <img src={Icons.call} alt="" className='w-4 h-4' />
              <h5 className='text-ct-blue-90-70% text-small mb-0'>01684610691</h5>
            </div>
            <div className='flex items-center gap-x-2 mt-2'>
              <img src={Icons.home} alt="" className='w-4 h-4' />
              <h5 className='text-ct-blue-90-70% text-small mb-0'>Dhaka</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AudioInfoPart = () => {
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
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-4'>
            <h3 className='text-ct-blue-90-70% text-small'>Received : 1200hr, 890 speeches;</h3>
            <div className='flex items-center gap-x-2'>
              <img src={Icons.schedule} alt="" />
              <h3 className='text-ct-blue-90-70% text-small'>Last Update: 22 Aug 2022</h3>
            </div>
          </div>
          <h3 className='text-small text-ct-blue-60 font-medium'>Target: 1000 speeches</h3>
        </div>
        {/* <div className='h-[60px] w-full mb-0.5 flex items-end relative'>
          <div className='h-3 rounded-[10px] w-full bg-blue-gray-20 border-[1px] border-white flex items-center relative z-50'>
            {[1, 2].map((item, index) => (
              <div key={index} className={`${item.name === "Valid" ? "bg-[#00B86E]" : "bg-[#A10008]"} h-full ${data.audioStatus.length - 1 === index ? "" : "border-r-[1px] border-white"} ${data.audioStatus.length - 1 === index ? "rounded-r-[15px]" : ""} ${index === 0 ? "rounded-l-[15px]" : ""} flex justify-center group cursor-pointer ${tooltipData.filter(tData => tData.name === item.name)[0].barBgHover} duration-200`} style={{
                width: `${Math.round((item.hour * 100) / data.received)}%`,
              }}>
                <AudioStatusTooltip data={tooltipData.filter(tData => tData.name === item.name)[0]} hour={item.hour} />
              </div>
            ))}
          </div>
          <div className='absolute h-full w-full flex items-center rounded-b-[6px] overflow-hidden'>
            {data.audioStatus.map((item, index) => (
              <div key={index} className={`${item.name === "Valid" ? "bg-gradient-to-t from-light-green-17% to-light-green-0%" : "bg-gradient-to-t from-light-red-17% to-light-red-0%"} h-full ${data.audioStatus.length - 1 === index ? "" : "border-r-[1px] border-white"} `} style={{
                width: `${Math.round((item.hour * 100) / data.received)}%`,
              }}>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}