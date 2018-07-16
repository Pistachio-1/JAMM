const http = require("http");
const PORT = 3000;

function handleRequest(request, response) {
  response.end("It works! " + request.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});
