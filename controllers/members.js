const Members = require('../models/members.js');
const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/connection.js');

function showAllMembers(req, res, next) {
  Members.all().then(members => res.json(members));
}

function showOneMember(req, res, next) {
  const id = req.params.id;
  Members.show(id).then(members => res.json(members));
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
          password: req.body.email,
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

            module.exports = {
              showAllMembers,
              showOneMember,
              addNewMember
            };
