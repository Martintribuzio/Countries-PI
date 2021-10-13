const filterTours = arr => {
  let arrFiltered = arr
    .filter(c => c.TouristActivities.length)
    .map(c => c.TouristActivities.map(t => t.name))
    .flat()
  return arrFiltered.filter((el, index) => arrFiltered.indexOf(el) === index)
}

export default filterTours
