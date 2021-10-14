import CountryCard from '../CountryCard/CountryCard.js'
import styles from './index.module.css'
import { useState, useEffect } from 'react'
import Reset from '../Forms/FormHome/Reset.jsx'

const Pagination = ({ countries, error }) => {
  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(0)
  }, [countries])

  const pagCountries = () => {
    if (!page) {
      return [...countries].slice(page, page + 9)
    }
    return [...countries].slice(page, page + 10)
  }

  const nextPage = () => {
    if (page < countries.length - 10) setPage(page + 10)
  }

  const prevPage = () => {
    if (page > 0) setPage(page - 10)
  }

  if (countries.length && !error) {
    return (
      <div id='page' className={styles.page__container}>
        <>
          <div className={styles.countries__container}>
            {pagCountries().map(country => (
              <CountryCard key={country.id} {...country} />
            ))}
          </div>
          <div className={styles.buttons}>
            <button onClick={prevPage}>BACK</button>
            <button>PAGE {page / 10 + 1}</button>
            <button onClick={nextPage}>NEXT</button>
          </div>
        </>
      </div>
    )
  } else if ((!countries.length && !error) || error === 'Country not found') {
    return (
      <div id='page' className={styles.page__container}>
        <div className={styles.error}>
          <h2>Oops... there are no countries with those filters.</h2>
          <h2>Do you want to reset them?</h2>
          <Reset />
        </div>
      </div>
    )
  } else {
    return (
      <div id='page' className={styles.page__container}>
        <div className={styles.error}>
          <h1>Error connecting to server</h1>
        </div>
      </div>
    )
  }

  // return (
  //   <div id='page' className={styles.page__container}>
  //     {countries.length ? (
  //       <>
  //         <div className={styles.countries__container}>
  //           {pagCountries().map(country => (
  //             <CountryCard key={country.id} {...country} />
  //           ))}
  //         </div>
  //         <div className={styles.buttons}>
  //           <button onClick={prevPage}>BACK</button>
  //           <button>PAGE {page / 10 + 1}</button>
  //           <button onClick={nextPage}>NEXT</button>
  //         </div>
  //       </>
  //     ) : countries.error?.includes('Country not found') ? (
  //       <div className={styles.error}>
  //         <h2>There are no countries with those filters</h2>
  //         <h2>Do you want to reset the filters?</h2>
  //         <Reset />
  //       </div>
  //     ) : (
  //       <div className={styles.error}>
  //         <h1>Error connecting to server</h1>
  //       </div>
  //     )}
  //   </div>
  // )
}

export default Pagination
