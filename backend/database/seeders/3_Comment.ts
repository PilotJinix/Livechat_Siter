import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

// MODEL
import Comment from "App/Models/Comment";

export default class CommentSeeder extends BaseSeeder {
  public async run() {
    const [min, max] = [11, 40];
    const comment = (count: number, newsId: number) => {
      let result: Partial<Comment>[] = Array.from({ length: count }, () => {
        const id = Math.floor(Math.random() * (max - min) + min);
        return {
          userId: id,
          newsId,
          comment: `for newsId ${newsId} | by userId ${id}`,
        };
      });
      return result;
    };
    await Comment.createMany([
      ...comment(4, 1),
      ...comment(6, 2),
      ...comment(5, 3),
      ...comment(7, 4),
      ...comment(8, 5),
      ...comment(9, 6),
      ...comment(10, 7),
      ...comment(11, 8),
      ...comment(12, 9),
      ...comment(12, 10),
    ]);
  }
}
