'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Kathy',
      lastName: 'West',
      email: 'kwest@netzero.net',
      username: 'kwest',
      coins: 55,
      favoritePet: 'dog',
      createdAt: Date.now(),
      updatedAt: Date.now()
    }], {});
  },
};
