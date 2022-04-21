const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const PostCommentary = sequelize.define('postCommentary', {
    id: {type: DataTypes.UUID, primaryKey: true},
    userId: {type: DataTypes.UUID},
    postId: {type: DataTypes.UUID},
    replyId: {type: DataTypes.UUID},
    body: {type: DataTypes.TEXT}
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = PostCommentary;