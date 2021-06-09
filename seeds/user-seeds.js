const sequelize = require('../config/connection');
const { Users } = require('../models');

const userdata = [
    {
        username: 'mike1',
        email: 'mike1@gmail.com',
        password: 'password123'
    },
    {
        username: 'mike2',
        email: 'mike2@gmail.com',
        password: 'password123'
    },
    {
        username: 'mike3',
        email: 'mike3@gmail.com',
        password: 'password123'
    }
]

const seedUsers = () => Users.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
