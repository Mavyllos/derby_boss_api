exports.seed = function(knex) {
  return knex('members').truncate()
    .then(() => {
      return knex('members').insert([
        {
            id: 1,
            first_name: 'Ellen',
            last_name: 'Page',
            derby_name: 'Babe Ruthless',
            jersey_number: '22',
            phone: '5555554321',
            email: 'BabeRuthless@fakemail.com',
            password: '$2a$08$C4IDEUfbPmusLcbycreJu..AeEcWyx0HehxKwfQKUXN/vUzv7jDLG',
            role: {"type": ["skater"]},
            active: true,
            eligibility: true,
            profile_img: 'http://rs996.pbsrc.com/albums/af84/Angelina_Paredes/Ellen%20Page/EllenPageWhipIt_event_main.jpg~c200',
            league_id: 1
        },
        {
          id: 2,
          first_name: 'Juliette',
          last_name: 'Lewis',
          derby_name: 'Iron Maven',
          jersey_number: '36',
          phone: '5555552345',
          email: 'MadMaven@fakemail.com',
          password: '$2a$08$C4IDEUfbPmusLcbycreJu..AeEcWyx0HehxKwfQKUXN/vUzv7jDLG',
          role: {"type": ["admin", "coach", "skater"]},
          active: true,
          eligibility: true,
          profile_img: 'http://pmcmovieline.files.wordpress.com/2011/12/julietteiron1.jpg',
          league_id: 1
        },
        {
          id: 3,
          first_name: 'Drew',
          last_name: 'Barrymore',
          derby_name: 'Smashley Simpson',
          jersey_number: '2',
          phone: '5555556543',
          email: 'SassSmash@fakemail.com',
          password: '$2a$08$C4IDEUfbPmusLcbycreJu..AeEcWyx0HehxKwfQKUXN/vUzv7jDLG',
          role: {"type": ["skater"]},
          active: true,
          eligibility: true,
          profile_img: 'http://m.aceshowbiz.com/webimages/still/preview/whip_it_24.jpg',
          league_id: 1
        },
        {
          id: 4,
          first_name: 'Andrew',
          last_name: 'Wilson',
          derby_name: 'Razor',
          phone: '5555556789',
          email: 'Razor@fakemail.com',
          password: '$2a$08$C4IDEUfbPmusLcbycreJu..AeEcWyx0HehxKwfQKUXN/vUzv7jDLG',
          role: {"type": ["admin", "coach"]},
          active: true,
          eligibility: true,
          profile_img: 'http://1.bp.blogspot.com/-c0Ym_jKvZ1E/TlCx7F_-HaI/AAAAAAAADEw/Qn3rwsBwCx0/s1600/WhipIt6.JPG',
          league_id: 1
        },
        {
          id: 5,
          first_name: 'Sydney',
          last_name: 'Bennett',
          derby_name: 'Kami Kazi',
          jersey_number: 'Blank',
          phone: '5555558765',
          email: 'KamiKazi@fakemail.com',
          password: '$2a$08$C4IDEUfbPmusLcbycreJu..AeEcWyx0HehxKwfQKUXN/vUzv7jDLG',
          role: {"type": ["skater"]},
          active: true,
          eligibility: true,
          profile_img: 'http://images.cinemaring.com/upload/upload_screenshots/images/cr_actors/8/8/8/0fd2b530081b5e13133a0ce3b6ebf59b.jpg',
          league_id: 1
        },
        {
          id: 6,
          first_name: 'Jane',
          last_name: 'Doe',
          derby_name: 'Plain Jane',
          jersey_number: '123',
          phone: '5555558765',
          email: 'PJDoe@fakemail.com',
          password: '$2a$08$C4IDEUfbPmusLcbycreJu..AeEcWyx0HehxKwfQKUXN/vUzv7jDLG',
          role: {"type": ["skater"]},
          active: true,
          eligibility: true,
          profile_img: 'http://images.cinemaring.com/upload/upload_screenshots/images/cr_actors/8/8/8/0fd2b530081b5e13133a0ce3b6ebf59b.jpg',
          league_id: 2
        }]);
    });
};