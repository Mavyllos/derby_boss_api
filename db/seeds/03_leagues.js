exports.seed = function(knex) {
  return knex('leagues').truncate()
    .then(() => {
      return knex('leagues').insert([
        {
          id: 1,
          name: 'Random City Derby Dames',
          membership: {"type": ["Women's Flat Track Derby Association", "USARS"]},
          active: true,
          banner_img: "http://www.vrdl.org/wp-content/uploads/2012/08/banner12.jpg"

        },
        {
          id: 2,
          name: 'Super Fake League No. 2',
          membership: {"type": ["Women's Flat Track Derby Association", "Junior Roller Derby Association", "Men's Roller Derby Association"]},
          active: true,
          banner_img: "http://www.thestoryoftexas.com/upload/images/100days/artifacts/rollerderby-skates-100days-banner.jpg"
        }]);
    });
};
