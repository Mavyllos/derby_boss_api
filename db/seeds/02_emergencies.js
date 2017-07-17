exports.seed = function(knex) {
  return knex('emergencies').truncate()
    .then(() => {
      return knex('emergencies').insert([
        {
          id: 1,
          contact_name: 'Mike Baker',
          contact_number: '9046651234',
          insured: true,
          provider_name: 'BCBS of Georgia',
          policy_number: 'B12345678',
          member_id: 5
        },
        {
          id: 2,
          contact_name: 'Samuel Evans',
          contact_number: '9054871234',
          insured: true,
          provider_name: 'BCBS of Arizona',
          policy_number: 'DI98765432',
          member_id: 3
        },
        {
          id: 3,
          contact_name: 'Bruce Graf',
          contact_number: '8356730987',
          insured: true,
          provider_name: 'BCBS of Georgia',
          policy_number: 'RB123678345',
          member_id: 2
        },
        {
          id: 4,
          contact_name: 'Rebecca Walker',
          contact_number: '2864904321',
          insured: true,
          provider_name: 'Aetna',
          policy_number: '3452567AI',
          member_id: 1
        },
        {
          id: 5,
          contact_name: 'Tennie West',
          contact_number: '6738295678',
          insured: false,
          member_id: 4
        }]);
    });
};
