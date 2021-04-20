import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Conversation from "App/Models/Conversation";

export default class ConversationsController {
    public async index({}: HttpContextContract){
        try{
            return await Conversation.query()
                .preload('creator')
                .preload('participants')
                .orderBy('created_at','desc')
        }
        catch(error){
            console.log(error)
        }
    }

    // public async show({}:HttpContextContract){
    //     try{

    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }
}
