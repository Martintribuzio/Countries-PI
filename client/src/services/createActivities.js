import axios from 'axios'
const url = 'http://localhost:3001/activity'

const createActivities = async data => {
  data.countriesID = data.countriesID.map(el => el.id)
  await axios.post(url, data)
}

export default createActivities
