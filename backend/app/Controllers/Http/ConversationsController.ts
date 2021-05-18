import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Conversation from "App/Models/Conversation";

export default class ConversationsController {
  public async index({ auth }: HttpContextContract) {
    try {
      const user = await auth.authenticate();
      return await Conversation.query()
        .preload("messages")
        .preload("participants", (query) => {
          query.preload("user");
        })
        .whereHas("participants", (query) => {
          query.where("user_id", user.id);
        })
        .orderBy("created_at", "desc");
    } catch (error) {
      console.log(error);
    }
  }
}
