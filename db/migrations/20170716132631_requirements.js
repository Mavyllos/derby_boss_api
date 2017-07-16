exports.up = (knex) => {
  return knex.schema.createTable('requirements', table => {
    table.increments();
    table.boolean('ins_required');
    table.date('issue_date');
    table.date('expires');
    table.string('policy_number');
    table.integer('member_id');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('requirements');
};
