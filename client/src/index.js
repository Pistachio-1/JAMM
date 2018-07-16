import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var http = require("http");
var PORT = 3000;

function handleRequest(request, response) {
  response.end("It works! " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});


ReactDOM.render(<App />, document.getElementById("root"));
