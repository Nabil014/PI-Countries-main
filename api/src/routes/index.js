const { Router } = require('express');
const bodyParser = require("body-parser");
const { getById, getCountry } = require('./Country')
const {activityPost, getActivities} = require('./Activity')
// Importar todos los routers;

const { Country } = require('./Country')
const { Activity } = require('./Activity')

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(bodyParser.json());

router.get('/countries/:id', getById)
router.get('/countries', getCountry)
// router.get('/countries', getCountries)

router.post('/activities', activityPost)
router.get('/activities', getActivities)
module.exports = router;
