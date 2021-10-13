import axios from 'axios'

const api_key = 'KAksNkq42_ioxYzGLcewgkSWE1TlWuyUZ9LLclyeFkU'
const url = `https://api.unsplash.com/search/photos?orientation=portrait&client_id=${api_key}&query=`

const getImage = async name => {
  const response = await axios.get(url + name)
  return response.data.results
}

export default getImage
