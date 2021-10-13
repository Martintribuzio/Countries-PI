import axios from 'axios'
const base_url = 'http://localhost:3001/'

const getActivities = async () => {
  const response = await axios.get(base_url + 'activity')
  return response.data
}

export default getActivities
