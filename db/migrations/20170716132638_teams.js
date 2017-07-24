exports.up = (knex) => {
  return knex.schema.createTable('teams', table => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('designation').notNullable();
    table.integer('league_id');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('teams');
};
