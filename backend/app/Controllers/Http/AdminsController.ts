import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import News from "App/Models/News";

export default class AdminsController {
  public async index({ auth, request }: HttpContextContract) {
    try {
      const user = await auth.authenticate();
      const [page, limit] = [request.input("page", 1) as number, 15];
      return await News.query().where("creator_id", user.id).orderBy("created_at", "desc").paginate(page, limit);
    } catch (error) {
      console.log(error);
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      return await News.query().where("id", params.id);
    } catch (error) {
      console.log(error);
    }
  }

  public async create({}: HttpContextContract) {
    try {
    } catch {}
  }

  public async save({}: HttpContextContract) {
    try {
    } catch {}
  }

  public async delete({}: HttpContextContract) {}
}
