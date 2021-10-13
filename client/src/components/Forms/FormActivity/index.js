import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import createActivities from '../../../services/createActivities.js'
import styles from './index.module.css'

const Form = () => {
  //INITIAL STATES
  const initialFields = {
    name: '',
    dificult: 1,
    duration: 1,
    season: 'Winter',
    risk: '',
  }

  const initialError = {
    countries: '',
    name: '',
  }

  //STATES

  const history = useHistory()
  const [error, setError] = useState(initialError)
  const [countries, setCountries] = useState([])
  const [fields, setFields] = useState(initialFields)
  const [created, setCreated] = useState(false)

  const allCountries = useSelector(state => state.countries)
  const countryOption = allCountries
    .map(c => ({ id: c.id, name: c.name }))
    .sort((a, b) => (a.name > b.name ? 1 : -1))

  //HANDLERS
  const handleSubmit = e => {
    e.preventDefault()

    if (!countries.length || !fields.name) {
      setError({
        countries: !countries.length
          ? 'You must select at least one country'
          : '',
        name: !fields.name ? 'You must enter a name for the activity' : '',
      })
    } else {
      const data = {
        ...fields,
        countriesID: countries,
      }
      createActivities(data)
      setCreated(true)
      setFields(initialFields)
      setCountries([])
    }
  }

  const handleCountries = e => {
    setError({ ...error, countries: '' })
    const country = countryOption.find(c => c.id === e.target.value)

    if (!countries.find(c => c.id === e.target.value)) {
      const newCountries = [...countries]
      newCountries.push(country)
      setCountries(newCountries)
    }
    return
  }

  const deleteCountry = e => {
    setCountries(countries.filter(c => c.id !== e.target.value))
  }

  const handleChange = e => {
    const field = e.target.name
    const value = e.target.value
    if (field === 'name') {
      setError({ ...error, name: '' })
    }
    setFields({
      ...fields,
      [field]: value,
    })
  }

  const redirect = () => {
    history.push('/home')
  }

  return (
    <div className={styles.form__container}>
      {created ? (
        <div className={styles.createdContainer}>
          <h2>Activity created</h2>
          <div>
            <button className={styles.btn} onClick={() => setCreated(false)}>
              Create another activity
            </button>
            <button className={styles.btn} onClick={redirect}>
              Go to HomePage
            </button>
          </div>
        </div>
      ) : (
        <>
          <form id='actform' className={styles.form} onSubmit={handleSubmit}>
            <label>
              Activity Name
              <input
                className={error.name ? styles.error : styles.inputName}
                type='text'
                name='name'
                value={fields.name}
                onChange={handleChange}
                placeholder='Name of activity'
              />
              {error.name ? (
                <small className={styles.errorName}>{error.name}</small>
              ) : (
                ''
              )}
            </label>

            <label>
              Activity difficult
              <select
                name='dificult'
                value={fields.dificult}
                onChange={handleChange}
                required>
                <option value='1'>Beginner</option>
                <option value='2'>Novice</option>
                <option value='3'>Intermediate</option>
                <option value='4'>Expert</option>
                <option value='5'>Professional</option>
              </select>
            </label>

            <label>
              Duration time (hrs)
              <select
                name='duration'
                value={fields.duration}
                onChange={handleChange}>
                <option value='1'>1hr approx.</option>
                <option value='2'>2hrs approx.</option>
                <option value='3'>3hrs approx.</option>
                <option value='4'>4hrs approx.</option>
                <option value='5'>5hrs approx.</option>
              </select>
            </label>

            <label>
              Season
              <select
                name='season'
                value={fields.season}
                onChange={handleChange}>
                <option value='Winter'>Winter</option>
                <option value='Summer'>Summer</option>
                <option value='Fall'>Fall</option>
                <option value='Spring'>Spring</option>
              </select>
            </label>
            <label>
              Countries
              <select
                className={error.countries ? styles.error : ''}
                name='countries'
                onChange={handleCountries}
                required>
                <option defaultValue hidden>
                  Choose country...
                </option>
                {countryOption.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              {error.countries ? (
                <small className={styles.errorName}>{error.countries}</small>
              ) : (
                ''
              )}
            </label>
            <label>
              Risk
              <select name='risk' onChange={handleChange}>
                <option value='Hard'>Hard</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
              </select>
            </label>
          </form>
          <div>
            <button
              className={styles.btn}
              type='submit'
              form='actform'
              value='Submit'>
              CREATE ACTIVITY
            </button>
          </div>
          <div className={styles.countriesContainer}>
            {countries.length
              ? 'Selected Countries:'
              : 'There are no selected countries'}
            {countries.map(c => (
              <button
                key={c.id}
                className={styles.deleteCountry}
                value={c.id}
                onClick={deleteCountry}>
                {c.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Form
