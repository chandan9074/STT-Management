import React, { useEffect } from 'react'
import Icons from '../../../../../assets/Icons'
import { activityDT } from '../../../../../types/userManagementTypes'
import Buttons from '../../../../Buttons'
import RoleImage from '../../../../Image/RoleImage'
import { UserManagementContext } from '../../../../../context/UserManagementProvider'


const Header = ({ data }: { data: activityDT }) => {
    const userManagementContext = React.useContext(UserManagementContext);
    const [activeRole, setActiveRole] = React.useState<string>(userManagementContext.activeRole);

    console.log(userManagementContext.activeRole[0], 'data role')

    useEffect(() => {
        userManagementContext.setActivityQueryParams({ ...userManagementContext.activityQueryParams, role: activeRole })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeRole])

    return (
        <div className='w-full pl-6 pr-8 py-4 bg-ct-blue-60 rounded-t-[8px] flex justify-between relative'>
            <div>
                <div className='flex items-center mb-2'>
                    <RoleImage role={activeRole} height='h-8' width='w-8' />
                    <h1 className='mb-0 text-heading-4 font-medium text-white ml-2'>{data.name}</h1>
                    <p className='mt-1 ml-3 text-small text-white text-opacity-[0.85]'>{data.email}, {data.phone}, {data.address}</p>
                </div>
                <Buttons.TabButton.Primary setActiveData={setActiveRole} size="small" variant='White' tabLabel={data.roleList} />
            </div>
            <div className='flex items-center gap-x-6'>
                <div className='h-[100px] border-[1px] border-border-light-blue border-opacity-[0.25] border-dashed' />
                <div className='flex items-end gap-x-6'>
                    <div>
                        <h3 className='text-small font-medium text-ct-blue-05 mb-0'>Total Target</h3>
                        <h2 className='text-white mb-0 mt-2'><span className='text-heading-2 leading-[38px] font-[275]'>{data.roleData.target}</span><span className='text-small ml-1 font-[400]'>hour</span></h2>
                    </div>
                    <div>
                        <h3 className='text-small font-medium text-ct-blue-05 mb-0'>Received</h3>
                        <h2 className='text-white mb-0 mt-2'><span className='text-heading-2 leading-[38px] font-[275]'>{data.roleData.received}</span><span className='text-small ml-1 font-[400]'>hour</span></h2>
                    </div>
                    <div className='mr-5' >
                        {/* <h3 className='text-small font-medium text-ct-blue-05 mb-0'>Received</h3> */}
                        <h2 className='text-white mb-0 mt-2'><span className='text-heading-2 leading-[38px] font-[275]'>{data.roleData.audios}</span><span className='text-small ml-1 font-[400]'>audios</span></h2>
                    </div>
                </div>
            </div>
            <button className='absolute bottom-3 right-3 px-2 py-1 rounded-[20px] bg-ct-blue-70'><img src={Icons.double_up_arrow} alt='arrow' /></button>
        </div>
    )
}

export default Header