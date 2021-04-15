import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";

// Interfaces
import { ParticipantsInterface } from "@interfaces/model";

// Models
import User from "App/Models/User";

export default class Participant extends BaseModel implements ParticipantsInterface {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public userId: number;

  @column()
  public conversationId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;
}
