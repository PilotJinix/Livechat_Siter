import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import {MessagesInterface} from "@interfaces/model";

export default class Message extends BaseModel implements MessagesInterface{
  @column({ isPrimary: true })
  public id: number

  @column()
  public senderId: number;

  @column()
  public conversationId: number;

  @column()
  public message: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public deletedAt: DateTime
}
