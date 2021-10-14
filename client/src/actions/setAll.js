import axios from 'axios'

const setAll = name => async dispatch => {
  try {
    const endpoint = name ? `/countries?name=${name}` : '/countries'
    let result = await axios.get(endpoint)

    if (result.data.error) throw new Error(result.data.error)
    else {
      dispatch({ type: 'SET_COUNTRIES', payload: result.data })
    }
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: { error: error.message } })
  }
}

export default setAll
