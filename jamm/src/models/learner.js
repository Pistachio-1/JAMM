const Sequelize = require("sequelize");
const database = require("../../config/connection.js");

const Learner = (sequelize, DataTypes) => {
    var Learner = database.define("learner", {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        coins: Sequelize.INTEGER,
        favoritePet: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });

    return Learner;
};
module.exports = Learner;