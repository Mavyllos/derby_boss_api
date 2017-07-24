const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/leagues.js');

router.get('/', ctrl.showAllLeagues);
router.get('/:id', ctrl.showOneLeague);

module.exports = router;
