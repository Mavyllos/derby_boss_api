const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/requirements.js');

router.get('/', ctrl.showAllRequirements);
router.get('/:id', ctrl.showOneRequirement);

module.exports = router;
