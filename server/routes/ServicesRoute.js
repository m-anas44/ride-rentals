const express = require('express');
const router = express.Router();

const ServiceController = require('../controllers/ServicesController');

router.get('/', ServiceController.getAllServices)
router.post('/', ServiceController.addNewService)

module.exports = router;