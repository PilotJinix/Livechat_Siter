import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import News from "App/Models/News";

export default class NewsSeeder extends BaseSeeder {
  public async run() {
    await News.createMany([
      {
        authorId: 1,
        title: "titleA",
        content: "contentA from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 1,
        title: "titleB",
        content: "contentB from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 1,
        title: "titleC",
        content: "contentC from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 1,
        title: "titleD",
        content: "contentD from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 1,
        title: "titleE",
        content: "contentE from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 1,
        title: "titleF",
        content: "contentF from user_id 1",
        thumbnail: "/favicon.ico",
      },
    ]);
  }
}
