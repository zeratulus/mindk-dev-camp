const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const postImage = sequelize.define('postImage', {
    id: {type: DataTypes.UUID, primaryKey: true},
    postId: {type: DataTypes.UUID},
    image: {type: DataTypes.TEXT},
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = postImage;