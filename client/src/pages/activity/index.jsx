import { useCountries } from '../../hooks/useCountries'
import { useEffect, useState } from 'react'
import Form from '../../components/Forms/FormActivity'
import Header from '../../components/Header/Header'
import headerIMG from '../../assets/activityHeader.jpg'
import styles from './index.module.css'
import getActivities from '../../services/getActivities.js'
import ActivityCards from '../../components/ActivityCards'

const Activity = () => {
  const [activities, setActivities] = useState([])
  const lastActivities = activities.slice(-8).reverse()

  useCountries()

  useEffect(() => {
    getActivities().then(r => setActivities(r))
  }, [])

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
