import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import setContinent from '../../../actions/setContinent.js'
import styles from './index.module.css'

const ContinentMenu = () => {
  const [value, setValue] = useState('Filter by continent')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContinent(value))
  }, [dispatch, value])

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <form>
        <select className={styles.select} value={value} onChange={handleChange}>
          <option disabled defaultValue hidden>
            Filter by continent
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
