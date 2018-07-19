// * import static Sequelize for data types.
const Sequelize = require("sequelize");
// * import the constructed database with all the connection info etc.
const database = require("./index.js");
// * inside the database is the sequelize function to manipulate models
const sequelize = database.sequelize;

// * the primary key (id) is implied (auto-increment)
const Learner = (sequelize, DataTypes) => {
    var Learner = sequelize.define("learner", {
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