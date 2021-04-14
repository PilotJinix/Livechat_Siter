import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { CommentsInterface } from "@interfaces/model";

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
}
