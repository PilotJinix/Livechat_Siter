import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import News from 'App/Models/News';

export default class AdminsController {
    public async index({auth}:HttpContextContract){
        try{
            const user = await auth.authenticate();
            console.log(`user.id = ${user.role}`)
            return await News.query().where("creator_id",user.id)
            .orderBy("created_at", "desc")
            .paginate(1, 15);
        }catch(error){
            console.log(error)
        }
    }

    public async show({}:HttpContextContract){

    }

    public async save({}:HttpContextContract){
        
    }

    public async delete({}:HttpContextContract){
        
    }

}
