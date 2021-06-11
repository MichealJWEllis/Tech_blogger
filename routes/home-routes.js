const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Comment, Users } = require('../models')


router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'user_id',
            'title',
            'postText',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'user_id', 'comment_text'],
                include: {
                    model: Users,
                    attributes: ['id', 'username', 'email']
                }
            },
            {
                model: Users,
                attributes: ['id', 'username', 'email']
            }
        ]
    })
        .then(data => {
            const posts = data.map(post => post.get({ plain: true }))

            res.render('login', { posts, loggedIn: req.session.logginIn, title: 'The Tech Blog' });
            console.log(posts)
        })

});



module.exports = router;