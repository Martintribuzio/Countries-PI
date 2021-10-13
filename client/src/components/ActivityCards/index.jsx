import styles from './index.module.css'
import { useState, useEffect } from 'react'
import img from '../../assets/default.jpg'
import getImage from '../../services/getImages'

const ActivityCard = ({ activity }) => {
  const [image, setImage] = useState(null)
  console.log(activity)
  useEffect(() => {
    if (activity) {
      getImage(activity.name).then(r => {
        if (r.length) {
          const photo = Math.floor(Math.random() * r.length)
          setImage(r[photo].urls.raw + '&w=400')
        } else {
        }
      })
    }
  }, [activity])

  return (
    <div
      className={styles.act__container}
      style={{ backgroundImage: `url(${image || img})` }}>
      <p>{activity.season}</p>
      <h2>{activity.name}</h2>
      <div>
        <h4>difficult: {activity.dificult} - </h4>
        <h4>duration: {activity.duration}</h4>
      </div>
      <h4>risk: {activity.risk}</h4>
    </div>
  )
}

const ActivityCards = ({ activities, title }) => {
  return (
    <>
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.cards__container}>
          {activities && activities.length
            ? activities.map(a => {
                return <ActivityCard key={a.id} activity={a} />
              })
            : 'There are not tourist activities yet'}
        </div>
      </div>
    </>
  )
}

export default ActivityCards
