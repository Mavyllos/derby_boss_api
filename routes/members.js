const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/members.js');

router.get('/', ctrl.showAllMembers);
router.post('/new', ctrl.addNewMember);
// router.put('/edit'. ctrl.editMember);
router.get('/:id', ctrl.showOneMember);

module.exports = router;
