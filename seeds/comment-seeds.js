const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'et malesuada fames ac turpis egestas maecenas pharetra convallis',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
