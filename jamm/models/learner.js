// * import static Sequelize for data types.
const Sequelize = require("sequelize");
// * import the constructed database with all the connection info etc.
const database = require("./index.js");
// * inside the database is the sequelize function to manipulate models
const sequelize = database.sequelize;

// * the primary key (id) is implied (auto-increment)
const Learner = (sequelize, DataTypes) => {
    var Learner = sequelize.define("learner", {
        firstName: {type: Sequelize.STRING, allowNull: false},
        lastName:  {type: Sequelize.STRING, allowNull: false},
        userName:  {type: Sequelize.STRING, allowNull: false},
        email:     {type: Sequelize.STRING, allowNull: false},
        password:  {type: Sequelize.STRING, allowNull: false},
        coins:     {type: Sequelize.INTEGER, defaultValue: 20},
        favoritePet: {type: Sequelize.STRING, allowNull: true},
        createdAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
        updatedAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
    });

    return Learner;
};
module.exports = Learner;