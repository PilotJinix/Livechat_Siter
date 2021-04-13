import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DeletedMessages extends BaseSchema {
  protected tableName = 'deleted_messages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer("id_message").unsigned();
      table.foreign("id_message").references("id").inTable("messages");
      table.timestamps();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
