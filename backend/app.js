const dgram = require("dgram");
const wait = require("waait");
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const throttle = require("lodash/throttle");
const commandDelays = require("./commandDelays");

const PORT_SEND = 8889;
const PORT_RECEIVE = 8890;
const HOST = "192.168.10.1";

const drone = dgram.createSocket("udp4");
drone.bind(PORT_SEND);
const droneState = dgram.createSocket("udp4");
droneState.bind(PORT_RECEIVE);

const parseState = (state) =>
  state
    .split(";")
    .map((x) => x.split(":"))
    .reduce((data, [key, value]) => {
      data[key] = value;
      return data;
    }, {});

drone.on("message", (message) => {
  console.log(`log : ${message}`);
  io.sockets.emit("status", message.toString());
});

const handleError = (err) => {
  if (err) {
    console.error(err);
  }
};

io.on("connection", (socket) => {
  socket.on("command", (command) => {
    console.log(`Commande envoyée depuis le navigateur : ${command}`);
    drone.send(command, 0, command.length, PORT_SEND, HOST, handleError);
  });

  socket.emit("status", true);
});

droneState.on(
  "message",
  throttle(
    (state) => io.sockets.emit("dronestate", parseState(state.toString())),
    100
  )
);

http.listen(8080, () => {
  console.log("Le serveur Socket.IO est opérationnel");
});
