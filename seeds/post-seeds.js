const { Post } = require('../models');

const postdata = [
    {
        title: 'Why MVC is so important',
        post_url: 'https://www.c-sharpcorner.com/article/what-is-mvc-and-why-we-use-mvc/',
        context: 'A description of the first post',
        user_id: 1
    },
    {
        title: 'Authentication vs. Authorization',
        post_url: 'https://www.okta.com/identity-101/authentication-vs-authorization/',
        context: 'A description of the second post',
        user_id: 2
    },
    {
        title: 'Object-Relational Mapping',
        post_url: 'https://circle.visual-paradigm.com/docs/database-design-engineering/programmers-guide/what-is-object-relational-mapping-orm/',
        context: 'A descrition of the third post',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
