import setTour from '../../../actions/setTour'
import setSearch from '../../../actions/setSearch.js'
import setOrder from '../../../actions/setOrder.js'
import setContinent from '../../../actions/setContinent.js'
import { useDispatch } from 'react-redux'
import styles from './index.module.css'

const Reset = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setTour('All'))
    dispatch(setSearch(''))
    dispatch(setContinent('All'))
    dispatch(
      setOrder({
        type: '',
        order: '',
      })
    )
  }
  return (
    <button className={styles.btn} onClick={handleClick}>
      Reset filters
    </button>
  )
}

export default Reset
