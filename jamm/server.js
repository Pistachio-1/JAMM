const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;


// * parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// * parse application/json
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

require("./routes/learner-routes")(app);

// * leave in to verify express is working
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const db = require("./models");

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});

