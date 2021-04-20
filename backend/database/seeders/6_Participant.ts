import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import Participant from "App/Models/Participant";

export default class ParticipantSeeder extends BaseSeeder {
  public async run() {
    await Participant.createMany([
      {
        userId: 1,
        conversationId: 1,
      },
      {
        userId: 3,
        conversationId: 1,
      },
      {
        userId: 4,
        conversationId: 2,
      },
      {
        userId: 5,
        conversationId: 2,
      },
      {
        userId: 6,
        conversationId: 2,
      },
    ]);
  }
}
