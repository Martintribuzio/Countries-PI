import axios from 'axios'
const api_key = process.env.REACT_APP_APIKEY_UNSPLASH

const url = `https://api.unsplash.com/search/photos?orientation=portrait&client_id=${api_key}&query=`

const getImage = async name => {
  try {
    const response = await axios.get(url + name)
    return response.data.results
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

export default getImage
