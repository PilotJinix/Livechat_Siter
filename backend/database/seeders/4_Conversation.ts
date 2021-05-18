import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import Conversation from "App/Models/Conversation";

export default class ConversationSeeder extends BaseSeeder {
  public async run() {
    const personal = (creatorId: number, withId: number[]) => {
      let result: Partial<Conversation>[] = [];
      for (const id of withId) {
        result.push({
          creatorId,
          title: `Personal ${creatorId} - ${id}`,
        });
      }
      return result;
    };
    await Conversation.createMany([
      ...personal(1, [11]),
      ...personal(2, [11, 12]),
      ...personal(3, [11, 12, 13]),
      ...personal(4, [11, 12, 13, 14]),
      ...personal(5, [11, 12, 13, 14, 15]),
      ...personal(6, [11, 12, 13, 14, 15, 16]),
      ...personal(7, [11, 12, 13, 14, 15, 16, 17]),
      ...personal(8, [11, 12, 13, 14, 15, 16, 17, 18]),
      ...personal(9, [11, 12, 13, 14, 15, 16, 17, 18, 19]),
      ...personal(10, [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    ]);
  }
}
