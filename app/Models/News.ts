import { DateTime } from "luxon";
import { BaseModel, column, beforeSave } from "@ioc:Adonis/Lucid/Orm";
import { NewsInterface } from "@interfaces/model";

export default class News extends BaseModel implements NewsInterface {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public authorId: number;

  @column()
  public title: string;

  @column()
  public content: string;

  @column()
  public slug: string;

  @beforeSave()
  public static async generateSlug(news: News) {
    news.slug = news.title.replace(" ", "-");
  }

  @column()
  public thumbnail: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
