import styles from './index.module.css'
import SearchBar from './searchBar.jsx'
import ContinentMenu from './ContinentMenu.jsx'
import OrderMenu from './OrderMenu.jsx'
import TourMenu from './TourMenu.jsx'
import Reset from './Reset.jsx'

const FormFilters = () => {
  return (
    <div className={styles.filters__container}>
      <SearchBar />

      <ContinentMenu />

      <OrderMenu />

      <TourMenu />

      <Reset />
    </div>
  )
}

export default FormFilters
