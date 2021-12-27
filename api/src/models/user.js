const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.UUID, primaryKey: true},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING(13), unique: true},
    hash: {type: DataTypes.TEXT},
    salt: {type: DataTypes.STRING(8)},
    seo_alias: {type: DataTypes.STRING},
    last_ip: {type: DataTypes.INET},
    avatar: {type: DataTypes.TEXT},
    background: {type: DataTypes.TEXT},
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = {
    User
}