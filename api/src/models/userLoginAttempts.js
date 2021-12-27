const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const UserLoginAttempts = sequelize.define('userLoginAttempts', {
    id: {type: DataTypes.UUID, primaryKey: true},
    userId: {type: DataTypes.UUID},
    counter: {type: DataTypes.INTEGER},
    ip: {type: DataTypes.INET},
    userAgent: {type: DataTypes.TEXT},
});

module.exports = {
    UserLoginAttempts
}