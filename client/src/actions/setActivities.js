import axios from 'axios'

const setActivities = () => async dispatch => {
  try {
    const response = await axios.get('/activity')
    dispatch({ type: 'SET_ACTIVITIES', payload: response.data })
  } catch (error) {
    console.log(error)
  }
}

export default setActivities
