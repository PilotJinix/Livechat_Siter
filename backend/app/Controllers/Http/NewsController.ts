import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import News from "App/Models/News";

export default class NewsController {
  public async index({ request }: HttpContextContract) {
    try {
     
      const page = request.input("page", 1);
      const limit = 22;
      return await News.query()
        .preload("author")
        .preload("comments", (query) => {
          query.preload("user");
        })
        .orderBy("created_at", "desc")
        .paginate(page, limit);
    } catch (error) {
      console.log(error);
    }
  }
}
