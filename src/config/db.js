
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(Constants.MY_APP_DATABASE, Constants.MY_APP_DATABASE_USER, Constants.MY_APP_DATABASE_PASSWORD, {
  host: Constants.MY_APP_DATABASE_HOST,
  dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  port: 3306,
  logging: console.log,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
module.exports = sequelize;