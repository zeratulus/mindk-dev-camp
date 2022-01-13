const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const UserUniversity = sequelize.define('userUniversity', {
    id: {type: DataTypes.UUID, primaryKey: true},
    universityId: {type: DataTypes.UUID},
    userId: {type: DataTypes.UUID},
    startedAt: {type: DataTypes.DATE},
    finishedAt: {type: DataTypes.DATE},
}, {
    paranoid: true
});

module.exports = UserUniversity;