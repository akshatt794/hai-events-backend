const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_URL, // Use your .env DB_URL or hardcode as needed
  {
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = { sequelize };
