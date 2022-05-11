class SocketService {
  connection(socket) {
    console.log(`connected::::: ${socket.id}`);
    socket.on("disconnect", () => {
      console.log(`disconnect:::::${socket.id}`);
    });

    socket.on("chat message", (msg) => {
      console.log(`msg is:::${msg}`);
      _io.emit("chat message", msg);
    });
  }
}

module.exports = new SocketService();
