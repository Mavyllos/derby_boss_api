exports.up = (knex) => {
  return knex.schema.createTable('members', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('derby_name').notNullable().unique();
    table.string('jersey_number').notNullable();
    table.string('phone').notNullable();
    table.string('email').notNullable();
    table.specificType('password', 'char(60)').notNullable();
    table.jsonb('role').notNullable();
    table.boolean('active');
    table.boolean('eligibility');
    table.text('profile_img');
    table.integer('league_id');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('members');
};
