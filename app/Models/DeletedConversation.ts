import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DeletedConversationsInterface } from "@interfaces/model";

export default class DeletedConversation extends BaseModel implements DeletedConversationsInterface {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public conversationId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
