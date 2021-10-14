import styles from './index.module.css'
import ActivityCard from './ActivityCard.jsx'

const ActivityCards = ({ activities, title }) => {
  return (
    <>
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.cards__container}>
          {activities && activities.length ? (
            activities.map(a => {
              return <ActivityCard key={a.id} activity={a} />
            })
          ) : (
            <h4>There are not tourist activities yet</h4>
          )}
        </div>
      </div>
    </>
  )
}

export default ActivityCards
