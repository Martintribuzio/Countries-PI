import { useSelector, useDispatch } from 'react-redux'
import setOrder from '../../../actions/setOrder.js'
import styles from './index.module.css'

const OrderMenu = () => {
  const dispatch = useDispatch()
  const name = useSelector(state => state.filters.orderByName)
  const population = useSelector(state => state.filters.orderByPopulation)

  const handleChange = e => {
    const { name, value } = e.target
    dispatch(setOrder(name, value))
  }

  return (
    <>
      <form className={styles.orderForm} autoComplete='off'>
        <select
          value={name}
          className={styles.select}
          name='NAME'
          onChange={handleChange}>
          <option hidden defaultValue>
            Order by name
          </option>
          <option value='ASC'>A - Z</option>
          <option value='DESC'>Z - A</option>
        </select>

        <select
          value={population}
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
