const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DECIMAL
    },
    platforms: {
      type: DataTypes.JSON,
      allowNull: false
    },
    // image: {
    //   type: DataTypes.BLOB,
    //   defaultValue: 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png',
    //   allowNull: false
    // }
  }, { timestamps: false});
};
