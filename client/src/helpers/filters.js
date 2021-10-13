const filter = (countries, filters) => {
  const { continent, orderBy, Tour } = filters

  if (continent !== 'All' && continent !== 'Filter by continent') {
    countries = countries.filter(c => c.region === continent)
  }

  if (Tour !== 'All' && Tour !== 'Filter by Tourist Activity') {
    countries = countries.filter(c =>
      c.TouristActivities.some(t => t.name === Tour)
    )
  }

  if (orderBy.type === 'NAME') {
    return countries.sort((a, b) =>
      orderBy.order === 'ASC'
        ? a.name > b.name
          ? 1
          : -1
        : a.name < b.name
        ? 1
        : -1
    )
  } else if (orderBy.type === 'POPULATION') {
    return countries.sort((a, b) =>
      orderBy.order === 'ASC'
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
