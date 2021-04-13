import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Messages extends BaseSchema {
  protected tableName = 'messages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.bigInteger("id_sender").unsigned();
      table.foreign("id_sender").references("id").inTable("users").onDelete("cascade");
      table.bigInteger("id_conversation").unsigned();
      table.foreign("id_conversation").references("id").inTable("conversations").onDelete("cascade");
      table.string("message").notNullable();
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
