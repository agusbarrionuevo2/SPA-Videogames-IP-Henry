const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Genre', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,   //hace falta ponerle el default value para que lo cree, porque sino no lo crea
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'no genres'
    }
  }, {timestamps: false });
};
