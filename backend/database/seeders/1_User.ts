import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { DateTime } from "luxon";

// MODEL
import User from "App/Models/User";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    type props = {
      key: string;
      admin?: boolean;
      createdAt?: DateTime;
    };

    const __ = (props: props) => {
      let user: Partial<User> = { username: props.key, password: props.key, createdAt: props.createdAt };
      if (props.admin) user.role = "admin";
      return user;
    };
    const admin = (props: props) =>
      __({
        ...props,
        key: `@my/${props.key}`,
      });
    const mhs18 = (props: props) =>
      __({
        ...props,
        key: `18--${props.key}`,
      });
    const mhs19 = (props: props) =>
      __({
        ...props,
        key: `19--${props.key}`,
      });

    const listAdmin: [string, string, string, string, string, string, string, string, string, string] = [
      "rifalrizki12",
      "rido154",
      "Ferdydwikurniawan",
      "Dyahtyas",
      "meliatiya24",
      "AzizahN",
      "nauval123",
      "dewangga-pk",
      "PilotJinix",
      "flamrdevs",
    ];
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

    const sixmonthago = DateTime.now().minus({ months: 6 });

    let day = 0;
    const listAdminNext = listAdmin.map((key) => {
      day += 1;
      return admin({
        key,
        admin: true,
        createdAt: sixmonthago.plus({ days: day }),
      });
    });
    day -= 1;
    const list18Next = list18.map((key) => {
      day += 1;
      return mhs18({
        key,
        createdAt: sixmonthago.plus({ days: day }),
      });
    });
    day -= 1;
    const list19Next = list19.map((key) => {
      day += 1;
      return mhs19({
        key,
        createdAt: sixmonthago.plus({ days: day }),
      });
    });

    await User.createMany([...listAdminNext, ...list18Next, ...list19Next]);
  }
}
