import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import Participant from "App/Models/Participant";

export default class ParticipantSeeder extends BaseSeeder {
  public async run() {
    const personal = (conversationId: number, fromId: number, toId: number) => {
      const result: Partial<Participant>[] = [
        {
          userId: fromId,
          conversationId,
        },
        {
          userId: toId,
          conversationId,
        },
      ];
      return result;
    };

    let data: Partial<Participant>[] = [];
    let iconversation = 1;
    let withUser = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (let i = 1; i <= 10; i++) {
      for (let j = 0; j < i; j++) {
        data.push(...personal(iconversation, i, withUser[j]));
        iconversation++;
      }
    }
    await Participant.createMany([...data]);
  }
}
