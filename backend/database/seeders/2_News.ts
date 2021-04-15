import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import News from "App/Models/News";

export default class NewsSeeder extends BaseSeeder {
  public async run() {
    await News.createMany([
      {
        authorId: 1,
        title: "title of news A",
        content: "contentA from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 1,
        title: "title of news B",
        content: "contentB from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 1,
        title: "title of news C",
        content: "contentC from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 1,
        title: "title of news D",
        content: "contentD from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 7,
        title: "title of news E",
        content: "contentE from user_id 1",
        thumbnail: "/favicon.ico",
      },
      {
        authorId: 7,
        title: "title of news F",
        content: "contentF from user_id 1",
        thumbnail: "/favicon.ico",
      },
    ]);
  }
}
