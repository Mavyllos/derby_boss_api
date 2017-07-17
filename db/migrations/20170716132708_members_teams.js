exports.up = (knex) => {
  return knex.schema.createTable('members_teams', table => {
    table.integer('member_id').notNullable();
    table.integer('team_id').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('members_teams');
};
