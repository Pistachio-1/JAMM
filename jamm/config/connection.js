var Sequelize = require("sequelize");

// ! This will have to be revised
var sequelize = new Sequelize("jamm", "root", "ChangeMe123", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;