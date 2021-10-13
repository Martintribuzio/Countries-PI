//HOOKS
import { useCountries } from '../../hooks/useCountries'
import { useSelector } from 'react-redux'
//COMPONENTS
import Pagination from '../../components/Pagination'
import Header from '../../components/Header/Header.jsx'
import Form from '../../components/Forms/FormHome'
//STYLES AND HELPERS
import filter from '../../helpers/filters.js'
import styles from './index.module.css'
import headerIMG from '../../assets/header.jpg'

const Home = () => {
  const { countries, filters } = useSelector(state => state)
  const { searchValue } = filters

  useCountries(searchValue)

  let displayCountries = countries.error
    ? countries
    : filter(countries, filters)

  // if (!countries.error) {
  //   displayCountries = filter(countries, filters)
  // }

  return (
    <div className={styles.home}>
      <Header
        title='Discover the world'
        subtitle='Explore top rated tours with us'
        img={headerIMG}
      />
      <Form />
      <Pagination countries={displayCountries} />
    </div>
  )
}

export default Home
