const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const PostVisibility = sequelize.define('postVisibility', {
    id: {type: DataTypes.UUID, primaryKey: true},
    postId: {type: DataTypes.UUID},
    visibilityId: {type: DataTypes.UUID}
});

module.exports = PostVisibility;