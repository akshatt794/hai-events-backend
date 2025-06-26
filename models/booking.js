'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
    Booking.belongsTo(models.Event, { foreignKey: 'eventId' });
  };
  
  return Booking;
};