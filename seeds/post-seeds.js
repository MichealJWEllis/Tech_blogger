const { Post } = require('../models');

const postdata = [
    {
        title: 'Why MVC is so important',
        user_id: 1
    },
    {
        title: 'Authentication vs. Authorization',
        user_id: 2
    },
    {
        title: 'Object-Relational Mapping',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
