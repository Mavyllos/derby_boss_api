const Dashboard = require('../models/dashboard.js');

function index(req, res, next) {
  Dashboard.all().then(dashboard => res.json('Dashboard', dashboard));
}

function show(req, res, next) {
  const id = req.params.id;
  Dashboard.show(id).then(dashboard => res.json('Dashboard', dashboard));
}

module.exports = { index, show };
