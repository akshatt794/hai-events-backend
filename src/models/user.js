const { DataTypes } = require('sequelize');
const { sequelize } = require('./index'); // This must be your Sequelize instance!

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING
});

module.exports = User;
