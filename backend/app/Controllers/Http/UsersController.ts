// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// MODEL
import User from "App/Models/User";

export default class UsersController {
  public async index() {
    return User.all();
  }
}
