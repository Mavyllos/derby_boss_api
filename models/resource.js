const db = require('../db/connection.js');

function ResourceFactory(table) {
  class Resource {
    constructor() {}

    static all(){
      console.log('models');
      return db(table);
    }

    static create(body){
      return db(table).insert(body).returning('*');
    }

    static show(id){
      return db(table).where({id}).first();
    }

    static edit(id, body){
      return db(table).update(body).where({id}).returning('*');
    }

    // static remove(id){
    //   return db(table).where({id}).del();
    // }
  }

  return Resource;
}


module.exports = ResourceFactory;
