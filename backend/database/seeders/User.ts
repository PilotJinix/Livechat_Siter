import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import User from "App/Models/User";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: "User A",
        password: "secretA",
        role: "admin",
      },
      {
        username: "User B",
        password: "secretB",
        role: "common",
      },
      {
        username: "User C",
        password: "secretC",
        role: "common",
      },
    ]);
    // Write your database queries inside the run method
  }
}
