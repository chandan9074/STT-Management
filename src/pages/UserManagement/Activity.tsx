import { useContext, useEffect } from 'react'
import ActivityContainer from '../../components/containers/userManagement/Activity'
import Layouts from '../../components/Layouts'
import { useParams } from 'react-router-dom'
import { UserManagementContext } from '../../context/UserManagementProvider'

const Activity = () => {
  const { id } = useParams<{ id: string }>()
  const { getActivityStatistics, setActivityQueryParams, activityQueryParams, getActivityTable, activityTableParams, setActivityTableParams } = useContext(UserManagementContext);

  useEffect(() => {
    if (id) {
      setActivityQueryParams({
        ...activityQueryParams,
        id: id
      })
      setActivityTableParams({
        ...activityTableParams,
        userID: id
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (activityQueryParams.id) {
      getActivityStatistics(activityQueryParams)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activityQueryParams])

  useEffect(() => {
    if (activityTableParams.userID) {
      getActivityTable(activityTableParams)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activityTableParams])
  return (
    <Layouts.Forth>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <ActivityContainer />
      </div>
    </Layouts.Forth>
  )
}

export default Activity