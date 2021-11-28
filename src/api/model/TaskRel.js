const Sequelize = require('sequelize');
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
console.log(Constants.MY_APP_CONFIG_PATH + '/db')
const sequelize = require(Constants.MY_APP_CONFIG_PATH + '/db');


const TaskRel = {};

TaskRel.Sequelize = Sequelize;
TaskRel.sequelize = sequelize;


TaskRel.User = require(Constants.MY_APP_MODEL_PATH + '/UserModel');
TaskRel.Movie = require(Constants.MY_APP_MODEL_PATH + '/Movie.Model');


module.exports = TaskRel;