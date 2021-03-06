import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import setActivities from '../actions/setActivities'

export const useActivities = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setActivities())
  }, [dispatch])
}

export default useActivities
