require('dotenv').config()
const { Sequelize, Op } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

let sequelize =
  process.env.NODE_ENV === 'production'
    ? new Sequelize({
        database: DB_NAME,
        dialect: 'postgres',
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
        { logging: false, native: false }
      )

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// )

//REQUERIR Y DEFINIR MODELOS

const modelCountry = require('./models/Country.js')
const modelTouristActivity = require('./models/TouristActivity.js')
const modelCountriesActivities = require('./models/CountriesActivities.js')

modelCountry(sequelize)
modelTouristActivity(sequelize)
modelCountriesActivities(sequelize)

// RELACIONAR MODELOS

const { Country, TouristActivity } = sequelize.models

Country.belongsToMany(TouristActivity, { through: 'CountriesActivities' })
TouristActivity.belongsToMany(Country, { through: 'CountriesActivities' })

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  Op,
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}
