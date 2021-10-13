const { Country, TouristActivity } = require('../db.js')

//RUTA DETALLE: IMG,NOMBRE,ID,CONTINENTE,CAPITAL,SUBREGION,AREA,POBLACION,ACTIVIDADES TURISTICAS

const getCountry = async (req, res) => {
  try {
    const { id } = req.params

    const condition = {
      where: {
        id: id.toUpperCase(),
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

    const country = await Country.findAll(condition)

    if (!country.length)
      throw new Error('The id you entered doesnt match with any country')

    res.json(country)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = getCountry
