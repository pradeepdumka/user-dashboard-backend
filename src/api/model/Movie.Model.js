const Sequelize = require('sequelize');
const Constants = require(global.APP_ROOT_PATH + '/src/config/constants.js');
//console.log(Constants.MY_APP_CONFIG_PATH + '/db')
const db = require(Constants.MY_APP_CONFIG_PATH + '/db');

const tableName = 'movies';
const hooks = {};
const Movies = db.define('Movies', {
 
    year: {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    directors: {
        type: Sequelize.STRING,
        allowNull: true
    },
    image_url: {
        type: Sequelize.STRING,
        allowNull: true
    },
    plot: {
        type: Sequelize.STRING,
        allowNull: true
    },
    release_date: {
        type: Sequelize.STRING,
        allowNull: false  
    }
    
}, {
    timestamps: false
}, {hooks, tableName });
 

module.exports = Movies;

