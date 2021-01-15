'use strict';
const {
  Model
} = require('sequelize');
const constants = require('../../utils/constants');
const { passwordHashSync } = require('../../utils/fn');
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
  };
  user.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      set(val) {
        this.setDataValue('password', passwordHashSync(val));
      }
    },
    role: {
      type: DataTypes.ENUM,
      values: constants.user.roles,
      defaultValue: constants.roles.user
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  user.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());

    delete values.password;
    return values;
  }
  return user;
};