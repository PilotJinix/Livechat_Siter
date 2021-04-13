import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import {ConversationsInterface} from "@interfaces/model";

export default class Conversation extends BaseModel implements ConversationsInterface{
  @column({ isPrimary: true })
  public id: number

  @column()
  public creatorId: number;

  @column()
  public title: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public deletedAt: DateTime
}
