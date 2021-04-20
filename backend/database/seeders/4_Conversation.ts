import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import Conversation from "App/Models/Conversation";

export default class ConversationSeeder extends BaseSeeder {
  public async run() {
    await Conversation.createMany([
      {
        creatorId: 1,
        title: "Personal",
      },
      {
        creatorId: 2,
        title: "Group",
      },
      {
        creatorId: 2,
        title: "Group",
      },
    ]);
  }
}
