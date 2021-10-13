import setTour from '../../../actions/setTour'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.css'
import useActivities from '../../../hooks/useActivities'

const TourMenu = () => {
  const tourValue = useSelector(state => state.filters.Tour)
  const tours = useActivities().map(a => a.name)

  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(setTour(e.target.value))
  }

  return (
    <>
      <form>
        <select
          className={styles.select}
          value={tourValue}
          onChange={handleChange}>
          <option disabled defaultValue hidden>
            Filter by Tourist Activity
          </option>
          <option value='All' style={{ fontWeight: 'bold' }}>
            ALL
          </option>
          {tours ? (
            tours.map((t, i) => {
              return (
                <option key={i} value={t}>
                  {t}
                </option>
              )
            })
          ) : (
            <option disabled>This countries not have tours yet</option>
          )}
        </select>
      </form>
    </>
  )
}

export default TourMenu
