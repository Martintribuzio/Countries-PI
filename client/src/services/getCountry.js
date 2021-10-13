import axios from 'axios'
const base_url = 'http://localhost:3001/countries/'

const getCountry = async id => {
  let result = await axios.get(base_url + id)

  return result.data
}

export default getCountry
