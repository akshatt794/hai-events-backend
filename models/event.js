'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});

  Event.associate = function(models) {
    Event.hasMany(models.Booking, { foreignKey: 'eventId' });
  };

  return Event;
};
