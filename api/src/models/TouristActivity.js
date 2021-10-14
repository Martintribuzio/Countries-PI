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
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false,
        get() {
          let data = this.getDataValue('dificult')
          const values = {
            1: 'begginer',
            2: 'novice',
            3: 'intermediate',
            4: 'expert',
            5: 'professional',
          }
          return values[data]
        },
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
