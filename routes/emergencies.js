const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/emergencies.js');

router.get('/', ctrl.showAllEmergencies);
router.get('/:id', ctrl.showOneEmergency);

module.exports = router;
