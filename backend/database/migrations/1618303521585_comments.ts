import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Comments extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.bigInteger("id_news").unsigned();
      table.foreign("id_news").references("id").inTable("news").onDelete("cascade");
      table.bigInteger("id_user").unsigned();
      table.foreign("id_user").references("id").inTable("news").onDelete("cascade");
      table.string("comment").notNullable();
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
