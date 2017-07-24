const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/addresses.js');

router.get('/', ctrl.showAllAddresses);
router.get('/:id', ctrl.showOneAddress);

module.exports = router;
