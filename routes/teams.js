const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/teams.js');

router.get('/', ctrl.showAllTeams);
router.get('/:id', ctrl.showOneTeam);

module.exports = router;
