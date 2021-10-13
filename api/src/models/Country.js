const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define(
    'Country',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: false,
        get() {
          const value = this.getDataValue('area')
          return `${value
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} km²`
        },
      },
      population: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  )
}
