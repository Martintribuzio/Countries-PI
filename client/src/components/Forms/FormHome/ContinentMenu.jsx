// import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import setContinent from '../../../actions/setContinent.js'
import styles from './index.module.css'

const ContinentMenu = () => {
  const value = useSelector(state => state.filters.continent)
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(setContinent(e.target.value))
  }

  return (
    <>
      <form autocomplete='off'>
        <select className={styles.select} value={value} onChange={handleChange}>
          <option hidden defaultValue>
            Order by continent
          </option>
          <option value='All'>All</option>
          <option value='Europe'>Europe</option>
          <option value='Americas'>Americas</option>
          <option value='Asia'>Asia</option>
          <option value='Oceania'>Oceania</option>
          <option value='Africa'>Africa</option>
        </select>
      </form>
    </>
  )
}

export default ContinentMenu
