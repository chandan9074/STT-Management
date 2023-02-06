import React from 'react'
import ActivityContainer from '../../components/containers/userManagement/Activity'
import StatisticsPart from '../../components/containers/userManagement/Activity/StatisticsPart'
import Layouts from '../../components/Layouts'

const Activity = () => {
  return (
    <Layouts.Forth>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <ActivityContainer />
      </div>
    </Layouts.Forth>
  )
}

export default Activity