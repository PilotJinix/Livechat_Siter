import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Conversation from "App/Models/Conversation";

export default class ConversationsController {
  public async index({}: HttpContextContract) {
    try {
      // const User_id=  auth.toJSON
      // console.log( auth.user?.id)
      //bagaimana ngambil userID?
      return await Conversation.query()
        .where("creator_id", 1)
        .preload("messages")
        .preload("participants")
        .orderBy("created_at", "desc");
    } catch (error) {
      console.log(error);
    }
  }

  public async conv({ auth }: HttpContextContract) {
    try {
      const user = await auth.authenticate();

      console.log(`user.id = ${user.id}`);

      return (await Conversation.query().preload("messages").preload("participants")).filter((conv) =>
        conv.participants.find((part) => (part.userId = user.id))
      );
    } catch (error) {
      console.log(error);
    }
  }

  // public async index({}: HttpContextContract){
  //     // console.log(auth.user?.id)
  //     try{
  //         // const User_id=  auth.user?.id
  //         return await Conversation.query()
  //         .preload('creator')
  //         .preload('messages')
  //         .preload('participants')
  //         .orderBy('created_at','desc')
  //     }
  //     catch(error){
  //         console.log(error)
  //     }
  // }

  // public async show({}:HttpContextContract){
  //     try{

  //     }
  //     catch(error){
  //         console.log(error)
  //     }
  // }
}
