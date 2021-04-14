import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import User from "App/Models/User";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: "usernameA",
        password: "passwordA",
        role: "admin",
      },
      {
        username: "usernameB",
        password: "passwordB",
      },
      {
        username: "usernameC",
        password: "passwordC",
      },
      {
        username: "usernameD",
        password: "passwordD",
      },
      {
        username: "usernameE",
        password: "passwordE",
      },
      {
        username: "usernameF",
        password: "passwordF",
      },
    ]);
  }
}
