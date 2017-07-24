const Resource = require('./resource')('members');
const knex = require('../db/connection.js');

class Members extends Resource {
  constructor() {}

  static showAllForOne(id) {
    return knex('members')
      .innerJoin('requirements', 'members.id', 'requirements.member_id')
      .innerJoin('emergencies', 'members.id', 'emergencies.member_id')
      .innerJoin('addresses', 'members.id', 'addresses.member_id')
      .where('members.id', id);
  }
}


module.exports = Members;
