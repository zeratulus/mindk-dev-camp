const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const UserProfilePropsVisibility = sequelize.define('userProfilePropsVisibility', {
    id: {type: DataTypes.UUID, primaryKey: true},
    userId: {type: DataTypes.UUID},
    email: {type: DataTypes.INTEGER(2)},
    phone: {type: DataTypes.INTEGER(2)},
    university: {type: DataTypes.INTEGER(2)},
});

module.exports = UserProfilePropsVisibility;