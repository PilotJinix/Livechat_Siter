import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  beforeFind,
  beforeFetch,
  belongsTo,
  BelongsTo,
  ModelQueryBuilderContract,
} from "@ioc:Adonis/Lucid/Orm";

// Interfaces
import { MessagesInterface } from "@interfaces/model";

// Models
import User from "App/Models/User";

export default class Message extends BaseModel implements MessagesInterface {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public senderId: number;

  @column()
  public conversationId: number;

  @column()
  public message: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column.dateTime()
  public deletedAt: DateTime;

  @beforeFind()
  public static ignoreDeleted(query: ModelQueryBuilderContract<typeof Message>) {
    query.whereNull("deleted_at");
  }

  @beforeFetch()
  public static filterDeleted(query: ModelQueryBuilderContract<typeof Message>) {
    query.whereNull("deleted_at");
  }

  @belongsTo(() => User)
  public sender: BelongsTo<typeof User>;

  // Methods

  public async softDelete() {
    this.deletedAt = DateTime.local();
    await this.save();
  }
}
