const http = require("http");
const PORT = 3001;

const express = require("express");
const app = express();

require("./routes/learner-routes")(app);

// * leave in to verify express is working
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// const server = http.createServer(handleRequest);

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});
