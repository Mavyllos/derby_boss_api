exports.seed = function(knex) {
  return knex('requirements').truncate()
    .then(() => {
      return knex('requirements').insert([
        {
          id: 1,
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          policy_number: 'ANSE657483921',
          member_id: 5
        },
        {
          id: 2,
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          policy_number: 'ANSE918273645',
          member_id: 3
        },
        {
          id: 3,
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          policy_number: 'ANSE234516978',
          member_id: 2
        },
        {
          id: 4,
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          policy_number: 'ANSE678954321',
          member_id: 1
        },
        {
          id: 5,
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          policy_number: 'ANSE987654321',
          member_id: 4
        }]);
    });
};
