import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  beforeFind,
  beforeFetch,
  belongsTo,
  BelongsTo,
  hasMany,
  HasMany,
  ModelQueryBuilderContract,
} from "@ioc:Adonis/Lucid/Orm";

// Interfaces
import { ConversationsInterface } from "@interfaces/model";

// Models
import User from "App/Models/User";
import Message from "App/Models/Message";
import Participant from "App/Models/Participant";

export default class Conversation extends BaseModel implements ConversationsInterface {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public creatorId: number;

  @column()
  public title: string;

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

  @belongsTo(() => User, {
    foreignKey: "creatorID",
  })
  public creator: BelongsTo<typeof User>;

  @hasMany(() => Participant)
  public participants: HasMany<typeof Participant>;

  @hasMany(() => Message)
  public messages: HasMany<typeof Message>;

  // Methods

  public async softDelete() {
    this.deletedAt = DateTime.local();
    await this.save();
  }
}
