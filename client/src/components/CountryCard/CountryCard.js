import { Link } from 'react-router-dom'
import styles from './CountryCard.module.css'
import pointer from '../../assets/pointer.png'
import { useState } from 'react'

const CountryCard = ({ id, name, region, img, population }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className={styles.card}>
      <Link className={styles.link} to={`home/country/${id}`}>
        <figure>
          <img className={styles.card__icon} src={pointer} alt='Pointer' />
        </figure>

        <figure>
          <img
            className={styles.card__flag}
            alt={name}
            src={img}
            onLoad={() => setLoaded(true)}
          />
        </figure>
        {loaded ? (
          <div className={styles.card__data}>
            <h3>{`${name}`}</h3>
            <h4>{region}</h4>
          </div>
        ) : (
          <></>
        )}
        <div className={styles.tooltip}>Show more info</div>
      </Link>
    </div>
  )
}

export default CountryCard
