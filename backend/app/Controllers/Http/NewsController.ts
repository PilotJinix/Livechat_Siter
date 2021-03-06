import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import News from "App/Models/News";

export default class NewsController {
  public async index({ request }: HttpContextContract) {
    try {
      const [page, limit] = [request.input("page", 1) as number, 5];
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

  public async show({ request }: HttpContextContract) {
    try {
      return await News.findByOrFail("slug", request.param("slug"));
    } catch (error) {
      console.log(error);
      return {
        error,
      };
    }
  }
}
