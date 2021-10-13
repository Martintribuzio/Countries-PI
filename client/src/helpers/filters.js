const filter = (countries, filters) => {
  const { continent, orderByName, orderByPopulation, Tour } = filters

  if (continent !== 'All' && continent !== 'Filter by continent') {
    countries = countries.filter(c => c.region === continent)
  }

  if (Tour !== 'All' && Tour !== 'Filter by Tourist Activity') {
    countries = countries.filter(c =>
      c.TouristActivities.some(t => t.name === Tour)
    )
  }

  if (orderByName && orderByName !== 'Order by name') {
    return [...countries].sort((a, b) =>
      orderByName === 'ASC'
        ? a.name > b.name
          ? 1
          : -1
        : a.name < b.name
        ? 1
        : -1
    )
  } else if (orderByPopulation && orderByPopulation !== 'Order by population') {
    return [...countries].sort((a, b) =>
      orderByPopulation === 'ASC'
        ? a.population > b.population
          ? 1
          : -1
        : a.population < b.population
        ? 1
        : -1
    )
  } else return countries
}

export default filter
