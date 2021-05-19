const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'blogger1',
        email: 'blogger1@me.com',
        password: 'password111'
    },
    {
        username: 'blogger2',
        email: 'blogger2@me.com',
        password: 'password222'
    },
    {
        username: 'blogger3',
        email: 'blogger3@me.com',
        password: 'password333'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true})

module.exports = seedUsers