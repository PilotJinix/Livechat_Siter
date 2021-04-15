import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import User from "App/Models/User";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const __ = (key: string, admin: boolean = false) => {
      let user: {
        username: string;
        password: string;
        role?: "admin";
      } = {
        username: key,
        password: key,
      };
      if (admin) user.role = "admin";
      return user;
    };
    const admin = (key: string, admin: boolean = false) => __(`@18/${key}`, admin);
    const mhs18 = (nim: string, admin: boolean = false) => __(`18--${nim}`, admin);
    const mhs19 = (nim: string, admin: boolean = false) => __(`19--${nim}`, admin);

    const listAdmin = ["3012", "flamrdevs"];
    const list18 = [
      "3001",
      "3003",
      "3005",
      "3010",
      "3011",
      "3012",
      "3014",
      "3018",
      "3031",
      "3036",
      "3037",
      "3038",
      "3042",
      "3050",
      "3055",
      "3070",
      "3074",
      "3077",
      "3078",
      "3081",
      "3086",
      "3088",
      "3090",
      "3095",
    ];
    const list19 = [
      "3002",
      "3008",
      "3009",
      "3010",
      "3015",
      "3016",
      "3017",
      "3018",
      "3020",
      "3021",
      "3025",
      "3026",
      "3028",
      "3029",
      "3030",
      "3031",
      "3032",
      "3033",
      "3035",
      "3037",
      "3038",
      "3041",
      "3043",
      "3044",
      "3046",
      "3047",
      "3050",
      "3051",
      "3075",
      "3076",
    ];

    await User.createMany([...listAdmin.map((v) => admin(v)), ...list18.map((v) => mhs18(v)), ...list19.map((v) => mhs19(v))]);
  }
}
