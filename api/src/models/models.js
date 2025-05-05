const UserUniversity = require("./userUniversity");
const UserProfilePropsVisibility = require("./userProfilePropsVisibility");
const UserOAuth = require("./userOAuth");
const UserLoginAttempts = require("./userLoginAttempts");
const UserFriends = require("./userFriends");
const University = require("./university");
const PostVisibility = require("./postVisibility");
const PostCommentary = require("./postCommentary");
const PostImage = require("./postImage");
const Post = require("./post");
const PostLike = require("./postLike");
const User = require("./user");
const Log = require("./log");

/* Relations */
User.hasMany(UserUniversity);
UserUniversity.belongsTo(User);
University.hasMany(UserUniversity);
User.hasOne(UserOAuth, {
    foreignKey: 'userId'
});
User.hasOne(UserProfilePropsVisibility, {
    foreignKey: 'userId'
});
User.hasOne(UserLoginAttempts, {
    foreignKey: 'userId'
});

UserFriends.hasOne(User, {
    foreignKey: 'id',
    sourceKey: 'friendId'
})

Post.hasMany(PostImage, {
    foreignKey: 'postId'
});
Post.hasOne(PostVisibility, {constraints: false});
Post.belongsTo(User);
Post.hasMany(PostLike, {
    foreignKey: 'postId'
});
PostLike.belongsTo(User);
Post.hasMany(PostCommentary, {
    foreignKey: 'postId'
});
PostCommentary.belongsTo(User);
PostCommentary.hasMany(PostCommentary, {
    foreignKey: 'replyId'
});
/* End of Relations */

module.exports = {
    Post,
    PostImage,
    PostCommentary,
    PostLike,
    PostVisibility,
    University,
    User,
    UserFriends,
    UserLoginAttempts,
    UserOAuth,
    UserProfilePropsVisibility,
    UserUniversity,
    Log
}