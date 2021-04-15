import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Conversations extends BaseSchema {
  protected tableName = "conversations";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("creator_id").unsigned();
      table.foreign("creator_id").references("id").inTable("users");
      table.string("title").notNullable();
      table.timestamps();
      table.timestamp("deleted_at").nullable();
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(["creator_id"]);
    });

    this.schema.dropTable(this.tableName);
  }
}
