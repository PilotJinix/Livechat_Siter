import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import Message from "App/Models/Message";

export default class MessageSeeder extends BaseSeeder {
  public async run() {
    await Message.createMany([
      {
        senderId: 2,
        conversationId: 1,
        message: "Hai",
      },
      {
        senderId: 3,
        conversationId: 1,
        message: "Halo",
      },
      {
        senderId: 2,
        conversationId: 1,
        message: "Apa kabar ?",
      },
      {
        senderId: 4,
        conversationId: 2,
        message: "Hello",
      },
      {
        senderId: 5,
        conversationId: 2,
        message: "Hi",
      },
      {
        senderId: 4,
        conversationId: 2,
        message: "How are you ?",
      },
    ]);
  }
}
