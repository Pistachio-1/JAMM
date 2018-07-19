const express = require("express");
const app = express();
const PORT = 3001;

require("./routes/learner-routes")(app);

// * leave in to verify express is working
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

const db = require("./src/models");

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
