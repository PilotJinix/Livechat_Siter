import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";

// Interfaces
import { CommentsInterface } from "@interfaces/model";

// Models
import User from "App/Models/User";

export default class Comment extends BaseModel implements CommentsInterface {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public newsId: number;

  @column()
  public userId: number;

  @column()
  public comment: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;
}
