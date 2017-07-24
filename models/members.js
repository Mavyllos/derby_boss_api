const Resource = require('./resource')('members');
const knex = require('../db/connection.js');

class Members extends Resource {
  constructor() {}

  static showAllforAll() {
    return knex.select('members.id as member_id', 'requirements.id as requirements_id', 'emergencies.id as emergencies_id', 'addresses.id as addresses_id', '*').from('members')
      .innerJoin('requirements', 'members.id', 'requirements.member_id')
      .innerJoin('emergencies', 'members.id', 'emergencies.member_id')
      .innerJoin('addresses', 'members.id', 'addresses.member_id');
    }

  static showAllForOne(id) {
    return knex('members')
      .innerJoin('requirements', 'members.id', 'requirements.member_id')
      .innerJoin('emergencies', 'members.id', 'emergencies.member_id')
      .innerJoin('addresses', 'members.id', 'addresses.member_id')
      .where('members.id', id);
  }
}


module.exports = Members;
