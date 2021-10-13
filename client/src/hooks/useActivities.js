import { useEffect, useState } from 'react'
import getActivities from '../services/getActivities'

export const useActivities = () => {
  const [tours, setTours] = useState([])

  useEffect(() => {
    getActivities().then(r => {
      setTours(r)
    })
  }, [])
  return tours
}

export default useActivities
