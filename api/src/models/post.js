const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const Post = sequelize.define('post', {
    id: {type: DataTypes.UUID, primaryKey: true},
    userId: {type: DataTypes.UUID},
    body: {type: DataTypes.TEXT},
    visibilityId: {type: DataTypes.UUID},
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = {
    Post
}