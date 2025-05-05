const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const University = sequelize.define('university', {
    id: {type: DataTypes.UUID, primaryKey: true},
    city: {type: DataTypes.STRING},
    title: {type: DataTypes.TEXT},
    address: {type: DataTypes.TEXT},
});

module.exports = University;