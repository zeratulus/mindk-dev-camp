const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const PostVisibility = sequelize.define('postVisibility', {
    id: {type: DataTypes.UUID, primaryKey: true},
    title: {type: DataTypes.TEXT}
});

module.exports = PostVisibility;