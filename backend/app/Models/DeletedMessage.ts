import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import {DeletedMessagesInterface} from "@interfaces/model";

export default class DeletedMessage extends BaseModel implements DeletedMessagesInterface{
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number;

  @column()
  public messageId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
