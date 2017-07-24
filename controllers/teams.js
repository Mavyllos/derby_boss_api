const Teams = require('../models/teams.js');

function showAllTeams(req, res, next) {
  Teams.all().then(teams => res.json(teams));
}

function showOneTeam(req, res, next) {
  const id = req.params.id;
  Teams.show(id).then(teams => res.json(teams));
}

module.exports = { showAllTeams, showOneTeam };
