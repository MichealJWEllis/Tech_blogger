// import all models
const Post = require('./Post')
const Users = require('./Users')
const Comment = require('./Comment')

// create associations
Users.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

Users.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

Comment.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})


module.exports = { Users, Post, Comment }