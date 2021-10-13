const initialState = {
  orderBy: {
    type: '',
    order: '',
  },
  searchValue: '',
  continent: 'All',
  Tour: 'All',
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return { ...state, searchValue: action.payload }
    case 'SET_ORDER_BY_NAME':
      return { ...state, orderBy: { type: 'NAME', order: action.payload } }
    case 'SET_ORDER_BY_POPULATION':
      return {
        ...state,
        orderBy: { type: 'POPULATION', order: action.payload },
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
