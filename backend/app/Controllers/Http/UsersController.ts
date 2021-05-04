import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
// import { schema, rules, validator } from "@ioc:Adonis/Core/Validator";

import User from "App/Models/User";

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      response.status(200);
      return await User.all();
    } catch (error) {
      response.status(500);
      console.log(error);
      return {
        message: "Internal Service Error",
      };
    }
  }

  // public async profile({request}: HttpContextContract){
  //   try{
  //     const profile = await User.query().where('id',request.id)
  //     return{
  //       user:profile
  //     }
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  // public async update({request}: HttpContextContract){
  //   const UserSchema = schema.create({
  //     username: schema.string({ trim: true }, [
  //       rules.regex(/^[a-zA-Z0-9\-]+$/),
  //       rules.unique({ table: "users", column: "username" }),
  //     ]),
  //     password: schema.string.optional({ trim: true }, [
  //       rules.requiredIfExists("username"),
  //       rules.confirmed("passwordConfirmation"),
  //     ]),
  //   });

  //   try {
  //     const { username, password } = await request.validate({
  //       schema: UserSchema,
  //       reporter: validator.reporters.api,
  //     });
  //   const profile = await User.findOrFail(request.id)
  //  profile.username=username
  //  profile.password=password!
  //  profile.avatar=request.input("avatar")
  //  await profile.save()
  // return{
  //   msg:"profile updated !"
  // }
  // }catch(error){
  //   console.log(error)
  // }
  // }
}
