const path = require("path");
const express = require("express");
const Server = require("./server");

const server = new Server({
  port: 3000,
});

server.app.use(express.static(path.join(__dirname, "dist")));

const sendReactIndex = (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
};
server.app.get("/", sendReactIndex);
server.app.use("*", sendReactIndex);

server.start();
