import axios from 'axios'
const base_url = 'http://localhost:3001/'

const setActivities = () => async dispatch => {
  try {
    const response = await axios.get(base_url + 'activity')
    dispatch({ type: 'SET_ACTIVITIES', payload: response.data })
  } catch (error) {
    console.log(error)
  }
}

export default setActivities
