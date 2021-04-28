const router = require('express').Router();
const travelerTrips = require('./travelerTrips');

router.use('/travelers', travelerTrips);

module.exports = router