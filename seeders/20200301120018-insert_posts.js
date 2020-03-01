'use strict';
const posts = require('./seed_data/posts')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('posts', posts)
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
