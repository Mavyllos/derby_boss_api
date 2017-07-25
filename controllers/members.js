const Members = require('../models/members.js');
const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/connection.js');

function showAllMembers(req, res, next) {
  // Members.all().then(members => res.json(members));
  Members.showAllforAll().then(members => res.json(members));
}

function showOneMember(req, res, next) {
  const id = req.params.id;
  Members.showAllForOne(id).then(members => {
    const user = members.id;
    res.json(members);
  });
}

function addNewMember(req, res, next) {
  console.log('=====req.body=====');
  console.log(req.body);
  bcrypt.hash(req.body.password, 8)
    .then(hashed_password => {
      let member = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        derby_name: req.body.derby_name,
        jersey_number: req.body.jersey_number,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        active: req.body.active,
        eligibility: req.body.eligibility,
        profile_img: req.body.profile_img
      };

      let emergency = {
        contact_name: req.body.contact_name,
        contact_number: req.body.contact_number,
        insured: req.body.insured,
        emer_provider_name: req.body.emer_provider_name,
        emer_policy_number: req.body.emer_policy_number
      };

      let requirement = {
        ins_required: req.body.ins_required,
        issue_date: req.body.issue_date,
        expires: req.body.expires,
        req_policy_number: req.body.req_policy_number
      };

      let address = {
        line_1: req.body.line_1,
        line_2: req.body.line_2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      };

      let body = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        derby_name: req.body.derby_name,
        jersey_number: req.body.jersey_number,
        phone: req.body.phone,
        email: req.body.email,
        password: hashed_password,
        role: req.body.role,
        active: req.body.active,
        dues_paid: req.body.dues_paid,
        eligibility: req.body.eligibility,
        profile_img: req.body.profile_img,
        league_id: 1
      };
      console.log('=====body=====');
      console.log(body);
      // Members.create(body).then(result => {
      //   const user = result[0];
      //   delete user.hashed_password;
      //   res.json(user);
      // });

      Members.create(body).then(newMember => {
        const user = newMember[0];
        delete user.hashed_password;

        address.member_id = user.id;
        knex('addresses').insert(address).returning('*').then(result => {
          console.log(result);

          emergency.member_id = user.id;
          knex('emergencies').insert(emergency).returning('*').then(result => {

            console.log(result);
            requirement.member_id = user.id;
            knex('requirements').insert(requirement).returning('*').then(result => {
              console.log(result);
            });
          });
        });
        res.json(user);
      });
    });
}

function editMember(req, res, next) {
  const id = req.params.id;
  console.log(req.body);

  let emergency = {
    member_id: id,
    contact_name: req.body.contact_name,
    contact_number: req.body.contact_number,
    insured: req.body.insured,
    emer_provider_name: req.body.emer_provider_name,
    emer_policy_number: req.body.emer_policy_number
  };

  let requirement = {
    member_id: id,
    ins_required: req.body.ins_required,
    issue_date: req.body.issue_date,
    expires: req.body.expires,
    req_policy_number: req.body.req_policy_number
  };

  let address = {
    member_id: id,
    line_1: req.body.line_1,
    line_2: req.body.line_2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip
  };

  let member = {
    id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    derby_name: req.body.derby_name,
    jersey_number: req.body.jersey_number,
    phone: req.body.phone,
    email: req.body.email,
    role: req.body.role,
    active: req.body.active,
    dues_paid: req.body.dues_paid,
    eligibility: req.body.eligibility,
    profile_img: req.body.profile_img,
    league_id: 1
  };


  Members.edit(id, member).then(editedMember => {
    // console.log(editedMember);
    const user = editedMember[0];

    knex('addresses').update(address).where({member_id:address.member_id}).returning('*').then(addressResult => {
      // console.log(addressResult);

      knex('emergencies').update(emergency).where({member_id:emergency.member_id}).returning('*').then(emergencyResult => {

        // console.log(emergencyResult);
        knex('requirements').update(requirement).where({member_id:requirement.member_id}).returning('*').then(requirementsResult => {
          // console.log(requirementsResult);

        });
      });
    });
    res.json(editedMember);
  });

  // function removeMember(req, res, next) {
  //   const id = req.params.id;
  //
  //   Members.remove(id).then(members => {
  //     res.json(members);
  //   });
  // }

}

module.exports = {
  showAllMembers,
  showOneMember,
  addNewMember,
  editMember
};
