const {Router} = require("express");
const {postActivityHandler, getActivityHandler} = require("../Handlers/handlerActivity.js");


const router = Router();

router.post('/', postActivityHandler);

router.get('/', getActivityHandler);

module.exports = router;