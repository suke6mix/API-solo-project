
const waters = require('../waters')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('water').del()
    .then(function () {
      // Inserts seed entries
      return knex('water').insert(waters);
    });
};
