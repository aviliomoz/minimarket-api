const router = require('express').Router();
const categoriesControllers = require('../controllers/categoriesControllers');

router.get('/', [], categoriesControllers.getCategories);

module.exports = router;
