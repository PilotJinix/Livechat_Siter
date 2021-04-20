import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import User from "App/Models/User";

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      response.status(200);
      return await User.all();
    } catch (error) {
      response.status(500);
      console.log(error);
    }
  }
}
