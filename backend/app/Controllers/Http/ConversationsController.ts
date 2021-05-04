import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Conversation from "App/Models/Conversation";

export default class ConversationsController {
  public async index({ auth }: HttpContextContract) {
    try {
      const user = await auth.authenticate();
      return (
        await Conversation.query().preload("messages").preload("participants").orderBy("created_at", "desc")
      ).filter((conv) => conv.participants.find((part) => (part.userId = user.id)));
    } catch (error) {
      console.log(error);
    }
  }
}
