const initialState = {
  orderByName: 'Order by name',
  orderByPopulation: 'Order by population',
  searchValue: '',
  continent: 'Filter by continent',
  Tour: 'Filter by Tourist Activity',
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return { ...state, searchValue: action.payload }
    case 'SET_ORDER_BY_NAME':
      return {
        ...state,
        orderByName: action.payload,
        orderByPopulation: 'Order by population',
      }
    case 'SET_ORDER_BY_POPULATION':
      return {
        ...state,
        orderByPopulation: action.payload,
        orderByName: 'Order by name',
      }
    case 'SET_CONTINENT':
      return { ...state, continent: action.payload }
    case 'SET_TOUR':
      return { ...state, Tour: action.payload }
    default:
      return state
  }
}

export default filters
