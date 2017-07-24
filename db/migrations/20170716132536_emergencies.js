exports.up = (knex) => {
  return knex.schema.createTable('emergencies', table => {
    table.increments();
    table.string('contact_name');
    table.string('contact_number');
    table.boolean('insured');
    table.string('emer_provider_name');
    table.string('emer_policy_number');
    table.integer('member_id');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('emergencies');
};
