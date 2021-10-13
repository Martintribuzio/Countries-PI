const countries = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_DATA':
      console.log('REDUCER', action.payload)
      return action.payload
    case 'ERROR':
      return { error: action.error }
    default:
      return state
  }
}

export default countries
