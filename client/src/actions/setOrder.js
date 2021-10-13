const setOrder = (type, payload) => {
  switch (type) {
    case 'NAME':
      return {
        type: 'SET_ORDER_BY_NAME',
        payload: payload,
      }
    case 'POPULATION': {
      return {
        type: 'SET_ORDER_BY_POPULATION',
        payload: payload,
      }
    }
    default:
      return {
        type: 'SET_ORDER_BY_NAME',
        payload: payload,
      }
  }
}

export default setOrder
