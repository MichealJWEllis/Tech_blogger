const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Comment, Users } = require('../models')


router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['user_id', 'title', 'postText', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'user_id', 'comment_text']
            },
            {
                model: Users,
                attributes: ['id', 'username']
            }
        ]
    })
        .then(data => {
            res.render('login', { post: data, title: 'The Tech Blog' });
            // console.log(data)
        })

});



module.exports = router;