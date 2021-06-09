const { Post } = require('../models');

const postdata = [
    {
        title: 'GitHub',
        postText: 'Posted information on GitHub',
        user_id: 1
    },
    {
        title: 'IP Addresses',
        postText: 'Posted information on IP Addresses',
        user_id: 3
    },
    {
        title: 'VPN',
        postText: 'Posted information on VPNs',
        user_id: 1
    },
    {
        title: 'Python',
        postText: 'Posted information on python coding',
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;