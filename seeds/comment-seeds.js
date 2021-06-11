const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Another good post.',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'This post is awesome.',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'This post was great.',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'I really liked this post.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Great post.',
        user_id: 2,
        post_id: 4
    }

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
