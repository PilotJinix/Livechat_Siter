import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DeletedConversations extends BaseSchema {
  protected tableName = 'deleted_conversations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.bigInteger("id_user");
      table.foreign("id_user").references("id_creator").inTable("conversations").onDelete("cascade");
      table.bigInteger("id_coversation").unsigned();
      table.foreign("id_coversation").references("id").inTable("conversations").onDelete("cascade");
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
