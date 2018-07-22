'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learners', [{
      firstName: 'Kathy',
      lastName: 'West',
      email: 'kwest@netzero.net',
      username: 'kwest',
      coins: 55,
      favoritePet: 'dog'
    },
    {
      firstName: 'Mike',
      lastName: 'West',
      email: 'mister270@gmail.com',
      username: 'mwest',
      coins: 55,
      favoritePet: 'dog'
    }], {});
  },
};
