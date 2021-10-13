import axios from 'axios'
const base_url = 'http://localhost:3001/'

const getCountries = async name => {
  try {
    const endpoint = name ? `countries?name=${name}` : 'countries'
    let result = await axios.get(base_url + endpoint)
    return result.data
  } catch (error) {
    return { error: error.message }
  }
}

export default getCountries
