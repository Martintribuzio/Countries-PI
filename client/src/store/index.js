import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import countriesReducer from '../reducer/countries'
import filtersReducer from '../reducer/filters'

const reducer = combineReducers({
  countries: countriesReducer,
  filters: filtersReducer,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
