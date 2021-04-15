import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import Comment from "App/Models/Comment";

export default class CommentSeeder extends BaseSeeder {
  public async run() {
    await Comment.createMany([
      {
        userId: 2,
        newsId: 1,
        comment: "comment for news_id 1 & from user_id 2",
      },
      {
        userId: 3,
        newsId: 1,
        comment: "comment for news_id 1 & from user_id 3",
      },
      {
        userId: 2,
        newsId: 2,
        comment: "comment for news_id 2 & from user_id 2",
      },
      {
        userId: 3,
        newsId: 2,
        comment: "comment for news_id 2 & from user_id 3",
      },
      {
        userId: 4,
        newsId: 2,
        comment: "comment for news_id 2 & from user_id 4",
      },
    ]);
  }
}
