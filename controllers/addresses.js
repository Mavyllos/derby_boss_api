const Addresses = require('../models/addresses.js');

function showAllAddresses(req, res, next) {
  Addresses.all().then(addresses => res.json(addresses));
}

function showOneAddress(req, res, next) {
  const id = req.params.id;
  Addresses.show(id).then(addresses => res.json(addresses));
}

module.exports = {
  showAllAddresses,
  showOneAddress
};
