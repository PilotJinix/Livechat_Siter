import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DeletedMessages extends BaseSchema {
  protected tableName = 'deleted_messages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.bigInteger("id_user").unsigned();
      table.foreign("id_user").references("id_sender").inTable("messages").onDelete("cascade");
      table.bigInteger("id_message").unsigned();
      table.foreign("id_message").references("id").inTable("messages").onDelete("cascade");
      table.timestamps();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
