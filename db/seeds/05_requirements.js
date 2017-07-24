exports.seed = function(knex) {
  return knex('requirements').truncate()
    .then(() => {
      return knex('requirements').insert([
        {
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          req_policy_number: 'ANSE657483921',
          member_id: 5
        },
        {
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          req_policy_number: 'ANSE918273645',
          member_id: 3
        },
        {
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          req_policy_number: 'ANSE234516978',
          member_id: 2
        },
        {
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          req_policy_number: 'ANSE678954321',
          member_id: 1
        },
        {
          ins_required: true,
          issue_date: '2016-12-15',
          expires: '2017-12-15',
          req_policy_number: 'ANSE987654321',
          member_id: 4
        }]);
    });
};
