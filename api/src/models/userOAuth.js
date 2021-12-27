const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const UserOAuth = sequelize.define('userOAuth', {
    id: {type: DataTypes.UUID, primaryKey: true},
    userId: {type: DataTypes.UUID},
    githubId: {type: DataTypes.TEXT},
    googleId: {type: DataTypes.TEXT},
    facebookId: {type: DataTypes.TEXT},
});

module.exports = {
    UserOAuth
}