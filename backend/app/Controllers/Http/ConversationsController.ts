import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Conversation from "App/Models/Conversation";

export default class ConversationsController {
  public async index({ auth }: HttpContextContract) {
    try {
      const user = await auth.authenticate();

      const conversations = await Conversation.query()
        .preload("messages")
        .preload("participants", (query) => {
          query.preload("user");
        })
        .whereHas("participants", (query) => {
          query.where("user_id", user.id);
        })
        .orderBy("created_at", "desc");

      conversations.sort((a, b) => {
        const lastAMessage = a.messages[a.messages.length - 1];
        const lastBMessage = b.messages[b.messages.length - 1];

        let comparison = 0;
        if (lastAMessage.createdAt < lastBMessage.createdAt) {
          comparison = 1;
        } else {
          comparison = -1;
        }

        return comparison;
      });

      return conversations;
    } catch (error) {
      console.log(error);
    }
  }
}
