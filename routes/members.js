const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/members.js');

router.get('/', ctrl.showAllMembers);
router.post('/new', ctrl.addNewMember);
router.get('/:id', ctrl.showOneMember);
router.put('/:id', ctrl.editMember);
// router.delete('/:id', ctrl.deleteMember);

module.exports = router;
