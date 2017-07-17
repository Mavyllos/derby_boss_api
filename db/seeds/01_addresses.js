exports.seed = function(knex) {
  return knex('addresses').truncate()
    .then(() => {
      return knex('addresses').insert([
        {
            id: 1,
            line_1: '398 Sunbeam Street',
            line_2: 'Apt 300',
            city: 'Absecon',
            state: 'NJ',
            zip: 08205,
            member_id: 5
        },
        {
          id: 2,
          line_1: '78 Fairfield Ave.',
          line_2: 'Suite 405',
          city: 'Warner Robins',
          state: 'GA',
          zip: 31088,
          member_id: 3
        },
        {
          id: 3,
          line_1: '283 Selby Ave.',
          city: 'West Springfield',
          state: 'MA',
          zip: 01089,
          member_id: 2
        },
        {
          id: 4,
          line_1: '23 Brook Rd.',
          line_2: 'Suite 236',
          city: 'Lititz',
          state: 'PA',
          zip: 17543,
          member_id: 1
        },
        {
          id: 5,
          line_1: '36 Durham Circle',
          city: 'Spartanburg',
          state: 'SC',
          zip: 29301,
          member_id: 4
        },
        {
          id: 6,
          line_1: '635 Laurel Dr',
          line_2: 'Suite 1001',
          city: 'Columbia',
          state: 'MD',
          zip: 21044,
          league_id: 1
        },
        {
          id: 7,
          line_1: '3657 Star Trek Drive',
          line_2: 'Suite 2134',
          city: 'Youngstown',
          state: 'FL',
          zip: 32466,
          league_id: 2
        }]);
    });
};
