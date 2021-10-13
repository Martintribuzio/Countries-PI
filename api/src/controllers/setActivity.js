const { TouristActivity } = require('../db.js')
const { Country } = require('../db.js')

const setActivity = async (req, res) => {
  try {
    const { countriesID, name, dificult, duration, season } = req.body

    if (
      !Array.isArray(countriesID) ||
      countriesID.some(c => typeof c !== 'string')
    ) {
      throw new Error('You must provide a country ID with format: ["ID"]')
    }

    const activity = await TouristActivity.create({
      name,
      dificult,
      duration,
      season,
    })

    for (const id of countriesID) {
      const country = await Country.findByPk(id)
      if (!country) throw new Error(`CountryID: ${id || 'id'} are invalid`)

      await country.addTouristActivity(activity.id)
    }

    res.status(201).json(activity)
  } catch (error) {
    res.json({ [error.name]: error.message })
  }
}

module.exports = setActivity
