const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const Log = sequelize.define('log', {
    id: {type: DataTypes.UUID, primaryKey: true},
    component: {type: DataTypes.TEXT},
    severity: {type: DataTypes.TEXT},
    message: {type: DataTypes.TEXT},
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = Log;