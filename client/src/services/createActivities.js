import axios from 'axios'

const createActivities = async data => {
  data.countriesID = data.countriesID.map(el => el.id)
  try {
    const postAct = await axios.post('/activity', data)
    return postAct
  } catch (error) {
    throw new Error(error)
  }
}

export default createActivities
