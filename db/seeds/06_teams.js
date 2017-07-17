exports.seed = function(knex) {
  return knex('teams').truncate()
    .then(() => {
      return knex('teams').insert([
        {
          id: 1,
          name: 'Hurl Scouts',
          league_id: 1,
        },
        {
          id: 2,
          name: 'Black Widows',
          league_id: 1,
        },
        {
          id: 3,
          name: 'Fight Attendants',
          league_id: 1,
        },
        {
          id: 4,
          name: 'Holy Rollers',
          league_id: 1,
        },
        {
          id: 5,
          name: 'Kung Fu Whip',
          league_id: 1,
        },
        {
          id: 6,
          name: 'Punny Punchers',
          league_id: 2,
        }
      ]);
    });
};
