'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    first_name: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(200)
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};