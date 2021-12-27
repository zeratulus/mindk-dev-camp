const {UserUniversity} = require("./userUniversity");
const {UserProfilePropsVisibility} = require("./userProfilePropsVisibility");
const {UserOAuth} = require("./userOAuth");
const {UserLoginAttempts} = require("./userLoginAttempts");
const {UserFriends} = require("./userFriends");
const {University} = require("./university");
const {PostVisibility} = require("./postVisibility");
const {PostCommentary} = require("./postCommentary");
const {Post} = require("./post");
const {PostLike} = require("./postLike");
const {User} = require("./user");

/* Relations */
User.hasMany(UserUniversity);
UserUniversity.belongsTo(User);
University.hasMany(UserUniversity);
User.hasOne(UserOAuth);
User.hasOne(UserProfilePropsVisibility);
User.hasOne(UserLoginAttempts);
User.hasMany(UserFriends);

Post.hasOne(PostVisibility, {constraints: false});
Post.belongsTo(User);
Post.hasMany(PostLike);
PostLike.belongsTo(User);
Post.hasMany(PostCommentary);
PostCommentary.belongsTo(User);
PostCommentary.hasMany(PostCommentary, {
    foreignKey: 'replyId'
})
/* End of Relations */

module.exports = {
    Post,
    PostCommentary,
    PostLike,
    PostVisibility,
    University,
    User,
    UserFriends,
    UserLoginAttempts,
    UserOAuth,
    UserProfilePropsVisibility,
    UserUniversity
}