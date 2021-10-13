import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCountries from '../services/getCountries.js'
import setAll from '../actions/setAll.js'

export const useCountries = searchValue => {
  const dispatch = useDispatch()
  useEffect(() => {
    getCountries(searchValue).then(r => {
      console.log('GET', r)
      dispatch(setAll(r))
    })
  }, [dispatch, searchValue])
}
