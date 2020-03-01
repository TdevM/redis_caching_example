'use strict';
const articles = require('./seed_data/articles')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('articles', articles)
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
