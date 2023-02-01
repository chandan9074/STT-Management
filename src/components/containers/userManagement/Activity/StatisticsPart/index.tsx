import React, { useContext, useEffect } from 'react'
import Header from './Header'
import * as PATH from "../../../../../helpers/Slug"
import { Navigator } from '../../../../Navigator'
import GraphPart from './GraphPart'
import { UserManagementContext } from '../../../../../context/UserManagement'

const StatisticsPart = () => {

  const userManagementContext = useContext(UserManagementContext);

  useEffect(() => {
    userManagementContext.getActivityStatistics('1')
  }, [])
  return (
    <>
      <Navigator.Back path={PATH.USER_PATH} title="Activity" />
      <div className='rounded-[8px] overflow-hidden mt-3 shadow-bottom-light-blue-10'>
        {userManagementContext.activityStatistics && (
          <>
            <Header data={userManagementContext.activityStatistics} />
            <GraphPart data={userManagementContext.activityStatistics} />
          </>
        )}
      </div>
    </>
  )
}

export default StatisticsPart