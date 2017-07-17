exports.seed = function(knex) {
  return knex('members_teams').truncate()
    .then(() => {
      return knex('members_teams').insert([
        {
            member_id: 1,
            team_id: 1
        },
        {
            member_id: 2,
            team_id: 4
        },
        {
            member_id: 3,
            team_id: 1
        },
        {
            member_id: 4,
            team_id: 1
        },
        {
            member_id: 5,
            team_id: 3
        },
        {
            member_id: 5,
            team_id: 5
        },
        {
            member_id: 1,
            team_id: 5
        },
        {
            member_id: 6,
            team_id: 6
        }
      ]);
    });
};
