import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DeletedConversations extends BaseSchema {
  protected tableName = 'deleted_conversations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer("id_coversation").unsigned();
      table.foreign("id_coversation").references("id").inTable("conversations");
      table.timestamps();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
