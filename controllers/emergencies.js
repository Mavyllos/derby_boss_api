const Emergencies = require('../models/emergencies.js');

function showAllEmergencies(req, res, next) {
  Emergencies.all().then(emergencies => res.json(emergencies));
}

function showOneEmergency(req, res, next) {
  const id = req.params.id;
  Emergencies.show(id).then(emergencies => res.json(emergencies));
}

module.exports = {
  showAllEmergencies,
  showOneEmergency
};
