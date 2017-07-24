const Requirements = require('../models/requirements.js');

function showAllRequirements(req, res, next) {
  Requirements.all().then(requirements => res.json(requirements));
}

function showOneRequirement(req, res, next) {
  const id = req.params.id;
  Requirements.show(id).then(requirements => res.json(requirements));
}

module.exports = {
  showAllRequirements,
  showOneRequirement
};
