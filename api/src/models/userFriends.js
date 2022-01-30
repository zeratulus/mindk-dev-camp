const sequelize = require('../services/db');
const {DataTypes} = require('sequelize');

const UserFriends = sequelize.define('userFriends', {
    id: {type: DataTypes.UUID, primaryKey: true},
    userId: {type: DataTypes.UUID},
    friendId: {type: DataTypes.UUID},
    status: {type: DataTypes.BOOLEAN}
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = UserFriends;