import axios from 'axios'
const url = 'http://localhost:3001/activity'

const createActivities = async data => {
  data.countriesID = data.countriesID.map(el => el.id)
  try {
    const postAct = await axios.post(url, data)
    return postAct
  } catch (error) {
    throw new Error(error)
  }
}

export default createActivities
