import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import setAll from '../actions/setAll.js'

export const useCountries = searchValue => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAll(searchValue))
  }, [dispatch, searchValue])
}
