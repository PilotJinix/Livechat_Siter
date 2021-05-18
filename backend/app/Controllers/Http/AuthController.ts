import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules, validator } from "@ioc:Adonis/Core/Validator";

import User from "App/Models/User";

export default class AuthController {
  // @ts-ignore
  public async register({ request, auth }: HttpContextContract) {
    const UserSchema = schema.create({
      username: schema.string({ trim: true }, [
        rules.regex(/^[a-zA-Z0-9\-]+$/),
        rules.unique({ table: "users", column: "username" }),
      ]),
      password: schema.string.optional({ trim: true }, [
        rules.requiredIfExists("username"),
        rules.confirmed("passwordConfirmation"),
      ]),
    });

    try {
      const { username, password } = await request.validate({
        schema: UserSchema,
        reporter: validator.reporters.api,
      });

      const user = await User.create({
        username,
        password,
      });

      const token = await auth.use("api").login(user);
      return {
        ok: true,
        user: token.user,
        auth: token.toJSON(),
      };
    } catch (error) {
      console.log(error);
      return {
        msg: "errors catched",
        error,
      };
    }
  }

  // @ts-ignore
  public async login({ request, auth }: HttpContextContract) {
    try {
      const token = await auth
        .use("api")
        .attempt(request.input("username"), request.input("password"), { expiresIn: "2 days" });
      // console.log(token)
      // console.log(token.token)

      return {
        ok: true,
        user: token.user,
        auth: token.toJSON(),
      };
    } catch (error) {
      // console.log(error)
      return {
        msg: "errors catched",
        error,
      };
    }
  }

  // @ts-ignore
  public async authenticate({ auth }: HttpContextContract) {
    try {
      await auth.authenticate();
      return {
        ok: true,
        auth: auth.toJSON(),
      };
    } catch (error) {
      return {
        msg: "errors catched",
        error,
      };
    }
  }

  // @ts-ignore
  public async logout({ auth }: HttpContextContract) {
    try {
      await auth.use("api").logout();
      return {
        ok: true,
      };
    } catch (error) {
      return {
        msg: "errors catched",
        error,
      };
    }
  }
}
