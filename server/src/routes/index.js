const { Router } = require("express");
const countryRoute = require('./countryRoute.js');
const actRoute = require('./actRoute.js')


const router = Router();


router.use('/countries', countryRoute);
router.use('/activities', actRoute)


module.exports = router;

