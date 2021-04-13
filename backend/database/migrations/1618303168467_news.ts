import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class News extends BaseSchema {
  protected tableName = 'news'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.bigInteger("authorId").unsigned();
      table.foreign("authorId").references("id").inTable("users").onDelete("cascade").onUpdate("cascade");
      table.string("title").notNullable();
      table.string("thumbnail").notNullable();
      table.string("content").notNullable();
      table.string("slug").notNullable()
      table.timestamps();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
