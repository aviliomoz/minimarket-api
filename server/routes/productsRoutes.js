const router = require('express').Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/', [], productsControllers.getProducts);

module.exports = router;
