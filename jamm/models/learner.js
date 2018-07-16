module.exports = function(sequelize, DataTypes) { 
    var Learner = database.define("learner", {
        firstName : Sequelize.STRING,
        lastName  : Sequelize.STRING,
        age       : Sequelize.INTEGER,
        favoritePet: Sequelize.STRING,
        createdAt : Sequelize.DATE,
        updatedAt : Sequelize.DATE
});