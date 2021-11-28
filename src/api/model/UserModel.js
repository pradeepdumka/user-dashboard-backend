const Sequelize = require('sequelize');
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
//console.log(Constants.MY_APP_CONFIG_PATH + '/db')
const db = require(Constants.MY_APP_CONFIG_PATH + '/db');
const hooks = {};
const tableName = 'users';

const User = db.define('User', {

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    timestamps: false
}, { hooks, tableName })


module.exports = User

