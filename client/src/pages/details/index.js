import getCountry from '../../services/getCountry'
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header.jsx'
import CountryDetail from '../../components/CountryDetail/'
import styles from './index.module.css'
import ActivityCards from '../../components/ActivityCards'
import world from '../../assets/world.jpg'

const Details = ({ match }) => {
  const [country, setCountry] = useState({})
  const id = match.params.id

  useEffect(() => {
    getCountry(id).then(result => {
      setCountry(result[0])
    })
  }, [id])

  return (
    <div className={styles.pageContainer}>
      <Header title={country.name} icon={country.img} img={world} />
      <CountryDetail {...country} />
      <ActivityCards
        title={`Tourist activities in ${country.name}`}
        activities={country ? country.TouristActivities : []}
      />
    </div>
  )
}
export default Details
