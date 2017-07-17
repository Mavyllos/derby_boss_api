exports.up = (knex) => {
  return knex.schema.createTable('leagues', table => {
    table.increments();
    table.string('name').notNullable().unique();
    table.jsonb('membership');
    table.boolean('active');
    table.text('banner_img');
    table.integer('team_id');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('leagues');
};
