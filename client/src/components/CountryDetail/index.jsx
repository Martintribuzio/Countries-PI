import styles from './index.module.css'

const CountryDetail = props => {
  return (
    <div className={styles.detailContainer}>
      <label>
        Capital
        <p>{props.capital}</p>
      </label>
      <label>
        Continent
        <p>{props.region}</p>
      </label>
      <label>
        Region
        <p>{props.subregion}</p>
      </label>
      <label>
        Area
        <p>{props.area}</p>
      </label>
      <label>
        Population
        <p>{`${props.population
          ?.toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} M`}</p>
      </label>
      <label>
        Country Code
        <p>{props.id}</p>
      </label>
    </div>
  )
}

export default CountryDetail
