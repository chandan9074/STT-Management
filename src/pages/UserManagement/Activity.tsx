import { useContext, useEffect } from 'react'
import ActivityContainer from '../../components/containers/userManagement/Activity'
import Layouts from '../../components/Layouts'
import { useParams } from 'react-router-dom'
import { UserManagementContext } from '../../context/UserManagementProvider'

const Activity = () => {
  const { id } = useParams<{ id: string }>()
  // console.log("from activity page", id)
  const { getActivityStatistics, setActivityQueryParams, activityQueryParams } = useContext(UserManagementContext);

  useEffect(() => {
    if (id) {
      console.log("from activity page", id)
      setActivityQueryParams({ 
        ...activityQueryParams,
        id: id
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    console.log("from activity page now", id)
    if (activityQueryParams.id) {
      getActivityStatistics(activityQueryParams)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activityQueryParams])
  return (
    <Layouts.Forth>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <ActivityContainer />
      </div>
    </Layouts.Forth>
  )
}

export default Activity