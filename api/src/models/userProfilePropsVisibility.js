const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const UserProfilePropsVisibility = sequelize.define('userProfilePropsVisibility', {
    id: {type: DataTypes.UUID, primaryKey: true},
    userId: {type: DataTypes.UUID},
    email: {type: DataTypes.UUID},
    phone: {type: DataTypes.UUID},
    university: {type: DataTypes.UUID},
});

module.exports = UserProfilePropsVisibility;