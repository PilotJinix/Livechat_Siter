import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Comments extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer("id_news").unsigned();
      table.foreign("id_news").references("id").inTable("news");
      table.integer("id_user").unsigned();
      table.foreign("id_user").references("id").inTable("news");
      table.string("comment").notNullable();
      table.timestamps();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
