const { Country, TouristActivity, Op } = require('../db.js')
const { API_ALL } = process.env
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

const getAllCountries = async () => {
  try {
    const response = await fetch(API_ALL)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const mapDataDB = c => ({
  name: c.name.common,
  id: c.cca3,
  region: c.region,
  img: c.flags[0],
  capital: c.capital ? c.capital[0] : null,
  subregion: c.subregion,
  area: c.area,
  population: c.population,
})

const getAll = async (req, res) => {
  try {
    const { name } = req.query
    const condition = name
      ? {
          where: {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
          include: [
            {
              model: TouristActivity,
              attributes: ['id', 'name', 'dificult', 'duration', 'season'],
              through: {
                attributes: [],
              },
            },
          ],
        }
      : {
          include: [
            {
              model: TouristActivity,
              attributes: ['id', 'name', 'dificult', 'duration', 'season'],
              through: {
                attributes: [],
              },
            },
          ],
          attributes: {
            exclude: ['area', 'capital', 'subregion'],
          },
        }

    const dbData = await Country.findAll(condition)

    if (name && !dbData.length) throw new Error('Country not found')
    else if (!dbData.length) {
      const data = await getAllCountries()

      const apiCountries = data.map(mapDataDB)

      await Country.bulkCreate(apiCountries)

      res.json(await Country.findAll(condition))
    } else {
      res.json(dbData)
    }
  } catch (error) {
    res.json({ error: error.message })
  }
}

module.exports = getAll
