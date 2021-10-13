const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define(
    'TouristActivity',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificult: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        get() {
          let data = this.getDataValue('duration')
          return data + ' hrs.'
        },
      },
      season: {
        type: DataTypes.ENUM('Summer', 'Fall', 'Spring', 'Winter'),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )
}
