const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
    res.render('create_users', { title: 'The Tech Blog' });
});



module.exports = router;