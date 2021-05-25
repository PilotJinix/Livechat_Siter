import Logger from "@ioc:Adonis/Core/Logger";

import Ws from "App/Services/Ws";

import Conversation from "App/Models/Conversation";
import Message from "App/Models/Message";

const genUserRoom = (id: number) => `userID|${id}`;
const genConversationRoom = (id: number) => `conversationID|${id}`;

// --------------------------------------------------------------------------
// MainNamespace
// --------------------------------------------------------------------------
//
Ws.start((socket) => {
  // --------------------------------------------------------------------------
  // LOGGER
  // --------------------------------------------------------------------------
  //
  Logger.info(`main: ${socket.id} connected`);
  socket.on("disconnect", () => {
    Logger.info(`main: ${socket.id} disconnect`);
  });

  socket.on("user:join", (data, cb) => {
    try {
      const room = genUserRoom(data.user_id);
      socket.join(room);
      cb({
        ok: true,
        data: room,
      });
    } catch (error) {
      cb({
        err: error,
      });
    }
  });

  socket.on("conversation:join", (data, cb) => {
    try {
      data.conversations.forEach((id) => {
        const room = genConversationRoom(id);
        socket.join(room);
      });
      cb({
        ok: true,
      });
    } catch (error) {
      cb({
        err: error,
      });
    }
  });

  socket.on("conversation:new", async (data, cb) => {
    try {
      const conversation = await Conversation.create({
        creatorId: data.user_id,
        title: "Personal",
      });

      const participants = await conversation.related("participants").createMany([
        ...data.participants.map((p) => {
          return {
            userId: p,
            conversationId: conversation.id,
          };
        }),
      ]);

      console.log(participants);

      const messages = await conversation.related("messages").create({
        conversationId: conversation.id,
        message: data.message,
        senderId: data.user_id,
      });

      // send data conversation to client by user id room
      const rooms = participants.map((p) => genUserRoom(p.userId));
      Ws.io.to(rooms).emit("conversation:new", {
        ...(conversation.serialize() as any),
      });

      cb({
        ok: true,
      });
    } catch (error) {
      cb({
        err: error,
      });
    }
  });

  socket.on("message:new", async (data, cb) => {
    try {
      const message = await Message.create({
        conversationId: data.conversation_id,
        message: data.message,
        senderId: data.user_id,
      });

      // send data message to client by conversation id room
      const room = genConversationRoom(data.conversation_id);
      Ws.io.to(room).emit("message:new", {
        ...(message.serialize() as any),
      });

      cb({
        ok: true,
      });
    } catch (error) {
      cb({
        err: error,
      });
    }
  });
});
