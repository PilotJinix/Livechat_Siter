import Logger from "@ioc:Adonis/Core/Logger";
// import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'

import Ws from "App/Services/Ws";

// import User from "App/Models/User";
// import News from "App/Models/News";

// --------------------------------------------------------------------------
// MainNamespace
// --------------------------------------------------------------------------
//
Ws.start((socket) => {
  // --------------------------------------------------------------------------
  // LOGGER
  // --------------------------------------------------------------------------
  //
  Logger.info(`User connected to main namespace with socket.id = ${socket.id}`);
  socket.on("disconnect", () => {
    Logger.info(`User disconnect from main namespace with socket.id = ${socket.id}`);
  });
});

// Ws.otherStart((socket) => {
//   // --------------------------------------------------------------------------
//   // LOGGER
//   // --------------------------------------------------------------------------
//   //
//   Logger.info(`User connected to other namespace with socket.id = ${socket.id}`);
//   socket.on("disconnect", () => {
//     Logger.info(`User disconnect from other namespace with socket.id = ${socket.id}`);
//   });
// });

// CHEATSHEET
// sending to the client
// socket.emit("hello", "can you hear me?", 1, 2, "abc");

// sending to all clients except sender
// socket.broadcast.emit("broadcast", "hello friends!");

// sending to all clients in "game" room except sender
// socket.to("game").emit("nice game", "let's play a game");

// sending to all clients in "game1" and/or in "game2" room, except sender
// socket.to("game1").to("game2").emit("nice game", "let's play a game (too)");

// sending to all clients in "game" room, including sender
// Ws.io.in("game").emit("big-announcement", "the game will start soon");

// sending to all clients in namespace "myNamespace", including sender
// Ws.io.of("myNamespace").emit("bigger-announcement", "the tournament will start soon");

// sending to a specific room in a specific namespace, including sender
// Ws.io.of("myNamespace").to("room").emit("event", "message");

// sending to individual socketid (private message)
// Ws.io.to(socket.id).emit("hey", "I just met you");

// WARNING: `socket.to(socket.id).emit()` will NOT work, as it will send to everyone in the room
// named `socket.id` but the sender. Please use the classic `socket.emit()` instead.

// sending with acknowledgement
// socket.emit("question", "do you think so?", (answer) => {});

// sending without compression
// socket.compress(false).emit("uncompressed", "that's rough");

// sending a message that might be dropped if the client is not ready to receive messages
// socket.volatile.emit("maybe", "do you really need it?");

// sending to all clients on this node (when using multiple nodes)
// Ws.io.local.emit("hi", "my lovely babies");

// sending to all connected clients
// Ws.io.emit("an event sent to all connected clients");
