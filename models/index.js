// import all models
const Post = require('./Post')
const Users = require('./Users')
const Comment = require('./Comment')

// create associations
Users.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(Users, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Users, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Users.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = { Users, Post, Comment }