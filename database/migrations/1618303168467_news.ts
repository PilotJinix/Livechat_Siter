import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class News extends BaseSchema {
  protected tableName = "news";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("author_id").unsigned();
      table.foreign("author_id").references("id").inTable("users");
      table.string("title").notNullable();
      table.string("thumbnail").notNullable();
      table.string("content").notNullable();
      table.string("slug").notNullable();
      table.timestamps();
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(["author_id"]);
    });

    this.schema.dropTable(this.tableName);
  }
}
