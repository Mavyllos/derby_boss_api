const db = require('../db/connection.js');

function ResourceFactory(table) {
  class Resource {
    constructor() {}

    static all(){
      console.log('models');
      return db(table)
    }

    static create(body){
      return db(table).insert(body).returning('*')
    }

    static show(id){
      return db(table).where({id}).first()
    }
  }

  return Resource;
}


module.exports = ResourceFactory;