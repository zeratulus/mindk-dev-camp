const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const PostLike = sequelize.define('postLike', {
    id: {type: DataTypes.UUID, primaryKey: true},
    userId: {type: DataTypes.UUID},
    postId: {type: DataTypes.UUID}
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = PostLike;