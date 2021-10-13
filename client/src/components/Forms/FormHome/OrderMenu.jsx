import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import setOrder from '../../../actions/setOrder.js'
import styles from './index.module.css'

const OrderMenu = () => {
  const [value, setValue] = useState({ name: '', order: '' })
  const dispatch = useDispatch()

  useEffect(() => {
    const { name, order } = value
    dispatch(setOrder(name, order))
  }, [dispatch, value])

  const handleChange = e => {
    const { name, value } = e.target
    setValue({ name, order: value })
  }

  return (
    <>
      <form>
        <select className={styles.select} name='NAME' onChange={handleChange}>
          <option hidden defaultValue>
            Order by name
          </option>
          <option value='ASC'>A - Z</option>
          <option value='DESC'>Z - A</option>
        </select>

        <select
          name='POPULATION'
          className={styles.select}
          onChange={handleChange}>
          <option hidden defaultValue>
            Order by population
          </option>
          <option value='ASC'>Ascendant</option>
          <option value='DESC'>Descendant</option>
        </select>
      </form>
    </>
  )
}

export default OrderMenu
