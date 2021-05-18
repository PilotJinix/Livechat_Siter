import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import Message from "App/Models/Message";

export default class MessageSeeder extends BaseSeeder {
  public async run() {
    const personal = (conversationId: number, fromId: number, toId: number) => {
      let senderId: [number, number] = [fromId, toId];
      let data: Partial<Message>[] = [];
      const api = {
        send: (message: string) => {
          const [from] = senderId;
          data.push({
            senderId: from,
            conversationId,
            message,
          });
          return api;
        },
        reply: (message: string) => {
          const [to, from] = senderId;
          senderId = [from, to];
          data.push({
            senderId: from,
            conversationId,
            message,
          });
          return api;
        },
        result: () => {
          return data;
        },
      };
      return api;
    };

    let data: Partial<Message>[] = [];
    let iconversation = 1;
    let withUser = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (let i = 1; i <= 10; i++) {
      for (let j = 0; j < i; j++) {
        data.push(...personal(iconversation, i, withUser[j]).send(`Hai!, ${withUser[j]}`).result());
        iconversation++;
      }
    }

    await Message.createMany([
      ...data,
      ...personal(data.length, 10, 11).send("Hai!").reply("Hello!").reply("How're you ?").result(),
      ...personal(data.length, 10, 12).send("Hai!").reply("Hello!").reply("How're you ?").result(),
    ]);
  }
}
