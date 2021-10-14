import axios from 'axios'

const getCountry = async id => {
  try {
    let result = await axios.get('/countries/' + id)
    return result.data
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

export default getCountry
