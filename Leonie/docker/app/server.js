var express = require("express");
var app = express();
var http = require("http").Server(app);
var bodyParser = require("body-parser");

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.send("<h1> Nothing here just a teapot </h1>");
});
app.post("/sendAnim", function(req, res) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ animation: req.body.animation }));
    }
  });
  res.status(204);
  res.send();
});
http.listen(3000, function() {
  console.log("listening on *:3000");
});
