exports.seed = function(knex) {
  return knex('requirements').truncate()
    .then(() => {
      return knex('requirements').insert([
        {
          ins_required: true,
          issue_date: '2016-02-15',
          expires: '2017-02-15',
          req_policy_number: 'ANSE657483921',
          member_id: 5
        },
        {
          ins_required: true,
          issue_date: '2016-09-18',
          expires: '2017-09-18',
          req_policy_number: 'ANSE918273645',
          member_id: 3
        },
        {
          ins_required: true,
          issue_date: '2017-05-06',
          expires: '2018-05-06',
          req_policy_number: 'ANSE234516978',
          member_id: 2
        },
        {
          ins_required: true,
          issue_date: '2017-01-22',
          expires: '2018-01-22',
          req_policy_number: 'ANSE678954321',
          member_id: 1
        },
        {
          ins_required: true,
          issue_date: '2016-10-30',
          expires: '2017-10-30',
          req_policy_number: 'ANSE987654321',
          member_id: 4
        }]);
    });
};
