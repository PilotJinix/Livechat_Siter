import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Comments extends BaseSchema {
  protected tableName = "comments";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("news_id").unsigned();
      table.foreign("news_id").references("id").inTable("news");
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("id").inTable("users");
      table.string("comment").notNullable();
      table.timestamps();
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(["user_id"]);
      table.dropForeign(["news_id"]);
    });

    this.schema.dropTable(this.tableName);
  }
}
