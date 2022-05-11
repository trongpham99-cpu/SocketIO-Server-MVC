const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;
const SocketService = require("./src/services/chat.service");

global.__basedir = __dirname;
global._io = io;

app.use(require("./src/routes/chat.route"));

global._io.on("connection", SocketService.connection);

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
