import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Conversations extends BaseSchema {
  protected tableName = 'conversations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.bigInteger("id_creator").unsigned();
      table.foreign("id_creator").references("id").inTable("users").onDelete("cascade").onUpdate("cascade");
      table.string("title").notNullable();
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
