const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'blogger1',
        email: 'blogger1@blah.com',
        password: 'password111'
    },
    {
        username: 'blogger2',
        email: 'blogger2@asdf.com',
        password: 'password222'
    },
    {
        username: 'blogger3',
        email: 'blogger3@asdfg.com',
        password: 'password333'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true})

module.exports = seedUsers