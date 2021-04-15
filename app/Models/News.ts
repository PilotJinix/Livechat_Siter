import { DateTime } from "luxon";
import { BaseModel, column, beforeSave, belongsTo, BelongsTo, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";

// Interfaces
import { NewsInterface } from "@interfaces/model";

// Models
import User from "App/Models/User";
import Comment from "App/Models/Comment";

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
    news.slug = news.title.replace(/\s/g, "-");
  }

  @column()
  public thumbnail: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public author: BelongsTo<typeof User>;

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>;
}
