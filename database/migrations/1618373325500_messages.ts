import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Messages extends BaseSchema {
  protected tableName = "messages";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("sender_id").unsigned();
      table.foreign("sender_id").references("id").inTable("users");
      table.integer("conversation_id").unsigned();
      table.foreign("conversation_id").references("id").inTable("conversations");
      table.string("message").notNullable();
      table.timestamps();
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(["conversation_id"]);
      table.dropForeign(["sender_id"]);
    });

    this.schema.dropTable(this.tableName);
  }
}
