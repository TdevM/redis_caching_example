'use strict';
const users = require('./seed_data/users')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', users)
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};
