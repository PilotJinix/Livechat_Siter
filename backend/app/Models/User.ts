import { DateTime } from "luxon";
import { BaseModel, column, beforeSave } from "@ioc:Adonis/Lucid/Orm";
import Hash from "@ioc:Adonis/Core/Hash";

import { UserInterface } from "@interfaces/model";

export default class User extends BaseModel implements UserInterface {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column()
  public password: string;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) user.password = await Hash.make(user.password);
  }

  @column()
  public role: "admin" | "common";

  @column()
  public avatar: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
