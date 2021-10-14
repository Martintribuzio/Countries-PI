import styles from './index.module.css'
import { useState, useEffect } from 'react'
import img from '../../assets/default.jpg'
import getImage from '../../services/getImages'

const ActivityCard = ({ activity }) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (activity) {
      getImage(activity.name).then(r => {
        if (r.length) {
          const photo = Math.floor(Math.random() * r.length)
          setImage(r[photo].urls.raw + '&w=400')
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
    </div>
  )
}

export default ActivityCard
