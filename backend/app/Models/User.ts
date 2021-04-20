import { DateTime } from "luxon";
import { BaseModel, column, beforeSave, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import Hash from "@ioc:Adonis/Core/Hash";

// Interfaces
import { UserInterface } from "@interfaces/model";

// Models
import News from "App/Models/News";
import Conversation from "App/Models/Conversation";

export default class User extends BaseModel implements UserInterface {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column({ serializeAs: null })
  public password: string;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) user.password = await Hash.make(user.password);
  }

  @column()
  public role: "admin" | "common";

  @column()
  public avatar: string | null;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => News, {
    foreignKey: "authorId",
  })
  public news: HasMany<typeof News>;

  @hasMany(() => Conversation, {
    foreignKey: "creatorId",
  })
  public conversations: HasMany<typeof Conversation>;
}
