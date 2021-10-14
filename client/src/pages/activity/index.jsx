import { useCountries } from '../../hooks/useCountries'
import { useSelector } from 'react-redux'
import Form from '../../components/Forms/FormActivity'
import Header from '../../components/Header/Header'
import headerIMG from '../../assets/activityHeader.jpg'
import styles from './index.module.css'
import ActivityCards from '../../components/ActivityCards'
import useActivities from '../../hooks/useActivities'

const Activity = () => {
  useCountries()
  useActivities()
  const activities = useSelector(state => state.activities)
  const lastActivities = activities.slice(-8).reverse()

  return (
    <div className={styles.page__container}>
      <Header
        title='Share your experience'
        subtitle='Create new tourist activity'
        img={headerIMG}
      />
      <Form />
      <ActivityCards
        title='Last activities created'
        activities={lastActivities}
      />
    </div>
  )
}

export default Activity
