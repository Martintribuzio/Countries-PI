import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import countriesReducer from '../reducer/countries'
import filtersReducer from '../reducer/filters'

const reducer = combineReducers({
  countries: countriesReducer,
  filters: filtersReducer,
})

export const store = createStore(reducer, composeWithDevTools())
