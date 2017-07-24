exports.seed = function(knex) {
  return knex('teams').truncate()
    .then(() => {
      return knex('teams').insert([
        {
          name: 'Hurl Scouts',
          designation: 'Junior',
          league_id: 1,
        },
        {
          name: 'Black Widows',
          designation: 'Local',
          league_id: 1,
        },
        {
          name: 'Fight Attendants',
          designation: 'Local',
          league_id: 1,
        },
        {
          name: 'Holy Rollers',
          designation: 'Local',
          league_id: 1,
        },
        {
          name: 'Kung Fu Whip',
          designation: 'Travel',
          league_id: 1,
        },
        {
          name: 'Punny Punchers',
          designation: 'Travel',
          league_id: 2,
        }
      ]);
    });
};
