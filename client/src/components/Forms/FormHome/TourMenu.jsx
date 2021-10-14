import setTour from '../../../actions/setTour'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.css'
import useActivities from '../../../hooks/useActivities'

const TourMenu = () => {
  useActivities()
  const tourValue = useSelector(state => state.filters.Tour)
  const tours = useSelector(state => state.activities).map(el => el.name)

  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(setTour(e.target.value))
  }

  return (
    <>
      <form autocomplete='off'>
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
