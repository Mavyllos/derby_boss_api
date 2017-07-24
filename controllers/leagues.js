const Leagues = require('../models/leagues.js');

function showAllLeagues(req, res, next) {
  Leagues.all().then(leagues => res.json(leagues));
}

function showOneLeague(req, res, next) {
  const id = req.params.id;
  Leagues.show(id).then(leagues => res.json(leagues));
}

module.exports = {
  showAllLeagues,
  showOneLeague
};
