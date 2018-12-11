# Node Backend for HTBLA Leonding Avatar

### Server:
#### NodeJS -> Dockered with docker-compose
#### Socket.io:
##### init
```javascript
  var express = require("express");<br>
  var app = express();<br>
  var http = require("http").Server(app);<br>
  var io = require("socket.io")(http);<br>
```
##### Socket - Server
```javascript
    var io = require("socket.io")(http);<br>
    io.emit("anim", req.body.animation);  
```
##### REST
```javascript
  app.get("/", function(req, res) {
  res.send("<h1> Nothing here just a teapot </h1>");
});
app.post("/sendAnim", function(req, res) {
  io.emit("anim", req.body.animation);
  res.status(204);
  res.send();
});
```
