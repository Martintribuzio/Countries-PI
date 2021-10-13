import styles from './index.module.css'

const CountryDetail = props => {
  return (
    <div className={styles.detailContainer}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Capital</th>
            <th>Continent</th>
            <th>Region</th>
            <th>Area</th>
            <th>Population</th>
          </tr>
          <tr>
            <td>{props.capital}</td>
            <td>{props.region}</td>
            <td>{props.subregion}</td>
            <td>{props.area}</td>
            <td>{`${props.population
              ?.toString()
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} M`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetail
