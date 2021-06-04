const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const crudRoutes = require('./crud-routes.js')
const userRoutes = require('./user-routes')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/crud', crudRoutes)
router.use('/user', userRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;