const {Router} = require('express');
const {getCountriesHandler, getCountryByIdHandler} = require('../Handlers/handlerCountries.js');

const router = Router();

router.get('/', getCountriesHandler);

router.get('/:idPais', getCountryByIdHandler);

module.exports = router;