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
        avatar: "https://juara.pupukkaltim.com/image/avatar.png",
      },
      {
        username: "User B",
        password: "secretB",
        role: "common",
        avatar: "https://juara.pupukkaltim.com/image/avatar.png",
      },
      {
        username: "User C",
        password: "secretC",
        role: "common",
        avatar: "https://juara.pupukkaltim.com/image/avatar.png",
      },
    ]);
    // Write your database queries inside the run method
  }
}
