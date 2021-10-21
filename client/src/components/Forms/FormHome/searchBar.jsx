import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import setSearch from '../../../actions/setSearch.js'
import styles from './index.module.css'

const SearchBar = () => {
  const inputValue = useSelector(state => state.filters.searchValue)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChange = e => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={styles.searchForm}
        autoComplete='off'>
        <i className={styles.icon}></i>
        <input
          className={styles.searchInput}
          placeholder='Search country'
          type='text'
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default SearchBar
