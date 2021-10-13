const initialState = {
  allCountries: [],
  countryID: [],
  error: '',
}

const countries = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return { ...state, allCountries: action.payload, error: '' }
    case 'SET_COUNTRY':
      return { ...state }
    case 'SET_ERROR': {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

export default countries
