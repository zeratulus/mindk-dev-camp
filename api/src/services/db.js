const {Sequelize} = require('sequelize');
const config = require('./config.js');

module.exports = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        dialect: 'postgres',
        host: config.db.host,
        port: config.db.port
    }
);