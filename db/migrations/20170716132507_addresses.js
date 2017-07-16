exports.up = (knex) => {
  return knex.schema.createTable('addresses', table => {
    table.increments();
    table.string('line_1');
    table.string('line_2');
    table.string('city');
    table.string('state');
    table.string('zip');
    table.integer('league_id');
    table.integer('member_id');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('addresses');
};
